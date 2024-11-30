// Данные тем для каждого направления
const topicsData = {
    frontend: [
        "HTML-теги",
        "HTML-элементы",
        "Атрибуты",
        "CSS-селекторы",
        "Специфичность",
        "Базовые CSS-свойства",
        "Работа с цветами",
        "Flexbox и Grid",
        "JavaScript",
        "Работа с DOM",
        "ООП",
        "Асинхронное программирование",
        "Node.js",
        "TypeScript",
        "React",
        "Redux",
        "Hooks",
        "Context API"
    ],
    python: [
        "Базовый синтаксис Python",
        "Работа с файлами",
        "Функции",
        "Понятие декоратор",
        "ООП",
        "PIP",
        "Модули и пакеты",
        "Работа с библиотеками",
        "Основы Django/Flask",
        "Работа с базами данных",
        "Асинхронность в Python",
        "Написание API",
        "Тестирование ПО",
        "CI/CD",
        "Алгоритмы и Структуры данных",
        "Оценка сложности программного кода",
        "Работа с Backend"
    ],
    cpp: [
        "Основы синтаксиса C",
        "Переход в C++",
        "Функции C++",
        "Работа с памятью",
        "Работа с файлами",
        "Шаблоны (templates)",
        "Библиотека STL",
        "ООП в C++",
        "Исключения (exceptions)",
        "Потоки ввода/вывода",
        "Алгоритмы и Структуры данных",
        "Работа с многопоточностью",
        "Оценка сложности программного кода",
        "Основы WinApi",
        "debug/release",
        "Системное программирование",
        "Продвинутый WinApi",
    ],
};

// Элементы
const levelSelector = document.getElementById("level-selector");
const topicsContainer = document.getElementById("topics-container");

// Функция обновления списка тем в формате 3 колонок
function updateTopics(level) {
    // Очищаем текущий список тем
    topicsContainer.innerHTML = "";

    // Получаем темы для выбранного направления
    const topics = topicsData[level];

    // Разделяем темы на 3 колонки
    const columns = [[], [], []];
    topics.forEach((topic, index) => {
        columns[index % 3].push(topic);
    });

    // Создаем колонки и добавляем их в контейнер
    columns.forEach((columnTopics) => {
        const column = document.createElement("div");
        column.className = "column";

        columnTopics.forEach((topic) => {
            const topicElement = document.createElement("div");
            topicElement.className = "topic green";
            topicElement.textContent = topic;
            column.appendChild(topicElement);
        });

        topicsContainer.appendChild(column);
    });
}

// Обработка переключения радиокнопок
levelSelector.addEventListener("change", (event) => {
    if (event.target.name === "level") {
        updateTopics(event.target.value);
    }
});

// Инициализация с темами Frontend (по умолчанию)
updateTopics("frontend");

document.getElementsByClassName("apply-button")[0].addEventListener('click', () => {
    location.href="https://forms.yandex.ru/u/674b54a902848f11ba1de026/"
})
document.getElementsByClassName("start-button")[0].addEventListener('click', () => {
    location.href="https://forms.yandex.ru/u/674b54a902848f11ba1de026/"
})