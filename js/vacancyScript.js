function toggleVacancy(header) {
    const details = header.nextElementSibling;
    const isOpen = details.style.display === "block";
  
    // Скрыть все открытые описания
    document.querySelectorAll('.vacancy-details').forEach((detail) => {
      detail.style.display = 'none';
    });
    document.querySelectorAll('.vacancy-header').forEach((hdr) => {
      hdr.classList.remove('active');
    });
  
    // Показать/скрыть выбранное описание
    if (!isOpen) {
      details.style.display = "block";
      header.classList.add('active');
    }
  }
  