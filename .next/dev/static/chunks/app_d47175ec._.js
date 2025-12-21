(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/api/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Import the functions you need from the SDKs you need
__turbopack_context__.s([
    "app",
    ()=>app,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIN9X7pvTNBNB8oZjHqpSrewCSKz-Kncw",
    authDomain: "geo-app-47ce7.firebaseapp.com",
    projectId: "geo-app-47ce7",
    storageBucket: "geo-app-47ce7.firebasestorage.app",
    messagingSenderId: "66863903495",
    appId: "1:66863903495:web:0b3ae81b7ec0a12e384ba2",
    measurementId: "G-X3TD84EL2V"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
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
            fileSize: "Размер",
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
            updates: "Обновления"
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
            organizer: "Организатор"
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
            themeSettings: "Тема оформления",
            lightTheme: "Светлая тема",
            darkTheme: "Темная тема",
            systemTheme: "Системная тема",
            systemThemeDescription: "Системная тема будет автоматически переключаться между светлой и темной в зависимости от настроек вашего устройства.",
            preview: "Предварительный просмотр",
            languageChanged: "Язык изменен! Обновите страницу для применения изменений.",
            themeChanged: "Тема успешно изменена!",
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
        }
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
            updates: "Updates"
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
            noStatus: "No Status"
        },
        // Locations
        locations: {
            title: "Locations",
            map: "Map",
            addPoint: "add point",
            addLocation: "Add Location",
            addLocationPoint: "Add Location Point",
            selectedCoordinates: "Selected coordinates",
            pointName: "Point Name",
            pointNamePlaceholder: "e.g., Sample Location 1",
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
        // Projects
        projects: {
            title: "Projects",
            description: "Description",
            participants: "Participants",
            date: "Date",
            status: "Status",
            createNew: "Create Project",
            noProjects: "No projects",
            openProject: "open project",
            backToProjects: "Back to projects",
            exportToPdf: "Export to PDF",
            statusActive: "active",
            statusCompleted: "completed",
            statusUpcoming: "upcoming",
            statusNotStarted: "not started",
            notStarted: "not started",
            projectOptional: "Project (Optional)",
            projectTitle: "Project Title",
            projectReport: "Project Report",
            noProject: "No Project",
            noUsersAvailable: "No users available",
            organization: "Organization",
            owner: "Owner",
            team: "Team",
            noDescription: "No description available"
        },
        // Notes
        notes: {
            title: "Notes",
            addNote: "Add Note",
            noteTitle: "Note Title",
            noteDescription: "Note Description",
            linkToLocation: "Link to Location Point (Optional)",
            noLocation: "No location",
            enterTitle: "Enter note title...",
            enterDescription: "Enter note description...",
            listOfNotes: "List of notes",
            noNotes: "No notes",
            addLocationFirst: "Add location points first to link them to notes",
            createNote: "Create Note",
            createNewNote: "Create New Note",
            editNote: "Edit Note",
            updateNote: "Update Note",
            noteTitle: "Title",
            noteContent: "Content",
            category: "Category",
            categoryOptional: "Category (Optional)",
            selectCategory: "Select a category...",
            enterNoteTitle: "Enter note title...",
            writeNoteContent: "Write your note content here...",
            pleaseEnterTitle: "Please enter a title for your note",
            pleaseEnterContent: "Please enter some content for your note",
            created: "Created",
            lastUpdated: "Last updated",
            markedAsFavorite: "This note is marked as favorite",
            searchNotes: "Search notes...",
            allNotes: "All Notes",
            recent: "Recent",
            favorites: "Favorites",
            totalNotes: "total notes",
            favoritesCount: "favorites",
            showing: "showing",
            noNotesFound: "No notes found",
            noNotesYet: "No notes yet",
            tryAdjusting: "Try adjusting your search or filter criteria",
            createFirstNote: "Create your first note to get started",
            createYourFirstNote: "Create Your First Note",
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
            }
        },
        // Map and locations
        map: {
            title: "Map",
            addPoint: "+ add point",
            locationPoints: "Location Points",
            newPoint: "New point",
            clickToAdd: "Click to add location",
            loadingMap: "Loading map...",
            coordinates: "Coordinates",
            decimal: "Decimal",
            dms: "DMS",
            moreDetails: "More Details",
            lat: "Lat",
            lng: "Lng"
        },
        // Locations
        location: {
            addLocation: "Add Location",
            locationName: "Location Name",
            locationDescription: "Location Description",
            enterName: "Enter location name...",
            enterDescription: "Enter location description...",
            coordinateFormat: "Coordinate Format",
            latitude: "Latitude",
            longitude: "Longitude",
            enterLatitude: "Enter latitude...",
            enterLongitude: "Enter longitude...",
            invalidCoordinates: "Invalid coordinates",
            locationSaved: "Location saved!",
            fillRequiredFields: "Fill required fields"
        },
        // Settings
        settings: {
            title: "Settings",
            profile: "Profile",
            security: "Security",
            organization: "Organization",
            appearance: "Appearance",
            // Profile
            profileInfo: "Profile Information",
            name: "Name",
            email: "Email",
            enterName: "Enter your name",
            emailCantChange: "Email cannot be changed",
            saveChanges: "Save Changes",
            saving: "Saving...",
            profileUpdated: "Profile updated successfully!",
            profileUpdateError: "Error updating profile",
            // Security
            changePassword: "Change Password",
            newPassword: "New Password",
            confirmPassword: "Confirm New Password",
            enterNewPassword: "Enter new password",
            confirmNewPassword: "Confirm new password",
            changing: "Changing...",
            changePasswordBtn: "Change Password",
            passwordChanged: "Password changed successfully!",
            passwordsNotMatch: "New passwords do not match",
            passwordTooShort: "Password must contain at least 6 characters",
            passwordChangeError: "Error changing password",
            logout: "Logout",
            logoutDescription: "Sign out of your account on this device",
            logoutBtn: "Sign Out",
            // Organization
            organizationInfo: "Organization Information",
            organizationName: "Organization Name",
            yourRole: "Your Role",
            organizationId: "Organization ID",
            aboutApp: "About Application",
            version: "Version",
            developer: "Developer",
            year: "Year",
            // Appearance
            interfaceLanguage: "Interface Language",
            themeSettings: "Theme Settings",
            lightTheme: "Light Theme",
            darkTheme: "Dark Theme",
            systemTheme: "System Theme",
            systemThemeDescription: "System theme will automatically switch between light and dark depending on your device settings.",
            preview: "Preview",
            languageChanged: "Language changed! Refresh the page to apply changes.",
            themeChanged: "Theme changed successfully!",
            geologicalProject: "Geological Project",
            sampleProjectPreview: "Sample project preview"
        },
        // Date format
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
            emailPlaceholder: "Email address",
            passwordPlaceholder: "Password",
            termsText: "By logging in, you accept our terms of service and privacy policy.",
            alreadyHaveAccount: "Already have an account?",
            dontHaveAccount: "Don't have an account?",
            loginError: "Login error",
            registerError: "Registration error",
            invalidCredentials: "Invalid credentials",
            emailAlreadyExists: "User with this email already exists",
            passwordTooWeak: "Password is too weak",
            loginSuccess: "Login successful",
            registerSuccess: "Registration completed successfully"
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
            chooseFile: "Choose file",
            uploadFailed: "Upload failed",
            saveSuccess: "Saved successfully",
            saveError: "Save error",
            deleteConfirm: "Are you sure you want to delete?",
            deleteSuccess: "Deleted successfully",
            deleteError: "Delete error"
        }
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
            updates: "Yangilanishlar"
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
            noStatus: "Holatsiz"
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
            themeSettings: "Mavzu sozlamalari",
            lightTheme: "Yorug' mavzu",
            darkTheme: "Qorong'u mavzu",
            systemTheme: "Tizim mavzusi",
            systemThemeDescription: "Tizim mavzusi qurilma sozlamalariga qarab avtomatik ravishda yorug' va qorong'u o'rtasida almashadi.",
            preview: "Oldindan ko'rish",
            languageChanged: "Til o'zgartirildi! O'zgarishlarni qo'llash uchun sahifani yangilang.",
            themeChanged: "Mavzu muvaffaqiyatli o'zgartirildi!",
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
        }
    }
};
const getString = (key, language = 'ru')=>{
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
        return localStorage.getItem('app-language') || 'ru';
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
    "changeTheme",
    ()=>changeTheme,
    "useStrings",
    ()=>useStrings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/strings.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Функция для применения темы
const applyTheme = (theme)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else if (theme === 'auto') {
        // Системная тема - проверяем предпочтения пользователя
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
};
// Функция для получения сохраненной темы
const getSavedTheme = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem('app-theme') || 'light';
};
const useStrings = ()=>{
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ru');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStrings.useEffect": ()=>{
            // Получаем текущий язык при монтировании компонента
            const currentLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentLanguage"])();
            setLanguage(currentLang);
            // Инициализируем тему при загрузке
            const savedTheme = getSavedTheme();
            applyTheme(savedTheme);
            // Слушаем изменения системной темы если установлена auto
            const handleSystemThemeChange = {
                "useStrings.useEffect.handleSystemThemeChange": (e)=>{
                    const currentTheme = getSavedTheme();
                    if (currentTheme === 'auto') {
                        applyTheme('auto');
                    }
                }
            }["useStrings.useEffect.handleSystemThemeChange"];
            // Слушаем изменения языка
            const handleLanguageChange = {
                "useStrings.useEffect.handleLanguageChange": ()=>{
                    const newLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentLanguage"])();
                    setLanguage(newLang);
                }
            }["useStrings.useEffect.handleLanguageChange"];
            // Слушаем изменения темы
            const handleThemeChange = {
                "useStrings.useEffect.handleThemeChange": ()=>{
                    const savedTheme = getSavedTheme();
                    applyTheme(savedTheme);
                }
            }["useStrings.useEffect.handleThemeChange"];
            // Добавляем слушатели
            window.addEventListener('language-changed', handleLanguageChange);
            window.addEventListener('theme-changed', handleThemeChange);
            // Слушаем изменения системной темы
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', handleSystemThemeChange);
            return ({
                "useStrings.useEffect": ()=>{
                    window.removeEventListener('language-changed', handleLanguageChange);
                    window.removeEventListener('theme-changed', handleThemeChange);
                    mediaQuery.removeEventListener('change', handleSystemThemeChange);
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
const changeTheme = (newTheme)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('app-theme', newTheme);
        applyTheme(newTheme);
        // Создаем кастомное событие для уведомления компонентов
        window.dispatchEvent(new Event('theme-changed'));
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
    const libraryBtn = (e)=>{
        e.preventDefault();
        console.log("Library button clicked");
        router.push("/pages/library");
    };
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-2 w-56 h-screen bg-green-800 text-white flex flex-col justify-between rounded-lg shadow-lg m-2 shrink-0 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 text-2xl font-semibold",
                        children: "Geo-app"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-4 mt-4 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: libraryBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.library')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: projectsBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.projects')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: newsBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.news')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: meetingsBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.meetings')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: notesBtn,
                                className: "bg-green-400 text-black py-2 rounded-md hover:bg-green-300 transition",
                                children: t('nav.notes')
                            }, void 0, false, {
                                fileName: "[project]/app/components/sidebar.js",
                                lineNumber: 58,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Made by abdu1axad"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Copyright 2025"
                    }, void 0, false, {
                        fileName: "[project]/app/components/sidebar.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/sidebar.js",
                lineNumber: 65,
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
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t('navbar.determining'));
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
    }["Navbar.useEffect"], []);
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
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: coords
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/navbar.js",
                lineNumber: 33,
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
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined text-lg cursor-pointer hover:text-green-300 transition",
                        onClick: ()=>router.push("/pages/settings"),
                        children: "settings"
                    }, void 0, false, {
                        fileName: "[project]/app/components/navbar.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/navbar.js",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/navbar.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Navbar, "K80WMz2AEVsv2wmeyX3VZdW6dW8=", false, function() {
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
;
var _s = __turbopack_context__.k.signature();
"use client";
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
        owner: '',
        projectId: projectId || '',
        participants: [],
        notes: ''
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
                                owner: currentUser.uid,
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
    const handleParticipantChange = (userId)=>{
        const isSelected = formData.participants.includes(userId);
        setFormData((prev)=>({
                ...prev,
                participants: isSelected ? prev.participants.filter((id)=>id !== userId) : [
                    ...prev.participants,
                    userId
                ]
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            // Структура данных согласно новой схеме БД
            const meetingData = {
                title: formData.title,
                date: new Date(formData.date).toISOString(),
                location: formData.location || '',
                owner: formData.owner,
                projectId: formData.projectId || null,
                participants: formData.participants,
                notes: formData.notes || '',
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
                owner: auth.currentUser?.uid || '',
                projectId: projectId || '',
                participants: [],
                notes: ''
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
            className: "bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md max-h-full overflow-y-auto my-auto mx-auto shadow-xl",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-gray-900 dark:text-gray-100",
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
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
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
                                    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed"
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
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
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
                                    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
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
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
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
                                    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
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
                                    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
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
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
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
                                    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                    children: t('meetings.participants')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 243,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 max-h-32 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-50 dark:bg-gray-700",
                                    children: users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 dark:text-gray-400 p-2",
                                        children: t('projects.noUsersAvailable')
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CreateMeetingModal.js",
                                        lineNumber: 248,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    id: `user-${user.id}`,
                                                    checked: formData.participants.includes(user.id),
                                                    onChange: ()=>handleParticipantChange(user.id),
                                                    className: "h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                                    lineNumber: 252,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: `user-${user.id}`,
                                                    className: "ml-2 text-sm text-gray-700 dark:text-gray-300",
                                                    children: [
                                                        user.name || user.email,
                                                        user.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500 dark:text-gray-400 ml-1",
                                                            children: [
                                                                "(",
                                                                user.role,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/CreateMeetingModal.js",
                                                            lineNumber: 261,
                                                            columnNumber: 59
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                                    lineNumber: 259,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, user.id, true, {
                                            fileName: "[project]/app/components/CreateMeetingModal.js",
                                            lineNumber: 251,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 246,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 242,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                    children: t('meetings.notes')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 270,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.notes,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                notes: e.target.value
                                            })),
                                    rows: 3,
                                    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100",
                                    placeholder: t('meetings.addMeetingNotes')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 273,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 269,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100",
                                    children: t('meetings.cancel')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 283,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                                    children: t('meetings.createMeeting')
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CreateMeetingModal.js",
                                    lineNumber: 290,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CreateMeetingModal.js",
                            lineNumber: 282,
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
_s(CreateMeetingModal, "KMd++Eckhpmpmp3LG5G7vZMuYr4=", false, function() {
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
"[project]/app/components/MeetingListItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const MeetingListItem = ({ meeting, users })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const formatDateTime = (datetime)=>{
        if (!datetime) return '';
        try {
            const date = new Date(datetime);
            return {
                date: date.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }),
                time: date.toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
        } catch (error) {
            return {
                date: '',
                time: ''
            };
        }
    };
    const { date, time } = formatDateTime(meeting.date);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4 hover:shadow-md transition-shadow",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-gray-800 dark:text-gray-200",
                                children: meeting.title
                            }, void 0, false, {
                                fileName: "[project]/app/components/MeetingListItem.js",
                                lineNumber: 34,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: date
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MeetingListItem.js",
                                        lineNumber: 36,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-blue-600",
                                        children: time
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/MeetingListItem.js",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/MeetingListItem.js",
                                lineNumber: 35,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/MeetingListItem.js",
                        lineNumber: 33,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 32,
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
                                    lineNumber: 45,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MeetingListItem.js",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 44,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: meeting.location
                        }, void 0, false, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 48,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 43,
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
                            lineNumber: 54,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        users?.[meeting.owner] || meeting.owner
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 53,
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
                            lineNumber: 60,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-600",
                            children: meeting.participants.map((p)=>users?.[p] || p).join(', ')
                        }, void 0, false, {
                            fileName: "[project]/app/components/MeetingListItem.js",
                            lineNumber: 61,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 59,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                meeting.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-sm text-gray-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "line-clamp-2",
                        children: meeting.notes
                    }, void 0, false, {
                        fileName: "[project]/app/components/MeetingListItem.js",
                        lineNumber: 69,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/MeetingListItem.js",
                    lineNumber: 68,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MeetingListItem.js",
            lineNumber: 31,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/MeetingListItem.js",
        lineNumber: 30,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MeetingListItem, "et0rtyBX9+PF3bvqObLm/ZqdODw=", false, function() {
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
;
;
;
;
function Meetings() {
    _s();
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["app"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"])();
    const [meetings, setMeetings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [orgId, setOrgId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Получение текущей организации пользователя
    const getCurrentUserOrg = async (userId)=>{
        try {
            // Ищем пользователя в подколлекциях organizations/{orgId}/users
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
            console.log(`Found ${querySnapshot.docs.length} meetings in organization`);
            const meetingsList = querySnapshot.docs.map((doc)=>{
                const data = doc.data();
                console.log('Meeting data:', doc.id, data);
                return {
                    id: doc.id,
                    ...data
                };
            });
            console.log(`Total meetings to display: ${meetingsList.length}`);
            console.log('Current user ID:', userId);
            // Показываем все встречи без фильтрации (временно для отладки)
            setMeetings(meetingsList);
        } catch (error) {
            console.error('Error fetching meetings:', error);
        } finally{
            setLoading(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-50 dark:bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                orgId: orgId
            }, void 0, false, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 117,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        orgId: orgId
                    }, void 0, false, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-900 dark:text-gray-100",
                                        children: t('meetings.title')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 122,
                                        columnNumber: 25
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
                                                    lineNumber: 129,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/meetings/page.js",
                                                lineNumber: 128,
                                                columnNumber: 29
                                            }, this),
                                            t('meetings.scheduleMeeting')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-700 dark:text-gray-300",
                                children: [
                                    t('loading'),
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this) : meetings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-gray-500 dark:text-gray-400",
                                children: t('meetings.noMeetings')
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl",
                                children: meetings.map((meeting)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MeetingListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        meeting: meeting,
                                        users: users
                                    }, meeting.id, false, {
                                        fileName: "[project]/app/pages/meetings/page.js",
                                        lineNumber: 141,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/pages/meetings/page.js",
                                lineNumber: 139,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    orgId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CreateMeetingModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isModalOpen,
                        onClose: ()=>setIsModalOpen(false),
                        onSuccess: handleSuccess,
                        orgId: orgId
                    }, void 0, false, {
                        fileName: "[project]/app/pages/meetings/page.js",
                        lineNumber: 151,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pages/meetings/page.js",
                lineNumber: 118,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pages/meetings/page.js",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
_s(Meetings, "/f/LMHDq0AREU2iBYVWZUfEpjgU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrings"]
    ];
});
_c = Meetings;
var _c;
__turbopack_context__.k.register(_c, "Meetings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_d47175ec._.js.map