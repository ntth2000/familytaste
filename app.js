/*===============SHOW MENU===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

//================SCROLL NAV===========//
const scrollNav = () => {
    const nav = document.querySelector('header')
    const nav_logo = document.querySelector('.nav__logo')
    const nav_toggle = document.querySelector('.nav__toggle')
    const nav_links = document.querySelectorAll('.nav__link')
    if (this.scrollY > 70) {
        nav.classList.add('scroll__nav');
        nav_logo.classList.add('scroll__text')
        nav_toggle.classList.add('scroll__text');
        nav_links.forEach(nav_link => {
            nav_link.style.color = "black"
        });
    } else {
        nav.classList.remove('scroll__nav');
        nav_logo.classList.remove('scroll__text');
        nav_toggle.classList.remove('scroll__text');
        nav_links.forEach(nav_link => {
            nav_link.style.color = "white"
        });
    }
}

window.addEventListener('scroll', scrollNav)
    /*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal(`.home__container, .home__img, 
.chef__img, .chef__data, .menu__title, 
.menu__subsection, .menu__img1, .menu__img2, 
.reserve__img,.reserve__container, .farm__data,
.farm__img-container, .footer__container`, {
    interval: 200
})