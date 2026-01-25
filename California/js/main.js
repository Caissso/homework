document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const body = document.body;
    
    // Функция открытия/закрытия меню
    function toggleMenu() {
        burger.classList.toggle('burger--active');
        nav.classList.toggle('nav--active');
        body.classList.toggle('nav-open');
        
        // Обновляем атрибуты для доступности
        const isExpanded = burger.classList.contains('burger--active');
        burger.setAttribute('aria-expanded', isExpanded);
    }
    
    // Обработчик клика по бургеру
    burger.addEventListener('click', toggleMenu);
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains('nav--active')) {
            toggleMenu();
        }
    });
    
    // Закрытие меню при нажатии на Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && nav.classList.contains('nav--active')) {
            toggleMenu();
        }
    });
    
    // Закрытие меню при изменении размера окна (если становится больше 760px)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 760 && nav.classList.contains('nav--active')) {
            toggleMenu();
        }
    });
    
    // Предотвращение скролла при открытом меню на мобильных устройствах
    let startY = 0;
    
    nav.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });
    
    nav.addEventListener('touchmove', function(e) {
        const scrollTop = nav.scrollTop;
        const scrollHeight = nav.scrollHeight;
        const height = nav.clientHeight;
        const isTop = scrollTop === 0;
        const isBottom = scrollTop + height >= scrollHeight;
        const up = e.touches[0].clientY > startY;
        
        if ((isTop && up) || (isBottom && !up)) {
            e.preventDefault();
        }
    });
});
