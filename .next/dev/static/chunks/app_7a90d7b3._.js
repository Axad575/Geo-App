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
            home: "Главная",
            tickets: "Предложения"
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
        geologicalLog: {
            title: "Геологический лог",
            exportPNG: "Экспорт PNG",
            save: "Сохранить",
            generalData: "Общие данные",
            wellName: "Название скважины",
            wellNamePlaceholder: "№ 123",
            location: "Локация",
            locationPlaceholder: "Координаты",
            elevation: "Высота (м)",
            totalDepth: "Общая глубина (м)",
            showGrid: "Показать сетку",
            addLayer: "Добавить слой",
            depthFrom: "Глубина от (м)",
            depthTo: "Глубина до (м)",
            lithology: "Литология",
            grainSize: "Размер зерна",
            description: "Описание",
            descriptionPlaceholder: "Характеристика слоя",
            fossils: "Ископаемые",
            fossilsPlaceholder: "Если есть",
            addLayerButton: "Добавить слой",
            layers: "Слои",
            noLayers: "Нет добавленных слоев",
            deleteLayer: "Удалить этот слой?",
            legend: "Легенда",
            warningTitle: "Важно! Не забудьте сохранить лог",
            warningText: "После создания или редактирования слоев обязательно нажмите кнопку",
            warningButton: "Сохранить",
            warningFooter: "Без сохранения все изменения будут потеряны при закрытии редактора.",
            // Типы литологии
            sandstone: "Песчаник",
            limestone: "Известняк",
            shale: "Сланец",
            clay: "Глина",
            coal: "Уголь",
            granite: "Гранит",
            conglomerate: "Конгломерат",
            marl: "Мергель",
            dolomite: "Доломит",
            gypsum: "Гипс",
            // Размеры зерен
            veryFine: "Очень мелкий",
            fine: "Мелкий",
            medium: "Средний",
            coarse: "Крупный",
            veryCoarse: "Очень крупный",
            // Сообщения
            enterDepth: "Пожалуйста, укажите глубину слоя",
            depthError: "Глубина 'До' должна быть больше глубины 'От'"
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
        participantSelector: {
            participants: "Участники",
            selected: "выбрано",
            clearAll: "Очистить все",
            searchPlaceholder: "Поиск участников...",
            noParticipantsFound: "Участники не найдены",
            noAvailableParticipants: "Нет доступных участников",
            found: "Найдено",
            of: "из",
            collapse: "Свернуть"
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
        tickets: {
            title: "Предложения и Обратная связь",
            subtitle: "Отправьте свое предложение или сообщите о проблеме",
            createTicket: "Создать тикет",
            newTicket: "Новое предложение",
            ticketTitle: "Название",
            enterTitle: "Введите название",
            type: "Тип",
            priority: "Приоритет",
            description: "Описание",
            enterDescription: "Опишите ваше предложение или проблему подробно...",
            submit: "Отправить",
            submitting: "Отправка...",
            myTickets: "Мои тикеты",
            allTickets: "Все тикеты",
            noTickets: "Нет тикетов",
            noTicketsDescription: "Создайте первый тикет, нажав на кнопку выше",
            delete: "Удалить",
            // Types
            suggestion: "Предложение",
            bug: "Ошибка",
            feature: "Новая функция",
            question: "Вопрос",
            other: "Другое",
            // Priority
            lowPriority: "Низкий",
            mediumPriority: "Средний",
            highPriority: "Высокий",
            criticalPriority: "Критический",
            // Status
            pending: "Ожидает",
            inProgress: "В работе",
            resolved: "Решено",
            rejected: "Отклонено",
            // Messages
            fillAllFields: "Пожалуйста, заполните все обязательные поля",
            ticketSubmitted: "Тикет успешно отправлен!",
            submitError: "Ошибка при отправке тикета",
            confirmDelete: "Вы уверены, что хотите удалить этот тикет?",
            ticketDeleted: "Тикет удален",
            deleteError: "Ошибка при удалении тикета"
        },
        projectPage: {
            tasks: "Задачи",
            manageTasks: "Управление задачами",
            view: "Просмотреть",
            membersList: "Список участников",
            actionHistory: "История действий",
            emptyHistory: "История действий пока пуста",
            addedNote: "Добавил заметку",
            updatedNote: "Обновил заметку",
            deletedNote: "Удалил заметку",
            addedLocation: "Добавил точку",
            createdProject: "Создал проект",
            changedStatus: "Изменил статус на",
            uploadedFile: "Загрузил файл",
            files: "файл(ов)",
            defaultDate: "15.02.2025-15.04.2025"
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
            noDescription: "Описание отсутствует",
            createNewProject: "Создать новый проект",
            projectName: "Название проекта",
            projectNameRequired: "Название проекта *",
            enterProjectName: "Введите название проекта",
            description: "Описание",
            projectDescription: "Описание проекта и его целей",
            startDate: "Дата начала",
            endDate: "Дата окончания",
            priority: "Приоритет",
            lowPriority: "🟢 Низкий",
            mediumPriority: "🟡 Средний",
            highPriority: "🔴 Высокий",
            criticalPriority: "🟣 Критический",
            category: "Категория",
            categoryPlaceholder: "Например: Разработка, Маркетинг",
            budget: "Бюджет (необязательно)",
            budgetPlaceholder: "Например: 100,000 руб",
            projectParticipants: "Участники проекта",
            searchParticipants: "Поиск участников по имени, email или роли...",
            creatorAutoAdded: "Создатель проекта автоматически становится участником",
            creating: "Создаем...",
            createProject: "Создать проект",
            cancel: "Отмена",
            // Карточка проекта
            openProject: "Открыть проект",
            start: "Начать",
            finish: "Завершить",
            completed: "Завершен",
            participants: "Участники",
            // Приоритеты
            critical: "Критический",
            high: "Высокий",
            medium: "Средний",
            low: "Низкий",
            // Kanban колонки
            upcoming: "Предстоящие",
            inProgress: "В процессе",
            completedColumn: "Завершенные",
            noProjects: "Нет проектов",
            // Статистика
            totalProjects: "Всего проектов",
            upcomingProjects: "Предстоящих",
            inProgressProjects: "В процессе",
            completedProjects: "Завершенных",
            // Виды отображения
            kanban: "Kanban",
            list: "Список",
            // Пустое состояние
            noProjectsYet: "Пока нет проектов",
            createFirstProject: "Создайте свой первый проект для начала работы",
            createFirstProjectBtn: "Создать первый проект",
            // Список
            noDescriptionProvided: "Описание не указано",
            createdDate: "Создан",
            startDateLabel: "Начало",
            endDateLabel: "Конец",
            statusLabel: "Статус",
            open: "Открыть →",
            // Загрузка
            loadingProjects: "Загрузка проектов...",
            // Статусы
            notStarted: "Не начат",
            active: "Активный",
            inProgress: "В процессе",
            completed: "Завершен",
            upcoming: "Предстоящий",
            // Дата форматирование
            invalidDate: "Некорректная дата",
            dateError: "Ошибка даты"
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
            },
            knowledge: "Знания",
            notesTab: "Заметки",
            libraryTab: "Библиотека",
            newNote: "Новая заметка",
            addToLibrary: "Добавить в библиотеку",
            searchNotes: "Поиск заметок...",
            searchLibrary: "Поиск в библиотеке...",
            allNotes: "Все заметки",
            recent: "Недавние",
            favorites: "Избранные",
            allTypes: "Все типы",
            articles: "Статьи",
            books: "Книги",
            videos: "Видео",
            research: "Исследования",
            documents: "Документы",
            pdfs: "PDF",
            images: "Изображения",
            other: "Другое",
            totalDocuments: "документов",
            shown: "показано",
            noNotesFound: "Заметки не найдены",
            noNotesYet: "Пока нет заметок",
            tryChangingFilter: "Попробуйте изменить критерии поиска",
            createFirstNote: "Создайте свою первую заметку",
            selectNote: "Выберите заметку для просмотра",
            removeFromFavorites: "Убрать из избранного",
            addToFavorites: "Добавить в избранное",
            backToProject: "Назад к проекту",
            project: "Проект",
            noteDetails: "Детали заметки",
            description: "Описание",
            noDescription: "Описание отсутствует",
            attachedFiles: "Прикрепленные файлы",
            openFile: "Открыть",
            location: "Местоположение",
            decimalCoordinates: "Десятичные координаты",
            dmsCoordinates: "Градусы/минуты/секунды",
            geologicalLog: "Геологический лог",
            well: "Скважина",
            locationLabel: "Локация",
            elevation: "Высота",
            totalDepth: "Глубина",
            layers: "Слоев",
            depthFrom: "м -",
            depthTo: "м",
            grainSize: "Зернистость",
            fossils: "Ископаемые",
            downloadLog: "Скачать лог (PNG)",
            information: "Информация",
            author: "Автор",
            createdAt: "Дата создания",
            locationInfo: "Локация",
            filesCount: "файл(ов)",
            actions: "Действия",
            edit: "Редактировать",
            delete: "Удалить",
            deleting: "Удаление...",
            confirmDelete: "Вы уверены, что хотите удалить эту заметку? Это действие нельзя отменить.",
            deleteError: "Ошибка при удалении заметки. Пожалуйста, попробуйте снова.",
            mb: "MB",
            meters: "м",
            // Модальное окно добавления документа
            addDocument: "Добавить в библиотеку",
            title: "Название",
            titleRequired: "Название *",
            documentTitlePlaceholder: "Название документа или статьи",
            description: "Описание",
            descriptionPlaceholder: "Краткое описание содержания",
            type: "Тип",
            article: "Статья",
            document: "Документ",
            book: "Книга",
            researchType: "Исследование",
            video: "Видео",
            pdf: "PDF",
            image: "Изображение",
            otherType: "Другое",
            chooseMethod: "Выберите способ добавления:",
            uploadFile: "Загрузить файл",
            maxSize: "Максимум 10MB. Файл будет загружен в Firebase Storage",
            orText: "или",
            addLink: "https://example.com - добавить ссылку",
            tags: "Теги (через запятую)",
            tagsPlaceholder: "наука, технологии, исследование",
            preparingFile: "Подготовка файла...",
            uploadingToStorage: "Загрузка в Storage...",
            gettingLink: "Получение ссылки...",
            savingToDatabase: "Сохранение в базу...",
            completed: "Завершено!",
            uploading: "Загружаем...",
            add: "Добавить",
            fileTooLarge: "Файл слишком большой. Максимальный размер: 10MB",
            openFile: "Открыть файл",
            openLink: "Открыть",
            added: "Добавлено",
            deleteDocument: "Удалить этот документ из библиотеки?",
            errorAddingDocument: "Ошибка при добавлении документа",
            errorDeletingDocument: "Ошибка при удалении документа",
            // Пустые состояния
            noDocuments: "Документы не найдены",
            libraryEmpty: "Библиотека пуста",
            tryChangingLibraryFilter: "Попробуйте изменить критерии поиска",
            addFirstDocument: "Добавьте первый документ в свою библиотеку",
            createFirstDocumentBtn: "Добавить первый документ",
            backToProject: "Назад к проекту",
            project: "Проект",
            attachFiles: "Прикрепить файлы",
            fileDropZone: "Нажмите или перетащите файлы сюда",
            fileDropHint: "Поддержка: изображения, PDF, документы, геоданные (максимум 10MB)",
            uploadingFiles: "Загрузка файлов...",
            attachedFiles: "Прикрепленные файлы",
            filesCount: "файлов",
            geologicalLog: "Геологический лог",
            hideEditor: "Скрыть",
            openEditor: "Открыть редактор",
            logCreated: "Геологический лог создан",
            wellName: "Скважина",
            notSpecifiedWell: "Не указана",
            layersCount: "Слоев",
            editLog: "Редактировать",
            logSaved: "Геологический лог сохранен и будет прикреплен к заметке",
            saving: "Сохранение...",
            pleaseEnterTitle: "Пожалуйста, введите название заметки",
            errorCreatingNote: "Ошибка при создании заметки",
            fileTooLarge: "Файл {fileName} слишком большой. Максимум 10MB.",
            fileUploadError: "Ошибка загрузки файлов",
            mb: "МБ"
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
        tasks: {
            // Заголовки и навигация
            title: "Задачи",
            timeline: "Timeline задач",
            backToProject: "Назад к проекту",
            newTask: "Новая задача",
            // Статусы задач
            notStarted: "Не начата",
            inProgress: "В процессе",
            completed: "Завершена",
            // Приоритеты
            lowPriority: "🟢 Низкий",
            mediumPriority: "🟡 Средний",
            highPriority: "🔴 Высокий",
            criticalPriority: "🟣 Критический",
            low: "Низкий",
            medium: "Средний",
            high: "Высокий",
            critical: "Критический",
            // Карточка задачи
            assignee: "Исполнитель",
            dueDate: "Срок",
            overdue: "просрочено",
            description: "Описание",
            executor: "Исполнитель",
            startTask: "Начать",
            finishTask: "Завершить",
            created: "Создано",
            updated: "Обновлено",
            // Группы timeline
            today: "Сегодня",
            tomorrow: "Завтра",
            yesterday: "Вчера",
            overdueTasks: "Просрочено",
            noDeadline: "Без срока",
            // Фильтры и сортировка
            filtersAndSort: "Фильтры и сортировка",
            status: "Статус",
            allTasks: "Все задачи",
            notStartedTasks: "Не начатые",
            inProgressTasks: "В процессе",
            completedTasks: "Завершенные",
            sorting: "Сортировка",
            byDueDate: "По сроку выполнения",
            byPriority: "По приоритету",
            byCreatedDate: "По дате создания",
            // Статистика
            total: "Всего",
            totalTasks: "Всего задач",
            inProgressCount: "В процессе",
            completedCount: "Завершено",
            overdueCount: "Просрочено",
            // Модальное окно создания
            createTask: "Создать задачу",
            taskTitle: "Название задачи",
            taskTitleRequired: "Название задачи *",
            enterTaskTitle: "Введите название задачи",
            taskDescription: "Описание",
            taskDescriptionPlaceholder: "Описание задачи",
            selectAssignee: "Исполнитель",
            priority: "Приоритет",
            startDate: "Дата начала",
            dueDate: "Срок выполнения",
            taskStatus: "Статус",
            relatedLocation: "Связанная локация",
            noLocation: "Без локации",
            searchAssignee: "Поиск исполнителя...",
            noParticipants: "В проекте нет участников для назначения",
            assignedTo: "Исполнитель",
            taskWillBeAssigned: "Задача будет назначена этому пользователю",
            creating: "Создается...",
            createButton: "Создать задачу",
            cancel: "Отмена",
            // Пустые состояния
            noTasksFound: "Задач не найдено",
            createNewTask: "Создайте новую задачу или измените фильтры",
            // Информация о проекте
            projectCreated: "Создан",
            projectStart: "Начало",
            projectEnd: "Конец",
            // Сообщения
            notSpecified: "Не указано",
            invalidDate: "Некорректная дата",
            dateError: "Ошибка даты",
            loading: "Загрузка..."
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
            home: "Home",
            tickets: "Support"
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
            title: "Locations",
            map: "Map",
            addPoint: "Add Point",
            addLocation: "Add Location",
            addLocationPoint: "Add Location Point",
            selectedCoordinates: "Selected Coordinates",
            pointName: "Point Name",
            pointNamePlaceholder: "e.g., Sample Point 1",
            description: "Description",
            descriptionPlaceholder: "Description of this location...",
            coordinateFormat: "Coordinate Format",
            switchToDMS: "Switch to DMS",
            switchToDecimal: "Switch to Decimal",
            latitude: "Latitude",
            longitude: "Longitude",
            formatDMSExample: "Format: 41°17'28\"N or 41 17 28 N",
            formatDMSExampleLng: "Format: 69°14'26\"E or 69 14 26 E",
            cancel: "Cancel"
        },
        geologicalLog: {
            title: "Geological Log",
            exportPNG: "Export PNG",
            save: "Save",
            generalData: "General Data",
            wellName: "Well Name",
            wellNamePlaceholder: "# 123",
            location: "Location",
            locationPlaceholder: "Coordinates",
            elevation: "Elevation (m)",
            totalDepth: "Total Depth (m)",
            showGrid: "Show Grid",
            addLayer: "Add Layer",
            depthFrom: "Depth From (m)",
            depthTo: "Depth To (m)",
            lithology: "Lithology",
            grainSize: "Grain Size",
            description: "Description",
            descriptionPlaceholder: "Layer characteristics",
            fossils: "Fossils",
            fossilsPlaceholder: "If any",
            addLayerButton: "Add Layer",
            layers: "Layers",
            noLayers: "No layers added",
            deleteLayer: "Delete this layer?",
            legend: "Legend",
            warningTitle: "Important! Don't forget to save the log",
            warningText: "After creating or editing layers, be sure to click the",
            warningButton: "Save",
            warningFooter: "Without saving, all changes will be lost when closing the editor.",
            sandstone: "Sandstone",
            limestone: "Limestone",
            shale: "Shale",
            clay: "Clay",
            coal: "Coal",
            granite: "Granite",
            conglomerate: "Conglomerate",
            marl: "Marl",
            dolomite: "Dolomite",
            gypsum: "Gypsum",
            veryFine: "Very Fine",
            fine: "Fine",
            medium: "Medium",
            coarse: "Coarse",
            veryCoarse: "Very Coarse",
            enterDepth: "Please specify layer depth",
            depthError: "Depth 'To' must be greater than depth 'From'"
        },
        participantSelector: {
            participants: "Participants",
            selected: "selected",
            clearAll: "Clear All",
            searchPlaceholder: "Search participants...",
            noParticipantsFound: "Participants not found",
            noAvailableParticipants: "No available participants",
            found: "Found",
            of: "of",
            collapse: "Collapse"
        },
        projectPage: {
            tasks: "Tasks",
            manageTasks: "Task Management",
            view: "View",
            membersList: "Members list",
            actionHistory: "Action History",
            emptyHistory: "Action history is empty",
            addedNote: "Added note",
            updatedNote: "Updated note",
            deletedNote: "Deleted note",
            addedLocation: "Added location",
            createdProject: "Created project",
            changedStatus: "Changed status to",
            uploadedFile: "Uploaded file",
            files: "file(s)",
            defaultDate: "02/15/2025-04/15/2025"
        },
        // Projects
        projects: {
            title: "Projects",
            description: "Description",
            participants: "Participants",
            date: "Date",
            status: "Status",
            createNew: "Create Project",
            noProjects: "No Projects",
            openProject: "Open project",
            backToProjects: "Back to project",
            exportToPdf: "Export to PDF",
            statusActive: "Active",
            statusCompleted: "Completed",
            statusUpcoming: "Upcoming",
            statusNotStarted: "Not Started",
            notStarted: "Not Started",
            projectOptional: "Project (Optional)",
            projectTitle: "Project name",
            projectReport: "Project report",
            noProject: "No project",
            noUsersAvailable: "No users available",
            organization: "Organization",
            owner: "Owner",
            team: "Team",
            noDescription: "No description",
            createNewProject: "Create New Project",
            projectName: "Project Name",
            projectNameRequired: "Project Name *",
            enterProjectName: "Enter project name",
            description: "Description",
            projectDescription: "Project description and goals",
            startDate: "Start Date",
            endDate: "End Date",
            priority: "Priority",
            lowPriority: "🟢 Low",
            mediumPriority: "🟡 Medium",
            highPriority: "🔴 High",
            criticalPriority: "🟣 Critical",
            category: "Category",
            categoryPlaceholder: "e.g., Development, Marketing",
            budget: "Budget (optional)",
            budgetPlaceholder: "e.g., $100,000",
            projectParticipants: "Project Participants",
            searchParticipants: "Search participants by name, email or role...",
            creatorAutoAdded: "Project creator automatically becomes a participant",
            creating: "Creating...",
            createProject: "Create Project",
            cancel: "Cancel",
            openProject: "Open Project",
            start: "Start",
            finish: "Finish",
            completed: "Completed",
            participants: "Participants",
            critical: "Critical",
            high: "High",
            medium: "Medium",
            low: "Low",
            upcoming: "Upcoming",
            inProgress: "In Progress",
            completedColumn: "Completed",
            noProjects: "No Projects",
            totalProjects: "Total Projects",
            upcomingProjects: "Upcoming",
            inProgressProjects: "In Progress",
            completedProjects: "Completed",
            kanban: "Kanban",
            list: "List",
            noProjectsYet: "No projects yet",
            createFirstProject: "Create your first project to get started",
            createFirstProjectBtn: "Create First Project",
            noDescriptionProvided: "No description provided",
            createdDate: "Created",
            startDateLabel: "Start",
            endDateLabel: "End",
            statusLabel: "Status",
            open: "Open →",
            loadingProjects: "Loading projects...",
            notStarted: "Not Started",
            active: "Active",
            inProgress: "In Progress",
            completed: "Completed",
            upcoming: "Upcoming",
            invalidDate: "Invalid date",
            dateError: "Date error"
        },
        // Заметки
        notes: {
            title: "Notes",
            addNote: "Add note",
            noteTitle: "Note title",
            noteDescription: "Note description",
            linkToLocation: "Link to location (optional)",
            noLocation: "No location linked",
            enterTitle: "Enter note title...",
            enterDescription: "Enter note description...",
            listOfNotes: "List of notes",
            noNotes: "No notes",
            addLocationFirst: "First, add location points to anchor your notes.",
            createNote: "Create note",
            createNewNote: "Create new note",
            editNote: "Edit note",
            updateNote: "Update note",
            noteTitle: "Title",
            noteContent: "Content",
            category: "Category",
            categoryOptional: "Category (Optional)",
            selectCategory: "Select category...",
            enterNoteTitle: "Enter note title...",
            writeNoteContent: "Write note content here...",
            pleaseEnterTitle: "Please enter note title",
            pleaseEnterContent: "Please enter note content",
            created: "Created",
            lastUpdated: "Last updated",
            markedAsFavorite: "This note is marked as favorite",
            searchNotes: "Search notes...",
            allNotes: "All notes",
            recent: "Recent",
            favorites: "Favorites",
            totalNotes: "total notes",
            favoritesCount: "favorites",
            showing: "showing",
            noNotesFound: "No notes found",
            noNotesYet: "No notes yet",
            tryAdjusting: "Try adjusting search criteria or filter",
            createFirstNote: "Create your first note to get started",
            createYourFirstNote: "Create first note",
            noteCreatedSuccessfully: "Note created successfully!",
            errorCreatingNote: "Error creating note",
            errorUpdatingNote: "Error updating note. Please try again.",
            confirmDeleteNote: "Are you sure you want to delete this note?",
            errorDeletingNote: "Error deleting note. Please try again.",
            categories: {
                personal: "Personal",
                work: "Work",
                ideas: "Ideas",
                tasks: "Tasks",
                meetings: "Meetings",
                research: "Research",
                other: "Other"
            },
            knowledge: "Knowledge",
            notesTab: "Notes",
            libraryTab: "Library",
            newNote: "New Note",
            addToLibrary: "Add to Library",
            searchNotes: "Search notes...",
            searchLibrary: "Search in library...",
            allNotes: "All Notes",
            recent: "Recent",
            favorites: "Favorites",
            allTypes: "All Types",
            articles: "Articles",
            books: "Books",
            videos: "Videos",
            research: "Research",
            documents: "Documents",
            pdfs: "PDFs",
            images: "Images",
            other: "Other",
            totalDocuments: "documents",
            shown: "shown",
            noNotesFound: "Notes not found",
            noNotesYet: "No notes yet",
            tryChangingFilter: "Try changing search criteria",
            createFirstNote: "Create your first note",
            selectNote: "Select a note to view",
            removeFromFavorites: "Remove from favorites",
            addToFavorites: "Add to favorites",
            backToProject: "Back to Project",
            project: "Project",
            noteDetails: "Note Details",
            description: "Description",
            noDescription: "No description available",
            attachedFiles: "Attached Files",
            openFile: "Open",
            location: "Location",
            decimalCoordinates: "Decimal coordinates",
            dmsCoordinates: "Degrees/minutes/seconds",
            geologicalLog: "Geological Log",
            well: "Well",
            locationLabel: "Location",
            elevation: "Elevation",
            totalDepth: "Depth",
            layers: "Layers",
            depthFrom: "m -",
            depthTo: "m",
            grainSize: "Grain Size",
            fossils: "Fossils",
            downloadLog: "Download Log (PNG)",
            information: "Information",
            author: "Author",
            createdAt: "Created",
            locationInfo: "Location",
            filesCount: "file(s)",
            actions: "Actions",
            edit: "Edit",
            delete: "Delete",
            deleting: "Deleting...",
            confirmDelete: "Are you sure you want to delete this note? This action cannot be undone.",
            deleteError: "Error deleting note. Please try again.",
            mb: "MB",
            meters: "m",
            addDocument: "Add to Library",
            title: "Title",
            titleRequired: "Title *",
            documentTitlePlaceholder: "Document or article title",
            description: "Description",
            descriptionPlaceholder: "Brief description",
            type: "Type",
            article: "Article",
            document: "Document",
            book: "Book",
            researchType: "Research",
            video: "Video",
            pdf: "PDF",
            image: "Image",
            otherType: "Other",
            chooseMethod: "Choose method:",
            uploadFile: "Upload File",
            maxSize: "Max 10MB. File will be uploaded to Firebase Storage",
            orText: "or",
            addLink: "https://example.com - add link",
            tags: "Tags (comma separated)",
            tagsPlaceholder: "science, technology, research",
            preparingFile: "Preparing file...",
            uploadingToStorage: "Uploading to Storage...",
            gettingLink: "Getting link...",
            savingToDatabase: "Saving to database...",
            completed: "Completed!",
            uploading: "Uploading...",
            add: "Add",
            fileTooLarge: "File too large. Maximum size: 10MB",
            openFile: "Open File",
            openLink: "Open",
            added: "Added",
            deleteDocument: "Delete this document from library?",
            errorAddingDocument: "Error adding document",
            errorDeletingDocument: "Error deleting document",
            noDocuments: "No documents found",
            libraryEmpty: "Library is empty",
            tryChangingLibraryFilter: "Try changing search criteria",
            addFirstDocument: "Add first document to your library",
            createFirstDocumentBtn: "Add First Document",
            backToProject: "Back to Project",
            project: "Project",
            attachFiles: "Attach Files",
            fileDropZone: "Click or drag files here",
            fileDropHint: "Support: images, PDF, documents, geodata (max 10MB)",
            uploadingFiles: "Uploading files...",
            attachedFiles: "Attached Files",
            filesCount: "files",
            geologicalLog: "Geological Log",
            hideEditor: "Hide",
            openEditor: "Open Editor",
            logCreated: "Geological log created",
            wellName: "Well",
            notSpecifiedWell: "Not specified",
            layersCount: "Layers",
            editLog: "Edit",
            logSaved: "Geological log saved and will be attached to note",
            saving: "Saving...",
            pleaseEnterTitle: "Please enter note title",
            errorCreatingNote: "Error creating note",
            fileTooLarge: "File {fileName} is too large. Maximum 10MB.",
            fileUploadError: "File upload error",
            mb: "MB"
        },
        // Карта и местоположения
        map: {
            title: "Map",
            addPoint: "+ add point",
            locationPoints: "Location points",
            newPoint: "New point",
            clickToAdd: "Click to add location",
            loadingMap: "Loading map...",
            coordinates: "Coordinates",
            decimal: "Decimal",
            dms: "DMS",
            moreDetails: "More details",
            lat: "lat",
            lng: "lng"
        },
        tickets: {
            title: "Suggestions and Feedback",
            subtitle: "Submit your suggestion or report an issue",
            createTicket: "Create Ticket",
            newTicket: "New Suggestion",
            ticketTitle: "Title",
            enterTitle: "Enter title",
            type: "Type",
            priority: "Priority",
            description: "Description",
            enterDescription: "Describe your suggestion or issue in detail...",
            submit: "Submit",
            submitting: "Submitting...",
            myTickets: "My Tickets",
            allTickets: "All Tickets",
            noTickets: "No Tickets",
            noTicketsDescription: "Create your first ticket by clicking the button above",
            delete: "Delete",
            // Types
            suggestion: "Suggestion",
            bug: "Bug",
            feature: "Feature Request",
            question: "Question",
            other: "Other",
            // Priority
            lowPriority: "Low",
            mediumPriority: "Medium",
            highPriority: "High",
            criticalPriority: "Critical",
            // Status
            pending: "Pending",
            inProgress: "In Progress",
            resolved: "Resolved",
            rejected: "Rejected",
            // Messages
            fillAllFields: "Please fill in all required fields",
            ticketSubmitted: "Ticket submitted successfully!",
            submitError: "Error submitting ticket",
            confirmDelete: "Are you sure you want to delete this ticket?",
            ticketDeleted: "Ticket deleted",
            deleteError: "Error deleting ticket"
        },
        // Местоположения
        location: {
            addLocation: "add location",
            locationName: "Location name",
            locationDescription: "Location Description",
            enterName: "Enter point name...",
            enterDescription: "Enter point description...",
            coordinateFormat: "Coordinate format",
            latitude: "Latitude",
            longitude: "Longitude",
            enterLatitude: "Enter latitude...",
            enterLongitude: "Enter Longitude...",
            invalidCoordinates: "Invalid Coordinates",
            locationSaved: "Location saved!",
            fillRequiredFields: "Fill in the required fields"
        },
        // Настройки
        settings: {
            title: "Settings",
            profile: "Profile",
            security: "Security",
            organization: "Organization",
            appearance: "Appearance",
            // Профиль
            profileInfo: "Profile Information",
            name: "Name",
            email: "Email",
            enterName: " Enter your name",
            emailCantChange: "Email can't change",
            saveChanges: "Save changes",
            saving: "Saving...",
            profileUpdated: "Profile successfully updated!",
            profileUpdateError: "Error updating profile",
            // Security
            changePassword: "Change password",
            newPassword: "New password",
            confirmPassword: "Confirm new password",
            enterNewPassword: "Enter new password",
            confirmNewPassword: "Confirm new password",
            changing: "Changing...",
            changePasswordBtn: "Change password",
            passwordChanged: "Password successfully changed!",
            passwordsNotMatch: "New passwords do not match",
            passwordTooShort: "Password must be at least 6 characters",
            passwordChangeError: "Error changing password",
            logout: "Logout",
            logoutDescription: "Logout from this device",
            logoutBtn: "Logout",
            // Organization
            organizationInfo: "Organization Information",
            organizationName: "Organization Name",
            yourRole: "Your Role",
            organizationId: "Organization ID",
            aboutApp: "About App",
            version: "Version",
            developer: "Developer",
            year: "Year",
            // Appearance
            interfaceLanguage: "Interface Language",
            preview: "Preview",
            languageChanged: "Language changed! Refresh the page to apply changes.",
            geologicalProject: "Geological Project",
            sampleProjectPreview: "Sample Project Preview"
        },
        // Формат дат
        dateFormat: {
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            daysShort: [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ]
        },
        // Authentication
        auth: {
            login: "Login",
            register: "Register",
            logout: "Logout",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm Password",
            name: "Name",
            organization: "Organization",
            signIn: "Sign In",
            signUp: "Sign Up",
            forgotPassword: "Forgot Password?",
            resetPassword: "Reset Password",
            backToLogin: "Back to Login",
            enterEmail: "Enter email",
            enterPassword: "Enter password",
            enterName: "Enter name",
            enterOrganization: "Enter organization name",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            termsText: "By logging in, you accept our terms of service and privacy policy.",
            alreadyHaveAccount: "Already have an account?",
            dontHaveAccount: "Don't have an account?",
            loginError: "Login error",
            registerError: "Registration error",
            invalidCredentials: "Invalid login credentials",
            emailAlreadyExists: "A user with this email already exists",
            passwordTooWeak: "Password is too weak",
            loginSuccess: "Login successful",
            registerSuccess: "Registration successful"
        },
        // Forms and validation
        forms: {
            required: "Required field",
            invalidEmail: "Invalid email format",
            passwordMinLength: "Password must be at least 6 characters",
            passwordsNotMatch: "Passwords do not match",
            invalidFormat: "Invalid format",
            fieldTooShort: "Field is too short",
            fieldTooLong: "Field is too long",
            selectOption: "Select an option",
            chooseFile: "Choose a file",
            uploadFailed: "Upload failed",
            saveSuccess: "Saved successfully",
            saveError: "Save error",
            deleteConfirm: "Are you sure you want to delete?",
            deleteSuccess: "Deleted successfully",
            deleteError: "Delete error"
        },
        // Files
        files: {
            title: "Files",
            uploadFile: "Upload File",
            uploadImage: "Upload Image",
            selectFile: "Select File",
            fileName: "File Name",
            fileSize: "File Size",
            uploadDate: "Upload Date",
            downloadFile: "Download File",
            deleteFile: "Delete File",
            noFiles: "No files",
            uploadSuccess: "File uploaded successfully",
            uploadError: "File upload error",
            fileTooLarge: "File is too large",
            fileTypeNotAllowed: "File type not supported",
            attachments: "Attachments",
            attachFile: "Attach File",
            removeFile: "Remove File",
            filesAttached: "files attached"
        },
        tasks: {
            title: "Tasks",
            timeline: "Tasks Timeline",
            backToProject: "Back to Project",
            newTask: "New Task",
            notStarted: "Not Started",
            inProgress: "In Progress",
            completed: "Completed",
            lowPriority: "🟢 Low",
            mediumPriority: "🟡 Medium",
            highPriority: "🔴 High",
            criticalPriority: "🟣 Critical",
            low: "Low",
            medium: "Medium",
            high: "High",
            critical: "Critical",
            assignee: "Assignee",
            dueDate: "Due Date",
            overdue: "overdue",
            description: "Description",
            executor: "Executor",
            startTask: "Start",
            finishTask: "Finish",
            created: "Created",
            updated: "Updated",
            today: "Today",
            tomorrow: "Tomorrow",
            yesterday: "Yesterday",
            overdueTasks: "Overdue",
            noDeadline: "No Deadline",
            filtersAndSort: "Filters and Sorting",
            status: "Status",
            allTasks: "All Tasks",
            notStartedTasks: "Not Started",
            inProgressTasks: "In Progress",
            completedTasks: "Completed",
            sorting: "Sorting",
            byDueDate: "By Due Date",
            byPriority: "By Priority",
            byCreatedDate: "By Created Date",
            total: "Total",
            totalTasks: "Total Tasks",
            inProgressCount: "In Progress",
            completedCount: "Completed",
            overdueCount: "Overdue",
            createTask: "Create Task",
            taskTitle: "Task Title",
            taskTitleRequired: "Task Title *",
            enterTaskTitle: "Enter task title",
            taskDescription: "Description",
            taskDescriptionPlaceholder: "Task description",
            selectAssignee: "Assignee",
            priority: "Priority",
            startDate: "Start Date",
            dueDate: "Due Date",
            taskStatus: "Status",
            relatedLocation: "Related Location",
            noLocation: "No Location",
            searchAssignee: "Search assignee...",
            noParticipants: "No participants in project to assign",
            assignedTo: "Assignee",
            taskWillBeAssigned: "Task will be assigned to this user",
            creating: "Creating...",
            createButton: "Create Task",
            cancel: "Cancel",
            noTasksFound: "No tasks found",
            createNewTask: "Create new task or change filters",
            projectCreated: "Created",
            projectStart: "Start",
            projectEnd: "End",
            notSpecified: "Not specified",
            invalidDate: "Invalid date",
            dateError: "Date error",
            loading: "Loading..."
        },
        // Attachments
        attachments: "Attachments",
        attachFile: "Attach File",
        removeFile: "Remove File",
        filesAttached: "files attached"
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
            home: "Bosh sahifa",
            tickets: "Yordam so'rovlari"
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
        projectPage: {
            tasks: "Vazifalar",
            manageTasks: "Vazifalarni boshqarish",
            view: "Ko'rish",
            membersList: "A'zolar ro'yxati",
            actionHistory: "Harakatlar Tarixi",
            emptyHistory: "Harakatlar tarixi bo'sh",
            addedNote: "Eslatma qo'shdi",
            updatedNote: "Eslatmani yangiladi",
            deletedNote: "Eslatmani o'chirdi",
            addedLocation: "Nuqta qo'shdi",
            createdProject: "Loyiha yaratdi",
            changedStatus: "Holatni o'zgartirdi",
            uploadedFile: "Fayl yukladi",
            files: "fayl",
            defaultDate: "15.02.2025-15.04.2025"
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
            noDescription: "Tavsif mavjud emas",
            createNewProject: "Yangi Loyiha Yaratish",
            projectName: "Loyiha Nomi",
            projectNameRequired: "Loyiha Nomi *",
            enterProjectName: "Loyiha nomini kiriting",
            description: "Tavsif",
            projectDescription: "Loyiha tavsifi va maqsadlari",
            startDate: "Boshlanish Sanasi",
            endDate: "Tugash Sanasi",
            priority: "Ustuvorlik",
            lowPriority: "🟢 Past",
            mediumPriority: "🟡 O'rta",
            highPriority: "🔴 Yuqori",
            criticalPriority: "🟣 Kritik",
            category: "Kategoriya",
            categoryPlaceholder: "Masalan: Rivojlantirish, Marketing",
            budget: "Byudjet (ixtiyoriy)",
            budgetPlaceholder: "Masalan: 100,000 so'm",
            projectParticipants: "Loyiha Ishtirokchilari",
            searchParticipants: "Ism, email yoki rol bo'yicha qidirish...",
            creatorAutoAdded: "Loyiha yaratuvchisi avtomatik ravishda ishtirokchi bo'ladi",
            creating: "Yaratilmoqda...",
            createProject: "Loyiha Yaratish",
            cancel: "Bekor qilish",
            openProject: "Loyihani Ochish",
            start: "Boshlash",
            finish: "Yakunlash",
            completed: "Yakunlangan",
            participants: "Ishtirokchilar",
            critical: "Kritik",
            high: "Yuqori",
            medium: "O'rta",
            low: "Past",
            upcoming: "Kelgusi",
            inProgress: "Jarayonda",
            completedColumn: "Yakunlangan",
            noProjects: "Loyihalar yo'q",
            totalProjects: "Jami Loyihalar",
            upcomingProjects: "Kelgusi",
            inProgressProjects: "Jarayonda",
            completedProjects: "Yakunlangan",
            kanban: "Kanban",
            list: "Ro'yxat",
            noProjectsYet: "Hali loyihalar yo'q",
            createFirstProject: "Boshlash uchun birinchi loyihangizni yarating",
            createFirstProjectBtn: "Birinchi Loyihani Yaratish",
            noDescriptionProvided: "Tavsif ko'rsatilmagan",
            createdDate: "Yaratilgan",
            startDateLabel: "Boshlanish",
            endDateLabel: "Tugash",
            statusLabel: "Holat",
            open: "Ochish →",
            loadingProjects: "Loyihalar yuklanmoqda...",
            notStarted: "Boshlanmagan",
            active: "Faol",
            inProgress: "Jarayonda",
            completed: "Yakunlangan",
            upcoming: "Kelgusi",
            invalidDate: "Noto'g'ri sana",
            dateError: "Sana xatosi"
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
            },
            knowledge: "Bilimlar",
            notesTab: "Eslatmalar",
            libraryTab: "Kutubxona",
            newNote: "Yangi Eslatma",
            addToLibrary: "Kutubxonaga Qo'shish",
            searchNotes: "Eslatmalarni qidirish...",
            searchLibrary: "Kutubxonada qidirish...",
            allNotes: "Barcha Eslatmalar",
            recent: "So'nggilar",
            favorites: "Sevimlilar",
            allTypes: "Barcha Turlar",
            articles: "Maqolalar",
            books: "Kitoblar",
            videos: "Videolar",
            research: "Tadqiqotlar",
            documents: "Hujjatlar",
            pdfs: "PDF",
            images: "Rasmlar",
            other: "Boshqa",
            totalDocuments: "hujjatlar",
            shown: "ko'rsatildi",
            noNotesFound: "Eslatmalar topilmadi",
            noNotesYet: "Hali eslatmalar yo'q",
            tryChangingFilter: "Qidiruv mezonlarini o'zgartirib ko'ring",
            createFirstNote: "Birinchi eslatmangizni yarating",
            selectNote: "Ko'rish uchun eslatma tanlang",
            removeFromFavorites: "Sevimlilardan olib tashlash",
            addToFavorites: "Sevimlilarga qo'shish",
            backToProject: "Loyihaga Qaytish",
            project: "Loyiha",
            noteDetails: "Eslatma Tafsilotlari",
            description: "Tavsif",
            noDescription: "Tavsif mavjud emas",
            attachedFiles: "Biriktirilgan Fayllar",
            openFile: "Ochish",
            location: "Joylashuv",
            decimalCoordinates: "O'nlik koordinatalar",
            dmsCoordinates: "Gradus/daqiqa/soniya",
            geologicalLog: "Geologik Log",
            well: "Quduq",
            locationLabel: "Joylashuv",
            elevation: "Balandlik",
            totalDepth: "Chuqurlik",
            layers: "Qatlamlar",
            depthFrom: "m -",
            depthTo: "m",
            grainSize: "Donador hajm",
            fossils: "Qazilmalar",
            downloadLog: "Logni Yuklab Olish (PNG)",
            information: "Ma'lumot",
            author: "Muallif",
            createdAt: "Yaratilgan",
            locationInfo: "Joylashuv",
            filesCount: "fayl",
            actions: "Harakatlar",
            edit: "Tahrirlash",
            delete: "O'chirish",
            deleting: "O'chirilmoqda...",
            confirmDelete: "Bu eslatmani o'chirishga ishonchingiz komilmi? Bu harakatni bekor qilib bo'lmaydi.",
            deleteError: "Eslatmani o'chirishda xatolik. Iltimos, qaytadan urinib ko'ring.",
            mb: "MB",
            meters: "m",
            addDocument: "Kutubxonaga Qo'shish",
            title: "Sarlavha",
            titleRequired: "Sarlavha *",
            documentTitlePlaceholder: "Hujjat yoki maqola sarlavhasi",
            description: "Tavsif",
            descriptionPlaceholder: "Qisqacha tavsif",
            type: "Turi",
            article: "Maqola",
            document: "Hujjat",
            book: "Kitob",
            researchType: "Tadqiqot",
            video: "Video",
            pdf: "PDF",
            image: "Rasm",
            otherType: "Boshqa",
            chooseMethod: "Usulni tanlang:",
            uploadFile: "Fayl Yuklash",
            maxSize: "Maksimal 10MB. Fayl Firebase Storage ga yuklanadi",
            orText: "yoki",
            addLink: "https://example.com - havola qo'shish",
            tags: "Teglar (vergul bilan)",
            tagsPlaceholder: "fan, texnologiya, tadqiqot",
            preparingFile: "Fayl tayyorlanmoqda...",
            uploadingToStorage: "Storage ga yuklanmoqda...",
            gettingLink: "Havola olinmoqda...",
            savingToDatabase: "Bazaga saqlanmoqda...",
            completed: "Bajarildi!",
            uploading: "Yuklanmoqda...",
            add: "Qo'shish",
            fileTooLarge: "Fayl juda katta. Maksimal hajm: 10MB",
            openFile: "Faylni Ochish",
            openLink: "Ochish",
            added: "Qo'shildi",
            deleteDocument: "Bu hujjatni kutubxonadan o'chirish?",
            errorAddingDocument: "Hujjat qo'shishda xatolik",
            errorDeletingDocument: "Hujjatni o'chirishda xatolik",
            noDocuments: "Hujjatlar topilmadi",
            libraryEmpty: "Kutubxona bo'sh",
            tryChangingLibraryFilter: "Qidiruv mezonlarini o'zgartirib ko'ring",
            addFirstDocument: "Kutubxonaga birinchi hujjatni qo'shing",
            createFirstDocumentBtn: "Birinchi Hujjatni Qo'shish",
            backToProject: "Loyihaga Qaytish",
            project: "Loyiha",
            attachFiles: "Fayllarni Biriktirish",
            fileDropZone: "Bosing yoki fayllarni bu yerga sudrab keling",
            fileDropHint: "Qo'llab-quvvatlash: rasmlar, PDF, hujjatlar, geodata (maksimal 10MB)",
            uploadingFiles: "Fayllar yuklanmoqda...",
            attachedFiles: "Biriktirilgan Fayllar",
            filesCount: "fayl",
            geologicalLog: "Geologik Log",
            hideEditor: "Yashirish",
            openEditor: "Muharrirni Ochish",
            logCreated: "Geologik log yaratildi",
            wellName: "Quduq",
            notSpecifiedWell: "Ko'rsatilmagan",
            layersCount: "Qatlamlar",
            editLog: "Tahrirlash",
            logSaved: "Geologik log saqlandi va eslatmaga biriktiriladi",
            saving: "Saqlanmoqda...",
            pleaseEnterTitle: "Iltimos, eslatma sarlavhasini kiriting",
            errorCreatingNote: "Eslatma yaratishda xatolik",
            fileTooLarge: "{fileName} fayli juda katta. Maksimal 10MB.",
            fileUploadError: "Fayllarni yuklashda xatolik",
            mb: "MB"
        },
        geologicalLog: {
            title: "Geologik Log",
            exportPNG: "PNG Eksport",
            save: "Saqlash",
            generalData: "Umumiy Ma'lumotlar",
            wellName: "Quduq Nomi",
            wellNamePlaceholder: "№ 123",
            location: "Joylashuv",
            locationPlaceholder: "Koordinatalar",
            elevation: "Balandlik (m)",
            totalDepth: "Umumiy Chuqurlik (m)",
            showGrid: "Setkani Ko'rsatish",
            addLayer: "Qatlam Qo'shish",
            depthFrom: "Chuqurlik Dan (m)",
            depthTo: "Chuqurlik Gacha (m)",
            lithology: "Litologiya",
            grainSize: "Donador Hajm",
            description: "Tavsif",
            descriptionPlaceholder: "Qatlam tavsifi",
            fossils: "Qazilmalar",
            fossilsPlaceholder: "Agar bo'lsa",
            addLayerButton: "Qatlam Qo'shish",
            layers: "Qatlamlar",
            noLayers: "Qatlamlar qo'shilmagan",
            deleteLayer: "Bu qatlamni o'chirish?",
            legend: "Shartli belgilar",
            warningTitle: "Muhim! Logni saqlashni unutmang",
            warningText: "Qatlamlarni yaratgandan yoki tahrirlashdan keyin albatta tugmani bosing",
            warningButton: "Saqlash",
            warningFooter: "Saqlashsiz barcha o'zgarishlar muharrirni yopganda yo'qoladi.",
            sandstone: "Qumtosh",
            limestone: "Ohaktosh",
            shale: "Slanets",
            clay: "Loy",
            coal: "Ko'mir",
            granite: "Granit",
            conglomerate: "Konglomerat",
            marl: "Mergel",
            dolomite: "Dolomit",
            gypsum: "Gips",
            veryFine: "Juda Mayda",
            fine: "Mayda",
            medium: "O'rta",
            coarse: "Yirik",
            veryCoarse: "Juda Yirik",
            enterDepth: "Iltimos, qatlam chuqurligini ko'rsating",
            depthError: "Chuqurlik 'Gacha' chuqurlik 'Dan' dan katta bo'lishi kerak"
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
        participantSelector: {
            participants: "Ishtirokchilar",
            selected: "tanlangan",
            clearAll: "Barchasini Tozalash",
            searchPlaceholder: "Ishtirokchilarni qidirish...",
            noParticipantsFound: "Ishtirokchilar topilmadi",
            noAvailableParticipants: "Mavjud ishtirokchilar yo'q",
            found: "Topildi",
            of: "dan",
            collapse: "Yig'ish"
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
        tickets: {
            title: "Takliflar va Fikr-mulohazalar",
            subtitle: "Taklifingizni yuboring yoki muammo haqida xabar bering",
            createTicket: "Tiket Yaratish",
            newTicket: "Yangi Taklif",
            ticketTitle: "Sarlavha",
            enterTitle: "Sarlavhani kiriting",
            type: "Turi",
            priority: "Muhimlik",
            description: "Tavsif",
            enterDescription: "Taklifingiz yoki muammoni batafsil tasvirlab bering...",
            submit: "Yuborish",
            submitting: "Yuborilmoqda...",
            myTickets: "Mening Tiketlarim",
            allTickets: "Barcha Tiketlar",
            noTickets: "Tiketlar yo'q",
            noTicketsDescription: "Yuqoridagi tugmani bosib birinchi tiketni yarating",
            delete: "O'chirish",
            // Types
            suggestion: "Taklif",
            bug: "Xato",
            feature: "Yangi Funksiya",
            question: "Savol",
            other: "Boshqa",
            // Priority
            lowPriority: "Past",
            mediumPriority: "O'rta",
            highPriority: "Yuqori",
            criticalPriority: "Kritik",
            // Status
            pending: "Kutilmoqda",
            inProgress: "Jarayonda",
            resolved: "Hal qilindi",
            rejected: "Rad etildi",
            // Messages
            fillAllFields: "Iltimos, barcha majburiy maydonlarni to'ldiring",
            ticketSubmitted: "Tiket muvaffaqiyatli yuborildi!",
            submitError: "Tiketni yuborishda xato",
            confirmDelete: "Haqiqatan ham bu tiketni o'chirmoqchimisiz?",
            ticketDeleted: "Tiket o'chirildi",
            deleteError: "Tiketni o'chirishda xato"
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
        tasks: {
            title: "Vazifalar",
            timeline: "Vazifalar Timeline",
            backToProject: "Loyihaga Qaytish",
            newTask: "Yangi Vazifa",
            notStarted: "Boshlanmagan",
            inProgress: "Jarayonda",
            completed: "Yakunlangan",
            lowPriority: "🟢 Past",
            mediumPriority: "🟡 O'rta",
            highPriority: "🔴 Yuqori",
            criticalPriority: "🟣 Kritik",
            low: "Past",
            medium: "O'rta",
            high: "Yuqori",
            critical: "Kritik",
            assignee: "Ijrochi",
            dueDate: "Muddat",
            overdue: "muddati o'tgan",
            description: "Tavsif",
            executor: "Ijrochi",
            startTask: "Boshlash",
            finishTask: "Yakunlash",
            created: "Yaratilgan",
            updated: "Yangilangan",
            today: "Bugun",
            tomorrow: "Ertaga",
            yesterday: "Kecha",
            overdueTasks: "Muddati o'tgan",
            noDeadline: "Muddatsiz",
            filtersAndSort: "Filtrlar va Saralash",
            status: "Holat",
            allTasks: "Barcha Vazifalar",
            notStartedTasks: "Boshlanmagan",
            inProgressTasks: "Jarayonda",
            completedTasks: "Yakunlangan",
            sorting: "Saralash",
            byDueDate: "Muddat bo'yicha",
            byPriority: "Ustuvorlik bo'yicha",
            byCreatedDate: "Yaratilgan sana bo'yicha",
            total: "Jami",
            totalTasks: "Jami Vazifalar",
            inProgressCount: "Jarayonda",
            completedCount: "Yakunlangan",
            overdueCount: "Muddati o'tgan",
            createTask: "Vazifa Yaratish",
            taskTitle: "Vazifa Nomi",
            taskTitleRequired: "Vazifa Nomi *",
            enterTaskTitle: "Vazifa nomini kiriting",
            taskDescription: "Tavsif",
            taskDescriptionPlaceholder: "Vazifa tavsifi",
            selectAssignee: "Ijrochi",
            priority: "Ustuvorlik",
            startDate: "Boshlanish Sanasi",
            dueDate: "Bajarish Muddati",
            taskStatus: "Holat",
            relatedLocation: "Bog'langan Joylashuv",
            noLocation: "Joylashuvsiz",
            searchAssignee: "Ijrochini qidirish...",
            noParticipants: "Loyihada tayinlash uchun ishtirokchilar yo'q",
            assignedTo: "Ijrochi",
            taskWillBeAssigned: "Vazifa bu foydalanuvchiga tayinlanadi",
            creating: "Yaratilmoqda...",
            createButton: "Vazifa Yaratish",
            cancel: "Bekor qilish",
            noTasksFound: "Vazifalar topilmadi",
            createNewTask: "Yangi vazifa yarating yoki filtrlarni o'zgartiring",
            projectCreated: "Yaratilgan",
            projectStart: "Boshlanish",
            projectEnd: "Tugash",
            notSpecified: "Ko'rsatilmagan",
            invalidDate: "Noto'g'ri sana",
            dateError: "Sana xatosi",
            loading: "Yuklanmoqda..."
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
"[project]/app/components/sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Sidebar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const projectsBtn = (e)=>{
        e.preventDefault();
        console.log("Projects button clicked");
        router.push("/pages/projects");
    };
    const newsBtn = (e)=>{
        e.preventDefault();
        console.log("News button clicked");
        router.push("/pages/news");
    };
    const meetingsBtn = (e)=>{
        e.preventDefault();
        console.log("Meetings button clicked");
        router.push("/pages/meetings");
    };
    const notesBtn = (e)=>{
        e.preventDefault();
        console.log("Notes button clicked");
        router.push("/pages/notes");
    };
    const ticketsBtn = (e)=>{
        e.preventDefault();
        console.log("Tickets button clicked");
        router.push("/pages/tickets");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-2 w-56 h-screen bg-green-800 text-white flex flex-col justify-between rounded-lg shadow-lg m-2 shrink-0 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 text-2xl font-semibold",
                        children: "Geo-Note"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-4 mt-4 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: projectsBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.projects')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: newsBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.news')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: meetingsBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.meetings')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: notesBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.notes')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/sidebar.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sidebar.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-xs text-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-4 mt-4 px-4 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ticketsBtn,
                            className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                            children: t('nav.tickets')
                        }, void 0, false, {
                            fileName: "[project]/app/components/sidebar.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Made by abdu1axad and dantajd"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Copyright 2025"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sidebar.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/sidebar.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "LMhaL12xe8UQaAnKN7/VwufQ8ko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t('navbar.determining'));
    const [showLanguageMenu, setShowLanguageMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Получаем координаты при загрузке
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition({
                    "Navbar.useEffect": (position)=>{
                        const { latitude, longitude } = position.coords;
                        setCoords(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
                    }
                }["Navbar.useEffect"], {
                    "Navbar.useEffect": (error)=>{
                        console.error(error);
                        setCoords(t('navbar.geolocationError'));
                    }
                }["Navbar.useEffect"]);
            } else {
                setCoords(t('navbar.geolocationUnavailable'));
            }
        }
    }["Navbar.useEffect"], [
        t
    ]);
    const handleLanguageChange = (newLanguage)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["changeLanguage"])(newLanguage);
        setShowLanguageMenu(false);
    };
    const getLanguageFlag = ()=>{
        switch(language){
            case 'ru':
                return '🇷🇺';
            case 'en':
                return '🇺🇸';
            case 'uz':
                return '🇺🇿';
            default:
                return '🌐';
        }
    };
    const getLanguageName = ()=>{
        switch(language){
            case 'ru':
                return 'RU';
            case 'en':
                return 'EN';
            case 'uz':
                return 'UZ';
            default:
                return 'EN';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between bg-green-900 text-white p-6 rounded-xl shadow-md m-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined text-lg",
                        children: "location_on"
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: coords
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/navbar.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined text-lg cursor-pointer hover:text-green-300 transition",
                        onClick: ()=>router.push("/pages/homeScreen"),
                        children: "home"
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined text-lg cursor-pointer hover:text-green-300 transition",
                        onClick: ()=>router.push("/pages/settings"),
                        children: "settings"
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowLanguageMenu(!showLanguageMenu),
                                className: "flex items-center space-x-1 cursor-pointer hover:text-green-300 transition text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: getLanguageName()
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/navbar.js",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-4 h-4 transition-transform ${showLanguageMenu ? 'rotate-180' : ''}`,
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/navbar.js",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/navbar.js",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/navbar.js",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            showLanguageMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 z-10",
                                        onClick: ()=>setShowLanguageMenu(false)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/navbar.js",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-20 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleLanguageChange('ru'),
                                                className: `w-full px-4 py-3 text-left hover:bg-green-50 transition-colors flex items-center space-x-2 ${language === 'ru' ? 'bg-green-50' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-800 font-medium",
                                                        children: "Русский"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/navbar.js",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    language === 'ru' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 text-green-600 ml-auto",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/navbar.js",
                                                            lineNumber: 114,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/navbar.js",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/navbar.js",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleLanguageChange('en'),
                                                className: `w-full px-4 py-3 text-left hover:bg-green-50 transition-colors flex items-center space-x-2 ${language === 'en' ? 'bg-green-50' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-800 font-medium",
                                                        children: "English"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/navbar.js",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    language === 'en' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 text-green-600 ml-auto",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/navbar.js",
                                                            lineNumber: 128,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/navbar.js",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/navbar.js",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleLanguageChange('uz'),
                                                className: `w-full px-4 py-3 text-left hover:bg-green-50 transition-colors flex items-center space-x-2 ${language === 'uz' ? 'bg-green-50' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-800 font-medium",
                                                        children: "O'zbekcha"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/navbar.js",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this),
                                                    language === 'uz' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 text-green-600 ml-auto",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/navbar.js",
                                                            lineNumber: 142,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/navbar.js",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/navbar.js",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/navbar.js",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/navbar.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/navbar.js",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/navbar.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Navbar, "t9LbZtpgbVycka83n6+6YOFwY+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/participantSelector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ParticipantSelector = ({ users = [], selectedParticipants = [], onParticipantsChange, excludeUserIds = [], maxHeight = "200px", placeholder = "", label = "", showSelectedCount = true, allowMultiple = true, className = "" })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Используем локализованные значения по умолчанию, если пропсы не переданы
    const effectivePlaceholder = placeholder || t('participantSelector.searchPlaceholder');
    const effectiveLabel = label || t('participantSelector.participants');
    // Фильтрация пользователей по поиску
    const filteredUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticipantSelector.useMemo[filteredUsers]": ()=>{
            return users.filter({
                "ParticipantSelector.useMemo[filteredUsers]": (user)=>!excludeUserIds.includes(user.id)
            }["ParticipantSelector.useMemo[filteredUsers]"]).filter({
                "ParticipantSelector.useMemo[filteredUsers]": (user)=>{
                    if (!searchQuery.trim()) return true;
                    const query = searchQuery.toLowerCase();
                    const name = (user.name || '').toLowerCase();
                    const email = (user.email || '').toLowerCase();
                    const role = (user.role || '').toLowerCase();
                    return name.includes(query) || email.includes(query) || role.includes(query);
                }
            }["ParticipantSelector.useMemo[filteredUsers]"]).sort({
                "ParticipantSelector.useMemo[filteredUsers]": (a, b)=>{
                    // Сначала показываем выбранных участников
                    const aSelected = selectedParticipants.includes(a.id);
                    const bSelected = selectedParticipants.includes(b.id);
                    if (aSelected && !bSelected) return -1;
                    if (!aSelected && bSelected) return 1;
                    // Затем сортируем по имени
                    const aName = a.name || a.email || '';
                    const bName = b.name || b.email || '';
                    return aName.localeCompare(bName);
                }
            }["ParticipantSelector.useMemo[filteredUsers]"]);
        }
    }["ParticipantSelector.useMemo[filteredUsers]"], [
        users,
        searchQuery,
        excludeUserIds,
        selectedParticipants
    ]);
    const handleParticipantToggle = (userId)=>{
        if (!allowMultiple) {
            // Режим одиночного выбора
            onParticipantsChange([
                userId
            ]);
            setIsExpanded(false);
            return;
        }
        // Режим множественного выбора
        const newParticipants = selectedParticipants.includes(userId) ? selectedParticipants.filter((id)=>id !== userId) : [
            ...selectedParticipants,
            userId
        ];
        onParticipantsChange(newParticipants);
    };
    const handleRemoveParticipant = (userId)=>{
        const newParticipants = selectedParticipants.filter((id)=>id !== userId);
        onParticipantsChange(newParticipants);
    };
    const clearSearch = ()=>{
        setSearchQuery('');
    };
    const clearAllParticipants = ()=>{
        onParticipantsChange([]);
    };
    // Получить информацию о выбранных участниках
    const selectedUsers = users.filter((user)=>selectedParticipants.includes(user.id));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-3 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700",
                        children: [
                            effectiveLabel,
                            showSelectedCount && selectedParticipants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 text-blue-600 font-normal",
                                children: [
                                    "(",
                                    selectedParticipants.length,
                                    " ",
                                    t('participantSelector.selected'),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/participantSelector.js",
                                lineNumber: 95,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/participantSelector.js",
                        lineNumber: 92,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedParticipants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearAllParticipants,
                        className: "text-sm text-red-600 hover:text-red-800",
                        children: t('participantSelector.clearAll')
                    }, void 0, false, {
                        fileName: "[project]/app/components/participantSelector.js",
                        lineNumber: 101,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/participantSelector.js",
                lineNumber: 91,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            onFocus: ()=>setIsExpanded(true),
                            placeholder: effectivePlaceholder,
                            className: "w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/app/components/participantSelector.js",
                            lineNumber: 114,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-5 w-5 text-gray-400",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/participantSelector.js",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/participantSelector.js",
                                lineNumber: 123,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/participantSelector.js",
                            lineNumber: 122,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: clearSearch,
                            className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-5 w-5 text-gray-400 hover:text-gray-600",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/participantSelector.js",
                                    lineNumber: 134,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/participantSelector.js",
                                lineNumber: 133,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/participantSelector.js",
                            lineNumber: 128,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/participantSelector.js",
                    lineNumber: 113,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/participantSelector.js",
                lineNumber: 112,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            selectedUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: selectedUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                children: [
                                    user.name || user.email,
                                    user.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-blue-600 ml-1",
                                        children: [
                                            "(",
                                            user.role,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/participantSelector.js",
                                        lineNumber: 152,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/participantSelector.js",
                                lineNumber: 149,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleRemoveParticipant(user.id),
                                className: "text-blue-600 hover:text-blue-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/participantSelector.js",
                                        lineNumber: 161,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/participantSelector.js",
                                    lineNumber: 160,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/participantSelector.js",
                                lineNumber: 155,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, user.id, true, {
                        fileName: "[project]/app/components/participantSelector.js",
                        lineNumber: 145,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/participantSelector.js",
                lineNumber: 143,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            (isExpanded || searchQuery) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10",
                    style: {
                        maxHeight
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto p-2",
                            style: {
                                maxHeight
                            },
                            children: filteredUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 text-sm text-gray-500 text-center",
                                children: searchQuery ? t('participantSelector.noParticipantsFound') : t('participantSelector.noAvailableParticipants')
                            }, void 0, false, {
                                fileName: "[project]/app/components/participantSelector.js",
                                lineNumber: 178,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: filteredUsers.map((user)=>{
                                    const isSelected = selectedParticipants.includes(user.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleParticipantToggle(user.id),
                                        className: `flex items-center p-2 rounded-md cursor-pointer transition-colors ${isSelected ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: allowMultiple ? "checkbox" : "radio",
                                                checked: isSelected,
                                                onChange: ()=>{},
                                                className: "mr-3 h-4 w-4 text-blue-600 rounded border-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/participantSelector.js",
                                                lineNumber: 198,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-gray-900 truncate",
                                                                    children: user.name || user.email || user.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/participantSelector.js",
                                                                    lineNumber: 207,
                                                                    columnNumber: 61
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                user.email && user.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 truncate",
                                                                    children: user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/participantSelector.js",
                                                                    lineNumber: 211,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/participantSelector.js",
                                                            lineNumber: 206,
                                                            columnNumber: 57
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        user.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full",
                                                            children: user.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/participantSelector.js",
                                                            lineNumber: 217,
                                                            columnNumber: 61
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/participantSelector.js",
                                                    lineNumber: 205,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/participantSelector.js",
                                                lineNumber: 204,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "ml-2 h-4 w-4 text-blue-600",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/participantSelector.js",
                                                    lineNumber: 225,
                                                    columnNumber: 57
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/participantSelector.js",
                                                lineNumber: 224,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, user.id, true, {
                                        fileName: "[project]/app/components/participantSelector.js",
                                        lineNumber: 189,
                                        columnNumber: 45
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/components/participantSelector.js",
                                lineNumber: 185,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/participantSelector.js",
                            lineNumber: 176,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsExpanded(false),
                                className: "w-full text-sm text-gray-600 hover:text-gray-800 py-1",
                                children: t('participantSelector.collapse')
                            }, void 0, false, {
                                fileName: "[project]/app/components/participantSelector.js",
                                lineNumber: 237,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/participantSelector.js",
                            lineNumber: 236,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/participantSelector.js",
                    lineNumber: 172,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/participantSelector.js",
                lineNumber: 171,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-500",
                children: [
                    t('participantSelector.found'),
                    ": ",
                    filteredUsers.length,
                    " ",
                    t('participantSelector.of'),
                    " ",
                    users.filter((u)=>!excludeUserIds.includes(u.id)).length
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/participantSelector.js",
                lineNumber: 251,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            (isExpanded || searchQuery) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0",
                onClick: ()=>{
                    setIsExpanded(false);
                    setSearchQuery('');
                }
            }, void 0, false, {
                fileName: "[project]/app/components/participantSelector.js",
                lineNumber: 258,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/participantSelector.js",
        lineNumber: 89,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParticipantSelector, "6s6PDJJwKOUuzfCbALQUqjWMdAs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = ParticipantSelector;
const __TURBOPACK__default__export__ = ParticipantSelector;
var _c;
__turbopack_context__.k.register(_c, "ParticipantSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/CreateMeetingModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$participantSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/participantSelector.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CreateMeetingModal = ({ isOpen, onClose, onSuccess, orgId, projectId = null })=>{
    _s();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["app"]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [orgName, setOrgName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        date: '',
        location: '',
        createdBy: '',
        projectId: projectId || '',
        participants: [],
        description: '',
        status: 'scheduled',
        type: 'regular'
    });
    const fetchUsers = async ()=>{
        try {
            const usersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}/users`);
            const usersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(usersRef);
            const usersList = usersSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setUsers(usersList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const fetchProjects = async ()=>{
        try {
            const projectsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}/projects`);
            const projectsSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(projectsRef);
            const projectsList = projectsSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setProjects(projectsList);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };
    const fetchOrganizationName = async ()=>{
        try {
            const orgDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}`));
            if (orgDoc.exists()) {
                setOrgName(orgDoc.data().name || 'Organization');
            }
        } catch (error) {
            console.error('Error fetching organization:', error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateMeetingModal.useEffect": ()=>{
            if (isOpen && orgId) {
                fetchUsers();
                fetchProjects();
                fetchOrganizationName();
                const currentUser = auth.currentUser;
                if (currentUser) {
                    setFormData({
                        "CreateMeetingModal.useEffect": (prev)=>({
                                ...prev,
                                createdBy: currentUser.uid,
                                projectId: projectId || ''
                            })
                    }["CreateMeetingModal.useEffect"]);
                }
            }
        }
    }["CreateMeetingModal.useEffect"], [
        isOpen,
        orgId,
        projectId
    ]);
    // Prevent body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateMeetingModal.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            // Cleanup on unmount
            return ({
                "CreateMeetingModal.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["CreateMeetingModal.useEffect"];
        }
    }["CreateMeetingModal.useEffect"], [
        isOpen
    ]);
    const handleParticipantsChange = (participants)=>{
        setFormData((prev)=>({
                ...prev,
                participants
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            // Структура данных согласно новой схеме БД
            const meetingData = {
                title: formData.title,
                datetime: new Date(formData.date).toISOString(),
                location: formData.location || '',
                owner: formData.createdBy,
                projectId: formData.projectId || null,
                participants: formData.participants,
                notes: formData.description || '',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            // Создание встречи в подколлекции организации
            const meetingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}/meetings`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(meetingsRef, meetingData);
            onSuccess();
            onClose();
            // Сброс формы
            setFormData({
                title: '',
                date: '',
                location: '',
                createdBy: auth.currentUser?.uid || '',
                projectId: projectId || '',
                participants: [],
                description: ''
            });
        } catch (error) {
            console.error('Error creating meeting:', error);
            alert('Error creating meeting. Please try again.');
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto",
        onClick: (e)=>{
            // Close modal when clicking on backdrop
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-6 w-full max-w-md max-h-full overflow-y-auto my-auto mx-auto shadow-xl",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-gray-900 ",
                            children: t('meetings.scheduleMeeting')
                        }, void 0, false, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 159,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 165,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/CreateMeetingModal.js",
                                lineNumber: 164,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 160,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/CreateMeetingModal.js",
                    lineNumber: 158,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: t('projects.organization')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: orgName,
                                    disabled: true,
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 172,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: [
                                        t('meetings.meetingTitle'),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CreateMeetingModal.js",
                                            lineNumber: 186,
                                            columnNumber: 58
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: formData.title,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                title: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900",
                                    placeholder: t('meetings.meetingTitle')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 188,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 184,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: [
                                        t('meetings.startDate'),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CreateMeetingModal.js",
                                            lineNumber: 200,
                                            columnNumber: 55
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 199,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "datetime-local",
                                    required: true,
                                    value: formData.date,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                date: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 202,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 198,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: t('projects.projectOptional')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 212,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.projectId || '',
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                projectId: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: t('projects.noProject')
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CreateMeetingModal.js",
                                            lineNumber: 220,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: project.id,
                                                children: project.title
                                            }, project.id, false, {
                                                fileName: "[project]/app/components/CreateMeetingModal.js",
                                                lineNumber: 222,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 215,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 211,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: t('meetings.location')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 230,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.location,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                location: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900",
                                    placeholder: t('meetings.enterMeetingLocation')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 233,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 229,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$participantSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            users: users,
                            selectedParticipants: formData.participants,
                            onParticipantsChange: handleParticipantsChange,
                            excludeUserIds: formData.createdBy ? [
                                formData.createdBy
                            ] : [],
                            label: t('meetings.participants'),
                            placeholder: "Поиск участников по имени, email или роли...",
                            maxHeight: "200px",
                            showSelectedCount: true,
                            className: "mb-4"
                        }, void 0, false, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 243,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: t('meetings.notes')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 256,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.description,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                description: e.target.value
                                            })),
                                    rows: 3,
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900",
                                    placeholder: t('meetings.addMeetingNotes')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 255,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900",
                                    children: t('meetings.cancel')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 269,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                                    children: t('meetings.createMeeting')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 276,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 268,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/CreateMeetingModal.js",
                    lineNumber: 170,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/CreateMeetingModal.js",
            lineNumber: 154,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/CreateMeetingModal.js",
        lineNumber: 145,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CreateMeetingModal, "wsLlO98vKHL4q+DO0tHVa/38flY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = CreateMeetingModal;
const __TURBOPACK__default__export__ = CreateMeetingModal;
var _c;
__turbopack_context__.k.register(_c, "CreateMeetingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/utils/calendarUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadICSFile",
    ()=>downloadICSFile,
    "generateCalendarLinks",
    ()=>generateCalendarLinks
]);
const generateCalendarLinks = (meeting)=>{
    // Форматирование даты для календарей
    const formatDateForCalendar = (dateString, timeString = '00:00')=>{
        try {
            const date = new Date(dateString);
            const [hours, minutes] = timeString.split(':');
            date.setHours(parseInt(hours) || 0, parseInt(minutes) || 0, 0, 0);
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        } catch (error) {
            console.error('Error formatting date:', error);
            const now = new Date();
            return now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        }
    };
    const startDateTime = formatDateForCalendar(meeting.date, meeting.time || '00:00');
    // Добавляем 1 час для времени окончания
    const endDate = new Date(meeting.date);
    const [hours, minutes] = (meeting.time || '00:00').split(':');
    endDate.setHours(parseInt(hours) + 1 || 1, parseInt(minutes) || 0, 0, 0);
    const endDateTime = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    // Формируем описание
    let description = meeting.description || 'Team meeting';
    if (meeting.conferenceUrl) {
        description += `\n\nСсылка на конференцию: ${meeting.conferenceUrl}`;
    }
    // Google Calendar
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
    googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.append('text', meeting.title);
    googleCalendarUrl.searchParams.append('dates', `${startDateTime}/${endDateTime}`);
    googleCalendarUrl.searchParams.append('details', description);
    googleCalendarUrl.searchParams.append('location', meeting.location || 'Online');
    // Outlook Calendar
    const outlookCalendarUrl = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
    outlookCalendarUrl.searchParams.append('subject', meeting.title);
    outlookCalendarUrl.searchParams.append('body', description);
    outlookCalendarUrl.searchParams.append('startdt', startDateTime);
    outlookCalendarUrl.searchParams.append('enddt', endDateTime);
    outlookCalendarUrl.searchParams.append('location', meeting.location || 'Online');
    return {
        google: googleCalendarUrl.toString(),
        outlook: outlookCalendarUrl.toString()
    };
};
const downloadICSFile = (meeting)=>{
    try {
        const formatDateForICS = (dateString, timeString = '00:00')=>{
            const date = new Date(dateString);
            const [hours, minutes] = timeString.split(':');
            date.setHours(parseInt(hours) || 0, parseInt(minutes) || 0, 0, 0);
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        };
        const startDateTime = formatDateForICS(meeting.date, meeting.time || '00:00');
        const endDate = new Date(meeting.date);
        const [hours, minutes] = (meeting.time || '00:00').split(':');
        endDate.setHours(parseInt(hours) + 1 || 1, parseInt(minutes) || 0, 0, 0);
        const endDateTime = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        let description = meeting.description || 'Team meeting';
        if (meeting.conferenceUrl) {
            description += `\\nСсылка на конференцию: ${meeting.conferenceUrl}`;
        }
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//GeoNote//Meetings//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${meeting.id}@geonote.app
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDateTime}
DTEND:${endDateTime}
SUMMARY:${meeting.title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
LOCATION:${meeting.location || 'Online'}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Напоминание: ${meeting.title}
END:VALARM
END:VEVENT
END:VCALENDAR`;
        const blob = new Blob([
            icsContent
        ], {
            type: 'text/calendar;charset=utf-8'
        });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `meeting-${meeting.id}.ics`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error creating ICS file:', error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/CalendarDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$calendarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/calendarUtils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CalendarDropdown({ meeting }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCalendarAction = (type)=>{
        // Добавляем отладочную информацию
        console.log('Meeting object:', meeting);
        console.log('Meeting date:', meeting.date);
        console.log('Date type:', typeof meeting.date);
        // Проверяем, есть ли валидная дата
        if (!meeting.date) {
            alert('Ошибка: дата встречи не указана');
            return;
        }
        try {
            const testDate = new Date(meeting.date);
            if (isNaN(testDate.getTime())) {
                alert('Ошибка: неверный формат даты встречи');
                return;
            }
            const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$calendarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateCalendarLinks"])(meeting);
            switch(type){
                case 'google':
                    window.open(links.google, '_blank');
                    break;
                case 'outlook':
                    window.open(links.outlook, '_blank');
                    break;
                case 'apple':
                case 'ics':
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$calendarUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadICSFile"])(meeting);
                    break;
            }
            setIsOpen(false);
            // Показываем уведомление
            if ("TURBOPACK compile-time truthy", 1) {
                alert(t('meetings.calendarAdded'));
            }
        } catch (error) {
            console.error('Calendar action error:', error);
            alert('Ошибка при добавлении в календарь');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "inline-flex items-center px-3 py-2 border border-gray-300     rounded-md shadow-sm bg-white text-sm font-medium    text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        }, void 0, false, {
                            fileName: "[project]/app/components/CalendarDropdown.js",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/CalendarDropdown.js",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    t('meetings.addToCalendar'),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 ml-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/CalendarDropdown.js",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/CalendarDropdown.js",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CalendarDropdown.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleCalendarAction('google'),
                            className: "flex items-center w-full px-4 py-2 text-sm text-gray-700   hover:bg-gray-100 dark:hover:bg-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 mr-3",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "#4285f4",
                                            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CalendarDropdown.js",
                                            lineNumber: 83,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "#34a853",
                                            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CalendarDropdown.js",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "#fbbc05",
                                            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CalendarDropdown.js",
                                            lineNumber: 85,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "#ea4335",
                                            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/CalendarDropdown.js",
                                            lineNumber: 86,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/CalendarDropdown.js",
                                    lineNumber: 82,
                                    columnNumber: 29
                                }, this),
                                t('meetings.googleCalendar')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CalendarDropdown.js",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleCalendarAction('outlook'),
                            className: "flex items-center w-full px-4 py-2 text-sm text-gray-700   hover:bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 mr-3",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "#0078d4",
                                        d: "M12 0C8.5 0 5.7 2.8 5.7 6.3v11.4C5.7 21.2 8.5 24 12 24s6.3-2.8 6.3-6.3V6.3C18.3 2.8 15.5 0 12 0zm3.6 13.8h-3.2v4.7c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-4.7H7.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7H11v-2.8H7.8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7H11V5.5c0-.4.3-.7.7-.7s.7.3.7.7v2.8h3.2c.4 0 .7.3.7.7s-.3.7-.7.7h-3.2v2.8h3.2c.4 0 .7.3.7.7s-.3.7-.7.7z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CalendarDropdown.js",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CalendarDropdown.js",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this),
                                t('meetings.outlookCalendar')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CalendarDropdown.js",
                            lineNumber: 91,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleCalendarAction('apple'),
                            className: "flex items-center w-full px-4 py-2 text-sm text-gray-700   hover:bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 mr-3",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CalendarDropdown.js",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CalendarDropdown.js",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this),
                                t('meetings.appleCalendar')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CalendarDropdown.js",
                            lineNumber: 102,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-100"
                        }, void 0, false, {
                            fileName: "[project]/app/components/CalendarDropdown.js",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleCalendarAction('ics'),
                            className: "flex items-center w-full px-4 py-2 text-sm text-gray-700    hover:bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 mr-3",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CalendarDropdown.js",
                                        lineNumber: 121,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CalendarDropdown.js",
                                    lineNumber: 120,
                                    columnNumber: 29
                                }, this),
                                t('meetings.downloadICS')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CalendarDropdown.js",
                            lineNumber: 115,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/CalendarDropdown.js",
                    lineNumber: 76,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/CalendarDropdown.js",
                lineNumber: 75,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CalendarDropdown.js",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
_s(CalendarDropdown, "AyImUznpi7h/bWCSQXFYsFbxm/c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = CalendarDropdown;
var _c;
__turbopack_context__.k.register(_c, "CalendarDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/MeetingListItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CalendarDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CalendarDropdown.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MeetingListItem = ({ meeting, users })=>{
    _s();
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    // Получаем локаль для форматирования даты в зависимости от языка
    const getLocale = ()=>{
        switch(language){
            case 'ru':
                return 'ru-RU';
            case 'en':
                return 'en-GB';
            case 'uz':
                return 'uz-UZ';
            default:
                return 'en-GB';
        }
    };
    const formatDateTime = (datetime)=>{
        if (!datetime) return '';
        try {
            const date = new Date(datetime);
            return {
                datetime: date.toLocaleDateString(getLocale(), {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }),
                time: date.toLocaleTimeString(getLocale(), {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
        } catch (error) {
            return {
                datetime: '',
                time: ''
            };
        }
    };
    const { datetime, time } = formatDateTime(meeting.datetime);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white  rounded-lg border-2 border-gray-300  mb-4 hover:shadow-md transition-shadow",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-gray-800",
                                    children: meeting.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MeetingListItem.js",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-600",
                                            children: datetime
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MeetingListItem.js",
                                            lineNumber: 47,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-blue-600",
                                            children: time
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MeetingListItem.js",
                                            lineNumber: 48,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/MeetingListItem.js",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 44,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CalendarDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            meeting: meeting
                        }, void 0, false, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 51,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 43,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                meeting.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 flex items-center gap-2 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MeetingListItem.js",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MeetingListItem.js",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 56,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: meeting.location
                        }, void 0, false, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 60,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 55,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                meeting.owner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: [
                                t('meetings.organizer'),
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 66,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        users?.[meeting.owner] || meeting.owner
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 65,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                meeting.participants && meeting.participants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-gray-700",
                            children: [
                                t('meetings.participants'),
                                ": "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 72,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-600",
                            children: meeting.participants.map((p)=>users?.[p] || p).join(', ')
                        }, void 0, false, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 73,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 71,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                meeting.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-sm text-gray-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "line-clamp-2",
                        children: meeting.notes
                    }, void 0, false, {
                        fileName: "[project]/app/components/MeetingListItem.js",
                        lineNumber: 81,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 80,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MeetingListItem.js",
            lineNumber: 42,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/MeetingListItem.js",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MeetingListItem, "M/RT+9U6Jt1oluj0Cb60Rr+7kPU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = MeetingListItem;
const __TURBOPACK__default__export__ = MeetingListItem;
var _c;
__turbopack_context__.k.register(_c, "MeetingListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/pages/meetings/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Meetings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CreateMeetingModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CreateMeetingModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MeetingListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MeetingListItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$participantSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/participantSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CalendarDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CalendarDropdown.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
// Функция для генерации ссылки на конференцию
const generateConferenceUrl = (meetingTitle, orgId, meetingId)=>{
    const roomName = `${orgId}_${meetingTitle.replace(/[^a-zA-Z0-9]/g, '_')}_${meetingId}`;
    return `https://meet.jit.si/${roomName}`;
};
// Функция для отправки уведомлений участникам
const sendMeetingNotifications = async (meeting, orgId, db)=>{
    try {
        for (const participantId of meeting.participants || []){
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, `organizations/${orgId}/users/${participantId}/notifications`), {
                type: 'meeting_started',
                meetingId: meeting.id,
                meetingTitle: meeting.title,
                conferenceUrl: meeting.conferenceUrl,
                createdAt: new Date().toISOString(),
                read: false,
                message: `Началась встреча: ${meeting.title}`
            });
        }
    } catch (error) {
        console.error('Error sending notifications:', error);
    }
};
// Обновленный компонент для мгновенной встречи
const QuickMeetingModal = ({ isOpen, onClose, onSubmit, orgId })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [meetingData, setMeetingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        participants: []
    });
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickMeetingModal.useEffect": ()=>{
            if (isOpen && orgId) {
                fetchUsers();
                const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])();
                setCurrentUser(auth.currentUser);
            }
        }
    }["QuickMeetingModal.useEffect"], [
        isOpen,
        orgId
    ]);
    const fetchUsers = async ()=>{
        try {
            const usersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}/users`));
            const usersList = usersSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setUsers(usersList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!meetingData.title.trim()) return;
        setLoading(true);
        try {
            await onSubmit(meetingData);
            setMeetingData({
                title: '',
                description: '',
                participants: []
            });
        } catch (error) {
            console.error('Error creating quick meeting:', error);
        } finally{
            setLoading(false);
        }
    };
    const handleParticipantsChange = (participants)=>{
        setMeetingData((prev)=>({
                ...prev,
                participants
            }));
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: t('meetings.instantMeeting')
                        }, void 0, false, {
                            fileName: "[project]/app/pages/meetings/page.js",
                            lineNumber: 106,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 111,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/pages/meetings/page.js",
                            lineNumber: 107,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pages/meetings/page.js",
                    lineNumber: 105,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: [
                                        t('meetings.meetingTopic'),
                                        " *"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: meetingData.title,
                                    onChange: (e)=>setMeetingData((prev)=>({
                                                ...prev,
                                                title: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: t('meetings.enterMeetingTopic')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pages/meetings/page.js",
                            lineNumber: 118,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: t('meetings.description')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: meetingData.description,
                                    onChange: (e)=>setMeetingData((prev)=>({
                                                ...prev,
                                                description: e.target.value
                                            })),
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    rows: "3",
                                    placeholder: t('meetings.briefDescription')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pages/meetings/page.js",
                            lineNumber: 132,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$participantSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            users: users,
                            selectedParticipants: meetingData.participants,
                            onParticipantsChange: handleParticipantsChange,
                            excludeUserIds: currentUser ? [
                                currentUser.uid
                            ] : [],
                            label: t('meetings.participantsLabel'),
                            placeholder: t('meetings.searchParticipants'),
                            maxHeight: "250px",
                            showSelectedCount: true
                        }, void 0, false, {
                            fileName: "[project]/app/pages/meetings/page.js",
                            lineNumber: 145,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !meetingData.title.trim() || loading,
                                    className: "flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2",
                                    children: loading ? t('meetings.starting') : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/meetings/page.js",
                                                    lineNumber: 165,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 164,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            t('meetings.startConference')
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    disabled: loading,
                                    className: "px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 transition-colors",
                                    children: t('cancel')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 171,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pages/meetings/page.js",
                            lineNumber: 156,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pages/meetings/page.js",
                    lineNumber: 117,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/pages/meetings/page.js",
            lineNumber: 104,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/pages/meetings/page.js",
        lineNumber: 103,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(QuickMeetingModal, "3XkDstQdb7USVNQtbYk3mJnLmIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = QuickMeetingModal;
// Обновленный компонент карточки встречи
const EnhancedMeetingListItem = ({ meeting, users, onMeetingUpdate })=>{
    _s1();
    const [isUpdating, setIsUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const formatDate = (timestamp)=>{
        if (!timestamp) return '';
        try {
            let date;
            if (timestamp.seconds) {
                date = new Date(timestamp.seconds * 1000);
            } else if (typeof timestamp === 'string' || timestamp instanceof String) {
                date = new Date(timestamp);
            } else {
                date = timestamp;
            }
            if (isNaN(date.getTime())) return '';
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        } catch (error) {
            console.error('Error formatting date:', error);
            return '';
        }
    };
    const getStatusColor = (status)=>{
        switch(status?.toLowerCase()){
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'in_progress':
                return 'bg-blue-100 text-blue-800';
            case 'scheduled':
            case 'upcoming':
            case null:
            case undefined:
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getStatusText = (status)=>{
        switch(status?.toLowerCase()){
            case 'completed':
                return t('meetings.completed');
            case 'in_progress':
                return t('meetings.inProgress');
            case 'scheduled':
            case 'upcoming':
            case null:
            case undefined:
                return t('meetings.scheduled');
            case 'cancelled':
                return t('meetings.cancelled');
            default:
                return t('meetings.scheduled');
        }
    };
    const handleJoinConference = ()=>{
        if (meeting.conferenceUrl) {
            window.open(meeting.conferenceUrl, '_blank');
        } else {
            alert(t('meetings.conferenceUrlUnavailable'));
        }
    };
    const handleMarkCompleted = async ()=>{
        setIsUpdating(true);
        try {
            await onMeetingUpdate(meeting.id, {
                status: 'completed',
                completedAt: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error marking meeting as completed:', error);
            alert(t('meetings.errorUpdating'));
        } finally{
            setIsUpdating(false);
        }
    };
    const handleStartMeeting = async ()=>{
        setIsUpdating(true);
        try {
            if (meeting.type === 'instant' && meeting.conferenceUrl) {
                await onMeetingUpdate(meeting.id, {
                    status: 'in_progress',
                    startedAt: new Date().toISOString()
                });
                window.open(meeting.conferenceUrl, '_blank');
            } else {
                const conferenceUrl = generateConferenceUrl(meeting.title, meeting.orgId, meeting.id);
                await onMeetingUpdate(meeting.id, {
                    status: 'in_progress',
                    startedAt: new Date().toISOString(),
                    conferenceUrl: conferenceUrl
                });
                window.open(conferenceUrl, '_blank');
            }
        } catch (error) {
            console.error('Error starting meeting:', error);
            alert(t('meetings.errorStarting'));
        } finally{
            setIsUpdating(false);
        }
    };
    const handleCancelMeeting = async ()=>{
        if (window.confirm(t('meetings.cancelMeetingConfirm'))) {
            setIsUpdating(true);
            try {
                await onMeetingUpdate(meeting.id, {
                    status: 'cancelled',
                    cancelledAt: new Date().toISOString()
                });
            } catch (error) {
                console.error('Error cancelling meeting:', error);
                alert(t('meetings.errorCancelling'));
            } finally{
                setIsUpdating(false);
            }
        }
    };
    const normalizedStatus = meeting.status?.toLowerCase() || 'scheduled';
    const isCompleted = normalizedStatus === 'completed';
    const isInProgress = normalizedStatus === 'in_progress';
    const isScheduled = normalizedStatus === 'scheduled' || normalizedStatus === 'upcoming' || !meeting.status || normalizedStatus === null;
    const isCancelled = normalizedStatus === 'cancelled';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-lg p-6 mb-4 hover:shadow-md transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-gray-900",
                                children: meeting.title
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 330,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`,
                                children: getStatusText(meeting.status)
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 331,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            meeting.conferenceUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800",
                                children: t('meetings.videoConference')
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 335,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 329,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    (isScheduled || isInProgress) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CalendarDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        meeting: {
                            ...meeting,
                            date: meeting.datetime || new Date().toISOString()
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 343,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 328,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 text-sm mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            t('meetings.meetingDate'),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 354,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ' ',
                                    formatDate(meeting.datetime) || t('meetings.noDate'),
                                    meeting.time && ` ${meeting.time}`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 353,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            meeting.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            t('meetings.location'),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 360,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    meeting.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 359,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            meeting.completedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            t('meetings.finishedAt'),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 365,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    formatDate(meeting.completedAt)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 364,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            meeting.startedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            t('meetings.startedAt'),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 370,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    formatDate(meeting.startedAt)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 369,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 352,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    meeting.participants && meeting.participants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [
                                    t('meetings.participants'),
                                    ": "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 378,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mt-1",
                                children: meeting.participants.map((participantId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs",
                                        children: users[participantId] || participantId
                                    }, participantId, false, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 381,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 379,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 377,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 351,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center text-green-600 text-sm font-medium",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M5 13l4 4L19 7"
                        }, void 0, false, {
                            fileName: "[project]/app/pages/meetings/page.js",
                            lineNumber: 397,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 396,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    t('meetings.completed')
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 395,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : isCancelled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center text-red-600 text-sm font-medium",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 mr-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/app/pages/meetings/page.js",
                            lineNumber: 404,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 403,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    t('meetings.cancelled')
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 402,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    isScheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStartMeeting,
                        disabled: isUpdating,
                        className: "px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 418,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 417,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            isUpdating ? '...' : t('meetings.start')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 412,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    isInProgress && meeting.conferenceUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleJoinConference,
                        className: "px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 430,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 429,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            t('meetings.join')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 425,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleMarkCompleted,
                        disabled: isUpdating,
                        className: "px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M5 13l4 4L19 7"
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/meetings/page.js",
                                    lineNumber: 443,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 442,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            isUpdating ? '...' : t('meetings.conducted')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 437,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCancelMeeting,
                        disabled: isUpdating,
                        className: "px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors",
                        children: isUpdating ? '...' : t('meetings.cancel')
                    }, void 0, false, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 449,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 409,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/pages/meetings/page.js",
        lineNumber: 326,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(EnhancedMeetingListItem, "aIka7DnLqLmrC2eUGo0owaErs5s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c1 = EnhancedMeetingListItem;
function Meetings() {
    _s2();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["app"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [meetings, setMeetings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isQuickMeetingModalOpen, setIsQuickMeetingModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [orgId, setOrgId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const getCurrentUserOrg = async (userId)=>{
        try {
            const organizationsSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'organizations'));
            for (const orgDoc of organizationsSnapshot.docs){
                const userInOrgDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgDoc.id}/users/${userId}`));
                if (userInOrgDoc.exists()) {
                    console.log('User found in organization:', orgDoc.id);
                    return orgDoc.id;
                }
            }
            console.log('User not found in any organization');
            return null;
        } catch (error) {
            console.error('Error fetching user organization:', error);
            return null;
        }
    };
    const fetchUsers = async (organizationId)=>{
        try {
            const usersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${organizationId}/users`));
            const usersMap = {};
            usersSnapshot.docs.forEach((doc)=>{
                usersMap[doc.id] = doc.data().name || doc.data().email;
            });
            setUsers(usersMap);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const fetchMeetings = async (organizationId, userId)=>{
        try {
            const meetingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${organizationId}/meetings`);
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(meetingsRef);
            console.log(`Found ${querySnapshot.docs.length} total meetings in organization`);
            const meetingsList = querySnapshot.docs.map((doc)=>{
                const data = doc.data();
                console.log('Meeting data:', doc.id, data);
                return {
                    id: doc.id,
                    orgId: organizationId,
                    ...data
                };
            }).filter((meeting)=>{
                // Показываем встречи где пользователь:
                // 1. Является организатором (owner/createdBy)
                const isOwner = meeting.owner === userId || meeting.createdBy === userId;
                // 2. Есть в списке участников (participants)
                const isParticipant = meeting.participants?.includes(userId);
                console.log(`Meeting "${meeting.title}": isOwner=${isOwner}, isParticipant=${isParticipant}`);
                return isOwner || isParticipant;
            }).sort((a, b)=>{
                const dateA = new Date(a.date?.seconds ? a.date.seconds * 1000 : a.date || 0);
                const dateB = new Date(b.date?.seconds ? b.date.seconds * 1000 : b.date || 0);
                return dateB - dateA;
            });
            console.log(`Filtered ${meetingsList.length} meetings for user ${userId}`);
            setMeetings(meetingsList);
        } catch (error) {
            console.error('Error fetching meetings:', error);
        } finally{
            setLoading(false);
        }
    };
    const handleMeetingUpdate = async (meetingId, updateData)=>{
        try {
            const meetingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}/meetings/${meetingId}`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(meetingRef, {
                ...updateData,
                updatedAt: new Date().toISOString()
            });
            await fetchMeetings(orgId, currentUser.uid);
        } catch (error) {
            console.error('Error updating meeting:', error);
            throw error;
        }
    };
    const handleQuickMeeting = async (meetingData)=>{
        try {
            const tempId = Date.now().toString();
            const conferenceUrl = generateConferenceUrl(meetingData.title, orgId, tempId);
            const newMeeting = {
                ...meetingData,
                date: new Date().toISOString(),
                status: 'in_progress',
                type: 'instant',
                conferenceUrl: conferenceUrl,
                createdAt: new Date().toISOString(),
                createdBy: currentUser.uid,
                startedAt: new Date().toISOString()
            };
            const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}/meetings`), newMeeting);
            const finalConferenceUrl = generateConferenceUrl(meetingData.title, orgId, docRef.id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
                conferenceUrl: finalConferenceUrl
            });
            window.open(finalConferenceUrl, '_blank');
            await sendMeetingNotifications({
                ...newMeeting,
                id: docRef.id,
                conferenceUrl: finalConferenceUrl
            }, orgId, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
            await fetchMeetings(orgId, currentUser.uid);
            setIsQuickMeetingModalOpen(false);
        } catch (error) {
            console.error('Error creating quick meeting:', error);
            throw error;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Meetings.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(auth, {
                "Meetings.useEffect.unsubscribe": async (user)=>{
                    if (user) {
                        setCurrentUser(user);
                        const userOrgId = await getCurrentUserOrg(user.uid);
                        if (userOrgId) {
                            setOrgId(userOrgId);
                            await fetchUsers(userOrgId);
                            await fetchMeetings(userOrgId, user.uid);
                        } else {
                            console.error('User is not assigned to any organization');
                            setLoading(false);
                        }
                    } else {
                        router.push('/auth/login');
                    }
                }
            }["Meetings.useEffect.unsubscribe"]);
            return ({
                "Meetings.useEffect": ()=>unsubscribe()
            })["Meetings.useEffect"];
        }
    }["Meetings.useEffect"], []);
    const handleSuccess = ()=>{
        if (orgId && currentUser) {
            fetchMeetings(orgId, currentUser.uid);
        }
    };
    const filteredMeetings = meetings.filter((meeting)=>{
        if (filter === 'all') return true;
        const normalizedStatus = meeting.status?.toLowerCase() || 'scheduled';
        if (filter === 'scheduled') {
            return normalizedStatus === 'scheduled' || normalizedStatus === 'upcoming' || !meeting.status || normalizedStatus === null;
        }
        return normalizedStatus === filter;
    });
    const stats = {
        total: meetings.length,
        scheduled: meetings.filter((m)=>{
            const status = m.status?.toLowerCase() || 'scheduled';
            return status === 'scheduled' || status === 'upcoming' || !m.status || status === null;
        }).length,
        in_progress: meetings.filter((m)=>m.status?.toLowerCase() === 'in_progress').length,
        completed: meetings.filter((m)=>m.status?.toLowerCase() === 'completed').length,
        cancelled: meetings.filter((m)=>m.status?.toLowerCase() === 'cancelled').length
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                orgId: orgId
            }, void 0, false, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 663,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        orgId: orgId
                    }, void 0, false, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 665,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-8 overflow-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: t('meetings.title')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 668,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsQuickMeetingModalOpen(true),
                                                className: "px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/pages/meetings/page.js",
                                                            lineNumber: 676,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pages/meetings/page.js",
                                                        lineNumber: 675,
                                                        columnNumber: 33
                                                    }, this),
                                                    t('meetings.instantMeeting')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 670,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsModalOpen(true),
                                                className: "px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M12 4v16m8-8H4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/pages/meetings/page.js",
                                                            lineNumber: 686,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pages/meetings/page.js",
                                                        lineNumber: 685,
                                                        columnNumber: 33
                                                    }, this),
                                                    t('meetings.scheduleMeeting')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 680,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 669,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 667,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-5 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: stats.total
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 695,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: t('meetings.totalMeetings')
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 696,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 694,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-yellow-600",
                                                children: stats.scheduled
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 699,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: t('meetings.scheduled')
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 700,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 698,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-blue-600",
                                                children: stats.in_progress
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 703,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: t('meetings.inProgress')
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 704,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 702,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-green-600",
                                                children: stats.completed
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 707,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: t('meetings.completed')
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 708,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 706,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg shadow p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-red-600",
                                                children: stats.cancelled
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 711,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: t('meetings.cancelled')
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 712,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 710,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 693,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter('all'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                        children: [
                                            t('meetings.allMeetings'),
                                            " (",
                                            stats.total,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 717,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter('scheduled'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'scheduled' ? 'bg-yellow-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                        children: [
                                            t('meetings.scheduled'),
                                            " (",
                                            stats.scheduled,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 727,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter('in_progress'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'in_progress' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                        children: [
                                            t('meetings.inProgress'),
                                            " (",
                                            stats.in_progress,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 737,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter('completed'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'completed' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                        children: [
                                            t('meetings.completed'),
                                            " (",
                                            stats.completed,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 747,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter('cancelled'),
                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'cancelled' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`,
                                        children: [
                                            t('meetings.cancelled'),
                                            " (",
                                            stats.cancelled,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 757,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 716,
                                columnNumber: 21
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-700",
                                children: [
                                    t('meetings.loading'),
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 770,
                                columnNumber: 25
                            }, this) : filteredMeetings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl mb-4",
                                        children: "📹"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 773,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-gray-900 mb-2",
                                        children: filter === 'all' ? t('meetings.noMeetingsYet') : filter === 'scheduled' ? t('meetings.noScheduledMeetings') : filter === 'in_progress' ? t('meetings.noCurrentMeetings') : filter === 'completed' ? t('meetings.noCompletedMeetings') : t('meetings.noCancelledMeetings')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 774,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-4",
                                        children: filter === 'all' ? t('meetings.scheduleOrStartMeeting') : t('meetings.tryChangeFilter')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 781,
                                        columnNumber: 29
                                    }, this),
                                    filter === 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsQuickMeetingModalOpen(true),
                                                className: "bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/pages/meetings/page.js",
                                                            lineNumber: 794,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pages/meetings/page.js",
                                                        lineNumber: 793,
                                                        columnNumber: 41
                                                    }, this),
                                                    t('meetings.instantMeeting')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 789,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsModalOpen(true),
                                                className: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",
                                                children: t('meetings.scheduleMeeting')
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 798,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 788,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 772,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl",
                                children: filteredMeetings.map((meeting)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedMeetingListItem, {
                                        meeting: meeting,
                                        users: users,
                                        onMeetingUpdate: handleMeetingUpdate
                                    }, meeting.id, false, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 810,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 808,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 666,
                        columnNumber: 17
                    }, this),
                    orgId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CreateMeetingModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                isOpen: isModalOpen,
                                onClose: ()=>setIsModalOpen(false),
                                onSuccess: handleSuccess,
                                orgId: orgId
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 823,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickMeetingModal, {
                                isOpen: isQuickMeetingModalOpen,
                                onClose: ()=>setIsQuickMeetingModalOpen(false),
                                onSubmit: handleQuickMeeting,
                                orgId: orgId
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 830,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 664,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pages/meetings/page.js",
        lineNumber: 662,
        columnNumber: 9
    }, this);
}
_s2(Meetings, "WWgL98pqMlEAwuLhiKFtcZ9QPZM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c2 = Meetings;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "QuickMeetingModal");
__turbopack_context__.k.register(_c1, "EnhancedMeetingListItem");
__turbopack_context__.k.register(_c2, "Meetings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_7a90d7b3._.js.map