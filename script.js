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
  



 
  document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-day]');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopupButton = document.getElementById('close-popup');

    // Get today's date
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // JavaScript months are 0-indexed
    const currentDate = today.getDate();

    checkboxes.forEach(checkbox => {
        const day = parseInt(checkbox.getAttribute('data-day'));

        // Check if the checkbox state is stored in local storage
        const storedState = localStorage.getItem(`day${day}`);
        if (storedState === 'checked') {
            checkbox.checked = true;
            checkbox.disabled = true; // Disable the checkbox if already checked
        }

        // Disable checkboxes for future days
        if (currentMonth === 11 && currentDate < day) {
            checkbox.disabled = true;
        }

        checkbox.addEventListener('click', function(event) {
            const isChecked = checkbox.checked;

            if (isChecked) {
                if (currentMonth === 11) { // Adjusted to December
                    if (currentDate >= day) {
                        // Redirect to the specified path with the current day
                        window.location.href = `./December/Day_${day}/content.html`;
                    } else {
                        // Show the popup with the message
                        popupMessage.textContent = "Bruh, det er ikke denne dagen enda.";
                        popup.style.display = 'flex';
                    }
                } else {
                    // Show the popup with the message
                    popupMessage.textContent = "Bruh, det er ikke desember enda.";
                    popup.style.display = 'flex';
                }

                // Save the checkbox state in local storage
                localStorage.setItem(`day${day}`, 'checked');
                checkbox.disabled = true; // Disable the checkbox after it's checked
            }
        });
    });

    // Close the popup when the "OK" button is clicked
    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});


