
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.getElementsByClassName("dropdown");
    Array.from(dropdowns).forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            this.children[1].style.display = 'block';
        });
        dropdown.addEventListener('mouseout', function() {
            this.children[1].style.display = 'none';
        });
    });
});



