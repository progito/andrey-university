const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextItem() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

// Авто-прокрутка каждые 3 секунды
setInterval(showNextItem, 5000);

// Инициализация первого элемента
carouselItems[currentIndex].classList.add('active');
document.addEventListener("DOMContentLoaded", function() {
    // Находим все изображения в галерее
    const images = document.querySelectorAll(".review-img");
  
    // Модальное окно и элементы для его управления
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
  
    // Проверяем, если модальное окно существует, добавляем обработчик
    if (modal && modalImg && captionText && closeBtn) {
      // Добавляем обработчик клика на каждое изображение
      images.forEach((img) => {
        img.addEventListener("click", () => {
          modal.style.display = "block";
          modalImg.src = img.src;
          captionText.innerHTML = img.alt;
        });
      });
  
      // Закрытие модального окна
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
  
      // Закрытие окна при клике вне изображения
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });
    } else {
      console.error("Ошибка: элементы модального окна не найдены.");
    }
  });
  