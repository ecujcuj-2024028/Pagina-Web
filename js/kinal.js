// Registrar el plugin
AOS.init({
    once: true,
    mirror: false
});
gsap.registerPlugin(ScrollTrigger);

const horizontalSection = document.getElementById('programas');
const horizontalScroll = document.getElementById('horizontalScroll');

if (horizontalSection && horizontalScroll) {
    const panels = gsap.utils.toArray('.panel-juego');

    gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: horizontalSection,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            start: "top top",
            end: () => "+=" + horizontalScroll.offsetWidth 
        }
    });
}

const swiper = new Swiper('.imagenesSwiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Efecto Parallax para el fondo de la sección
gsap.to(".seccion-horizontal", {
    backgroundPosition: "60% center",
    ease: "none",
    scrollTrigger: {
        trigger: ".seccion-horizontal",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

var partnersSwiper = new Swiper(".partnersSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});