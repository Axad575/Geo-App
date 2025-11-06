# Database Migration Guide

## Новая структура базы данных

Проект использует организационную структуру Firestore:

```
organizations (коллекция)
 └── {orgId} (документ)
      ├── name: "GeoLab"
      ├── createdAt: timestamp
      ├── settings: {...}
      │
      ├── users (подколлекция)
      │    └── {userId}
      │         ├── name: string
      │         ├── role: string ("admin", "member", ...)
      │         ├── email: string
      │         └── joinedAt: timestamp
      │
      ├── projects (подколлекция)
      │    └── {projectId}
      │         ├── title: string
      │         ├── description: string
      │         ├── createdBy: userId (или owner)
      │         ├── createdAt: timestamp
      │         ├── startDate: timestamp (optional)
      │         ├── endDate: timestamp (optional)
      │         ├── status: string
      │         └── members: [userId1, userId2, ...]
      │
      ├── meetings (подколлекция)
      │    └── {meetingId}
      │         ├── title: string
      │         ├── date: timestamp
      │         ├── location: string (optional)
      │         ├── owner: userId
      │         ├── projectId: string (если встреча относится к проекту)
      │         ├── participants: [userId1, userId2, ...]
      │         ├── notes: string
      │         ├── createdAt: timestamp
      │         └── updatedAt: timestamp
      │
      └── other_modules (например: reports, tasks и т.п.)
           └── {docId}
                ├── ...
```

**ВАЖНО:** В этой структуре НЕТ корневой коллекции `users` с полем `organizationId`. 
Все пользователи хранятся только в подколлекциях `organizations/{orgId}/users`.

## Важные изменения

### 1. Организационная модель
- Все данные (проекты, встречи, пользователи) теперь находятся внутри организации
- Поле `organizationId` в документе пользователя определяет его организацию
- **Организация не может быть изменена при создании встречи/проекта** - она определяется автоматически

### 2. Структура встречи (Meeting)
- `date` - дата и время встречи (вместо `datetime`)
- `owner` - владелец встречи (организатор)
- `projectId` - опциональная связь с проектом
- `participants` - массив userId участников
- `location` - местоположение (опционально)
- `notes` - заметки о встрече

### 3. Структура проекта (Project)
- `createdBy` - создатель проекта (вместо `owner`)
- `members` - массив userId участников (вместо `participants`)
- `title`, `description` - основная информация
- `status` - статус проекта

### 4. Пользователи организации
- Хранятся в подколлекции `organizations/{orgId}/users`
- Содержат `role` для управления правами доступа
- Основной документ пользователя в `users/{userId}` содержит ссылку на организацию

## Скрипт миграции данных

Создайте файл `migration-script.js` для миграции существующих данных:

```javascript
// migration-script.js
const admin = require('firebase-admin');
const serviceAccount = require('./path-to-your-service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function migrateToOrganizationStructure() {
  try {
    // 1. Создать организацию по умолчанию
    const orgRef = await db.collection('organizations').add({
      name: 'GeoLab',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      settings: {}
    });
    
    const orgId = orgRef.id;
    console.log(`Created organization: ${orgId}`);

    // 2. Мигрировать пользователей
    const usersSnapshot = await db.collection('users').get();
    
    for (const userDoc of usersSnapshot.docs) {
      const userData = userDoc.data();
      
      // Обновить документ пользователя - добавить organizationId
      await db.collection('users').doc(userDoc.id).update({
        organizationId: orgId
      });
      
      // Создать документ в подколлекции организации
      await db.collection(`organizations/${orgId}/users`).doc(userDoc.id).set({
        name: userData.name || userData.email,
        email: userData.email,
        role: userData.role || 'member',
        joinedAt: userData.createdAt || admin.firestore.FieldValue.serverTimestamp()
      });
      
      console.log(`Migrated user: ${userDoc.id}`);
    }

    // 3. Мигрировать проекты
    const projectsSnapshot = await db.collection('projects').get();
    
    for (const projectDoc of projectsSnapshot.docs) {
      const projectData = projectDoc.data();
      
      await db.collection(`organizations/${orgId}/projects`).doc(projectDoc.id).set({
        title: projectData.title,
        description: projectData.description || '',
        createdBy: projectData.owner || projectData.createdBy,
        createdAt: projectData.createdAt || admin.firestore.FieldValue.serverTimestamp(),
        startDate: projectData.startDate || null,
        endDate: projectData.endDate || null,
        status: projectData.status || 'active',
        members: projectData.participants || projectData.members || []
      });
      
      console.log(`Migrated project: ${projectDoc.id}`);
    }

    // 4. Мигрировать встречи
    const meetingsSnapshot = await db.collection('meetings').get();
    
    for (const meetingDoc of meetingsSnapshot.docs) {
      const meetingData = meetingDoc.data();
      
      await db.collection(`organizations/${orgId}/meetings`).doc(meetingDoc.id).set({
        title: meetingData.title,
        date: meetingData.datetime || meetingData.date || admin.firestore.FieldValue.serverTimestamp(),
        location: meetingData.location || '',
        owner: meetingData.owner,
        projectId: meetingData.projectId || null,
        participants: meetingData.participants || [],
        notes: meetingData.notes || '',
        createdAt: meetingData.createdAt || admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      
      console.log(`Migrated meeting: ${meetingDoc.id}`);
    }

    console.log('Migration completed successfully!');
    
  } catch (error) {
    console.error('Migration error:', error);
  }
}

// Запустить миграцию
migrateToOrganizationStructure();
```

## Как запустить миграцию

1. Установите Firebase Admin SDK:
```bash
npm install firebase-admin --save-dev
```

2. Скачайте service account key из Firebase Console:
   - Перейдите в Project Settings > Service Accounts
   - Нажмите "Generate New Private Key"
   - Сохраните JSON файл

3. Создайте файл `migration-script.js` с кодом выше

4. Обновите путь к service account key в скрипте

5. Запустите миграцию:
```bash
node migration-script.js
```

## Тестирование после миграции

1. Проверьте, что все пользователи имеют `organizationId`
2. Проверьте, что проекты и встречи находятся в правильных подколлекциях
3. Проверьте, что приложение правильно загружает данные
4. После успешного тестирования можете удалить старые коллекции

## Правила безопасности Firestore

Обновите правила безопасности:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Пользователи
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    
    // Организации
    match /organizations/{orgId} {
      allow read: if request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.organizationId == orgId;
      
      allow write: if request.auth != null && 
        exists(/databases/$(database)/documents/organizations/$(orgId)/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/organizations/$(orgId)/users/$(request.auth.uid)).data.role == 'admin';
      
      // Пользователи организации
      match /users/{userId} {
        allow read: if request.auth != null;
        allow write: if request.auth != null && 
          get(/databases/$(database)/documents/organizations/$(orgId)/users/$(request.auth.uid)).data.role == 'admin';
      }
      
      // Проекты организации
      match /projects/{projectId} {
        allow read: if request.auth != null;
        allow create: if request.auth != null && 
          request.resource.data.createdBy == request.auth.uid;
        allow update, delete: if request.auth != null && 
          (resource.data.createdBy == request.auth.uid || 
           request.auth.uid in resource.data.members);
      }
      
      // Встречи организации
      match /meetings/{meetingId} {
        allow read: if request.auth != null;
        allow create: if request.auth != null && 
          request.resource.data.owner == request.auth.uid;
        allow update, delete: if request.auth != null && 
          (resource.data.owner == request.auth.uid || 
           request.auth.uid in resource.data.participants);
      }
    }
  }
}
```

## Важные примечания

⚠️ **ВНИМАНИЕ:**
- Создайте резервную копию базы данных перед миграцией
- Тестируйте миграцию на тестовом проекте Firebase
- Организация определяется автоматически и не может быть изменена при создании записей
- Убедитесь, что все пользователи имеют `organizationId` перед использованием приложения
