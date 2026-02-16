document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    
    burger.innerHTML = `<img src="/assets/images/icon-burger.svg" alt="Меню" class="burger-icon">`;
    
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Меняем иконку
        if (burger.classList.contains('active')) {
            burger.innerHTML = `<img src="/assets/images/icon-close.svg" alt="Закрыть" class="close-icon">`;
        } else {
            burger.innerHTML = `<img src="/assets/images/icon-burger.svg" alt="Меню" class="burger-icon">`;
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            // Возвращаем иконку бургера
            burger.innerHTML = `<img src="/assets/images/icon-burger.svg" alt="Меню" class="burger-icon">`;
        });
    });

    // Закрытие при скролле
    window.addEventListener('scroll', function() {
        if (nav.classList.contains('active')) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            burger.innerHTML = `<img src="/assets/images/icon-burger.svg" alt="Меню" class="burger-icon">`;
        }
    });
});
const slider = document.getElementById('imageSlider');
const overlay = document.getElementById('imageOverlay');
const divider = document.getElementById('divider');
const imageBefore = document.querySelector('.image-before');

slider.addEventListener('input', function() {
    const value = this.value;
    
    // Худой кот появляется через overlay
    overlay.style.width = value + '%';
    
    // Толстый кот становится прозрачным
    imageBefore.style.opacity = 1 - (value / 100);
    
    divider.style.left = value + '%';
    this.style.background = `linear-gradient(to right, #68b738 0%, #68b738 ${value}%, #ffffff ${value}%, #ffffff 100%)`;
    
    divider.style.opacity = (value == 0 || value == 100) ? '0' : '1';
});

window.addEventListener('DOMContentLoaded', function() {
    slider.value = 0; 
    overlay.style.width = '0%'; // Худой кот не виден
    divider.style.left = '0%';
    divider.style.opacity = '0';
    imageBefore.style.opacity = '1'; // Толстый кот виден полностью
    
    slider.style.background = 'linear-gradient(to right, #68b738 0%, #68b738 0%, #ffffff 0%, #ffffff 100%)';
});