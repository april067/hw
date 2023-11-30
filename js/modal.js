const refs = {
	openModalBtn: document.querySelector('[data-modal-open]'),
	closeModalBtn: document.querySelector('[data-modal-close]'),
	modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.modal.addEventListener('click', onBackdrop);

function removeKeydownListener() {
	window.removeEventListener('keydown', onKeydown);
}

function toggleModal() {
	document.body.classList.toggle('modal-open');
	refs.modal.classList.toggle('is-hidden');
	const isHidden = refs.modal.classList.contains('is-hidden');

	if (!isHidden) {
		window.addEventListener('keydown', onKeydown);
		refs.openModalBtn.disabled = true; // WTF! This condition is required because refs.openModalBtn remains in focus when the refs.modal is open. And SPACE can open-close refs.modal until windowEventListener will be removed
		return;
	}

	if (isHidden) {
		removeKeydownListener();
		refs.openModalBtn.disabled = false;
		return;
	}
}

function onBackdrop(e) {
	if (e.target === e.currentTarget) {
		toggleModal();
		removeKeydownListener();
	}
}

function onKeydown(e) {
	if (e.code === 'Escape') {
		toggleModal();
	}
}
