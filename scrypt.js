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

slider.addEventListener('input', function() {
    const value = this.value;
    
    // Чем больше значение, тем больше видно кота до 
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