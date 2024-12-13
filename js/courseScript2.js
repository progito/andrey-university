// Получаем параметры из URL
const params = new URLSearchParams(window.location.search);
const courseId = params.get('id');
const wn = document.getElementById("wn");
const nn = document.getElementById("nn");
const summa = document.getElementById("summa");


// Данные о курсах
const courses = {
    frontend: {
        title: "Junior Frontend Разработчик",
        summa: ["23990", "7250"],
        concurent: ["23,990", "199,500", "137,000", "140,000", "120,000"],
        cardsInfo: [
            {
                header: "Проекты на курсе",
                description: "Реализуйте практические проекты на JavaScript и HTML/CSS, которые помогут вам стать junior-разработчиком.",
                listItems: [
                    "Проект: Лэндинг с адаптивной версткой",
                    "Проект: Простой To-Do List с LocalStorage",
                    "Проект: Конвертер валют с использованием API",
                    "Проект: Галерея изображений с модальным окном",
                    "Проект: Чат с использованием WebSocket (Mock)",
                    "Проект: Интерактивный калькулятор",
                    "Проект: SPA на чистом JavaScript",
                    "Проект: Игра 'Крестики-нолики'",
                    "Проект: Таблица с сортировкой и фильтрацией",
                    "... и другие"
                ]
            },
            {
                header: "Гарантия трудоустройства",
                description: "Мы поможем вам найти первую работу в IT, если вы выполните все условия курса.",
                listItems: [
                    "Сданы все работы и тесты",
                    "Завершён итоговый проект",
                    "Соблюдены все рекомендации преподавателей",
                    "Курс пройден на 100%"
                ]
            }
        ],
        description: "Освойте востребованную профессию и начните карьеру в IT! Гарантия трудоустройтва и качество обучения.",
        url: "https://forms.yandex.ru/u/674d782bd0468881a51223ea/",
        nast: ["4", "от 2 до 3"],
        tags: [
            { icon: "fa-solid fa-laptop-code", text: "Изучите HTML, CSS и JavaScript с нуля" },
            { icon: "fa-solid fa-code", text: "Освойте основы программирования" },
            { icon: "fa-solid fa-paint-brush", text: "Создавайте красивые и адаптивные сайты" },
            { icon: "fa-solid fa-server", text: "Научитесь работать с API и серверными данными" },
            { icon: "fa-solid fa-briefcase", text: "Получите практические навыки для работы" },
            { icon: "fa-solid fa-user-check", text: "Трудоустройство после окончания курса" },
            { icon: "fa-solid fa-chart-line", text: "Актуальные технологии и методологии" },
            { icon: "fa-solid fa-users", text: "Поддержка и общение с менторами" }
        ],
        faq: [
            { question: "Кто такие фронтенд разработчики?", answer: "Это специалисты, которые создают пользовательские интерфейсы сайтов и приложений." },
            { question: "Сколько зарабатывает Junior?", answer: "Средний заработок Junior Frontend разработчика составляет около 70,000 руб/мес." }
        ],
        program: [
            { module: "Вступительный модуль", topics: [
                "Как эффективно проходить курс?", 
                "Обзор модулей и уроков", 
                "Советы от Андрея"] },
            { module: "HTML & CSS", topics: [
                "Основы и синтаксис HTML & CSS", 
                "Структура HTML-документа", 
                "Теги и элементы",
                "Продвинутые Теги и элементы",
                "Атрибуты тегов",
                "Линейный и Блочный элемент",
                "HTML5 - семантика",
                "Deploy на github",
                "Что такое CSS?",
                "Селекторы",
                "Свойство display, position,...",
                "Продвинутая работа с CSS",
                "Flex & Grid",
                "Адаптивная верстка",
                "Box Model"
            ] },
            { module: "JavaScript", topics: [
                "Основы и синтаксис JS", 
                "Переменные и типы данных", 
                "Приведение типов в JS",
                "Логирование",
                "Условный оператор + Switch/Case",
                "Циклы",
                "Функции",
                "Обработка ошибок",
                "Работа со строками",
                "Объект Math",
                "Работа с массивами",
                "Дата и время",
                "ООП в JS",
                "Понятие [[Prototype]]",
                "Алгоритмы и Структуры данных",
                "JSON",
                "Асинхронный JS",
                "Promise, async/await",
                "Работа с DOM",
                "Основы Webpack",
                "ES6 Import/Export"
            ] },
            { module: "Базово о Git/Github", topics: [
                "Что такое Git/Github + установка и настройка", 
                "Основы работы с Git", 
                "Работа с Github",
                "Github-репозитории",
                "Понятие веток",
                "Слияние веток",
                "Решение конфликтов с ветками",
                "Что такое Pull-Request?",
                "Основы Gitflow",
                "Fork + доступ к репозиторию по ssh",
            ] },
            { module: "React", topics: [
                "Введение в React", 
                "Основы React",
                "Концепции React",
                "Что такое компонента?",
                "Import/Export",
                "Props & Children",
                "Handling Events",
                "React State",
                "Hooks",
                "HOC",
                "Формы",
                "Routing",
                "Context API"
            ] },
            { module: "Redux", topics: [
                "Введение в State Management", 
                "Локальный State",
                "Основы Redux + Flux круговорот",
                "Context API vs Redux",
                "Зачем нужен React-Redux?",
                "Redux Toolkit",
                "Аналог - Mobx",
                "Mobx в связке с React"
            ] },
            { module: "Основы Backend", topics: [
                "Введение", 
                "Основы работы с Node.js", 
                "Web-сервер",
                "Встроенные пакеты (fs, http, path,..)",
                "Внешние пакеты (express, axios, ..)",
                "import/export",
                "Разворот Backend #1",
                "Разворот Backend #2",
                "Связь Frontend и Backend"
            ] },
            { module: "Основы TypeScript", topics: [
                "Что такое TypeScript и для чего его используют?", 
                "Типы TypeScript",
                "Работа с типами",
                "Интерфейсы",
                "TS-Generics",
                "Интеграция в React"
            ] },
            { module: "Подготовка резюме/портфолио", topics: [
                "Как создать профиль на hh.ru?", 
                "Оформление профиля", 
                "Дизайнерское резюме",
                "Сертификаты Credly",
                "Помощь в составлении резюме",
                "Помощь в формировании портфолио (список тематик)",
            ] },
            { module: "Итоговый проект", topics: ["Итоговый проект/работа с проверкой", "Трудоустройство в IT"] }
        ]
    },
    // mfrontend: {
    //     title: "Middle Frontend Разработчик",
    //     summa: ["32800", "9990"],
    //     concurent: ["32,800", "169,000", "173,000", "214,000", "150,000"],
    //     cardsInfo: [
    //         {
    //             header: "Проекты на курсе",
    //             description: "Реализуйте практические проекты на JavaScript и HTML/CSS, которые помогут вам стать junior-разработчиком.",
    //             listItems: [
    //                 "Проект: Лэндинг с адаптивной версткой",
    //                 "Проект: Простой To-Do List с LocalStorage",
    //                 "Проект: Конвертер валют с использованием API",
    //                 "Проект: Галерея изображений с модальным окном",
    //                 "Проект: Чат с использованием WebSocket (Mock)",
    //                 "Проект: Интерактивный калькулятор",
    //                 "Проект: SPA на чистом JavaScript",
    //                 "Проект: Игра 'Крестики-нолики'",
    //                 "Проект: Таблица с сортировкой и фильтрацией",
    //                 "... и другие"
    //             ]
    //         },
    //         {
    //             header: "Гарантия трудоустройства",
    //             description: "Мы поможем вам найти первую работу в IT, если вы выполните все условия курса.",
    //             listItems: [
    //                 "Сданы все работы и тесты",
    //                 "Завершён итоговый проект",
    //                 "Соблюдены все рекомендации преподавателей",
    //                 "Курс пройден на 100%"
    //             ]
    //         }
    //     ],
    //     description: "Освойте профессиональные навыки разработки, станьте Middle Frontend разработчиком и начните успешную карьеру в IT.",
    //     url: "https://forms.yandex.ru/u/674d782bd0468881a51223ea/",
    //     nast: ["5", "от 2 до 3"],
    //     tags: [
    //         { icon: "fa-solid fa-laptop-code", text: "Продвинутая работа с JavaScript" },
    //         { icon: "fa-solid fa-layer-group", text: "Современные фреймворки: React и Redux" },
    //         { icon: "fa-solid fa-box", text: "Сборка проектов с Webpack и Vite" },
    //         { icon: "fa-solid fa-code", text: "Типизация и масштабируемость с TypeScript" },
    //         { icon: "fa-solid fa-vial", text: "Тестирование компонентов и приложений" },
    //         { icon: "fa-solid fa-server", text: "SSR и Next.js для продвинутых приложений" },
    //         { icon: "fa-solid fa-tools", text: "DevOps основы для Frontend-разработчиков" },
    //         { icon: "fa-solid fa-briefcase", text: "Подготовка к трудоустройству в IT" }
    //     ],
    //     faq: [
    //         { question: "Для кого подходит этот курс?", answer: "Для разработчиков с базовыми знаниями фронтенда, которые хотят выйти на уровень Middle и укрепить свои позиции в IT." },
    //         { question: "Какие навыки я получу?", answer: "Вы освоите современные инструменты и фреймворки, научитесь писать оптимизированный код и готовить проекты к продакшену." },
    //         { question: "Сколько зарабатывает Middle?", answer: "Средний заработок Middle Frontend разработчика составляет около 180,000 руб/мес." }
    //     ],
    //     program: [
    //         { module: "Вступительный модуль", topics: [
    //             "Как эффективно проходить курс?", 
    //             "Обзор модулей и уроков", 
    //             "Советы от Андрея",
    //             "Переходный урок с Junior"
    //         ] },
    //         { module: "JavaScript+", topics: [
    //             "Продвинутая работа с JS",
    //             "Продвинутая работа с DOM", 
    //             "Работа с cookies, localStorage", 
    //             "Основы SEO для JavaScript",
    //             "Date vs Intl",
    //             "Symbol и уникальные ключи",
    //             "Генераторы и итераторы",
    //             "Регулярные выражения (RegEx)",
    //             "Мемоизация и оптимизация функций",
    //             "Proxy и Reflect API",
    //             "Работа с Canvas API",
    //             "ESLint и форматирование кода",
    //             "Оптимизация JavaScript кода",
    //             "Работа с блобами и файлами"
    //         ] },
    //         { module: "Webpack", topics: [
    //             "Работа с Webpack",
    //             "Настройка конфигурации Webpack", 
    //             "Entry и Output, Loaders, Plugins, DevServer, ..", 
    //             "Code Splitting + Tree Shaking",
    //             "Сорсмапы",
    //             "Модули Webpack",
    //             "Оптимизация сборки",
    //             "Работа с TypeScript",
    //             "Работа с React",
    //             "Устройство сборщика",
    //             "Модульное тестирование конфигурации",
    //             "Дополнительные возможности Webpack",
    //         ] },
    //         { module: "TypeScript+", topics: [
    //             "Повторение из Junior позиции", 
    //             "Интерфейсы и Type Alias",
    //             "ООП с TS", 
    //             "Утилиты TS",
    //             "Понятие декоратор",
    //             "Namespaces",
    //             "Сторонние библиотеки TS"
    //         ] },
    //         { module: "React", topics: [
    //             "Использование ООП", 
    //             "Жизненный цикл компоненты", 
    //             "Hooks & HOC на продвинутом уровне",
    //             "Пользовательские Hooks",
    //             "Работа с Формой (Formik)",
    //             "React Router V6",
    //             "Error Boundaries в React",
    //             "Lazy Loading компонентов",
    //             "Мемоизация: React.memo, useMemo",
    //             "Паттерн Render-Props",
    //             "React Strict Mode",
    //             "Оптимизация",
    //             "PWA"
    //         ] },
    //         { module: "State Management", topics: [
    //             "Повторение из Junior", 
    //             "Redux изнутри", 
    //             "Связь React и Redux",
    //             "Redux Toolkit",
    //             "Архитектурные подходы",
    //             "Продвинутая работа с Redux",
    //             "Продвинутая работа с Mobx"
    //         ] },
    //         { module: "Тестирование ПО", topics: [
    //             "Введение", 
    //             "Виды и типы тестов", 
    //             "Основы тестировки в React",
    //             "Взаимодействия с элементами",
    //             "Написание тестов: unit, integration,.."
    //         ] },
    //         { module: "SSR", topics: [
    //             "Введение", 
    //             "Что такое SSR?", 
    //             "Делаем свой SSR",
    //             "Основы Next.js",
    //             "Routing & Pages",
    //             "Работа с данными",
    //             "SEO-оптимизации",
    //             "Практическое применение"
    //         ] },
            
    //         { module: "DevOps (или же FrontOps)", topics: [
    //             "Введение", 
    //             "Что такое DevOps?", 
    //             "Что такое Docker?",
    //             "Основы работы с Docker",
    //             "Настройка серверной части"
    //         ] },
    //         { module: "SCRUM", topics: [
    //             "Что такое SCRUM?", 
    //             "Agile", 
    //             "Фреймворки в Agile",
    //             "Артефакты в Scrum, События",
    //             "Scrum-команда",
    //             "Типовые ошибки"
    //         ] },
    //         { module: "Подготовка резюме/портфолио", topics: [
    //             "Как создать профиль на hh.ru?", 
    //             "Оформление профиля", 
    //             "Дизайнерское резюме",
    //             "Сертификаты Credly",
    //             "Помощь в составлении резюме",
    //             "Помощь в формировании портфолио (список тематик)",
    //         ] },
    //         { module: "Итоговый проект", topics: ["Итоговый проект/работа с проверкой", "Трудоустройство в IT"] }
    //     ]
    // },
    python: {
        title: "Junior Python Разработчик",
        summa: ["17990", "5800"],
        concurent: ["17,990", "169,000", "173,000", "214,000", "100,000"],
        cardsInfo: [
            {
                header: "Проекты на курсе",
                description: "Реализуйте практические проекты на Python, которые помогут вам стать junior-разработчиком.",
                listItems: [
                    "Проект: Простой калькулятор (GUI)",
                    "Проект: Умный калькулятор (GUI)",
                    "Проект: API для управления задачами (To-Do List)",
                    "Проект: Анализ данных и визуализация (графики)",
                    "Проект: Генератор паролей",
                    "Проект: Конвертер валют",
                    "Проект: Игра 'Угадай число'",
                    "Проект: Парсер со сбором данных с сайта",
                    "... и другие"
                ]
            },
            {
                header: "Гарантия трудоустройства",
                description: "Мы поможем вам найти первую работу в IT, если вы выполните все условия курса.",
                listItems: [
                    "Сданы все работы и тесты",
                    "Завершён итоговый проект",
                    "Соблюдены все рекомендации преподавателей",
                    "Курс пройден на 100%"
                ]
            }
        ],
        description: "Освойте Python для работы с данными и backend-разработки. Гарантия трудоустройтва и качество обучения.",
        nast: ["3", "от 1 до 2"],
        url: "https://forms.yandex.ru/u/674d782bd0468881a51223ea/",
        tags: [
            { icon: "fa-solid fa-python", text: "Освойте Python для начинающих" },
            { icon: "fa-solid fa-database", text: "Научитесь работать с базами данных" },
            { icon: "fa-solid fa-chart-bar", text: "Поработаете с данными" },
            { icon: "fa-solid fa-server", text: "Изучите backend-разработку с Flask" },
            { icon: "fa-solid fa-cogs", text: "Познакомитесь с тестирование ПО" },
            { icon: "fa-solid fa-briefcase", text: "Начнете карьеру в IT-индустрии" },
            { icon: "fa-solid fa-globe", text: "Создадите свое API" }
        ],
        faq: [
            { question: "Кто такие Python разработчики?", answer: "Это специалисты, которые пишут код на Python для веба, анализа данных, автоматизации и AI." },
            { question: "Сколько зарабатывает Junior?", answer: "Средний заработок Junior Python разработчика составляет около 60,000 руб/мес." }
        ],
        program: [
            { module: "Вступительный модуль", topics: [
                "Как эффективно проходить курс?", 
                "Обзор модулей и уроков", 
                "Советы от Андрея"] },
            { module: "Основы Python", topics: [
                "Синтаксис",
                "Переменные и типы данных",
                "Преобразование типов", 
                "Управляющие конструкции",
                "Функции",
                "Коллекции",
                "Работа с файлами",
                "PEP",
                "и другие основы.."
            ] },
            { module: "ООП", topics: [
                "Что такое ООП?", 
                "Понятие класса и объекта", 
                "Конструктор/Деструктор класса",
                "Что такое self?",
                "Атрибуты и методы класса. А также их разновидности..",
                "Концепции ООП",
                "Как работает super().__init__()",
                "Что такое __slots__?",
                "SOLID-принципы",
                "Исключения и обработка ошибок",
                "Асинхронный Python",
                "Итераторы и Генераторы + Интерспекция",
                "Паттерны программирования"
            ] },
            { module: "Алгоритмы и Структуры Данных (АИСД)", topics: [
                "Алгоритмы поиска данных", 
                "Алгоритмы сортировки данных", 
                "Оценка сложности программного кода",
                "Структуры данных: стек/очередь и дек",
                "Структура данных: связный список",
                "ХЕШ-таблица + графы",
                "Базово о деревьях",
            ] },
            { module: "Модули и Библиотеки", topics: [
                "Что такое PIP?", 
                "Типы модулей и библиотек", 
                "Конструкция if __name__ == '__main__'",
                "Стандартные модули",
                "Внешние модули",
                "Что такое виртуальное окружение?",
                "О копировании объектов (deepcopy vs copy)",
                "Обзор модуля PyQt для desktop app"
            ] },
            { module: "Работа с Базой Данных (sqlite, mysql)", topics: [
                "Что такое БД?", 
                "Основы работы с SQLite", 
                "Типы связей в базе",
                "Понятие индексов и транзакций",
                "Основы MySQL",
                "Сходства MySQL и SQLite",
                "Базово об ORM, SQLAlchemy",
            ] },
            { module: "Тестирование ПО", topics: [
                "Виды и типы тестов", 
                "Юнит-тесты. Основы написания.", 
                "unittest",
                "Изучение фреймворка PyTest",
                "Понятие Code Coverage",
                "Организация тестов",
                "Что такое CI/CD?",
            ] },
            { module: "Основы Django/Flask + FastAPI", topics: [
                "Базово об HTML", 
                "Основы Flask", 
                "Основы Django",
                "Основы Fast API",
                "Что такое API?",
                "Что такое Swagger UI?",
            ] },
            { module: "Подготовка резюме/портфолио", topics: [
                "Как создать профиль на hh.ru?", 
                "Оформление профиля", 
                "Дизайнерское резюме",
                "Сертификаты Credly",
                "Помощь в составлении резюме",
                "Помощь в формировании портфолио (список тематик)",
            ] },
            { module: "Итоговый проект", topics: [
                "Итоговый проект/работа с проверкой",
                "Трудоустройство в IT"
            ] }
        ]
    },
    html: {
        title: "Основы HTML",
        description: "Изучите HTML с нуля и создадите свои первые веб-страницы. Подготовитесь к изучению frontend-разработки.",
        url: "https://forms.yandex.ru/u/674d7c6e90fa7b825424c86b/",
        tags: [
            { icon: "fa-solid fa-code", text: "Изучите основы HTML" },
            { icon: "fa-solid fa-file-code", text: "Изучите структуры веб-страниц" },
            { icon: "fa-solid fa-tools", text: "Современные инструменты разработчика" },
            { icon: "fa-solid fa-project-diagram", text: "Создадите крутые макеты" },
            { icon: "fa-solid fa-globe", text: "Опубликуете свои первый сайт на github" }
        ],
        faq: [
            { question: "Что такое HTML?", answer: "HTML — это язык разметки, который используется для создания структуры веб-страниц." },
            { question: "Что можно сделать с помощью простого HTMK?", answer: "Вы сможете создавать простые веб-сайты (без стилей пока что) для различных устройств." }
        ],
        program: [
            { module: "Знакомство с WEB", topics: [
                "Что такое web?", 
                "Версии web", 
                "Что такое интернет?",
                "Что такое IP/PORT?",
                "Как работает DNS?",
                "Протоколы TCP, UDP",
                "HTTP и HTTPS: структура запросов и ответов",
                "Клиент-Серверная архитектура",
                "Общая схема работы интернета"
            ] },
            { module: "Основы HTML", topics: [
                "Структура HTML-документа", 
                "Теги и элементы", 
                "Атрибуты тегов",
                "Отличие линейного и блочного элемента",
                "Подробно о <meta>, основы SEO",
                "Понятие Доступность (Accessibility)",
                "Базово о Emmet"
            ] },
            { module: "HTML5 - семантика", topics: [
                "Введение в HTML5", "Что такое семантика?", "Семантические теги"] },
            { module: "Deploy проекта на GitHub", topics: ["Поверхностное знакомство с Git", "Создание простого проекта на HTML", "Deploy проекта на GitHub"] },
            { module: "Итоговый проект", topics: ["Итоговый проект/работа с проверкой"] },
        ]
    },
    git: {
        title: "Основы Git",
        description: "Освойте Git с нуля и научитесь эффективно работать с GitHub/GitLab.",
        url: "https://forms.yandex.ru/u/674d7c6e90fa7b825424c86b/",
        tags: [
            { icon: "fa-solid fa-code-branch", text: "Изучите основы Git" },
            { icon: "fa-solid fa-cloud", text: "Работа с GitHub и GitLab" },
            { icon: "fa-solid fa-file-upload", text: "Управление репозиториями" },
            { icon: "fa-solid fa-undo", text: "Откаты, ветки, слияния" },
            { icon: "fa-solid fa-terminal", text: "Git через командную строку" }
        ],
        faq: [
            { question: "Что такое Git?", answer: "Git — это распределённая система контроля версий, позволяющая отслеживать изменения в коде и работать над проектом в команде." },
            { question: "Почему важно изучить Git?", answer: "Git — незаменимый инструмент для разработки: он помогает сохранить изменения, предотвратить потери данных и эффективно сотрудничать с командой." }
        ],
        program: [
            { module: "Введение в Git", topics: [
                "Что такое Git и зачем он нужен?",
                "Установка Git на различных ОС",
                "Базовые настройки: пользователь, редактор, конфигурации"
            ] },
            { module: "Основы работы с Git", topics: [
                "Создание локального репозитория",
                "Добавление файлов и фиксация изменений (коммиты)",
                "Просмотр истории коммитов"
            ] },
            { module: "Работа с удалёнными репозиториями", topics: [
                "Подключение к GitHub/GitLab",
                "Клонирование репозиториев",
                "Push и Pull: отправка и получение изменений"
            ] },
            { module: "Ветки и слияния", topics: [
                "Создание и переключение веток",
                "Слияние веток",
                "Решение конфликтов при слиянии"
            ] },
            { module: "Работа в команде", topics: [
                "Fork и Pull Request",
                "Код-ревью",
                "Работа с .gitignore"
            ] },
            { module: "Deploy проекта", topics: [
                "Выгрузка проекта на GitHub Pages",
                "Настройка доступа к репозиториям",
                "Лучшие практики работы с репозиториями"
            ] },
            { module: "Итоговый проект", topics: [
                "Создание полноценного проекта с использованием Git",
                "Эффективное управление версиями и публикация итогового проекта"
            ] }
        ]
    },
    pcjob: {
        title: "Основы работы с компьютером",
        description: "Освойте основные навыки работы с ПК, файловыми системами и базовыми программами.",
        url: "https://forms.yandex.ru/u/674d7c6e90fa7b825424c86b/",
        tags: [
            { icon: "fa-solid fa-desktop", text: "Навыки работы с ПК" },
            { icon: "fa-solid fa-folder-open", text: "Работа с файлами и папками" },
            { icon: "fa-solid fa-keyboard", text: "Эффективное использование клавиатуры и мыши" },
            { icon: "fa-solid fa-wifi", text: "Настройка подключения к интернету" },
            { icon: "fa-solid fa-shield-alt", text: "Основы безопасности на ПК" }
        ],
        faq: [
            { question: "Для кого этот курс?", answer: "Этот курс подходит для начинающих пользователей, которые хотят уверенно пользоваться компьютером в повседневной жизни." },
            { question: "Что я смогу делать после курса?", answer: "Вы научитесь работать с компьютером: управлять файлами, использовать базовые программы, настраивать интернет-соединение и защищать свои данные." }
        ],
        program: [
            { module: "Введение в работу с компьютером", topics: [
                "Что такое ПК и его основные компоненты",
                "Включение, перезагрузка и выключение компьютера",
                "Принцип работы компьютера",
                "Что такое операционные системы?"
            ] },
            { module: "Работа с Windows OS", topics: [
                "Создание, перемещение и удаление файлов и папок",
                "Понимание файловой структуры компьютера",
                "Установка и удаление программ",
                "Работа с текстовыми редакторами (Word, Блокнот)",
                "Базовое понимание что такое excel-таблицы?",
                "Основы работы с браузером: поиск информации, загрузка файлов",
                "Что такое PATH?",
                "30 Базовых команд CMD",
                "Работа с VSCode"
            ] },
            { module: "Работа с Linux OS", topics: [
                "Создание, перемещение и удаление файлов и папок",
                "Установка и удаление программ",
                "Обновление пакетов",
                "Пользователи, Группы пользователей и Суперпользователь",
                "Что такое sudo?",
                "Понятие виртуальной машины",
                "Что такое сервис labex?",
                "Основной акцент на терминале Linux",
                "Команды терминала",
                "Практическое задание по терминалу"
            ] },
            { module: "Как итог..", topics: [
                "Тезис по курсу",
                "Получение сертификата"
            ] }
        ]
    },
    // ejob: {
    //     title: "Накрутка опыта работы",
    //     description: "Освойте навыки, которые помогут вам создать впечатляющее резюме с примерами выполненных проектов и имитацией коммерческого опыта.",
    //     url: "https://forms.yandex.ru/u/674d7c6e90fa7b825424c86b/",
    //     tags: [
    //         { icon: "fa-solid fa-briefcase", text: "Создание опыта для резюме" },
    //         { icon: "fa-solid fa-project-diagram", text: "Имитация коммерческих проектов" },
    //         { icon: "fa-solid fa-file-alt", text: "Разработка документов для работы" },
    //         { icon: "fa-solid fa-network-wired", text: "Работа в команде" },
    //         { icon: "fa-solid fa-trophy", text: "Итоговое портфолио" }
    //     ],
    //     faq: [
    //         { question: "Как накрутить опыт работы?", answer: "Курс включает выполнение практических задач, имитирующих реальные проекты, чтобы вы могли добавлять их в своё резюме." },
    //         { question: "Кому подойдёт этот курс?", answer: "Тем, кто хочет получить базовые знания и примеры коммерческой деятельности для успешного трудоустройства." }
    //     ],
    //     program: [
    //         { module: "Основы коммерческого опыта", topics: [
    //             "Что такое коммерческий опыт и как его получить?",
    //             "Имитация рабочих процессов в команде",
    //             "Основные роли в проектах и распределение задач"
    //         ] },
    //         { module: "Практика в проектах", topics: [
    //             "Выполнение заданий, имитирующих работу по найму",
    //             "Совместное выполнение задач в учебной команде",
    //             "Создание итогового проекта"
    //         ] }
    //     ]
    // }




};

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });
});


// Отображаем информацию о курсе
const course = courses[courseId];

if (course.nast) {
    wn.textContent = course.nast[0];
    nn.textContent = course.nast[1];
    summa.textContent = course.summa[0]
    const coursesFirm = document.getElementsByClassName("courses-pract-off");
    Array.from(coursesFirm).forEach((value, index) => {
        coursesFirm[index].textContent = course.concurent[index];
    });
    course.cardsInfo.forEach((card, index) => {
        const section = document.querySelector(`#section${index + 1}`);
        if (section) {
            // Заголовок
            const header = section.querySelector(".header-section");
            if (header) {
                header.textContent = card.header;
            }
    
            // Описание
            const description = section.querySelector(".description-section");
            if (description) {
                description.textContent = card.description;
            }
    
            // Список
            const list = section.querySelector(".list-items-section");
            if (list) {
                list.innerHTML = ""; // Очистить текущий список
                card.listItems.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    list.appendChild(li);
                });
            }
        }
    });

} else {
    document.getElementsByClassName("mentor-section")[0].style.display = "none"
    document.getElementById("section1").style.display = "none"
    document.getElementById("section2").style.display = "none"
    document.getElementById("section3").style.display = "none"
}


if (course) {
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;

    // FAQ Section
    const faqContainer = document.getElementById('faq-questions');
    course.faq.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('diagnostic-text');
        faqItem.innerHTML = `<h2>${item.question}</h2><p>${item.answer}</p>`;
        faqContainer.appendChild(faqItem);
    });
    const btn = document.getElementById("buy");
    btn.addEventListener('click', ()=>{window.location.href=course.url})
    const btn2 = document.getElementById("buy2");
    
    btn2.addEventListener('click', ()=>{window.location.href=course.url})

    // Training Program Section
    const programContainer = document.getElementById('course-program');
    course.program.forEach((module, index) => {
        const moduleElement = document.createElement('div');
        moduleElement.classList.add('module');
        moduleElement.innerHTML = `
            <strong><i class="fa-solid fa-book"></i> ${module.module}</strong>
            <div class="module-content">
                <ul>
                    ${module.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
        `;
        moduleElement.addEventListener('click', () => {
            const content = moduleElement.querySelector('.module-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
        programContainer.appendChild(moduleElement);
    });
    // Добавление преимуществ (tags)
    const tagsContainer = document.getElementById('course-tags');
    course.tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('benefit-item');
        tagElement.innerHTML = `
            <i class="${tag.icon}"></i>
            <p>${tag.text}</p>
        `;
        tagsContainer.appendChild(tagElement);
    });
    
} else {
    document.body.innerHTML = "<h1>Курс не найден</h1>";
}


function switchTab(tabId) {
    // Удаляем класс active у всех вкладок
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    // Скрываем все карточки
    document.querySelectorAll('.info-cards').forEach(cards => cards.classList.add('hidden'));

    // Добавляем активный класс для выбранной вкладки
    if (tabId === 'with-mentor') {
        document.querySelector('.tab:nth-child(1)').classList.add('active');
        summa.textContent = course.summa[0]
    } else {
        document.querySelector('.tab:nth-child(2)').classList.add('active');
        summa.textContent = course.summa[1]
    }

    // Показываем соответствующий блок карточек
    document.getElementById(tabId).classList.remove('hidden');
}

const cards = document.querySelectorAll(".competitor-card");
        let currentIndex = 0;

        function rotateCards() {
            // Снять класс "current" с текущей карточки
            cards[currentIndex].classList.remove("current");

            // Перейти к следующей карточке
            currentIndex = (currentIndex + 1) % cards.length;

            // Добавить класс "current" к новой карточке
            cards[currentIndex].classList.add("current");
}

// Автоматическое переключение карточек каждые 5 секунд
setInterval(rotateCards, 5000);