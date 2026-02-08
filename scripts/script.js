// Keyboard and mouse navigation for Kick Off 2 menu
(function() {
    var items = Array.from(document.querySelectorAll('.col'));
    var cols = 3;
    var current = 0;

    select(current);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        var next = current;

        switch (e.key) {
            case 'ArrowUp':    next = current - cols; break;
            case 'ArrowDown':  next = current + cols; break;
            case 'ArrowLeft':  if (current % cols > 0) next = current - 1; break;
            case 'ArrowRight': if (current % cols < cols - 1) next = current + 1; break;
            case ' ':
            case 'Enter':
                e.preventDefault();
                activate(current);
                return;
            default:
                return;
        }

        e.preventDefault();
        if (next >= 0 && next < items.length) {
            current = next;
            select(current);
        }
    });

    // Mouse support — sync hover/click with keyboard state
    items.forEach(function(item, i) {
        item.addEventListener('mouseenter', function() {
            current = i;
            select(current);
        });
        item.addEventListener('click', function() {
            current = i;
            activate(current);
        });
    });

    function select(index) {
        items.forEach(function(item) { item.classList.remove('active'); });
        items[index].classList.add('active');
    }

    function activate(index) {
        var link = items[index].querySelector('a');
        if (link) {
            link.click();
        } else {
            items[index].click();
        }
    }
})();
