(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/api/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Import the functions you need from the SDKs you need
__turbopack_context__.s([
    "analytics",
    ()=>analytics,
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
;
// Проверяем наличие переменных окружения
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBIN9X7pvTNBNB8oZjHqpSrewCSKz-Kncw"),
    authDomain: ("TURBOPACK compile-time value", "geo-app-47ce7.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "geo-app-47ce7"),
    storageBucket: ("TURBOPACK compile-time value", "geo-app-47ce7.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "66863903495"),
    appId: ("TURBOPACK compile-time value", "1:66863903495:web:0b3ae81b7ec0a12e384ba2"),
    measurementId: ("TURBOPACK compile-time value", "G-X3TD84EL2V")
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
// Initialize Cloud Storage and get a reference to the service
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
// Initialize Analytics only on client side and if supported
let analytics = null;
if ("TURBOPACK compile-time truthy", 1) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupported"])().then((supported)=>{
        if (supported) {
            analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalytics"])(app);
        }
    }).catch((error)=>{
        console.warn('Firebase Analytics not supported:', error);
    });
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/strings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCurrentLanguage",
    ()=>getCurrentLanguage,
    "getString",
    ()=>getString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
;
const strings = {
    ru: {
        // Общие
        appName: "GeoNote",
        loading: "Загрузка...",
        inDevelopment: "В разработке",
        comingSoon: "Скоро будет доступно",
        underConstruction: "Страница находится в разработке",
        save: "Сохранить",
        cancel: "Отмена",
        delete: "Удалить",
        edit: "Редактировать",
        back: "Назад",
        close: "Закрыть",
        add: "Добавить",
        error: "Произошла ошибка. Попробуйте снова.",
        success: "Успешно!",
        // Навигация
        nav: {
            library: "Библиотека",
            projects: "Проекты",
            news: "Новости",
            meetings: "Встречи",
            notes: "Заметки",
            settings: "Настройки",
            home: "Главная"
        },
        // Навигация
        navbar: {
            determining: "Определение...",
            geolocationError: "Ошибка геолокации",
            geolocationUnavailable: "Геолокация недоступна"
        },
        // Лендинг страница
        landing: {
            title: "GeoNote",
            subtitle: "Профессиональная платформа для управления геологическими проектами",
            description: "Организуйте полевые работы, ведите заметки, управляйте командой и отслеживайте прогресс ваших геологических исследований в одном месте.",
            getStarted: "Начать работу",
            learnMore: "Узнать больше",
            features: {
                title: "Возможности",
                subtitle: "Все необходимые инструменты для геологических исследований",
                projectManagement: {
                    title: "Управление проектами",
                    description: "Создавайте и управляйте геологическими проектами с полным контролем над командой и сроками"
                },
                fieldNotes: {
                    title: "Полевые заметки",
                    description: "Ведите детальные заметки с возможностью добавления геолокации и мультимедиа"
                },
                teamCollaboration: {
                    title: "Командная работа",
                    description: "Организуйте встречи, назначайте задачи и координируйте работу команды"
                },
                dataLibrary: {
                    title: "Библиотека данных",
                    description: "Храните и организуйте все файлы, документы и результаты исследований"
                }
            },
            benefits: {
                title: "Преимущества",
                efficiency: "Повышение эффективности полевых работ",
                organization: "Централизованное управление данными",
                collaboration: "Улучшенная командная работа",
                tracking: "Отслеживание прогресса в реальном времени"
            },
            cta: {
                title: "Готовы начать?",
                description: "Присоединяйтесь к геологам, которые уже используют GeoNote для своих исследований",
                button: "Создать аккаунт"
            }
        },
        // Главная страница
        home: {
            title: "Добро пожаловать",
            today: "Сегодня",
            subtitle: "Управляйте своими геологическими проектами",
            recentProjects: "Недавние проекты",
            quickActions: "Быстрые действия",
            createProject: "Создать проект",
            viewAllProjects: "Все проекты",
            addNote: "Добавить заметку",
            viewLibrary: "Открыть библиотеку",
            statistics: "Статистика",
            totalProjects: "Всего проектов",
            activeProjects: "Активных проектов",
            totalNotes: "Всего заметок",
            upcomingMeetings: "Предстоящие встречи",
            teamMembers: "Участники команды",
            viewAllMeetings: "Все встречи"
        },
        noSubscription: {
            loading: "Загрузка...",
            accessRestricted: "Доступ ограничен",
            subscriptionExpired: "Подписка {orgName} истекла {date}",
            noActiveSubscription: "У {orgName} отсутствует активная подписка",
            accessRequirement: "Для доступа к системе необходима активная подписка на сервис GeoNote.",
            status: "Статус",
            expired: "Истекла",
            notActive: "Не активна",
            endDate: "Дата окончания",
            notSpecified: "не указана",
            whatToDo: "Что делать?",
            contactAdmin: "Свяжитесь с администратором вашей организации",
            adminCanRenew: "Администратор может продлить подписку",
            logout: "Выйти из системы",
            yourOrganization: "Вашей организации",
            footer: "GeoNote © 2025 • Made by abdu1axad"
        },
        // Библиотека
        library: {
            title: "Библиотека",
            searchPlaceholder: "Поиск в библиотеке...",
            categories: "Категории",
            allFiles: "Все файлы",
            documents: "Документы",
            images: "Изображения",
            videos: "Видео",
            other: "Другое",
            upload: "Загрузить файл",
            noFiles: "В библиотеке пока нет файлов",
            uploadFirst: "Загрузите первый файл для начала работы",
            fileName: "Имя файла",
            fileSize: "Размер файла",
            uploadDate: "Дата загрузки",
            actions: "Действия",
            download: "Скачать",
            view: "Просмотр"
        },
        // Новости
        news: {
            title: "Новости",
            addNews: "Добавить новость",
            noNews: "Новостей пока нет",
            publishFirst: "Опубликуйте первую новость",
            newsTitle: "Заголовок новости",
            newsContent: "Содержание новости",
            publish: "Опубликовать",
            draft: "Черновик",
            published: "Опубликовано",
            author: "Автор",
            publishDate: "Дата публикации",
            readMore: "Читать далее",
            categories: "Категории",
            general: "Общие",
            projects: "Проекты",
            announcements: "Объявления",
            updates: "Обновления",
            organizationNews: "Новости организации",
            addNewsButton: "Добавить новость",
            cancelButton: "Отменить",
            createNews: "Создать новость",
            newsHeadline: "Заголовок новости",
            newsContent: "Содержание новости",
            lowPriority: "Низкий приоритет",
            mediumPriority: "Средний приоритет",
            highPriority: "Высокий приоритет",
            tagsPlaceholder: "Теги (через запятую)",
            createButton: "Создать новость",
            cancelFormButton: "Отменить",
            totalNews: "Всего новостей",
            unread: "Непрочитанных",
            read: "Прочитанных",
            archived: "Архивированных",
            all: "Все",
            unreadFilter: "Непрочитанные",
            readFilter: "Прочитанные",
            archive: "Архив",
            markAsRead: "Отметить как прочитанное",
            marking: "Отмечаем...",
            readStatus: "Прочитано",
            archiveButton: "Архивировать",
            readBy: "Прочитали",
            people: "чел.",
            archivedStatus: "Архивировано",
            noNewsMessage: "Нет новостей",
            noNewsDescription: "Пока нет новостей",
            noUnreadNews: "Нет непрочитанных новостей",
            noReadNews: "Нет прочитанных новостей",
            noArchivedNews: "Нет архивированных новостей",
            authorUnknown: "Автор неизвестен",
            confirmArchive: "Вы уверены, что хотите архивировать эту новость?",
            errorCreating: "Ошибка при создании новости"
        },
        // Встречи
        meetings: {
            title: "Встречи",
            scheduleMeeting: "Запланировать встречу",
            noMeetings: "Встреч пока нет",
            scheduleFirst: "Запланируйте первую встречу",
            meetingTitle: "Название встречи",
            meetingDescription: "Описание встречи",
            startDate: "Дата начала",
            endDate: "Дата окончания",
            startTime: "Время начала",
            endTime: "Время окончания",
            location: "Место проведения",
            participants: "Участники",
            organizer: "Организатор",
            agenda: "Повестка дня",
            notes: "Заметки к встрече",
            upcoming: "Предстоящие",
            past: "Прошедшие",
            today: "Сегодня",
            tomorrow: "Завтра",
            thisWeek: "На этой неделе",
            status: {
                scheduled: "Запланирована",
                inProgress: "В процессе",
                completed: "Завершена",
                cancelled: "Отменена"
            },
            reschedule: "Перенести",
            cancel: "Отменить",
            join: "Присоединиться",
            minutes: "Протокол",
            createMeeting: "Создать встречу",
            enterMeetingLocation: "Введите место встречи",
            addMeetingNotes: "Добавьте заметки или повестку встречи...",
            noStatus: "Без статуса",
            organizer: "Организатор",
            addToCalendar: "Добавить в календарь",
            googleCalendar: "Google Calendar",
            outlookCalendar: "Outlook",
            appleCalendar: "Apple Calendar",
            downloadICS: "Скачать ICS файл",
            calendarAdded: "Встреча добавлена в календарь",
            instantMeeting: "Мгновенная встреча",
            meetingTopic: "Тема встречи",
            enterMeetingTopic: "Введите тему встречи",
            description: "Описание",
            briefDescription: "Краткое описание встречи",
            conferenceParticipants: "Участники конференции",
            searchByName: "Поиск по имени, email или роли...",
            startConference: "Начать конференцию",
            starting: "Запускаем...",
            allMeetings: "Все встречи",
            totalMeetings: "Всего встреч",
            scheduled: "Запланировано",
            inProgress: "В процессе",
            completed: "Проведено",
            cancelled: "Отменено",
            noMeetingsInFilter: "Нет встреч в этом фильтре",
            tryChangeFilter: "Попробуйте изменить фильтр для просмотра других встреч",
            scheduleOrStart: "Запланируйте встречу или начните мгновенную видеоконференцию",
            joinConference: "Войти в конференцию",
            finish: "Завершить",
            start: "Начать",
            conducted: "Проведено",
            meetingDate: "Дата",
            place: "Место",
            finishedAt: "Завершена",
            startedAt: "Начата",
            participants: "Участники",
            instant: "Мгновенная",
            videoConference: "Видеоконференция",
            enterMeetingTopic: "Введите тему встречи",
            briefDescription: "Краткое описание встречи",
            participantsLabel: "Участники конференции",
            searchParticipants: "Поиск по имени, email или роли...",
            starting: "Запускаем...",
            loading: "Загрузка",
            noMeetingsYet: "Пока нет встреч",
            noScheduledMeetings: "Нет запланированных встреч",
            noCurrentMeetings: "Нет текущих встреч",
            noCompletedMeetings: "Нет проведенных встреч",
            noCancelledMeetings: "Нет отмененных встреч",
            scheduleOrStartMeeting: "Запланируйте встречу или начните мгновенную видеоконференцию",
            tryChangeFilter: "Попробуйте изменить фильтр для просмотра других встреч",
            markAsCompleted: "Отметить встречу как проведенную?",
            cancelMeetingConfirm: "Отменить встречу?",
            errorUpdating: "Ошибка при обновлении встречи",
            errorStarting: "Ошибка при запуске встречи",
            errorCancelling: "Ошибка при отмене встречи",
            conferenceUrlUnavailable: "Ссылка на конференцию недоступна",
            meetingInProgress: "В процессе",
            meetingScheduled: "Запланирована",
            meetingCancelled: "Отменена",
            meetingCompleted: "Проведена",
            location: "Место",
            totalMeetings: "Всего встреч"
        },
        // Локации
        locations: {
            title: "Локации",
            map: "Карта",
            addPoint: "добавить точку",
            addLocation: "Добавить точку",
            addLocationPoint: "Добавить точку локации",
            selectedCoordinates: "Выбранные координаты",
            pointName: "Название точки",
            pointNamePlaceholder: "например, Точка образца 1",
            description: "Описание",
            descriptionPlaceholder: "Описание этой локации...",
            coordinateFormat: "Формат координат",
            switchToDMS: "Переключить на DMS",
            switchToDecimal: "Переключить на десятичные",
            latitude: "Широта",
            longitude: "Долгота",
            formatDMSExample: "Формат: 41°17'28\"N или 41 17 28 N",
            formatDMSExampleLng: "Формат: 69°14'26\"E или 69 14 26 E",
            cancel: "Отмена"
        },
        // Проекты
        projects: {
            title: "Проекты",
            description: "Описание",
            participants: "Участники",
            date: "Дата",
            status: "Статус",
            createNew: "Создать проект",
            noProjects: "Нет проектов",
            openProject: "открыть проект",
            backToProjects: "Вернуться к проектам",
            exportToPdf: "Экспорт в PDF",
            statusActive: "активный",
            statusCompleted: "завершен",
            statusUpcoming: "предстоящий",
            statusNotStarted: "не начат",
            notStarted: "не началось",
            projectOptional: "Проект (Опционально)",
            projectTitle: "Название проекта",
            projectReport: "Отчет по проекту",
            noProject: "Без проекта",
            noUsersAvailable: "Пользователи недоступны",
            organization: "Организация",
            owner: "Владелец",
            team: "Команда",
            noDescription: "Описание отсутствует"
        },
        // Заметки
        notes: {
            title: "Заметки",
            addNote: "Добавить заметку",
            noteTitle: "Название заметки",
            noteDescription: "Описание заметки",
            linkToLocation: "Привязать к точке (необязательно)",
            noLocation: "Без привязки к местоположению",
            enterTitle: "Введите название заметки...",
            enterDescription: "Введите описание заметки...",
            listOfNotes: "Список заметок",
            noNotes: "Нет заметок",
            addLocationFirst: "Сначала добавьте точки местоположения для привязки к заметкам",
            createNote: "Создать заметку",
            createNewNote: "Создать новую заметку",
            editNote: "Редактировать заметку",
            updateNote: "Обновить заметку",
            noteTitle: "Название",
            noteContent: "Содержание",
            category: "Категория",
            categoryOptional: "Категория (Опционально)",
            selectCategory: "Выберите категорию...",
            enterNoteTitle: "Введите название заметки...",
            writeNoteContent: "Напишите содержание заметки здесь...",
            pleaseEnterTitle: "Пожалуйста, введите название заметки",
            pleaseEnterContent: "Пожалуйста, введите содержание заметки",
            created: "Создано",
            lastUpdated: "Последнее обновление",
            markedAsFavorite: "Эта заметка отмечена как избранная",
            searchNotes: "Поиск заметок...",
            allNotes: "Все заметки",
            recent: "Недавние",
            favorites: "Избранные",
            totalNotes: "всего заметок",
            favoritesCount: "избранных",
            showing: "показано",
            noNotesFound: "Заметки не найдены",
            noNotesYet: "Заметок пока нет",
            tryAdjusting: "Попробуйте изменить критерии поиска или фильтра",
            createFirstNote: "Создайте свою первую заметку для начала",
            createYourFirstNote: "Создать первую заметку",
            noteCreatedSuccessfully: "Заметка успешно создана!",
            errorCreatingNote: "Ошибка создания заметки",
            errorUpdatingNote: "Ошибка обновления заметки. Попробуйте снова.",
            confirmDeleteNote: "Вы уверены, что хотите удалить эту заметку?",
            errorDeletingNote: "Ошибка удаления заметки. Попробуйте снова.",
            categories: {
                personal: "Личное",
                work: "Работа",
                ideas: "Идеи",
                tasks: "Задачи",
                meetings: "Встречи",
                research: "Исследования",
                other: "Другое"
            }
        },
        // Карта и местоположения
        map: {
            title: "Карта",
            addPoint: "+ добавить точку",
            locationPoints: "Точки местоположения",
            newPoint: "Новая точка",
            clickToAdd: "Кликните для добавления локации",
            loadingMap: "Загрузка карты...",
            coordinates: "Координаты",
            decimal: "Десятичные",
            dms: "DMS",
            moreDetails: "Подробнее",
            lat: "Шир",
            lng: "Долг"
        },
        // Местоположения
        location: {
            addLocation: "Добавить местоположение",
            locationName: "Название точки",
            locationDescription: "Описание точки",
            enterName: "Введите название точки...",
            enterDescription: "Введите описание точки...",
            coordinateFormat: "Формат координат",
            latitude: "Широта",
            longitude: "Долгота",
            enterLatitude: "Введите широту...",
            enterLongitude: "Введите долготу...",
            invalidCoordinates: "Неверные координаты",
            locationSaved: "Местоположение сохранено!",
            fillRequiredFields: "Заполните обязательные поля"
        },
        // Настройки
        settings: {
            title: "Настройки",
            profile: "Профиль",
            security: "Безопасность",
            organization: "Организация",
            appearance: "Внешний вид",
            // Профиль
            profileInfo: "Информация профиля",
            name: "Имя",
            email: "Email",
            enterName: "Введите ваше имя",
            emailCantChange: "Email нельзя изменить",
            saveChanges: "Сохранить изменения",
            saving: "Сохранение...",
            profileUpdated: "Профиль успешно обновлен!",
            profileUpdateError: "Ошибка при обновлении профиля",
            // Безопасность
            changePassword: "Изменить пароль",
            newPassword: "Новый пароль",
            confirmPassword: "Подтвердите новый пароль",
            enterNewPassword: "Введите новый пароль",
            confirmNewPassword: "Подтвердите новый пароль",
            changing: "Изменение...",
            changePasswordBtn: "Изменить пароль",
            passwordChanged: "Пароль успешно изменен!",
            passwordsNotMatch: "Новые пароли не совпадают",
            passwordTooShort: "Пароль должен содержать минимум 6 символов",
            passwordChangeError: "Ошибка при изменении пароля",
            logout: "Выход из системы",
            logoutDescription: "Выйти из учетной записи на этом устройстве",
            logoutBtn: "Выйти",
            // Организация
            organizationInfo: "Информация об организации",
            organizationName: "Название организации",
            yourRole: "Ваша роль",
            organizationId: "ID организации",
            aboutApp: "О приложении",
            version: "Версия",
            developer: "Разработчик",
            year: "Год",
            // Внешний вид
            interfaceLanguage: "Язык интерфейса",
            preview: "Предварительный просмотр",
            languageChanged: "Язык изменен! Обновите страницу для применения изменений.",
            geologicalProject: "Геологический проект",
            sampleProjectPreview: "Предварительный просмотр проекта"
        },
        // Формат дат
        dateFormat: {
            months: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            daysShort: [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ]
        },
        // Аутентификация
        auth: {
            login: "Вход",
            register: "Регистрация",
            logout: "Выход",
            email: "Email",
            password: "Пароль",
            confirmPassword: "Подтвердите пароль",
            name: "Имя",
            organization: "Организация",
            signIn: "Войти",
            signUp: "Зарегистрироваться",
            forgotPassword: "Забыли пароль?",
            resetPassword: "Сбросить пароль",
            backToLogin: "Вернуться ко входу",
            enterEmail: "Введите email",
            enterPassword: "Введите пароль",
            enterName: "Введите имя",
            enterOrganization: "Введите название организации",
            emailPlaceholder: "Электронная почта",
            passwordPlaceholder: "Пароль",
            termsText: "Входя в систему, вы принимаете наши условия обслуживания и политику конфиденциальности.",
            alreadyHaveAccount: "Уже есть аккаунт?",
            dontHaveAccount: "Нет аккаунта?",
            loginError: "Ошибка входа",
            registerError: "Ошибка регистрации",
            invalidCredentials: "Неверные данные для входа",
            emailAlreadyExists: "Пользователь с таким email уже существует",
            passwordTooWeak: "Пароль слишком слабый",
            loginSuccess: "Вход выполнен успешно",
            registerSuccess: "Регистрация завершена успешно"
        },
        // Формы и валидация
        forms: {
            required: "Обязательное поле",
            invalidEmail: "Неверный формат email",
            passwordMinLength: "Пароль должен содержать минимум 6 символов",
            passwordsNotMatch: "Пароли не совпадают",
            invalidFormat: "Неверный формат",
            fieldTooShort: "Поле слишком короткое",
            fieldTooLong: "Поле слишком длинное",
            selectOption: "Выберите опцию",
            chooseFile: "Выберите файл",
            uploadFailed: "Ошибка загрузки",
            saveSuccess: "Сохранено успешно",
            saveError: "Ошибка сохранения",
            deleteConfirm: "Вы уверены, что хотите удалить?",
            deleteSuccess: "Удалено успешно",
            deleteError: "Ошибка удаления"
        },
        // Файлы
        files: {
            title: "Файлы",
            uploadFile: "Загрузить файл",
            uploadImage: "Загрузить изображение",
            selectFile: "Выберите файл",
            fileName: "Имя файла",
            fileSize: "Размер файла",
            uploadDate: "Дата загрузки",
            downloadFile: "Скачать файл",
            deleteFile: "Удалить файл",
            noFiles: "Нет файлов",
            uploadSuccess: "Файл успешно загружен",
            uploadError: "Ошибка загрузки файла",
            fileTooLarge: "Файл слишком большой",
            fileTypeNotAllowed: "Тип файла не поддерживается",
            attachments: "Вложения",
            attachFile: "Прикрепить файл",
            removeFile: "Удалить файл",
            filesAttached: "файлов прикреплено"
        },
        // Вложения
        attachments: "Вложения",
        attachFile: "Прикрепить файл",
        removeFile: "Удалить файл",
        filesAttached: "файлов прикреплено"
    },
    en: {
        // General
        appName: "GeoNote",
        loading: "Loading...",
        inDevelopment: "In Development",
        comingSoon: "Coming Soon",
        underConstruction: "Page is under development",
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
        edit: "Edit",
        back: "Back",
        close: "Close",
        add: "Add",
        error: "An error occurred. Please try again.",
        success: "Success!",
        // Navigation
        navbar: {
            determining: "Determining...",
            geolocationError: "Geolocation error",
            geolocationUnavailable: "Geolocation unavailable"
        },
        // Landing page
        landing: {
            title: "GeoNote",
            subtitle: "Professional platform for geological project management",
            description: "Organize fieldwork, take notes, manage your team, and track progress of your geological research in one place.",
            getStarted: "Get Started",
            learnMore: "Learn More",
            features: {
                title: "Features",
                subtitle: "All the tools you need for geological research",
                projectManagement: {
                    title: "Project Management",
                    description: "Create and manage geological projects with full control over team and deadlines"
                },
                fieldNotes: {
                    title: "Field Notes",
                    description: "Keep detailed notes with the ability to add geolocation and multimedia"
                },
                teamCollaboration: {
                    title: "Team Collaboration",
                    description: "Organize meetings, assign tasks, and coordinate team work"
                },
                dataLibrary: {
                    title: "Data Library",
                    description: "Store and organize all files, documents, and research results"
                }
            },
            benefits: {
                title: "Benefits",
                efficiency: "Increased fieldwork efficiency",
                organization: "Centralized data management",
                collaboration: "Enhanced team collaboration",
                tracking: "Real-time progress tracking"
            },
            cta: {
                title: "Ready to start?",
                description: "Join geologists who are already using GeoNote for their research",
                button: "Create Account"
            }
        },
        // Navigation
        nav: {
            library: "Library",
            projects: "Projects",
            news: "News",
            meetings: "Meetings",
            notes: "Notes",
            settings: "Settings",
            home: "Home"
        },
        // Home page
        home: {
            title: "Welcome",
            today: "Today",
            subtitle: "Manage your geological projects",
            recentProjects: "Recent Projects",
            quickActions: "Quick Actions",
            createProject: "Create Project",
            viewAllProjects: "All Projects",
            addNote: "Add Note",
            viewLibrary: "Open Library",
            statistics: "Statistics",
            totalProjects: "Total Projects",
            activeProjects: "Active Projects",
            totalNotes: "Total Notes",
            upcomingMeetings: "Upcoming Meetings",
            teamMembers: "Team Members",
            viewAllMeetings: "All Meetings"
        },
        noSubscription: {
            loading: "Loading...",
            accessRestricted: "Access Restricted",
            subscriptionExpired: "{orgName} subscription expired on {date}",
            noActiveSubscription: "{orgName} does not have an active subscription",
            accessRequirement: "An active GeoNote subscription is required to access the system.",
            status: "Status",
            expired: "Expired",
            notActive: "Not Active",
            endDate: "End Date",
            notSpecified: "not specified",
            whatToDo: "What to do?",
            contactAdmin: "Contact your organization administrator",
            adminCanRenew: "Administrator can renew subscription",
            logout: "Logout",
            yourOrganization: "Your organization",
            footer: "GeoNote © 2025 • Made by abdu1axad"
        },
        // Library
        library: {
            title: "Library",
            searchPlaceholder: "Search in library...",
            categories: "Categories",
            allFiles: "All Files",
            documents: "Documents",
            images: "Images",
            videos: "Videos",
            other: "Other",
            upload: "Upload File",
            noFiles: "No files in library yet",
            uploadFirst: "Upload first file to get started",
            fileName: "File Name",
            fileSize: "Size",
            uploadDate: "Upload Date",
            actions: "Actions",
            download: "Download",
            view: "View"
        },
        // News
        news: {
            title: "News",
            addNews: "Add News",
            noNews: "No news yet",
            publishFirst: "Publish your first news",
            newsTitle: "News Title",
            newsContent: "News Content",
            publish: "Publish",
            draft: "Draft",
            published: "Published",
            author: "Author",
            publishDate: "Publish Date",
            readMore: "Read More",
            categories: "Categories",
            general: "General",
            projects: "Projects",
            announcements: "Announcements",
            updates: "Updates",
            organizationNews: "Organization News",
            addNewsButton: "Add News",
            cancelButton: "Cancel",
            createNews: "Create News",
            newsHeadline: "News Headline",
            newsContent: "News Content",
            lowPriority: "Low Priority",
            mediumPriority: "Medium Priority",
            highPriority: "High Priority",
            tagsPlaceholder: "Tags (comma separated)",
            createButton: "Create News",
            cancelFormButton: "Cancel",
            totalNews: "Total News",
            unread: "Unread",
            read: "Read",
            archived: "Archived",
            all: "All",
            unreadFilter: "Unread",
            readFilter: "Read",
            archive: "Archive",
            markAsRead: "Mark as Read",
            marking: "Marking...",
            readStatus: "Read",
            archiveButton: "Archive",
            readBy: "Read by",
            people: "people",
            archivedStatus: "Archived",
            noNewsMessage: "No News",
            noNewsDescription: "No news yet",
            noUnreadNews: "No unread news",
            noReadNews: "No read news",
            noArchivedNews: "No archived news",
            authorUnknown: "Author Unknown",
            confirmArchive: "Are you sure you want to archive this news?",
            errorCreating: "Error creating news"
        },
        // Meetings
        meetings: {
            title: "Meetings",
            scheduleMeeting: "Schedule Meeting",
            noMeetings: "No meetings yet",
            scheduleFirst: "Schedule your first meeting",
            meetingTitle: "Meeting Title",
            meetingDescription: "Meeting Description",
            startDate: "Start Date",
            endDate: "End Date",
            startTime: "Start Time",
            endTime: "End Time",
            location: "Location",
            participants: "Participants",
            organizer: "Organizer",
            agenda: "Agenda",
            notes: "Meeting Notes",
            upcoming: "Upcoming",
            past: "Past",
            today: "Today",
            tomorrow: "Tomorrow",
            thisWeek: "This Week",
            status: {
                scheduled: "Scheduled",
                inProgress: "In Progress",
                completed: "Completed",
                cancelled: "Cancelled"
            },
            reschedule: "Reschedule",
            cancel: "Cancel",
            join: "Join",
            minutes: "Minutes",
            createMeeting: "Create Meeting",
            enterMeetingLocation: "Enter meeting location",
            addMeetingNotes: "Add meeting notes or agenda...",
            noStatus: "No Status",
            addToCalendar: "Add to Calendar",
            googleCalendar: "Google Calendar",
            outlookCalendar: "Outlook",
            appleCalendar: "Apple Calendar",
            downloadICS: "Download ICS file",
            calendarAdded: "Meeting added to calendar",
            instantMeeting: "Instant Meeting",
            meetingTopic: "Meeting Topic",
            enterMeetingTopic: "Enter meeting topic",
            description: "Description",
            briefDescription: "Brief meeting description",
            conferenceParticipants: "Conference Participants",
            searchByName: "Search by name, email or role...",
            startConference: "Start Conference",
            starting: "Starting...",
            allMeetings: "All Meetings",
            totalMeetings: "Total Meetings",
            scheduled: "Scheduled",
            inProgress: "In Progress",
            completed: "Completed",
            cancelled: "Cancelled",
            noMeetingsInFilter: "No meetings in this filter",
            tryChangeFilter: "Try changing filter to view other meetings",
            scheduleOrStart: "Schedule a meeting or start instant video conference",
            joinConference: "Join Conference",
            finish: "Finish",
            start: "Start",
            conducted: "Conducted",
            meetingDate: "Date",
            place: "Place",
            finishedAt: "Finished",
            startedAt: "Started",
            participants: "Participants",
            instant: "Instant",
            videoConference: "Video Conference",
            enterMeetingTopic: "Enter meeting topic",
            briefDescription: "Brief meeting description",
            participantsLabel: "Conference Participants",
            searchParticipants: "Search by name, email or role...",
            starting: "Starting...",
            loading: "Loading",
            noMeetingsYet: "No meetings yet",
            noScheduledMeetings: "No scheduled meetings",
            noCurrentMeetings: "No current meetings",
            noCompletedMeetings: "No completed meetings",
            noCancelledMeetings: "No cancelled meetings",
            scheduleOrStartMeeting: "Schedule a meeting or start instant video conference",
            tryChangeFilter: "Try changing filter to view other meetings",
            markAsCompleted: "Mark meeting as completed?",
            cancelMeetingConfirm: "Cancel meeting?",
            errorUpdating: "Error updating meeting",
            errorStarting: "Error starting meeting",
            errorCancelling: "Error cancelling meeting",
            conferenceUrlUnavailable: "Conference link unavailable",
            meetingInProgress: "In Progress",
            meetingScheduled: "Scheduled",
            meetingCancelled: "Cancelled",
            meetingCompleted: "Completed",
            location: "Location",
            totalMeetings: "Total Meetings"
        },
        // Локации
        locations: {
            title: "Локации",
            map: "Карта",
            addPoint: "добавить точку",
            addLocation: "Добавить точку",
            addLocationPoint: "Добавить точку локации",
            selectedCoordinates: "Выбранные координаты",
            pointName: "Название точки",
            pointNamePlaceholder: "например, Точка образца 1",
            description: "Описание",
            descriptionPlaceholder: "Описание этой локации...",
            coordinateFormat: "Формат координат",
            switchToDMS: "Переключить на DMS",
            switchToDecimal: "Переключить на десятичные",
            latitude: "Широта",
            longitude: "Долгота",
            formatDMSExample: "Формат: 41°17'28\"N или 41 17 28 N",
            formatDMSExampleLng: "Формат: 69°14'26\"E или 69 14 26 E",
            cancel: "Отмена"
        },
        // Проекты
        projects: {
            title: "Проекты",
            description: "Описание",
            participants: "Участники",
            date: "Дата",
            status: "Статус",
            createNew: "Создать проект",
            noProjects: "Нет проектов",
            openProject: "открыть проект",
            backToProjects: "Вернуться к проектам",
            exportToPdf: "Экспорт в PDF",
            statusActive: "активный",
            statusCompleted: "завершен",
            statusUpcoming: "предстоящий",
            statusNotStarted: "не начат",
            notStarted: "не началось",
            projectOptional: "Проект (Опционально)",
            projectTitle: "Название проекта",
            projectReport: "Отчет по проекту",
            noProject: "Без проекта",
            noUsersAvailable: "Пользователи недоступны",
            organization: "Организация",
            owner: "Владелец",
            team: "Команда",
            noDescription: "Описание отсутствует"
        },
        // Заметки
        notes: {
            title: "Заметки",
            addNote: "Добавить заметку",
            noteTitle: "Название заметки",
            noteDescription: "Описание заметки",
            linkToLocation: "Привязать к точке (необязательно)",
            noLocation: "Без привязки к местоположению",
            enterTitle: "Введите название заметки...",
            enterDescription: "Введите описание заметки...",
            listOfNotes: "Список заметок",
            noNotes: "Нет заметок",
            addLocationFirst: "Сначала добавьте точки местоположения для привязки к заметкам",
            createNote: "Создать заметку",
            createNewNote: "Создать новую заметку",
            editNote: "Редактировать заметку",
            updateNote: "Обновить заметку",
            noteTitle: "Название",
            noteContent: "Содержание",
            category: "Категория",
            categoryOptional: "Категория (Опционально)",
            selectCategory: "Выберите категорию...",
            enterNoteTitle: "Введите название заметки...",
            writeNoteContent: "Напишите содержание заметки здесь...",
            pleaseEnterTitle: "Пожалуйста, введите название заметки",
            pleaseEnterContent: "Пожалуйста, введите содержание заметки",
            created: "Создано",
            lastUpdated: "Последнее обновление",
            markedAsFavorite: "Эта заметка отмечена как избранная",
            searchNotes: "Поиск заметок...",
            allNotes: "Все заметки",
            recent: "Недавние",
            favorites: "Избранные",
            totalNotes: "всего заметок",
            favoritesCount: "избранных",
            showing: "показано",
            noNotesFound: "Заметки не найдены",
            noNotesYet: "Заметок пока нет",
            tryAdjusting: "Попробуйте изменить критерии поиска или фильтра",
            createFirstNote: "Создайте свою первую заметку для начала",
            createYourFirstNote: "Создать первую заметку",
            noteCreatedSuccessfully: "Заметка успешно создана!",
            errorCreatingNote: "Ошибка создания заметки",
            errorUpdatingNote: "Ошибка обновления заметки. Попробуйте снова.",
            confirmDeleteNote: "Вы уверены, что хотите удалить эту заметку?",
            errorDeletingNote: "Ошибка удаления заметки. Попробуйте снова.",
            categories: {
                personal: "Личное",
                work: "Работа",
                ideas: "Идеи",
                tasks: "Задачи",
                meetings: "Встречи",
                research: "Исследования",
                other: "Другое"
            }
        },
        // Карта и местоположения
        map: {
            title: "Карта",
            addPoint: "+ добавить точку",
            locationPoints: "Точки местоположения",
            newPoint: "Новая точка",
            clickToAdd: "Кликните для добавления локации",
            loadingMap: "Загрузка карты...",
            coordinates: "Координаты",
            decimal: "Десятичные",
            dms: "DMS",
            moreDetails: "Подробнее",
            lat: "Шир",
            lng: "Долг"
        },
        // Местоположения
        location: {
            addLocation: "Добавить местоположение",
            locationName: "Название точки",
            locationDescription: "Описание точки",
            enterName: "Введите название точки...",
            enterDescription: "Введите описание точки...",
            coordinateFormat: "Формат координат",
            latitude: "Широта",
            longitude: "Долгота",
            enterLatitude: "Введите широту...",
            enterLongitude: "Введите долготу...",
            invalidCoordinates: "Неверные координаты",
            locationSaved: "Местоположение сохранено!",
            fillRequiredFields: "Заполните обязательные поля"
        },
        // Настройки
        settings: {
            title: "Настройки",
            profile: "Профиль",
            security: "Безопасность",
            organization: "Организация",
            appearance: "Внешний вид",
            // Профиль
            profileInfo: "Информация профиля",
            name: "Имя",
            email: "Email",
            enterName: "Введите ваше имя",
            emailCantChange: "Email нельзя изменить",
            saveChanges: "Сохранить изменения",
            saving: "Сохранение...",
            profileUpdated: "Профиль успешно обновлен!",
            profileUpdateError: "Ошибка при обновлении профиля",
            // Безопасность
            changePassword: "Изменить пароль",
            newPassword: "Новый пароль",
            confirmPassword: "Подтвердите новый пароль",
            enterNewPassword: "Введите новый пароль",
            confirmNewPassword: "Подтвердите новый пароль",
            changing: "Изменение...",
            changePasswordBtn: "Изменить пароль",
            passwordChanged: "Пароль успешно изменен!",
            passwordsNotMatch: "Новые пароли не совпадают",
            passwordTooShort: "Пароль должен содержать минимум 6 символов",
            passwordChangeError: "Ошибка при изменении пароля",
            logout: "Выход из системы",
            logoutDescription: "Выйти из учетной записи на этом устройстве",
            logoutBtn: "Выйти",
            // Организация
            organizationInfo: "Информация об организации",
            organizationName: "Название организации",
            yourRole: "Ваша роль",
            organizationId: "ID организации",
            aboutApp: "О приложении",
            version: "Версия",
            developer: "Разработчик",
            year: "Год",
            // Внешний вид
            interfaceLanguage: "Язык интерфейса",
            preview: "Предварительный просмотр",
            languageChanged: "Язык изменен! Обновите страницу для применения изменений.",
            geologicalProject: "Геологический проект",
            sampleProjectPreview: "Предварительный просмотр проекта"
        },
        // Формат дат
        dateFormat: {
            months: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            daysShort: [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ]
        },
        // Аутентификация
        auth: {
            login: "Вход",
            register: "Регистрация",
            logout: "Выход",
            email: "Email",
            password: "Пароль",
            confirmPassword: "Подтвердите пароль",
            name: "Имя",
            organization: "Организация",
            signIn: "Войти",
            signUp: "Зарегистрироваться",
            forgotPassword: "Забыли пароль?",
            resetPassword: "Сбросить пароль",
            backToLogin: "Вернуться ко входу",
            enterEmail: "Введите email",
            enterPassword: "Введите пароль",
            enterName: "Введите имя",
            enterOrganization: "Введите название организации",
            emailPlaceholder: "Электронная почта",
            passwordPlaceholder: "Пароль",
            termsText: "Входя в систему, вы принимаете наши условия обслуживания и политику конфиденциальности.",
            alreadyHaveAccount: "Уже есть аккаунт?",
            dontHaveAccount: "Нет аккаунта?",
            loginError: "Ошибка входа",
            registerError: "Ошибка регистрации",
            invalidCredentials: "Неверные данные для входа",
            emailAlreadyExists: "Пользователь с таким email уже существует",
            passwordTooWeak: "Пароль слишком слабый",
            loginSuccess: "Вход выполнен успешно",
            registerSuccess: "Регистрация завершена успешно"
        },
        // Формы и валидация
        forms: {
            required: "Обязательное поле",
            invalidEmail: "Неверный формат email",
            passwordMinLength: "Пароль должен содержать минимум 6 символов",
            passwordsNotMatch: "Пароли не совпадают",
            invalidFormat: "Неверный формат",
            fieldTooShort: "Поле слишком короткое",
            fieldTooLong: "Поле слишком длинное",
            selectOption: "Выберите опцию",
            chooseFile: "Выберите файл",
            uploadFailed: "Ошибка загрузки",
            saveSuccess: "Сохранено успешно",
            saveError: "Ошибка сохранения",
            deleteConfirm: "Вы уверены, что хотите удалить?",
            deleteSuccess: "Удалено успешно",
            deleteError: "Ошибка удаления"
        },
        // Файлы
        files: {
            title: "Файлы",
            uploadFile: "Загрузить файл",
            uploadImage: "Загрузить изображение",
            selectFile: "Выберите файл",
            fileName: "Имя файла",
            fileSize: "Размер файла",
            uploadDate: "Дата загрузки",
            downloadFile: "Скачать файл",
            deleteFile: "Удалить файл",
            noFiles: "Нет файлов",
            uploadSuccess: "Файл успешно загружен",
            uploadError: "Ошибка загрузки файла",
            fileTooLarge: "Файл слишком большой",
            fileTypeNotAllowed: "Тип файла не поддерживается",
            attachments: "Вложения",
            attachFile: "Прикрепить файл",
            removeFile: "Удалить файл",
            filesAttached: "файлов прикреплено"
        },
        // Вложения
        attachments: "Вложения",
        attachFile: "Прикрепить файл",
        removeFile: "Удалить файл",
        filesAttached: "файлов прикреплено"
    },
    uz: {
        // Umumiy
        appName: "GeoNote",
        loading: "Yuklanmoqda...",
        inDevelopment: "Ishlab chiqilmoqda",
        comingSoon: "Tez orada",
        underConstruction: "Sahifa ishlab chiqilmoqda",
        save: "Saqlash",
        cancel: "Bekor qilish",
        delete: "O'chirish",
        edit: "Tahrirlash",
        back: "Orqaga",
        close: "Yopish",
        add: "Qo'shish",
        error: "Xatolik yuz berdi. Qaytadan urinib ko'ring.",
        success: "Muvaffaqiyatli!",
        // Navigatsiya
        navbar: {
            determining: "Aniqlanmoqda...",
            geolocationError: "Geolokatsiya xatosi",
            geolocationUnavailable: "Geolokatsiya mavjud emas"
        },
        // Landing sahifa
        landing: {
            title: "GeoNote",
            subtitle: "Geologik loyihalarni boshqarish uchun professional platforma",
            description: "Dala ishlarini tashkil qiling, eslatmalar yozing, jamoangizni boshqaring va geologik tadqiqotlaringiz jarayonini bir joyda kuzatib boring.",
            getStarted: "Boshlash",
            learnMore: "Batafsil",
            features: {
                title: "Imkoniyatlar",
                subtitle: "Geologik tadqiqotlar uchun barcha kerakli vositalar",
                projectManagement: {
                    title: "Loyihalarni boshqarish",
                    description: "Jamoa va muddatlar ustidan to'liq nazorat bilan geologik loyihalarni yarating va boshqaring"
                },
                fieldNotes: {
                    title: "Dala eslatmalari",
                    description: "Geolokatsiya va multimedia qo'shish imkoniyati bilan batafsil eslatmalar yozing"
                },
                teamCollaboration: {
                    title: "Jamoaviy ish",
                    description: "Uchrashuvlarni tashkil qiling, vazifalarni tayinlang va jamoa ishini muvofiqlashtiring"
                },
                dataLibrary: {
                    title: "Ma'lumotlar kutubxonasi",
                    description: "Barcha fayllar, hujjatlar va tadqiqot natijalarini saqlang va tartibga soling"
                }
            },
            benefits: {
                title: "Afzalliklar",
                efficiency: "Dala ishlarining samaradorligini oshirish",
                organization: "Markazlashtirilgan ma'lumotlar boshqaruvi",
                collaboration: "Yaxshilangan jamoaviy ish",
                tracking: "Real vaqtda jarayonni kuzatish"
            },
            cta: {
                title: "Boshlashga tayyormisiz?",
                description: "O'z tadqiqotlari uchun GeoNote dan foydalanayotgan geologlarga qo'shiling",
                button: "Hisob yaratish"
            }
        },
        // Navigatsiya
        nav: {
            library: "Kutubxona",
            projects: "Loyihalar",
            news: "Yangiliklar",
            meetings: "Uchrashuvlar",
            notes: "Eslatmalar",
            settings: "Sozlamalar",
            home: "Bosh sahifa"
        },
        // Bosh sahifa
        home: {
            title: "Xush kelibsiz",
            today: "Bugun",
            subtitle: "Geologik loyihalaringizni boshqaring",
            recentProjects: "Oxirgi loyihalar",
            quickActions: "Tez harakatlar",
            createProject: "Loyiha yaratish",
            viewAllProjects: "Barcha loyihalar",
            addNote: "Eslatma qo'shish",
            viewLibrary: "Kutubxonani ochish",
            statistics: "Statistika",
            totalProjects: "Jami loyihalar",
            activeProjects: "Faol loyihalar",
            totalNotes: "Jami eslatmalar",
            upcomingMeetings: "Kelgusi uchrashuvlar",
            teamMembers: "Jamoa a'zolari",
            viewAllMeetings: "Barcha uchrashuvlar"
        },
        noSubscription: {
            loading: "Yuklanmoqda...",
            accessRestricted: "Kirish cheklangan",
            subscriptionExpired: "{orgName} obunasi {date} da tugadi",
            noActiveSubscription: "{orgName}da faol obuna yo'q",
            accessRequirement: "Tizimga kirish uchun GeoNote faol obunasi talab qilinadi.",
            status: "Holat",
            expired: "Muddati tugagan",
            notActive: "Faol emas",
            endDate: "Tugash sanasi",
            notSpecified: "ko'rsatilmagan",
            whatToDo: "Nima qilish kerak?",
            contactAdmin: "Tashkilot ma'muringiz bilan bog'laning",
            adminCanRenew: "Ma'mur obunani yangilashi mumkin",
            logout: "Chiqish",
            yourOrganization: "Sizning tashkilotingiz",
            footer: "GeoNote © 2025 • Made by abdu1axad"
        },
        // Kutubxona
        library: {
            title: "Kutubxona",
            searchPlaceholder: "Kutubxonada qidirish...",
            categories: "Kategoriyalar",
            allFiles: "Barcha fayllar",
            documents: "Hujjatlar",
            images: "Rasmlar",
            videos: "Videolar",
            other: "Boshqa",
            upload: "Fayl yuklash",
            noFiles: "Kutubxonada hali fayllar yo'q",
            uploadFirst: "Boshlash uchun birinchi faylni yuklang",
            fileName: "Fayl nomi",
            fileSize: "Hajmi",
            uploadDate: "Yuklash sanasi",
            actions: "Harakatlar",
            download: "Yuklab olish",
            view: "Ko'rish"
        },
        // Yangiliklar
        news: {
            title: "Yangiliklar",
            addNews: "Yangilik qo'shish",
            noNews: "Hali yangiliklar yo'q",
            publishFirst: "Birinchi yangiliklarni nashr eting",
            newsTitle: "Yangilik sarlavhasi",
            newsContent: "Yangilik mazmuni",
            publish: "Nashr qilish",
            draft: "Qoralama",
            published: "Nashr qilingan",
            author: "Muallif",
            publishDate: "Nashr sanasi",
            readMore: "Batafsil",
            categories: "Kategoriyalar",
            general: "Umumiy",
            projects: "Loyihalar",
            announcements: "E'lonlar",
            updates: "Yangilanishlar",
            organizationNews: "Tashkilot yangiliklari",
            addNewsButton: "Yangilik qo'shish",
            cancelButton: "Bekor qilish",
            createNews: "Yangilik yaratish",
            newsHeadline: "Yangilik sarlavhasi",
            newsContent: "Yangilik mazmuni",
            lowPriority: "Past ustuvorlik",
            mediumPriority: "O'rta ustuvorlik",
            highPriority: "Yuqori ustuvorlik",
            tagsPlaceholder: "Teglar (vergul bilan)",
            createButton: "Yangilik yaratish",
            cancelFormButton: "Bekor qilish",
            totalNews: "Jami yangiliklar",
            unread: "O'qilmagan",
            read: "O'qilgan",
            archived: "Arxivlangan",
            all: "Hammasi",
            unreadFilter: "O'qilmagan",
            readFilter: "O'qilgan",
            archive: "Arxiv",
            markAsRead: "O'qilgan deb belgilash",
            marking: "Belgilanmoqda...",
            readStatus: "O'qilgan",
            archiveButton: "Arxivlash",
            readBy: "O'qiganlar",
            people: "kishi",
            archivedStatus: "Arxivlangan",
            noNewsMessage: "Yangiliklar yo'q",
            noNewsDescription: "Hali yangiliklar yo'q",
            noUnreadNews: "O'qilmagan yangiliklar yo'q",
            noReadNews: "O'qilgan yangiliklar yo'q",
            noArchivedNews: "Arxivlangan yangiliklar yo'q",
            authorUnknown: "Muallif noma'lum",
            confirmArchive: "Bu yangiliklarni arxivlashga ishonchingiz komilmi?",
            errorCreating: "Yangilik yaratishda xatolik"
        },
        // Uchrashuvlar
        meetings: {
            title: "Uchrashuvlar",
            scheduleMeeting: "Uchrashuvni rejalashtirish",
            noMeetings: "Hali uchrashuvlar yo'q",
            scheduleFirst: "Birinchi uchrashuvni rejalashtiring",
            meetingTitle: "Uchrashv nomi",
            meetingDescription: "Uchrashv tavsifi",
            startDate: "Boshlanish sanasi",
            endDate: "Tugash sanasi",
            startTime: "Boshlanish vaqti",
            endTime: "Tugash vaqti",
            location: "Joylashuv",
            participants: "Ishtirokchilar",
            organizer: "Tashkilotchi",
            agenda: "Kun tartibi",
            notes: "Uchrashv eslatmalari",
            upcoming: "Kelgusi",
            past: "O'tgan",
            today: "Bugun",
            tomorrow: "Ertaga",
            thisWeek: "Shu hafta",
            status: {
                scheduled: "Rejalashtirilgan",
                inProgress: "Jarayonda",
                completed: "Yakunlangan",
                cancelled: "Bekor qilingan"
            },
            reschedule: "Qayta rejalashtirish",
            cancel: "Bekor qilish",
            join: "Qo'shilish",
            minutes: "Daqiqalar",
            createMeeting: "Uchrashv yaratish",
            enterMeetingLocation: "Uchrashv joyini kiriting",
            addMeetingNotes: "Uchrashv eslatmalari yoki kun tartibini qo'shing...",
            noStatus: "Holatsiz",
            addToCalendar: "Kalendariga qo'shish",
            googleCalendar: "Google Calendar",
            outlookCalendar: "Outlook",
            appleCalendar: "Apple Calendar",
            downloadICS: "ICS faylini yuklab olish",
            calendarAdded: "Uchrashuv kalendariga qo'shildi",
            instantMeeting: "Zudlik bilan uchrashuv",
            meetingTopic: "Uchrashuv mavzusi",
            enterMeetingTopic: "Uchrashuv mavzusini kiriting",
            description: "Tavsif",
            briefDescription: "Uchrashuv qisqacha tavsifi",
            conferenceParticipants: "Konferensiya ishtirokchilari",
            searchByName: "Ism, email yoki rol bo'yicha qidirish...",
            startConference: "Konferensiyani boshlash",
            starting: "Boshlanmoqda...",
            allMeetings: "Barcha uchrashuvlar",
            totalMeetings: "Jami uchrashuvlar",
            scheduled: "Rejalashtirilgan",
            inProgress: "Jarayonda",
            completed: "Yakunlangan",
            cancelled: "Bekor qilingan",
            noMeetingsInFilter: "Bu filtrda uchrashuvlar yo'q",
            tryChangeFilter: "Boshqa uchrashuvlarni ko'rish uchun filtrni o'zgartirishga harakat qiling",
            scheduleOrStart: "Uchrashuvni rejalashtiring yoki zudlik bilan videokonferensiya boshlang",
            joinConference: "Konferensiyaga qo'shilish",
            finish: "Yakunlash",
            start: "Boshlash",
            conducted: "O'tkazildi",
            meetingDate: "Sana",
            place: "Joy",
            finishedAt: "Yakunlangan",
            startedAt: "Boshlangan",
            participants: "Ishtirokchilar",
            instant: "Zudlik",
            videoConference: "Videokonferensiya",
            enterMeetingTopic: "Uchrashuv mavzusini kiriting",
            briefDescription: "Uchrashuv qisqacha tavsifi",
            participantsLabel: "Konferensiya ishtirokchilari",
            searchParticipants: "Ism, email yoki rol bo'yicha qidirish...",
            starting: "Boshlanmoqda...",
            loading: "Yuklanmoqda",
            noMeetingsYet: "Hali uchrashuvlar yo'q",
            noScheduledMeetings: "Rejalashtirilgan uchrashuvlar yo'q",
            noCurrentMeetings: "Joriy uchrashuvlar yo'q",
            noCompletedMeetings: "Yakunlangan uchrashuvlar yo'q",
            noCancelledMeetings: "Bekor qilingan uchrashuvlar yo'q",
            scheduleOrStartMeeting: "Uchrashuvni rejalashtiring yoki zudlik bilan videokonferensiya boshlang",
            tryChangeFilter: "Boshqa uchrashuvlarni ko'rish uchun filtrni o'zgartirishga harakat qiling",
            markAsCompleted: "Uchrashuvni yakunlangan deb belgilaysizmi?",
            cancelMeetingConfirm: "Uchrashuvni bekor qilasizmi?",
            errorUpdating: "Uchrashuvni yangilashda xatolik",
            errorStarting: "Uchrashuvni boshlashda xatolik",
            errorCancelling: "Uchrashuvni bekor qilishda xatolik",
            conferenceUrlUnavailable: "Konferensiya havolasi mavjud emas",
            meetingInProgress: "Jarayonda",
            meetingScheduled: "Rejalashtirilgan",
            meetingCancelled: "Bekor qilingan",
            meetingCompleted: "Yakunlangan",
            location: "Joy",
            totalMeetings: "Jami uchrashuvlar"
        },
        // Joylashuvlar
        locations: {
            title: "Joylashuvlar",
            map: "Xarita",
            addPoint: "nuqta qo'shish",
            addLocation: "Joylashuv qo'shish",
            addLocationPoint: "Joylashuv nuqtasini qo'shish",
            selectedCoordinates: "Tanlangan koordinatalar",
            pointName: "Nuqta nomi",
            pointNamePlaceholder: "masalan, Namunaviy joylashuv 1",
            description: "Tavsif",
            descriptionPlaceholder: "Ushbu joylashuv tavsifi...",
            coordinateFormat: "Koordinata formati",
            switchToDMS: "DMS ga o'tish",
            switchToDecimal: "O'nlik songa o'tish",
            latitude: "Kenglik",
            longitude: "Uzunlik",
            formatDMSExample: "Format: 41°17'28\"N yoki 41 17 28 N",
            formatDMSExampleLng: "Format: 69°14'26\"E yoki 69 14 26 E",
            cancel: "Bekor qilish"
        },
        // Loyihalar
        projects: {
            title: "Loyihalar",
            description: "Tavsif",
            participants: "Ishtirokchilar",
            date: "Sana",
            status: "Holat",
            createNew: "Loyiha yaratish",
            noProjects: "Loyihalar yo'q",
            openProject: "loyihani ochish",
            backToProjects: "Loyihalarga qaytish",
            exportToPdf: "PDF ga eksport",
            statusActive: "faol",
            statusCompleted: "yakunlangan",
            statusUpcoming: "kelgusi",
            statusNotStarted: "boshlanmagan",
            notStarted: "boshlanmagan",
            projectOptional: "Loyiha (Ixtiyoriy)",
            projectTitle: "Loyiha nomi",
            projectReport: "Loyiha hisoboti",
            noProject: "Loyihasiz",
            noUsersAvailable: "Foydalanuvchilar mavjud emas",
            organization: "Tashkilot",
            owner: "Egasi",
            team: "Jamoa",
            noDescription: "Tavsif mavjud emas"
        },
        // Eslatmalar
        notes: {
            title: "Eslatmalar",
            addNote: "Eslatma qo'shish",
            noteTitle: "Eslatma nomi",
            noteDescription: "Eslatma tavsifi",
            linkToLocation: "Joylashuvga bog'lash (ixtiyoriy)",
            noLocation: "Joylashuvsiz",
            enterTitle: "Eslatma nomini kiriting...",
            enterDescription: "Eslatma tavsifini kiriting...",
            listOfNotes: "Eslatmalar ro'yxati",
            noNotes: "Eslatmalar yo'q",
            addLocationFirst: "Eslatmalarga bog'lash uchun avval joylashuv nuqtalarini qo'shing",
            createNote: "Eslatma yaratish",
            createNewNote: "Yangi eslatma yaratish",
            editNote: "Eslatmani tahrirlash",
            updateNote: "Eslatmani yangilash",
            noteTitle: "Sarlavha",
            noteContent: "Mazmun",
            category: "Kategoriya",
            categoryOptional: "Kategoriya (Ixtiyoriy)",
            selectCategory: "Kategoriyani tanlang...",
            enterNoteTitle: "Eslatma sarlavhasini kiriting...",
            writeNoteContent: "Eslatma mazmunini shu yerga yozing...",
            pleaseEnterTitle: "Iltimos, eslatma uchun sarlavha kiriting",
            pleaseEnterContent: "Iltimos, eslatma uchun mazmun kiriting",
            created: "Yaratilgan",
            lastUpdated: "Oxirgi yangilanish",
            markedAsFavorite: "Bu eslatma sevimli deb belgilangan",
            searchNotes: "Eslatmalarni qidirish...",
            allNotes: "Barcha Eslatmalar",
            recent: "So'nggimlar",
            favorites: "Sevimlilar",
            totalNotes: "jami eslatmalar",
            favoritesCount: "sevimlilar",
            showing: "ko'rsatilmoqda",
            noNotesFound: "Eslatmalar topilmadi",
            noNotesYet: "Hali eslatmalar yo'q",
            tryAdjusting: "Qidiruv yoki filtr mezonlarini o'zgartirishga harakat qiling",
            createFirstNote: "Boshlash uchun birinchi eslatmangizni yarating",
            createYourFirstNote: "Birinchi Eslatmangizni Yarating",
            noteCreatedSuccessfully: "Eslatma muvaffaqiyatli yaratildi!",
            errorCreatingNote: "Eslatma yaratishda xatolik",
            errorUpdatingNote: "Eslatmani yangilashda xatolik. Qaytadan urinib ko'ring.",
            confirmDeleteNote: "Bu eslatmani o'chirishga ishonchingiz komilmi?",
            errorDeletingNote: "Eslatmani o'chirishda xatolik. Qaytadan urinib ko'ring.",
            categories: {
                personal: "Shaxsiy",
                work: "Ish",
                ideas: "G'oyalar",
                tasks: "Vazifalar",
                meetings: "Uchrashuvlar",
                research: "Tadqiqot",
                other: "Boshqa"
            }
        },
        // Xarita va joylashuvlar
        map: {
            title: "Xarita",
            addPoint: "+ nuqta qo'shish",
            locationPoints: "Joylashuv nuqtalari",
            newPoint: "Yangi nuqta",
            clickToAdd: "Joylashuv qo'shish uchun bosing",
            loadingMap: "Xarita yuklanmoqda...",
            coordinates: "Koordinatalar",
            decimal: "O'nlik",
            dms: "DMS",
            moreDetails: "Batafsil",
            lat: "Ken",
            lng: "Uzun"
        },
        // Joylashuvlar
        location: {
            addLocation: "Joylashuv qo'shish",
            locationName: "Joylashuv nomi",
            locationDescription: "Joylashuv tavsifi",
            enterName: "Joylashuv nomini kiriting...",
            enterDescription: "Joylashuv tavsifini kiriting...",
            coordinateFormat: "Koordinata formati",
            latitude: "Kenglik",
            longitude: "Uzunlik",
            enterLatitude: "Kenglikni kiriting...",
            enterLongitude: "Uzunlikni kiriting...",
            invalidCoordinates: "Noto'g'ri koordinatalar",
            locationSaved: "Joylashuv saqlandi!",
            fillRequiredFields: "Majburiy maydonlarni to'ldiring"
        },
        // Sozlamalar
        settings: {
            title: "Sozlamalar",
            profile: "Profil",
            security: "Xavfsizlik",
            organization: "Tashkilot",
            appearance: "Tashqi ko'rinish",
            // Profil
            profileInfo: "Profil ma'lumotlari",
            name: "Ism",
            email: "Email",
            enterName: "Ismingizni kiriting",
            emailCantChange: "Email o'zgartirilmaydi",
            saveChanges: "O'zgarishlarni saqlash",
            saving: "Saqlanmoqda...",
            profileUpdated: "Profil muvaffaqiyatli yangilandi!",
            profileUpdateError: "Profilni yangilashda xatolik",
            // Xavfsizlik
            changePassword: "Parolni o'zgartirish",
            newPassword: "Yangi parol",
            confirmPassword: "Yangi parolni tasdiqlang",
            enterNewPassword: "Yangi parolni kiriting",
            confirmNewPassword: "Yangi parolni tasdiqlang",
            changing: "O'zgartirilmoqda...",
            changePasswordBtn: "Parolni o'zgartirish",
            passwordChanged: "Parol muvaffaqiyatli o'zgartirildi!",
            passwordsNotMatch: "Yangi parollar mos kelmaydi",
            passwordTooShort: "Parol kamida 6 ta belgidan iborat bo'lishi kerak",
            passwordChangeError: "Parolni o'zgartirishda xatolik",
            logout: "Chiqish",
            logoutDescription: "Ushbu qurilmada hisobdan chiqish",
            logoutBtn: "Chiqish",
            // Tashkilot
            organizationInfo: "Tashkilot ma'lumotlari",
            organizationName: "Tashkilot nomi",
            yourRole: "Sizning rolingiz",
            organizationId: "Tashkilot ID",
            aboutApp: "Ilova haqida",
            version: "Versiya",
            developer: "Dasturchi",
            year: "Yil",
            // Tashqi ko'rinish
            interfaceLanguage: "Interfeys tili",
            preview: "Oldindan ko'rish",
            languageChanged: "Til o'zgartirildi! O'zgarishlarni qo'llash uchun sahifani yangilang.",
            geologicalProject: "Geologik Loyiha",
            sampleProjectPreview: "Namunaviy loyiha ko'rinishi"
        },
        // Sana formati
        dateFormat: {
            months: [
                "Yanvar",
                "Fevral",
                "Mart",
                "Aprel",
                "May",
                "Iyun",
                "Iyul",
                "Avgust",
                "Sentabr",
                "Oktabr",
                "Noyabr",
                "Dekabr"
            ],
            daysShort: [
                "Yak",
                "Dush",
                "Sesh",
                "Chor",
                "Pay",
                "Jum",
                "Shan"
            ]
        },
        // Autentifikatsiya
        auth: {
            login: "Kirish",
            register: "Ro'yxatdan o'tish",
            logout: "Chiqish",
            email: "Email",
            password: "Parol",
            confirmPassword: "Parolni tasdiqlang",
            name: "Ism",
            organization: "Tashkilot",
            signIn: "Kirish",
            signUp: "Ro'yxatdan o'tish",
            forgotPassword: "Parolni unutdingizmi?",
            resetPassword: "Parolni tiklash",
            backToLogin: "Kirishga qaytish",
            enterEmail: "Email kiriting",
            enterPassword: "Parol kiriting",
            enterName: "Ism kiriting",
            enterOrganization: "Tashkilot nomini kiriting",
            emailPlaceholder: "Email manzil",
            passwordPlaceholder: "Parol",
            termsText: "Tizimga kirish orqali siz bizning xizmat shartlari va maxfiylik siyosatimizni qabul qilasiz.",
            alreadyHaveAccount: "Allaqachon hisobingiz bormi?",
            dontHaveAccount: "Hisobingiz yo'qmi?",
            loginError: "Kirish xatosi",
            registerError: "Ro'yxatdan o'tish xatosi",
            invalidCredentials: "Noto'g'ri ma'lumotlar",
            emailAlreadyExists: "Bunday email bilan foydalanuvchi allaqachon mavjud",
            passwordTooWeak: "Parol juda zaif",
            loginSuccess: "Muvaffaqiyatli kirildi",
            registerSuccess: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi"
        },
        // Formalar va validatsiya
        forms: {
            required: "Majburiy maydon",
            invalidEmail: "Noto'g'ri email formati",
            passwordMinLength: "Parol kamida 6 ta belgidan iborat bo'lishi kerak",
            passwordsNotMatch: "Parollar mos kelmaydi",
            invalidFormat: "Noto'g'ri format",
            fieldTooShort: "Maydon juda qisqa",
            fieldTooLong: "Maydon juda uzun",
            selectOption: "Variantni tanlang",
            chooseFile: "Fayl tanlang",
            uploadFailed: "Yuklash muvaffaqiyatsiz",
            saveSuccess: "Muvaffaqiyatli saqlandi",
            saveError: "Saqlash xatosi",
            deleteConfirm: "O'chirishni xohlaysizmi?",
            deleteSuccess: "Muvaffaqiyatli o'chirildi",
            deleteError: "O'chirish xatosi"
        },
        // Fayllar
        files: {
            title: "Fayllar",
            uploadFile: "Fayl yuklash",
            uploadImage: "Rasm yuklash",
            selectFile: "Fayl tanlash",
            fileName: "Fayl nomi",
            fileSize: "Fayl hajmi",
            uploadDate: "Yuklash sanasi",
            downloadFile: "Faylni yuklab olish",
            deleteFile: "Faylni o'chirish",
            noFiles: "Fayllar yo'q",
            uploadSuccess: "Fayl muvaffaqiyatli yuklandi",
            uploadError: "Fayl yuklashda xatolik",
            fileTooLarge: "Fayl juda katta",
            fileTypeNotAllowed: "Fayl turi qo'llab-quvvatlanmaydi",
            attachments: "Biriktirmalar",
            attachFile: "Fayl biriktirish",
            removeFile: "Faylni olib tashlash",
            filesAttached: "fayl biriktirilgan"
        },
        // Вложения
        attachments: "Biriktirmalar",
        attachFile: "Fayl biriktirish",
        removeFile: "Faylni olib tashlash",
        filesAttached: "fayl biriktirilgan"
    }
};
const getString = (key, language = 'en')=>{
    const keys = key.split('.');
    let result = strings[language];
    for (const k of keys){
        if (result && result[k] !== undefined) {
            result = result[k];
        } else {
            // Если строка не найдена, возвращаем русский вариант
            result = strings.ru;
            for (const k2 of keys){
                if (result && result[k2] !== undefined) {
                    result = result[k2];
                } else {
                    return key; // Возвращаем сам ключ, если ничего не найдено
                }
            }
            break;
        }
    }
    return result || key;
};
const getCurrentLanguage = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem('app-language') || 'en';
    }
    //TURBOPACK unreachable
    ;
};
const __TURBOPACK__default__export__ = strings;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useStrings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changeLanguage",
    ()=>changeLanguage,
    "useStrings",
    ()=>useStrings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/strings.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Функция для применения светлой темы
const applyLightTheme = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Убираем класс темной темы, оставляем только светлую
    document.documentElement.classList.remove('dark');
};
const useStrings = ()=>{
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ru');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStrings.useEffect": ()=>{
            // Получаем текущий язык при монтировании компонента
            const currentLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentLanguage"])();
            setLanguage(currentLang);
            // Инициализируем светлую тему при загрузке
            applyLightTheme();
            // Слушаем изменения языка
            const handleLanguageChange = {
                "useStrings.useEffect.handleLanguageChange": ()=>{
                    const newLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentLanguage"])();
                    setLanguage(newLang);
                }
            }["useStrings.useEffect.handleLanguageChange"];
            // Добавляем слушатель языка
            window.addEventListener('language-changed', handleLanguageChange);
            return ({
                "useStrings.useEffect": ()=>{
                    window.removeEventListener('language-changed', handleLanguageChange);
                }
            })["useStrings.useEffect"];
        }
    }["useStrings.useEffect"], []);
    // Функция для получения строки
    const t = (key)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getString"])(key, language);
    };
    return {
        t,
        language,
        setLanguage
    };
};
_s(useStrings, "Pby52FgprsMNZpqA7FKZ07ngmi8=");
const changeLanguage = (newLanguage)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('app-language', newLanguage);
        // Создаем кастомное событие для уведомления компонентов
        window.dispatchEvent(new Event('language-changed'));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/pages/noSubscription/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NoSubscription() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["app"]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [orgName, setOrgName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NoSubscription.useEffect": ()=>{
            const fetchOrgAndSubscription = {
                "NoSubscription.useEffect.fetchOrgAndSubscription": async ()=>{
                    const user = auth.currentUser;
                    if (!user) {
                        router.push('/');
                        return;
                    }
                    try {
                        const organizationsSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'organizations'));
                        for (const orgDoc of organizationsSnapshot.docs){
                            const userInOrgDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgDoc.id}/users/${user.uid}`));
                            if (userInOrgDoc.exists()) {
                                setOrgName(orgDoc.data().name || t('noSubscription.yourOrganization'));
                                const subDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgDoc.id}/subscription/current`));
                                if (subDoc.exists()) {
                                    setSubscription(subDoc.data());
                                }
                                break;
                            }
                        }
                    } catch (error) {
                        console.error('Error fetching subscription:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["NoSubscription.useEffect.fetchOrgAndSubscription"];
            fetchOrgAndSubscription();
        }
    }["NoSubscription.useEffect"], []);
    const handleLogout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(auth);
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    const formatDate = (dateString)=>{
        if (!dateString) return t('noSubscription.notSpecified');
        return new Date(dateString).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl text-gray-600",
                children: t('noSubscription.loading')
            }, void 0, false, {
                fileName: "[project]/app/pages/noSubscription/page.js",
                lineNumber: 71,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/pages/noSubscription/page.js",
            lineNumber: 70,
            columnNumber: 13
        }, this);
    }
    const isExpired = subscription?.endDate && new Date(subscription.endDate) < new Date();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-orange-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-24 bg-red-100 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-12 h-12 text-red-600",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            }, void 0, false, {
                                fileName: "[project]/app/pages/noSubscription/page.js",
                                lineNumber: 85,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/pages/noSubscription/page.js",
                            lineNumber: 84,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/pages/noSubscription/page.js",
                        lineNumber: 83,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pages/noSubscription/page.js",
                    lineNumber: 82,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-center text-gray-900 mb-4",
                    children: t('noSubscription.accessRestricted')
                }, void 0, false, {
                    fileName: "[project]/app/pages/noSubscription/page.js",
                    lineNumber: 91,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 border-l-4 border-red-500 p-4 mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5 text-red-400",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/noSubscription/page.js",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/noSubscription/page.js",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pages/noSubscription/page.js",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-700 font-medium",
                                    children: isExpired ? t('noSubscription.subscriptionExpired').replace('{orgName}', orgName).replace('{date}', formatDate(subscription.endDate)) : t('noSubscription.noActiveSubscription').replace('{orgName}', orgName)
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/noSubscription/page.js",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pages/noSubscription/page.js",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/noSubscription/page.js",
                        lineNumber: 97,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pages/noSubscription/page.js",
                    lineNumber: 96,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-center",
                            children: t('noSubscription.accessRequirement')
                        }, void 0, false, {
                            fileName: "[project]/app/pages/noSubscription/page.js",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this),
                        subscription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 rounded-lg p-4 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: [
                                                t('noSubscription.status'),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/noSubscription/page.js",
                                            lineNumber: 124,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-red-600",
                                            children: isExpired ? t('noSubscription.expired') : t('noSubscription.notActive')
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/noSubscription/page.js",
                                            lineNumber: 125,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/noSubscription/page.js",
                                    lineNumber: 123,
                                    columnNumber: 29
                                }, this),
                                subscription.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: [
                                                t('noSubscription.endDate'),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/noSubscription/page.js",
                                            lineNumber: 131,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: formatDate(subscription.endDate)
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/noSubscription/page.js",
                                            lineNumber: 132,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/noSubscription/page.js",
                                    lineNumber: 130,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pages/noSubscription/page.js",
                            lineNumber: 122,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-blue-900 mb-2",
                                    children: t('noSubscription.whatToDo')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/noSubscription/page.js",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-blue-800 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• ",
                                                t('noSubscription.contactAdmin')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/noSubscription/page.js",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• ",
                                                t('noSubscription.adminCanRenew')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/noSubscription/page.js",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/noSubscription/page.js",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pages/noSubscription/page.js",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pages/noSubscription/page.js",
                    lineNumber: 116,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium",
                        children: t('noSubscription.logout')
                    }, void 0, false, {
                        fileName: "[project]/app/pages/noSubscription/page.js",
                        lineNumber: 149,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pages/noSubscription/page.js",
                    lineNumber: 148,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 pt-6 border-t text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500",
                        children: t('noSubscription.footer')
                    }, void 0, false, {
                        fileName: "[project]/app/pages/noSubscription/page.js",
                        lineNumber: 159,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pages/noSubscription/page.js",
                    lineNumber: 158,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pages/noSubscription/page.js",
            lineNumber: 80,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/pages/noSubscription/page.js",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}
_s(NoSubscription, "QEhFb9LbL47qDgGaFAfDw+c31qU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = NoSubscription;
var _c;
__turbopack_context__.k.register(_c, "NoSubscription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_a04c0d87._.js.map