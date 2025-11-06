# Как работает система определения организации

## Структура базы данных

В проекте используется следующая структура:

```
organizations/
  └── {orgId}/
       ├── name, createdAt, settings
       ├── users/
       │    └── {userId} - name, email, role, joinedAt
       ├── projects/
       │    └── {projectId} - title, description, owner, members
       └── meetings/
            └── {meetingId} - title, date, participants
```

**НЕТ** корневой коллекции `users` с полем `organizationId`!

## Как приложение находит организацию пользователя

### Алгоритм поиска (функция `getCurrentUserOrg`)

```javascript
const getCurrentUserOrg = async (userId) => {
    // 1. Получаем все организации
    const organizationsSnapshot = await getDocs(collection(db, 'organizations'));
    
    // 2. Перебираем каждую организацию
    for (const orgDoc of organizationsSnapshot.docs) {
        // 3. Проверяем, есть ли пользователь в подколлекции users этой организации
        const userInOrgDoc = await getDoc(
            doc(db, `organizations/${orgDoc.id}/users/${userId}`)
        );
        
        // 4. Если нашли - возвращаем ID организации
        if (userInOrgDoc.exists()) {
            return orgDoc.id;
        }
    }
    
    // 5. Если не нашли ни в одной организации - возвращаем null
    return null;
};
```

### Пример работы

1. Пользователь `Abdulaxad Xadjimetov` (ID: `user123`) авторизуется
2. Приложение вызывает `getCurrentUserOrg('user123')`
3. Функция проверяет:
   - `organizations/org1/users/user123` - не существует
   - `organizations/org2/users/user123` - **существует!** ✓
4. Возвращает `org2`
5. Все данные загружаются из `organizations/org2/`

## Где это используется

Функция `getCurrentUserOrg` используется на всех страницах:

- ✅ `/pages/homeScreen/page.js` - главная страница
- ✅ `/pages/projects/page.js` - страница проектов
- ✅ `/pages/meetings/page.js` - страница встреч
- ✅ `/pages/library/page.js` - библиотека

## Что делать, если пользователь не найден

Если `getCurrentUserOrg` возвращает `null`:

1. Пользователь видит сообщение "You are not assigned to any organization"
2. Предлагается выйти из аккаунта
3. Нужно через админку добавить пользователя в `organizations/{orgId}/users/{userId}`

## Как добавить пользователя в организацию (через админку Firebase)

1. Откройте Firebase Console → Firestore Database
2. Перейдите в коллекцию `organizations`
3. Выберите нужную организацию (например, "The Branch of the University Of...")
4. Откройте подколлекцию `users`
5. Добавьте новый документ с ID = UID пользователя (из Firebase Authentication)
6. Заполните поля:
   ```javascript
   {
     name: "Имя пользователя",
     email: "email@example.com",
     role: "admin" или "member",
     joinedAt: timestamp (текущее время)
   }
   ```

## Производительность

⚠️ **Внимание:** Текущий алгоритм перебирает все организации при каждом входе пользователя.

### Оптимизация (опционально)

Если в системе будет много организаций (> 100), рекомендуется:

**Вариант 1:** Добавить корневую коллекцию `users`
```
users/
  └── {userId}
       └── organizationId: "org-id"
```

**Вариант 2:** Использовать Collection Group Query
```javascript
const usersQuery = query(
    collectionGroup(db, 'users'),
    where(documentId(), '==', userId)
);
```

**Вариант 3:** Кэширование в localStorage
```javascript
// Сохранить после первого поиска
localStorage.setItem('userOrgId', orgId);

// Проверить кэш при следующем входе
const cachedOrgId = localStorage.getItem('userOrgId');
if (cachedOrgId) {
    // Проверить, что пользователь все еще в этой организации
    const userDoc = await getDoc(doc(db, `organizations/${cachedOrgId}/users/${userId}`));
    if (userDoc.exists()) return cachedOrgId;
}
```

## Текущее состояние

✅ Работает для любого количества организаций (до ~100-200)
✅ Простая и понятная логика
✅ Не требует дополнительных коллекций
⚠️ Может быть медленной при большом количестве организаций
