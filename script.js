document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
      day.addEventListener('click', () => {
        // Example of dynamic behavior
        day.style.backgroundColor = 'lightblue';
      });
    });
  });
  