;(() => {
	const refs = {
		themeBody: document.querySelector('body'),
		themeButton: document.querySelector('.theme-btn'),
	}

	refs.themeButton.addEventListener('click', toggleTheme)

	function toggleTheme() {
		console.log('click')
		refs.themeBody.classList.toggle('dark-theme')
		console.log(refs.themeBody)
	}
})()
