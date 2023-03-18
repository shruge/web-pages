'use strict';

const bodyPage = document.querySelector('body');
const menuIcon = document.querySelector('.menu__icon');
const burgerContent = document.querySelector('.menu-burger__content');
const headerLinks = document.querySelectorAll('.header__link[data-goto]');

headerLinks.forEach(headerlink => {
	headerlink.addEventListener('click', (e) => {
		e.preventDefault();

		const link = e.target;
		const gotoBlock = document.querySelector(headerlink.dataset.goto);
		const gotoBlockVal = gotoBlock.getBoundingClientRect().top + pageYOffset;

		if (burgerContent.classList.contains('menu-burger__content_active')) {
			bodyPage.classList.toggle('lock');
			menuIcon.classList.toggle('menu__icon_active');
			burgerContent.classList.remove('menu-burger__content_active');
		}

		window.scrollTo({
			top: gotoBlockVal,
			behavior: 'smooth',
		});

	});
})

menuIcon.addEventListener('click', () => {
	burgerContent.classList.toggle('menu-burger__content_active');
	bodyPage.classList.toggle('lock');
	menuIcon.classList.toggle('menu__icon_active');
});