// Keyboard navigation for Kick Off 2 menu
(function() {
    const menuItems = Array.from(document.querySelectorAll('.col'));
    console.log('Menu items found:', menuItems.length);
    let currentIndex = 0;

    // Number of columns in the grid
    const COLS = 3;

    // Initialize first item as selected
    selectItem(currentIndex);
    console.log('Keyboard navigation initialized');

    // Listen for keyboard events
    document.addEventListener('keydown', function(e) {
        console.log('Key pressed:', e.key);
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                currentIndex = Math.max(0, currentIndex - COLS);
                selectItem(currentIndex);
                console.log('Arrow Up - new index:', currentIndex);
                break;
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = Math.min(menuItems.length - 1, currentIndex + COLS);
                selectItem(currentIndex);
                console.log('Arrow Down - new index:', currentIndex);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (currentIndex % COLS > 0) {
                    currentIndex--;
                }
                selectItem(currentIndex);
                console.log('Arrow Left - new index:', currentIndex);
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (currentIndex % COLS < COLS - 1) {
                    currentIndex++;
                }
                selectItem(currentIndex);
                console.log('Arrow Right - new index:', currentIndex);
                break;
            case ' ':
                e.preventDefault();
                clickItem(currentIndex);
                console.log('Space - clicking item:', currentIndex);
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
