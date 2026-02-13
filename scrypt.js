const slider = document.getElementById('imageSlider');
const overlay = document.getElementById('imageOverlay');
const divider = document.getElementById('divider');

slider.addEventListener('input', function() {
    const value = this.value;
    
    // Чем больше значение, тем больше видно кота ДО 
    overlay.style.width = value + '%';
    divider.style.left = value + '%';
    
    // Прячем разделитель в крайних положениях
    if (value == 0) {
        divider.style.opacity = '0';
    } else if (value == 100) {
        divider.style.opacity = '0';
    } else {
        divider.style.opacity = '1';
    }
});

window.addEventListener('DOMContentLoaded', function() {
    slider.value = 0;
    overlay.style.width = '100%';
    divider.style.left = '100%';
    divider.style.opacity = '0';
});