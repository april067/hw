const refs = {
	allBtn: document.querySelector('[data-filter="all"]'),
	webBtn: document.querySelector('[data-filter="web"]'),
	appsBtn: document.querySelector('[data-filter="apps"]'),
	designBtn: document.querySelector('[data-filter="design"]'),
	marketingBtn: document.querySelector('[data-filter="marketing"]'),

	all: document.querySelectorAll('[data-item]'),
	web: document.querySelectorAll('[data-item="web"]'),
	apps: document.querySelectorAll('[data-item="apps"]'),
	design: document.querySelectorAll('[data-item="design"]'),
	marketing: document.querySelectorAll('[data-item="marketing"]'),
};

refs.allBtn.addEventListener('click', onAllBtn);
refs.webBtn.addEventListener('click', onWebBtn);
refs.appsBtn.addEventListener('click', onAppsBtn);
refs.designBtn.addEventListener('click', onDesignBtn);
refs.marketingBtn.addEventListener('click', onMarketingBtn);

function addVisuallyHidden(item) {
	item.classList.add('visually-hidden');
}

function removeVisuallyHidden(item) {
	item.classList.remove('visually-hidden');
}

function onAllBtn() {
	refs.all.forEach((item) => removeVisuallyHidden(item));
}

function onWebBtn() {
	refs.all.forEach((item) => {
		addVisuallyHidden(item);

		if (item.dataset.item === 'web') {
			removeVisuallyHidden(item);
		}
	});
}

function onAppsBtn() {
	refs.all.forEach((item) => {
		addVisuallyHidden(item);

		if (item.dataset.item === 'apps') {
			removeVisuallyHidden(item);
		}
	});
}

function onDesignBtn() {
	refs.all.forEach((item) => {
		addVisuallyHidden(item);

		if (item.dataset.item === 'design') {
			removeVisuallyHidden(item);
		}
	});
}

function onMarketingBtn() {
	refs.all.forEach((item) => {
		addVisuallyHidden(item);

		if (item.dataset.item === 'marketing') {
			removeVisuallyHidden(item);
		}
	});
}
