const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.open-menu');
const menuBtnClose = document.querySelector('.close-menu');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);