const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.open-menu');
const menuBtnClose = document.querySelector('.close-menu');
const menuBtnCloseTraditions = document.getElementById('close-menuTraditions');
const menuBtnCloseChiefs = document.getElementById('close-menuChiefs');
const menuBtnCloseFormats = document.getElementById('close-menuFormats');
const menuBtnCloseContacts = document.getElementById('close-menuContacts');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
menuBtnCloseTraditions.addEventListener('click', toggleMenu);
menuBtnCloseChiefs.addEventListener('click', toggleMenu);
menuBtnCloseFormats.addEventListener('click', toggleMenu);
menuBtnCloseContacts.addEventListener('click', toggleMenu);