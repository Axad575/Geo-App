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
"[project]/app/components/GeologicalLogTool.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const GeologicalLogTool = ({ onSave, initialData = null })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [logData, setLogData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        wellName: '',
        location: '',
        elevation: '',
        totalDepth: '',
        scale: 100,
        layers: initialData?.layers || []
    });
    const [currentLayer, setCurrentLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        depthFrom: '',
        depthTo: '',
        lithology: 'sandstone',
        color: '#F4D03F',
        description: '',
        grain_size: 'medium',
        fossils: '',
        remarks: ''
    });
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedLayer, setSelectedLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Типы литологии с цветами и паттернами
    const lithologyTypes = {
        sandstone: {
            name: t('geologicalLog.sandstone'),
            color: '#F4D03F',
            pattern: 'dots'
        },
        limestone: {
            name: t('geologicalLog.limestone'),
            color: '#85C1E2',
            pattern: 'brick'
        },
        shale: {
            name: t('geologicalLog.shale'),
            color: '#95A5A6',
            pattern: 'horizontal'
        },
        clay: {
            name: t('geologicalLog.clay'),
            color: '#D4AC6E',
            pattern: 'solid'
        },
        coal: {
            name: t('geologicalLog.coal'),
            color: '#34495E',
            pattern: 'solid'
        },
        granite: {
            name: t('geologicalLog.granite'),
            color: '#E8A798',
            pattern: 'crosses'
        },
        conglomerate: {
            name: t('geologicalLog.conglomerate'),
            color: '#BDC3C7',
            pattern: 'circles'
        },
        marl: {
            name: t('geologicalLog.marl'),
            color: '#AED6F1',
            pattern: 'wavy'
        },
        dolomite: {
            name: t('geologicalLog.dolomite'),
            color: '#F8B88B',
            pattern: 'brick'
        },
        gypsum: {
            name: t('geologicalLog.gypsum'),
            color: '#FAD7A0',
            pattern: 'diagonal'
        }
    };
    const grainSizes = {
        'very_fine': t('geologicalLog.veryFine'),
        'fine': t('geologicalLog.fine'),
        'medium': t('geologicalLog.medium'),
        'coarse': t('geologicalLog.coarse'),
        'very_coarse': t('geologicalLog.veryCoarse')
    };
    // Добавление слоя
    const handleAddLayer = ()=>{
        if (!currentLayer.depthFrom || !currentLayer.depthTo) {
            alert(t('geologicalLog.enterDepth'));
            return;
        }
        const from = parseFloat(currentLayer.depthFrom);
        const to = parseFloat(currentLayer.depthTo);
        if (from >= to) {
            alert(t('geologicalLog.depthError'));
            return;
        }
        const newLayer = {
            id: Date.now().toString(),
            ...currentLayer,
            depthFrom: from,
            depthTo: to,
            color: lithologyTypes[currentLayer.lithology].color
        };
        setLogData((prev)=>({
                ...prev,
                layers: [
                    ...prev.layers,
                    newLayer
                ].sort((a, b)=>a.depthFrom - b.depthFrom)
            }));
        setCurrentLayer({
            depthFrom: to.toString(),
            depthTo: '',
            lithology: 'sandstone',
            color: '#F4D03F',
            description: '',
            grain_size: 'medium',
            fossils: '',
            remarks: ''
        });
    };
    // Удаление слоя
    const handleDeleteLayer = (layerId)=>{
        if (window.confirm(t('geologicalLog.deleteLayer'))) {
            setLogData((prev)=>({
                    ...prev,
                    layers: prev.layers.filter((l)=>l.id !== layerId)
                }));
            if (selectedLayer === layerId) {
                setSelectedLayer(null);
            }
        }
    };
    // Рисование на canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GeologicalLogTool.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);
            const leftMargin = 60;
            const rightMargin = 50;
            const topMargin = 80;
            const logWidth = width - leftMargin - rightMargin;
            const scale = logData.scale;
            // Заголовок
            ctx.fillStyle = '#000';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(logData.wellName || t('geologicalLog.title'), leftMargin, 20);
            ctx.font = '11px Arial';
            let headerY = 35;
            if (logData.location) {
                ctx.fillText(`${t('geologicalLog.location')}: ${logData.location}`, leftMargin, headerY);
                headerY += 14;
            }
            if (logData.elevation) {
                ctx.fillText(`${t('geologicalLog.elevation')}: ${logData.elevation} м`, leftMargin, headerY);
                headerY += 14;
            }
            if (logData.totalDepth) {
                ctx.fillText(`${t('geologicalLog.totalDepth')}: ${logData.totalDepth} м`, leftMargin, headerY);
            }
            // Сетка и глубины
            if (showGrid) {
                ctx.strokeStyle = '#ddd';
                ctx.lineWidth = 1;
                const maxDepth = parseFloat(logData.totalDepth) || Math.max(...logData.layers.map({
                    "GeologicalLogTool.useEffect": (l)=>l.depthTo
                }["GeologicalLogTool.useEffect"]), 100);
                for(let depth = 0; depth <= maxDepth; depth += 10){
                    const y = topMargin + depth * scale / 10;
                    ctx.beginPath();
                    ctx.moveTo(leftMargin, y);
                    ctx.lineTo(width - rightMargin, y);
                    ctx.stroke();
                    ctx.fillStyle = '#000';
                    ctx.font = '10px Arial';
                    ctx.textAlign = 'right';
                    ctx.fillText(`${depth}m`, leftMargin - 5, y + 4);
                }
            }
            if (!showGrid && logData.layers.length > 0) {
                ctx.fillStyle = '#000';
                ctx.font = '10px Arial';
                ctx.textAlign = 'right';
                const uniqueDepths = new Set();
                logData.layers.forEach({
                    "GeologicalLogTool.useEffect": (layer)=>{
                        uniqueDepths.add(layer.depthFrom);
                        uniqueDepths.add(layer.depthTo);
                    }
                }["GeologicalLogTool.useEffect"]);
                Array.from(uniqueDepths).sort({
                    "GeologicalLogTool.useEffect": (a, b)=>a - b
                }["GeologicalLogTool.useEffect"]).forEach({
                    "GeologicalLogTool.useEffect": (depth)=>{
                        const y = topMargin + depth * scale / 10;
                        ctx.fillText(`${depth}m`, leftMargin - 5, y + 4);
                    }
                }["GeologicalLogTool.useEffect"]);
            }
            // Рисование слоев
            logData.layers.forEach({
                "GeologicalLogTool.useEffect": (layer)=>{
                    const yStart = topMargin + layer.depthFrom * scale / 10;
                    const yEnd = topMargin + layer.depthTo * scale / 10;
                    const layerHeight = yEnd - yStart;
                    ctx.fillStyle = layer.color;
                    ctx.fillRect(leftMargin, yStart, logWidth, layerHeight);
                    drawPattern(ctx, leftMargin, yStart, logWidth, layerHeight, lithologyTypes[layer.lithology].pattern, layer.color);
                    ctx.strokeStyle = '#000';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(leftMargin, yStart, logWidth, layerHeight);
                    if (selectedLayer === layer.id) {
                        ctx.strokeStyle = '#e74c3c';
                        ctx.lineWidth = 3;
                        ctx.strokeRect(leftMargin, yStart, logWidth, layerHeight);
                    }
                    if (layerHeight > 20) {
                        ctx.fillStyle = '#000';
                        ctx.font = 'bold 11px Arial';
                        ctx.textAlign = 'center';
                        const text = lithologyTypes[layer.lithology].name;
                        ctx.fillText(text, leftMargin + logWidth / 2, yStart + layerHeight / 2 - 5);
                        if (layer.grain_size) {
                            ctx.font = '9px Arial';
                            ctx.fillText(`(${grainSizes[layer.grain_size]})`, leftMargin + logWidth / 2, yStart + layerHeight / 2 + 8);
                        }
                    }
                    if (layer.description) {
                        ctx.fillStyle = '#000';
                        ctx.font = '10px Arial';
                        ctx.textAlign = 'left';
                        const maxWidth = rightMargin - 10;
                        const words = layer.description.split(' ');
                        let line = '';
                        let lineY = yStart + 12;
                        words.forEach({
                            "GeologicalLogTool.useEffect": (word)=>{
                                const testLine = line + word + ' ';
                                const metrics = ctx.measureText(testLine);
                                if (metrics.width > maxWidth && line !== '') {
                                    ctx.fillText(line, width - rightMargin + 5, lineY);
                                    line = word + ' ';
                                    lineY += 12;
                                } else {
                                    line = testLine;
                                }
                            }
                        }["GeologicalLogTool.useEffect"]);
                        ctx.fillText(line, width - rightMargin + 5, lineY);
                    }
                }
            }["GeologicalLogTool.useEffect"]);
            drawLegend(ctx, width, height);
        }
    }["GeologicalLogTool.useEffect"], [
        logData,
        showGrid,
        selectedLayer,
        t
    ]);
    const drawPattern = (ctx, x, y, width, height, pattern, baseColor)=>{
        ctx.save();
        ctx.strokeStyle = adjustColor(baseColor, -40);
        ctx.lineWidth = 1;
        switch(pattern){
            case 'dots':
                for(let i = 0; i < width; i += 10){
                    for(let j = 0; j < height; j += 10){
                        ctx.fillStyle = adjustColor(baseColor, -40);
                        ctx.beginPath();
                        ctx.arc(x + i + 5, y + j + 5, 2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                break;
            case 'horizontal':
                for(let j = 0; j < height; j += 5){
                    ctx.beginPath();
                    ctx.moveTo(x, y + j);
                    ctx.lineTo(x + width, y + j);
                    ctx.stroke();
                }
                break;
            case 'brick':
                for(let j = 0; j < height; j += 10){
                    const offset = j / 10 % 2 === 0 ? 0 : 15;
                    for(let i = offset; i < width; i += 30){
                        ctx.strokeRect(x + i, y + j, 25, 8);
                    }
                }
                break;
            case 'crosses':
                for(let i = 0; i < width; i += 15){
                    for(let j = 0; j < height; j += 15){
                        ctx.beginPath();
                        ctx.moveTo(x + i, y + j - 5);
                        ctx.lineTo(x + i, y + j + 5);
                        ctx.moveTo(x + i - 5, y + j);
                        ctx.lineTo(x + i + 5, y + j);
                        ctx.stroke();
                    }
                }
                break;
            case 'circles':
                for(let i = 0; i < width; i += 15){
                    for(let j = 0; j < height; j += 15){
                        ctx.beginPath();
                        ctx.arc(x + i, y + j, 4, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }
                break;
            case 'diagonal':
                for(let i = -height; i < width; i += 10){
                    ctx.beginPath();
                    ctx.moveTo(x + i, y + height);
                    ctx.lineTo(x + i + height, y);
                    ctx.stroke();
                }
                break;
            case 'wavy':
                for(let j = 0; j < height; j += 8){
                    ctx.beginPath();
                    ctx.moveTo(x, y + j);
                    for(let i = 0; i < width; i += 5){
                        ctx.lineTo(x + i, y + j + Math.sin(i / 5) * 2);
                    }
                    ctx.stroke();
                }
                break;
        }
        ctx.restore();
    };
    const adjustColor = (color, amount)=>{
        const num = parseInt(color.replace('#', ''), 16);
        const r = Math.max(0, Math.min(255, (num >> 16) + amount));
        const g = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amount));
        const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
        return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
    };
    const drawLegend = (ctx, width, height)=>{
        const usedLithologies = [
            ...new Set(logData.layers.map((layer)=>layer.lithology))
        ];
        if (usedLithologies.length === 0) return;
        const legendX = 10;
        const legendHeight = 30 + usedLithologies.length * 20 + 10;
        const legendY = height - legendHeight - 10;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(legendX, legendY, 200, legendHeight);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(legendX, legendY, 200, legendHeight);
        ctx.fillStyle = '#000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(t('geologicalLog.legend') + ':', legendX + 10, legendY + 20);
        ctx.font = '10px Arial';
        let yOffset = 35;
        usedLithologies.forEach((lithologyKey)=>{
            const lithology = lithologyTypes[lithologyKey];
            ctx.fillStyle = lithology.color;
            ctx.fillRect(legendX + 10, legendY + yOffset, 20, 15);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1;
            ctx.strokeRect(legendX + 10, legendY + yOffset, 20, 15);
            ctx.fillStyle = '#000';
            ctx.fillText(lithology.name, legendX + 35, legendY + yOffset + 11);
            yOffset += 20;
        });
    };
    const handleExport = ()=>{
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = `geological_log_${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };
    const handleSave = ()=>{
        if (onSave) {
            onSave({
                ...logData,
                canvas: canvasRef.current.toDataURL()
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-lg p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: t('geologicalLog.title')
                    }, void 0, false, {
                        fileName: "[project]/app/components/GeologicalLogTool.js",
                        lineNumber: 387,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExport,
                                className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm",
                                children: [
                                    "📥 ",
                                    t('geologicalLog.exportPNG')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                lineNumber: 389,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm",
                                children: [
                                    "💾 ",
                                    t('geologicalLog.save')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                lineNumber: 395,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GeologicalLogTool.js",
                        lineNumber: 388,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GeologicalLogTool.js",
                lineNumber: 386,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-4 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-3",
                                        children: t('geologicalLog.generalData')
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                        lineNumber: 408,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: t('geologicalLog.wellName')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 411,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: logData.wellName,
                                                        onChange: (e)=>setLogData((prev)=>({
                                                                    ...prev,
                                                                    wellName: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border rounded-lg text-sm",
                                                        placeholder: t('geologicalLog.wellNamePlaceholder')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 412,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 410,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: t('geologicalLog.location')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 421,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: logData.location,
                                                        onChange: (e)=>setLogData((prev)=>({
                                                                    ...prev,
                                                                    location: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border rounded-lg text-sm",
                                                        placeholder: t('geologicalLog.locationPlaceholder')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 422,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 420,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: t('geologicalLog.elevation')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 431,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: logData.elevation,
                                                        onChange: (e)=>setLogData((prev)=>({
                                                                    ...prev,
                                                                    elevation: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border rounded-lg text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 432,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 430,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: t('geologicalLog.totalDepth')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 440,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: logData.totalDepth,
                                                        onChange: (e)=>setLogData((prev)=>({
                                                                    ...prev,
                                                                    totalDepth: e.target.value
                                                                })),
                                                        className: "w-full px-3 py-2 border rounded-lg text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 441,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 439,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: showGrid,
                                                        onChange: (e)=>setShowGrid(e.target.checked),
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 449,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm",
                                                        children: t('geologicalLog.showGrid')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 455,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 448,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                        lineNumber: 409,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                lineNumber: 407,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-50 p-4 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-3",
                                        children: t('geologicalLog.addLayer')
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                        lineNumber: 462,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-medium mb-1",
                                                                children: t('geologicalLog.depthFrom')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                lineNumber: 466,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                step: "0.1",
                                                                value: currentLayer.depthFrom,
                                                                onChange: (e)=>setCurrentLayer((prev)=>({
                                                                            ...prev,
                                                                            depthFrom: e.target.value
                                                                        })),
                                                                className: "w-full px-2 py-1 border rounded text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                lineNumber: 467,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 465,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-medium mb-1",
                                                                children: t('geologicalLog.depthTo')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                lineNumber: 476,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                step: "0.1",
                                                                value: currentLayer.depthTo,
                                                                onChange: (e)=>setCurrentLayer((prev)=>({
                                                                            ...prev,
                                                                            depthTo: e.target.value
                                                                        })),
                                                                className: "w-full px-2 py-1 border rounded text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                lineNumber: 477,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 475,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 464,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium mb-1",
                                                        children: t('geologicalLog.lithology')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 487,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: currentLayer.lithology,
                                                        onChange: (e)=>setCurrentLayer((prev)=>({
                                                                    ...prev,
                                                                    lithology: e.target.value,
                                                                    color: lithologyTypes[e.target.value].color
                                                                })),
                                                        className: "w-full px-2 py-1 border rounded text-sm",
                                                        children: Object.entries(lithologyTypes).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: key,
                                                                children: value.name
                                                            }, key, false, {
                                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                lineNumber: 498,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 488,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 486,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium mb-1",
                                                        children: t('geologicalLog.grainSize')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 503,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: currentLayer.grain_size,
                                                        onChange: (e)=>setCurrentLayer((prev)=>({
                                                                    ...prev,
                                                                    grain_size: e.target.value
                                                                })),
                                                        className: "w-full px-2 py-1 border rounded text-sm",
                                                        children: Object.entries(grainSizes).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: key,
                                                                children: value
                                                            }, key, false, {
                                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                lineNumber: 510,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 504,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 502,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium mb-1",
                                                        children: t('geologicalLog.description')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 515,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: currentLayer.description,
                                                        onChange: (e)=>setCurrentLayer((prev)=>({
                                                                    ...prev,
                                                                    description: e.target.value
                                                                })),
                                                        className: "w-full px-2 py-1 border rounded text-sm",
                                                        rows: "2",
                                                        placeholder: t('geologicalLog.descriptionPlaceholder')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 516,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 514,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium mb-1",
                                                        children: t('geologicalLog.fossils')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 525,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: currentLayer.fossils,
                                                        onChange: (e)=>setCurrentLayer((prev)=>({
                                                                    ...prev,
                                                                    fossils: e.target.value
                                                                })),
                                                        className: "w-full px-2 py-1 border rounded text-sm",
                                                        placeholder: t('geologicalLog.fossilsPlaceholder')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                                        lineNumber: 526,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 524,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddLayer,
                                                className: "w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium",
                                                children: [
                                                    "+ ",
                                                    t('geologicalLog.addLayerButton')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 534,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                        lineNumber: 463,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                lineNumber: 461,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold mb-3",
                                        children: [
                                            t('geologicalLog.layers'),
                                            " (",
                                            logData.layers.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                        lineNumber: 545,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    logData.layers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: t('geologicalLog.noLayers')
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                        lineNumber: 547,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: logData.layers.map((layer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setSelectedLayer(layer.id),
                                                className: `p-2 rounded cursor-pointer ${selectedLayer === layer.id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-4 h-4 rounded border",
                                                                            style: {
                                                                                backgroundColor: layer.color
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                            lineNumber: 561,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-medium",
                                                                            children: lithologyTypes[layer.lithology].name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                            lineNumber: 565,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                    lineNumber: 560,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-600",
                                                                    children: [
                                                                        layer.depthFrom,
                                                                        "m - ",
                                                                        layer.depthTo,
                                                                        "m"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                    lineNumber: 569,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                layer.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500 mt-1 truncate",
                                                                    children: layer.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                    lineNumber: 573,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/GeologicalLogTool.js",
                                                            lineNumber: 559,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleDeleteLayer(layer.id);
                                                            },
                                                            className: "text-red-500 hover:text-red-700 p-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                    lineNumber: 586,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                                lineNumber: 585,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/GeologicalLogTool.js",
                                                            lineNumber: 578,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/GeologicalLogTool.js",
                                                    lineNumber: 558,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, layer.id, false, {
                                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                                lineNumber: 551,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/GeologicalLogTool.js",
                                        lineNumber: 549,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                lineNumber: 544,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/GeologicalLogTool.js",
                        lineNumber: 406,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-100 rounded-lg p-4 overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: 600,
                                height: 800,
                                className: "border border-gray-300 bg-white mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                lineNumber: 600,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/GeologicalLogTool.js",
                            lineNumber: 599,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/GeologicalLogTool.js",
                        lineNumber: 598,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/GeologicalLogTool.js",
                lineNumber: 404,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6 text-yellow-600 shrink-0 mt-0.5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            }, void 0, false, {
                                fileName: "[project]/app/components/GeologicalLogTool.js",
                                lineNumber: 614,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/GeologicalLogTool.js",
                            lineNumber: 613,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-yellow-900 mb-1",
                                    children: [
                                        "⚠️ ",
                                        t('geologicalLog.warningTitle')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GeologicalLogTool.js",
                                    lineNumber: 617,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-yellow-800",
                                    children: [
                                        t('geologicalLog.warningText'),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                '"💾 ',
                                                t('geologicalLog.warningButton'),
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GeologicalLogTool.js",
                                            lineNumber: 619,
                                            columnNumber: 62
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ".",
                                        ' ',
                                        t('geologicalLog.warningFooter')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GeologicalLogTool.js",
                                    lineNumber: 618,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/GeologicalLogTool.js",
                            lineNumber: 616,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/GeologicalLogTool.js",
                    lineNumber: 612,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/GeologicalLogTool.js",
                lineNumber: 611,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GeologicalLogTool.js",
        lineNumber: 385,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GeologicalLogTool, "gu5VLdcHYxEWFaa+fy89lb3ga6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = GeologicalLogTool;
const __TURBOPACK__default__export__ = GeologicalLogTool;
var _c;
__turbopack_context__.k.register(_c, "GeologicalLogTool");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/pages/projects/[id]/notes/create/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GeologicalLogTool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GeologicalLogTool.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const CreateNotePage = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["app"]);
    const projectId = params.id;
    const [orgId, setOrgId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newNote, setNewNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        locationId: ''
    });
    const [attachedFiles, setAttachedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadingFiles, setUploadingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [geologicalLog, setGeologicalLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLogTool, setShowLogTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Получение организации пользователя
    const getCurrentUserOrg = async (userId)=>{
        try {
            const organizationsSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'organizations'));
            for (const orgDoc of organizationsSnapshot.docs){
                const userInOrgDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgDoc.id}/users/${userId}`));
                if (userInOrgDoc.exists()) {
                    return orgDoc.id;
                }
            }
            return null;
        } catch (error) {
            console.error('Error fetching user organization:', error);
            return null;
        }
    };
    // Получение данных проекта
    const fetchProject = async (organizationId)=>{
        try {
            const projectDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${organizationId}/projects/${projectId}`));
            if (projectDoc.exists()) {
                setProject({
                    id: projectDoc.id,
                    ...projectDoc.data()
                });
            } else {
                console.error('Project not found');
                router.push('/pages/projects');
            }
        } catch (error) {
            console.error('Error fetching project:', error);
        }
    };
    // Получение пользователей организации
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateNotePage.useEffect": ()=>{
            const initPage = {
                "CreateNotePage.useEffect.initPage": async ()=>{
                    const user = auth.currentUser;
                    if (!user) {
                        router.push('/auth/login');
                        return;
                    }
                    const userOrgId = await getCurrentUserOrg(user.uid);
                    if (userOrgId) {
                        setOrgId(userOrgId);
                        await fetchProject(userOrgId);
                        await fetchUsers(userOrgId);
                    }
                    setLoading(false);
                }
            }["CreateNotePage.useEffect.initPage"];
            initPage();
        }
    }["CreateNotePage.useEffect"], [
        projectId
    ]);
    // Функция загрузки файла
    const uploadProjectFile = async (file, projectId, noteId)=>{
        try {
            const timestamp = Date.now();
            const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            const path = `projects/${projectId}/notes/${noteId}/files/${timestamp}_${sanitizedName}`;
            const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storage"], path);
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytes"])(fileRef, file);
            const downloadURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(snapshot.ref);
            return {
                url: downloadURL,
                path: path,
                name: file.name,
                size: file.size,
                type: file.type,
                uploadedAt: new Date().toISOString(),
                uploadedBy: auth.currentUser?.uid
            };
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    };
    // Функция для обработки выбора файлов
    const handleFileSelect = async (files)=>{
        if (!files || files.length === 0) return;
        setUploadingFiles(true);
        const uploadedFiles = [];
        try {
            for (const file of Array.from(files)){
                // Проверка размера файла (максимум 10MB)
                if (file.size > 10 * 1024 * 1024) {
                    alert(t('notes.fileTooLarge').replace('{fileName}', file.name));
                    continue;
                }
                // Создаем временный ID для заметки
                const tempNoteId = Date.now().toString();
                const uploadedFile = await uploadProjectFile(file, projectId, tempNoteId);
                uploadedFiles.push(uploadedFile);
            }
            setAttachedFiles((prev)=>[
                    ...prev,
                    ...uploadedFiles
                ]);
        } catch (error) {
            console.error('File upload error:', error);
            alert(t('notes.fileUploadError'));
        } finally{
            setUploadingFiles(false);
        }
    };
    // Функция удаления файла
    const removeFile = (index)=>{
        setAttachedFiles((prev)=>prev.filter((_, i)=>i !== index));
    };
    // Функция для добавления записи в историю действий
    const addToHistory = async (action, details)=>{
        try {
            const historyEntry = {
                id: Date.now().toString(),
                action: action,
                details: details,
                author: auth.currentUser?.uid,
                authorName: users[auth.currentUser?.uid] || auth.currentUser?.email,
                timestamp: new Date().toISOString()
            };
            const projectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}/projects/${projectId}`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(projectRef, {
                history: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(historyEntry)
            });
        } catch (error) {
            console.error('Error adding to history:', error);
        }
    };
    // Добавление новой заметки
    const handleAddNote = async ()=>{
        if (!newNote.title.trim()) {
            alert(t('notes.pleaseEnterTitle'));
            return;
        }
        setSaving(true);
        try {
            // Найти выбранную локацию
            const selectedLocation = newNote.locationId ? project.locations?.find((loc)=>loc.id === newNote.locationId) : null;
            const noteData = {
                id: Date.now().toString(),
                title: newNote.title,
                description: newNote.description || '',
                author: auth.currentUser?.uid || '',
                authorName: users[auth.currentUser?.uid] || auth.currentUser?.email || 'Unknown',
                createdAt: new Date().toISOString(),
                location: selectedLocation ? {
                    id: selectedLocation.id,
                    name: selectedLocation.name,
                    latitude: selectedLocation.latitude || 0,
                    longitude: selectedLocation.longitude || 0
                } : null,
                attachments: attachedFiles || [],
                geologicalLog: geologicalLog || null
            };
            // Добавляем заметку в массив notes проекта
            const projectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `organizations/${orgId}/projects/${projectId}`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(projectRef, {
                notes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(noteData)
            });
            // Добавляем в историю
            await addToHistory('note_added', {
                noteTitle: newNote.title,
                hasLocation: !!selectedLocation,
                locationName: selectedLocation?.name,
                hasAttachments: attachedFiles.length > 0,
                attachmentCount: attachedFiles.length,
                hasGeologicalLog: !!geologicalLog,
                geologicalLogLayers: geologicalLog?.layers?.length || 0
            });
            // Возвращаемся на страницу проекта
            router.push(`/pages/projects/${projectId}`);
        } catch (error) {
            console.error('Error adding note:', error);
            alert(t('notes.errorCreatingNote'));
        } finally{
            setSaving(false);
        }
    };
    // Функция для получения иконки файла
    const getFileIcon = (file)=>{
        if (file.type.startsWith('image/')) return '🖼️';
        if (file.type.includes('pdf')) return '📄';
        if (file.name.endsWith('.kml') || file.name.endsWith('.gpx')) return '🗺️';
        return '📎';
    };
    if (loading || !project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl",
                children: [
                    t('loading'),
                    "..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                lineNumber: 258,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
            lineNumber: 257,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push(`/pages/projects/${projectId}`),
                                className: "text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-2",
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
                                            d: "M11 17l-5-5m0 0l5-5m-5 5h12"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 274,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    t('notes.backToProject')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                lineNumber: 269,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold",
                                children: t('notes.createNote')
                            }, void 0, false, {
                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                lineNumber: 278,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-1",
                                children: [
                                    t('notes.project'),
                                    ": ",
                                    project.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                lineNumber: 279,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                        lineNumber: 268,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                    lineNumber: 267,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-lg p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: [
                                                t('notes.noteTitle'),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                    lineNumber: 289,
                                                    columnNumber: 56
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 288,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newNote.title,
                                            onChange: (e)=>setNewNote((prev)=>({
                                                        ...prev,
                                                        title: e.target.value
                                                    })),
                                            placeholder: t('notes.enterTitle'),
                                            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 291,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                    lineNumber: 287,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: t('projects.description')
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 302,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: newNote.description,
                                            onChange: (e)=>setNewNote((prev)=>({
                                                        ...prev,
                                                        description: e.target.value
                                                    })),
                                            placeholder: t('notes.enterDescription'),
                                            className: "w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            rows: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 305,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                    lineNumber: 301,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: t('notes.linkToLocation')
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 316,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newNote.locationId,
                                            onChange: (e)=>setNewNote((prev)=>({
                                                        ...prev,
                                                        locationId: e.target.value
                                                    })),
                                            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: t('notes.noLocation')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                    lineNumber: 324,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                project.locations && project.locations.map((location)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: location.id,
                                                        children: [
                                                            location.name,
                                                            location.latitude && location.longitude && ` (${location.latitude}, ${location.longitude})`
                                                        ]
                                                    }, location.id, true, {
                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                        lineNumber: 326,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 319,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        (!project.locations || project.locations.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: t('notes.addLocationFirst')
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 335,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                    lineNumber: 315,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700",
                                                    children: [
                                                        "🗺️ ",
                                                        t('notes.geologicalLog')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                    lineNumber: 344,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowLogTool(!showLogTool),
                                                    className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium",
                                                    children: showLogTool ? `➖ ${t('notes.hideEditor')}` : `➕ ${t('notes.openEditor')}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                    lineNumber: 347,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 343,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        showLogTool && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GeologicalLogTool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                onSave: (logData)=>{
                                                    setGeologicalLog(logData);
                                                    alert(t('notes.logSaved'));
                                                },
                                                initialData: geologicalLog
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                lineNumber: 358,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 357,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        geologicalLog && !showLogTool && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-purple-900",
                                                                children: [
                                                                    "✅ ",
                                                                    t('notes.logCreated')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                lineNumber: 372,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-purple-700 mt-1",
                                                                children: [
                                                                    t('notes.wellName'),
                                                                    ": ",
                                                                    geologicalLog.wellName || t('notes.notSpecifiedWell'),
                                                                    " |",
                                                                    ' ',
                                                                    t('notes.layersCount'),
                                                                    ": ",
                                                                    geologicalLog.layers?.length || 0
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                lineNumber: 375,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                        lineNumber: 371,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowLogTool(true),
                                                        className: "text-purple-600 hover:text-purple-800 text-sm font-medium",
                                                        children: t('notes.editLog')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                        lineNumber: 380,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                lineNumber: 370,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 369,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                    lineNumber: 342,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-3",
                                            children: [
                                                "📎 ",
                                                t('notes.attachFiles')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 394,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    multiple: true,
                                                    id: "file-upload",
                                                    className: "hidden",
                                                    onChange: (e)=>handleFileSelect(e.target.files),
                                                    accept: "image/*,application/pdf,.doc,.docx,.txt,.csv,.kml,.gpx"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                    lineNumber: 400,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "file-upload",
                                                    className: "cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-12 h-12 mx-auto text-gray-400",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                    lineNumber: 412,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                lineNumber: 411,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-base text-gray-600 font-medium",
                                                                        children: uploadingFiles ? t('notes.uploadingFiles') : t('notes.fileDropZone')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                        lineNumber: 415,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500 mt-1",
                                                                        children: t('notes.fileDropHint')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                        lineNumber: 418,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                lineNumber: 414,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                        lineNumber: 410,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                    lineNumber: 409,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 399,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        attachedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: [
                                                        t('notes.attachedFiles'),
                                                        " (",
                                                        attachedFiles.length,
                                                        "):"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                    lineNumber: 429,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                attachedFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: getFileIcon(file)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                        lineNumber: 435,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-medium text-gray-800",
                                                                                children: file.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                                lineNumber: 439,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-500",
                                                                                children: [
                                                                                    (file.size / 1024 / 1024).toFixed(2),
                                                                                    " ",
                                                                                    t('notes.mb')
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                                lineNumber: 442,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                        lineNumber: 438,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                lineNumber: 434,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>removeFile(index),
                                                                className: "text-red-500 hover:text-red-700 p-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-5 h-5",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                        lineNumber: 453,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                    lineNumber: 452,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                                lineNumber: 447,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                                        lineNumber: 433,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                            lineNumber: 428,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                    lineNumber: 393,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                            lineNumber: 285,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mt-8 pt-6 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddNote,
                                    disabled: !newNote.title.trim() || saving,
                                    className: "flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors",
                                    children: saving ? t('notes.saving') : t('notes.createNote')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                    lineNumber: 465,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push(`/pages/projects/${projectId}`),
                                    disabled: saving,
                                    className: "px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 font-medium transition-colors",
                                    children: t('cancel')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                                    lineNumber: 472,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                            lineNumber: 464,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
                    lineNumber: 284,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
            lineNumber: 266,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/pages/projects/[id]/notes/create/page.js",
        lineNumber: 264,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CreateNotePage, "eSoH4lTj0HDfhOfcvCGBrfKpJiE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CreateNotePage;
const __TURBOPACK__default__export__ = CreateNotePage;
var _c;
__turbopack_context__.k.register(_c, "CreateNotePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_04bdf80e._.js.map