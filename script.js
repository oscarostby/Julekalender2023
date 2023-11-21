document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
      day.addEventListener('click', () => {
        // Example of dynamic behavior
        day.style.backgroundColor = 'lightblue';
      });
    });
  });




  
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.opacity = Math.random();
    snowflake.style.width = Math.random() * 5 + 'px';
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('snowflakes-container').appendChild(snowflake);
  
    // Remove snowflake after it falls
    setTimeout(() => {
      snowflake.remove();
    }, (parseFloat(snowflake.style.animationDuration) + parseFloat(snowflake.style.animationDelay)) * 1000);
  }
  
  setInterval(createSnowflake, 50); // Adjust the interval to add more/less snowflakes
  