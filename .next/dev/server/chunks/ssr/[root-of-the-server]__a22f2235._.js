module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/app/assets/strings.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCurrentLanguage",
    ()=>getCurrentLanguage,
    "getString",
    ()=>getString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return 'ru';
};
const __TURBOPACK__default__export__ = strings;
}),
"[project]/app/hooks/useStrings.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changeLanguage",
    ()=>changeLanguage,
    "changeTheme",
    ()=>changeTheme,
    "useStrings",
    ()=>useStrings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/assets/strings.js [app-ssr] (ecmascript)");
"use client";
;
;
// Функция для применения темы
const applyTheme = (theme)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
// Функция для получения сохраненной темы
const getSavedTheme = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return 'light';
    //TURBOPACK unreachable
    ;
};
const useStrings = ()=>{
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ru');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Получаем текущий язык при монтировании компонента
        const currentLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentLanguage"])();
        setLanguage(currentLang);
        // Инициализируем тему при загрузке
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        // Слушаем изменения системной темы если установлена auto
        const handleSystemThemeChange = (e)=>{
            const currentTheme = getSavedTheme();
            if (currentTheme === 'auto') {
                applyTheme('auto');
            }
        };
        // Слушаем изменения языка
        const handleLanguageChange = ()=>{
            const newLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentLanguage"])();
            setLanguage(newLang);
        };
        // Слушаем изменения темы
        const handleThemeChange = ()=>{
            const savedTheme = getSavedTheme();
            applyTheme(savedTheme);
        };
        // Добавляем слушатели
        window.addEventListener('language-changed', handleLanguageChange);
        window.addEventListener('theme-changed', handleThemeChange);
        // Слушаем изменения системной темы
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        return ()=>{
            window.removeEventListener('language-changed', handleLanguageChange);
            window.removeEventListener('theme-changed', handleThemeChange);
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);
    // Функция для получения строки
    const t = (key)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getString"])(key, language);
    };
    return {
        t,
        language,
        setLanguage
    };
};
const changeLanguage = (newLanguage)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const changeTheme = (newTheme)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
}),
"[project]/app/pages/landingPage/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useStrings.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function LandingPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useStrings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStrings"])();
    const features = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12 text-green-600",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                }, void 0, false, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 13,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 12,
                columnNumber: 17
            }, this),
            title: t('landing.features.projectManagement.title'),
            description: t('landing.features.projectManagement.description')
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12 text-green-600",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                }, void 0, false, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 22,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 21,
                columnNumber: 17
            }, this),
            title: t('landing.features.fieldNotes.title'),
            description: t('landing.features.fieldNotes.description')
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12 text-green-600",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                }, void 0, false, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 31,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 30,
                columnNumber: 17
            }, this),
            title: t('landing.features.teamCollaboration.title'),
            description: t('landing.features.teamCollaboration.description')
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12 text-green-600",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                }, void 0, false, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 40,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 39,
                columnNumber: 17
            }, this),
            title: t('landing.features.dataLibrary.title'),
            description: t('landing.features.dataLibrary.description')
        }
    ];
    const benefits = [
        t('landing.benefits.efficiency'),
        t('landing.benefits.organization'),
        t('landing.benefits.collaboration'),
        t('landing.benefits.tracking')
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-linear-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white dark:bg-gray-900 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-green-600",
                                    children: "GeoNote"
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/landingPage/page.js",
                                    lineNumber: 62,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/'),
                                        className: "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium",
                                        children: t('auth.login')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/landingPage/page.js",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/'),
                                        className: "bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors",
                                        children: t('landing.getStarted')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/landingPage/page.js",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/landingPage/page.js",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 lg:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6",
                                children: t('landing.title')
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto",
                                children: t('landing.subtitle')
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-4xl mx-auto",
                                children: t('landing.description')
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/'),
                                        className: "bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg",
                                        children: t('landing.getStarted')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/landingPage/page.js",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "border-2 border-green-600 text-green-600 dark:text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors",
                                        children: t('landing.learnMore')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/landingPage/page.js",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/landingPage/page.js",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 84,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 bg-white dark:bg-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                                    children: t('landing.features.title')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/landingPage/page.js",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
                                    children: t('landing.features.subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/landingPage/page.js",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pages/landingPage/page.js",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex justify-center",
                                            children: feature.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/landingPage/page.js",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xl font-semibold text-gray-900 dark:text-white mb-3",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/landingPage/page.js",
                                            lineNumber: 131,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-300",
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/pages/landingPage/page.js",
                                            lineNumber: 134,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/pages/landingPage/page.js",
                                    lineNumber: 127,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pages/landingPage/page.js",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 bg-green-50 dark:bg-gray-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8",
                                children: t('landing.benefits.title')
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 147,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",
                                children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-green-600 mr-3",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pages/landingPage/page.js",
                                                    lineNumber: 154,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/landingPage/page.js",
                                                lineNumber: 153,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-800 dark:text-gray-200 font-medium",
                                                children: benefit
                                            }, void 0, false, {
                                                fileName: "[project]/app/pages/landingPage/page.js",
                                                lineNumber: 156,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/pages/landingPage/page.js",
                                        lineNumber: 152,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/landingPage/page.js",
                        lineNumber: 146,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 145,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 bg-green-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl lg:text-4xl font-bold text-white mb-4",
                            children: t('landing.cta.title')
                        }, void 0, false, {
                            fileName: "[project]/app/pages/landingPage/page.js",
                            lineNumber: 167,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-green-100 mb-8 max-w-2xl mx-auto",
                            children: t('landing.cta.description')
                        }, void 0, false, {
                            fileName: "[project]/app/pages/landingPage/page.js",
                            lineNumber: 170,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push('/'),
                            className: "bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg",
                            children: t('landing.cta.button')
                        }, void 0, false, {
                            fileName: "[project]/app/pages/landingPage/page.js",
                            lineNumber: 173,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 166,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 165,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gray-900 text-white py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-green-400 mb-4",
                                children: "GeoNote"
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 186,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mb-6",
                                children: t('landing.subtitle')
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 187,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center space-x-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-gray-400 hover:text-white transition-colors",
                                        children: t('nav.home')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/landingPage/page.js",
                                        lineNumber: 191,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-gray-400 hover:text-white transition-colors",
                                        children: t('landing.features.title')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/landingPage/page.js",
                                        lineNumber: 194,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/'),
                                        className: "text-gray-400 hover:text-white transition-colors",
                                        children: t('auth.login')
                                    }, void 0, false, {
                                        fileName: "[project]/app/pages/landingPage/page.js",
                                        lineNumber: 197,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 190,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 pt-8 border-t border-gray-800 text-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "© 2025 GeoNote. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/app/pages/landingPage/page.js",
                                    lineNumber: 205,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pages/landingPage/page.js",
                                lineNumber: 204,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pages/landingPage/page.js",
                        lineNumber: 185,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pages/landingPage/page.js",
                    lineNumber: 184,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pages/landingPage/page.js",
                lineNumber: 183,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pages/landingPage/page.js",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a22f2235._.js.map