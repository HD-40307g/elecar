/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* MENU SHOW AND HIDE */
if (navMenu) {
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    } else {
        console.warn('Navigation toggle element not found.');
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    } else {
        console.warn('Navigation close element not found.');
    }
}

/* REMOVE MENU ON MOBILE LINK CLICK */
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((link) =>
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
);

/* CHANGE BACKGROUND HEADER */
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
window.addEventListener('scroll', scrollHeader);

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
function activeFeatured() {
    linkFeatured.forEach(l=> l.classList.remove('active-featured'));
    this.classList.add('active-featured');
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured));

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
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

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
