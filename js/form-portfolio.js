document.querySelector('.subscribe-form').addEventListener('submit', callback);

function callback(e) {
	e.preventDefault();

	new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));

	e.currentTarget.reset();
}
