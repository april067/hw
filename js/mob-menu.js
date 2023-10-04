;(() => {
	const refs = {
		openMenuBtn: document.querySelector('[data-menu-open]'),
		closeMenuBtn: document.querySelector('[data-menu-close]'),
		menu: document.querySelector('[data-menu]'),
		closeMenuContacts: document.querySelector('.mob-nav__link--contacts'),
	}

	refs.openMenuBtn.addEventListener('click', toggleMenu)
	refs.closeMenuBtn.addEventListener('click', toggleMenu)

	refs.closeMenuContacts.addEventListener('click', closeMenu)

	function toggleMenu() {
		refs.menu.classList.toggle('is-hidden')
		document.body.classList.toggle('menu-open')

		console.log('==== click menu-button ====')
	}

	function closeMenu() {
		refs.menu.classList.add('is-hidden')
		document.body.classList.remove('menu-open')
	}
})()
