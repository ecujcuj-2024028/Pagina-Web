document.addEventListener('DOMContentLoaded', function () {
    // Inicialización de animaciones AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out'
        });
    }

    // Efecto de cambio de color en el Navbar al bajar
    const barraNavegacion = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            barraNavegacion.classList.add('scrolled');
        } else {
            barraNavegacion.classList.remove('scrolled');
        }
    });
});