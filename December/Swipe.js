document.addEventListener('DOMContentLoaded', (event) => {
    let xStart = null;
    let yStart = null;
    let isDragging = false;

    function handleGestureStart(evt) {
        xStart = evt.clientX || evt.touches[0].clientX;
        yStart = evt.clientY || evt.touches[0].clientY;
        isDragging = true;
    }

    function handleGestureMove(evt) {
        if (!xStart || !yStart || !isDragging) {
            return;
        }

        let xEnd = evt.clientX || evt.touches[0].clientX;
        let yEnd = evt.clientY || evt.touches[0].clientY;

        let xDiff = xStart - xEnd;
        let yDiff = yStart - yEnd;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                navigateToDay('next');
            } else {
                navigateToDay('previous');
            }
            // Reset values after determining swipe
            xStart = null;
            yStart = null;
            isDragging = false;
        }
    }

    function handleGestureEnd(evt) {
        // Reset the initial touch position and dragging state
        xStart = null;
        yStart = null;
        isDragging = false;
    }

    // Add mouse event listeners for desktop browsers
    document.addEventListener('mousedown', handleGestureStart, false);
    document.addEventListener('mousemove', handleGestureMove, false);
    document.addEventListener('mouseup', handleGestureEnd, false);

    // Add touch event listeners for mobile browsers
    document.addEventListener('touchstart', handleGestureStart, false);
    document.addEventListener('touchmove', handleGestureMove, false);
    document.addEventListener('touchend', handleGestureEnd, false);

    function navigateToDay(direction) {
        let currentDay = getCurrentDay();
        let targetDay;

        if (direction === 'next') {
            targetDay = currentDay >= 24 ? 1 : currentDay + 1; // Loop back to day 1 if it's the last day
        } else if (direction === 'previous') {
            targetDay = currentDay <= 1 ? 24 : currentDay - 1; // Loop to day 24 if it's the first day
        }

        window.location.href = `/December/Day_${targetDay}/content.html`;
    }

    function getCurrentDay() {
        let path = window.location.pathname;
        let dayMatch = path.match(/Day_(\d+)/);
        return dayMatch ? parseInt(dayMatch[1], 10) : 1;
    }
});
