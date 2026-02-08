// Keyboard navigation for Kick Off 2 menu
(function() {
    const menuItems = Array.from(document.querySelectorAll('.col'));
    let currentIndex = 0;

    // Number of columns in the grid
    const COLS = 3;

    // Initialize first item as selected
    selectItem(currentIndex);

    // Listen for keyboard events
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                currentIndex = Math.max(0, currentIndex - COLS);
                selectItem(currentIndex);
                break;
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = Math.min(menuItems.length - 1, currentIndex + COLS);
                selectItem(currentIndex);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (currentIndex % COLS > 0) {
                    currentIndex--;
                }
                selectItem(currentIndex);
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (currentIndex % COLS < COLS - 1) {
                    currentIndex++;
                }
                selectItem(currentIndex);
                break;
            case ' ':
                e.preventDefault();
                clickItem(currentIndex);
                break;
        }
    });

    function selectItem(index) {
        // Remove active class from all items
        menuItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to current item
        menuItems[index].classList.add('active');
    }

    function clickItem(index) {
        const item = menuItems[index];
        const link = item.querySelector('a');
        
        if (link) {
            // If there's a link, navigate to it
            window.location.href = link.href;
        } else {
            // Otherwise, trigger a click event for any click handlers
            item.click();
        }
    }
})();
