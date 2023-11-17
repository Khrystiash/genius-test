const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.open-modal');
const modalBtnOpenHero = document.getElementById('open-modal-hero');
const modalBtnClose = document.querySelector('.close-modal');

const toggleModal = () => modal.classList.toggle('is-hidden');
    
modalBtnOpenHero.addEventListener('click', toggleModal);
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);