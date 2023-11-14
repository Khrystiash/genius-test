const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.open-modal');
const modalBtnClose = document.querySelector('.close-modal-button');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);