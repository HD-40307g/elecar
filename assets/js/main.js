/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* MENU SHOW AND HIDE */
if (navMenu && navToggle && navClose) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });

    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
} else {
    console.warn('Navigation elements not found.');
}

/* REMOVE MENU ON MOBILE LINK CLICK */
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((link) =>
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
);

/*=============== CHANGE BACKGROUND HEADER ===============*/
let lastScrollY = 0;

function scrollHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    if (window.scrollY >= 50 && lastScrollY < 50) {
        header.classList.add('scroll-header');
    } else if (window.scrollY < 50 && lastScrollY >= 50) {
        header.classList.remove('scroll-header');
    }
    lastScrollY = window.scrollY;
}

// Throttle scroll event for performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(scrollHeader);
    }
});

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", { 
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidePerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    }
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card',
    },
    animation: {
        duration: 300,
    },  
});

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item');
function activeFeatured(event) {
    linkFeatured.forEach(l => l.classList.remove('active-featured'));
    event.target.classList.add('active-featured');
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured));

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) scrollUp.classList.add('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}

// Throttle scroll event for performance
let isScrollingActiveLink = false;
window.addEventListener('scroll', () => {
    if (!isScrollingActiveLink) {
        isScrollingActiveLink = true;
        requestAnimationFrame(scrollActive);
    }
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true, // enables animation reset on scroll
});

sr.reveal('.home__title, .popular__container, .features__img, .featured__filters');
sr.reveal('.home__subtitle', { delay: 500 });
sr.reveal('.home__elec', { delay: 600 });
sr.reveal('.home__img', { delay: 800 });
sr.reveal('.home__car-data', { delay: 900, interval: 100, origin: 'bottom' });
sr.reveal('.home__button', { delay: 1000, origin: 'bottom' });
sr.reveal('.about__group, .offer__data', { origin: 'left' });
sr.reveal('.about__data, .offer__img', { origin: 'right' });
sr.reveal('.features__map', { delay: 600, origin: 'bottom' });
sr.reveal('.features__card', { interval: 300 });
sr.reveal('.featured__card, .logos__content, .footer__content', { interval: 100 });
