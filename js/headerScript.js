const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});
const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');

burgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});
document.addEventListener("DOMContentLoaded", function() {
    // Проверяем ширину экрана
    
});
const isMobile = window.innerWidth > 768;

    console.log(isMobile)
    // Если экран не мобильный (ширина больше 768px)
    if (isMobile && mobileNav) {
        // Перемещаем все дочерние элементы mobileNav в родительский элемент
        while (mobileNav.firstChild) {
            mobileNav.parentNode.insertBefore(mobileNav.firstChild, mobileNav);
        }
        
        // Удаляем саму обертку <div class="mobile-nav">
        mobileNav.remove();
        
    }
  
document.addEventListener("DOMContentLoaded", () => {
    const courses = Array.from(document.querySelectorAll(".course-card"));
    const courseContainer = document.getElementById("course-cards-container");

    // Функция для фильтрации курсов
    function filterCourses() {
        const searchQuery = document.querySelector(".search-input").value.toLowerCase();
        const courses = document.querySelectorAll(".course-card");
    
        courses.forEach(course => {
            const title = course.querySelector(".course-title").innerText.toLowerCase();
            const tags = Array.from(course.querySelectorAll(".tag"))
                .map(tag => tag.innerText.toLowerCase())
                .join(" ");
    
            if (title.includes(searchQuery) || tags.includes(searchQuery)) {
                course.style.display = "flex";
                course.style.opacity = "1";
                course.style.pointerEvents = "auto"; // Снова делаем карточку активной
            } else {
                course.style.display = "none";
                course.style.opacity = "0";
                course.style.pointerEvents = "none"; // Отключаем взаимодействие
            }
        });
    }
    

    // Функция для сортировки курсов
    function sortCourses() {
        const sortOrder = document.querySelector(".sort-select").value;
    
        const sortedCourses = [...courses].sort((a, b) => {
            const priceA = getPrice(a);
            const priceB = getPrice(b);
    
            if (sortOrder === "asc") {
                return priceA - priceB;
            } else if (sortOrder === "desc") {
                return priceB - priceA;
            } else {
                return courses.indexOf(a) - courses.indexOf(b); // Исходный порядок
            }
        });
    
        // Обновляем контейнер
        courseContainer.innerHTML = "";
        sortedCourses.forEach(course => courseContainer.appendChild(course));
    }
    

    // Функция для извлечения цены
    function getPrice(course) {
        // Попробуем извлечь цену из .new-price, если она есть, иначе из .standart-price
        const priceElement = course.querySelector(".course-price .new-price") || 
                             course.querySelector(".course-price .standart-price");
    
        // Если текст "Бесплатно", возвращаем 0
        if (priceElement && priceElement.innerText.toLowerCase() === "бесплатно") {
            return 0;
        }
    
        // Извлекаем числовое значение из текста цены
        return priceElement ? parseInt(priceElement.innerText.replace(/[^\d]/g, ""), 10) : Infinity;
    }
    

    // Привязываем функции к глобальному объекту
    window.filterCourses = filterCourses;
    window.sortCourses = sortCourses;
});
document.addEventListener("DOMContentLoaded", () => {
    const courseCards = document.querySelectorAll(".course-card");

    // Функция проверки, видна ли карточка
    function revealCards() {
        const triggerBottom = window.innerHeight * 0.9;

        courseCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add("visible");
            }
        });
    }

    // Слушаем событие скролла
    window.addEventListener("scroll", revealCards);

    // Первоначальная проверка
    revealCards();
});
document.querySelector('.btn-primary').addEventListener('click', () => {
    document.querySelector('#courses').scrollIntoView({
        behavior: 'smooth' // Добавляет плавную прокрутку
    });
});