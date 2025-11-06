# Отладка - Почему не отображаются проекты и встречи?

## Что было исправлено

### Проблема
Проекты и встречи не отображались из-за **слишком строгой фильтрации** данных.

### Старый код (с фильтрацией)
```javascript
const projectsList = projectsSnapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(project => 
        project.createdBy === userId ||   // Только если пользователь - создатель
        project.members?.includes(userId) // ИЛИ в списке участников
    );
```

### Новый код (без фильтрации - для отладки)
```javascript
const projectsList = projectsSnapshot.docs.map(doc => {
    const data = doc.data();
    console.log('Project data:', doc.id, data); // Логируем данные
    return { id: doc.id, ...data };
});
// Показываем ВСЕ проекты организации
setProjects(projectsList);
```

## Как проверить что происходит

### 1. Откройте консоль браузера (F12)

Вы должны увидеть логи:
```
User found in organization: abc123
Found 5 projects in organization
Project data: proj1 { title: "...", owner: "...", ... }
Project data: proj2 { title: "...", owner: "...", ... }
...
Total projects: 5
Current user ID: user123
```

### 2. Проверьте структуру данных в Firebase

Откройте Firestore и проверьте поля в проектах:

#### Ожидаемая структура:
```javascript
organizations/{orgId}/projects/{projectId}
{
  title: "Project Name",
  description: "...",
  owner: "userId",        // ← или createdBy?
  members: ["userId1", "userId2"],
  createdAt: timestamp
}
```

#### Возможные проблемы:

**Проблема 1:** Поле называется не `owner`, а `createdBy`
```javascript
// Решение: проверить оба варианта
ownerName: usersMap[data.createdBy || data.owner]
```

**Проблема 2:** Нет поля `members`, а есть `participants`
```javascript
// Решение: проверить оба варианта
data.members || data.participants
```

**Проблема 3:** Пользователь хранится не как UID, а как email
```javascript
owner: "user@example.com"  // вместо "abc123def456"
```

### 3. Проверьте Firebase UID пользователя

В консоли браузера проверьте:
```javascript
Current user ID: abc123def456...
```

Сравните с полем `owner` или `members` в ваших проектах.

## Что делать дальше

### Если проекты появились ✅
Значит проблема была в фильтрации. Теперь нужно:

1. Посмотреть в консоли, какие поля используются в ваших данных
2. Обновить код фильтрации с правильными полями
3. Включить фильтрацию обратно

### Если проектов все равно нет ❌

Проверьте:

#### 1. Есть ли проекты в Firestore?
```
Firebase Console → Firestore Database
→ organizations/{orgId}/projects
```

#### 2. Правильный ли orgId?
Посмотрите в консоли:
```
User found in organization: [должен быть ID вашей организации]
```

#### 3. Есть ли права доступа?
Проверьте Firestore Rules:
```javascript
match /organizations/{orgId}/projects/{projectId} {
  allow read: if request.auth != null;
}
```

## Примеры правильной структуры данных

### Вариант 1: owner + members
```javascript
{
  title: "GeoNote Project",
  owner: "abc123", // UID пользователя
  members: ["abc123", "def456"],
  createdAt: "2025-11-01T10:00:00Z"
}
```

### Вариант 2: createdBy + members
```javascript
{
  title: "GeoNote Project",
  createdBy: "abc123", // UID пользователя
  members: ["abc123", "def456"],
  createdAt: "2025-11-01T10:00:00Z"
}
```

## После отладки - включите фильтрацию обратно

Когда найдете проблему, обновите код:

```javascript
const projectsList = projectsSnapshot.docs
    .map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            // Используйте правильные поля из вашей БД
            ownerName: usersMap[data.owner] || data.owner,
            participantsNames: data.members?.map(id => usersMap[id] || id) || []
        };
    })
    .filter(project => {
        // Фильтр: показывать только проекты пользователя
        const isOwner = project.owner === userId;
        const isMember = project.members?.includes(userId);
        return isOwner || isMember;
    });
```

## Контрольный список

- [ ] Открыл консоль браузера (F12)
- [ ] Вижу логи "Found X projects in organization"
- [ ] Проверил структуру данных проекта в логах
- [ ] Сравнил UID пользователя с полями owner/members
- [ ] Проверил Firebase Firestore Rules
- [ ] Проверил, что проекты существуют в Firestore
- [ ] Определил правильные названия полей (owner vs createdBy, members vs participants)
- [ ] Обновил код с правильными полями
- [ ] Включил фильтрацию обратно
