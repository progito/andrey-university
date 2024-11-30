document.querySelectorAll('.course-card').forEach(card => {
  card.addEventListener('click', () => {
      const courseId = card.getAttribute('data-id');
      window.location.href = `./pages/course.html?id=${courseId}`;
  });
});