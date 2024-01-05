const elModalButton = document.querySelector('.btn-modal');
const elModal = document.querySelector('.modal');

elModalButton.addEventListener('click', (evt) => {
	elModal.classList.add('modal--open');

});

elModal.addEventListener('click', (evt) => {

	if (evt.target.matches('.modal__close-btn') || evt.target.matches('.modal')) {
		evt.currentTarget.classList.remove('modal--open');
	}
});
