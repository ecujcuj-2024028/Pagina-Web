gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Efecto Scroll Navbar
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Enlace activo al hacer scroll
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animaciones Portada
gsap.from('.titulo-portada', {
    duration: 1.5,
    scale: 0.5,
    opacity: 0,
    ease: 'elastic.out(1, 0.5)',
    delay: 0.3
});

gsap.from('.subtitulo-portada', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
});

gsap.to('.contenido-portada', {
    scrollTrigger: {
        trigger: '.seccion-portada',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 300,
    opacity: 0,
    ease: 'none'
});

// Scroll Horizontal
const horizontalSection = document.getElementById('generos');
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
            end: () => "+=" + horizontalScroll.offsetWidth
        }
    });

    // Animación títulos y descripción en paneles
    gsap.utils.toArray('.titulo-panel').forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'left 70%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    gsap.utils.toArray('.descripcion-panel').forEach((desc) => {
        gsap.from(desc, {
            scrollTrigger: {
                trigger: desc,
                start: 'left 70%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
        });
    });
}

// Animación Tarjetas de Datos
gsap.utils.toArray('.tarjeta-dato').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Títulos de sección
gsap.from('.titulo-datos', {
    scrollTrigger: {
        trigger: '.titulo-datos',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: 'elastic.out(1, 0.5)'
});