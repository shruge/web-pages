'use strict';

const menuIcon = document.querySelector('.menu-icon');
const headerNav = document.querySelector('.header-nav');
const headerNavUl = document.querySelector('.header-nav__ul');

window.onscroll = function changeBg() {
	const header = document.querySelector('#header')
	const navHeader = document.querySelector('.header-nav');
	const navHeaderContent = document.querySelector('.header-nav__content');
	
	if (window.pageYOffset > 200) {
		navHeader.classList.add('header-nav__active');
		headerNavUl.classList.add('header-nav__ul__active');
		navHeaderContent.classList.add('header-nav__content__active');
	}
	
	if (window.pageYOffset < 200) {
		navHeader.classList.remove('header-nav__active');
		headerNavUl.classList.remove('header-nav__ul__active');
		navHeaderContent.classList.remove('header-nav__content__active');
	}
}


menuIcon.addEventListener('click', () => {
	document.querySelector('body').classList.toggle('lock');
	menuIcon.classList.toggle('menu-icon__active');
	headerNav.classList.toggle('header-nav__burger');
	headerNavUl.classList.toggle('header-nav__ul__active-list');
})


document.querySelectorAll('.header-nav__link[data-goto]').forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const navLink = e.target;
		
		if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
			const gotoBlock = document.querySelector(navLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			if (menuIcon.classList.contains('menu-icon__active')) {
				document.querySelector('body').classList.remove('lock');
				menuIcon.classList.remove('menu-icon__active');
				headerNav.classList.remove('header-nav__burger');
				headerNavUl.classList.remove('header-nav__ul__active-list');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});

		}

	})
})



document.querySelector('.hello__texts-btn').addEventListener('click', () => {
	const helloBtn = document.querySelector('.hello__texts-btn');
	const helloMoreText = document.querySelector('.moreText');
	
	helloMoreText.classList.toggle('hide');
	helloMoreText.classList.contains('hide') ? helloBtn.innerHTML = 'Read More' :
	helloBtn.innerHTML = 'Read Less';
})



setTimeout(function() {
	const circle = document.querySelectorAll('.circle');
	const circleValue = document.querySelectorAll('.circle-value');

	let firstCircle = 0;
	let secondCircle = 0;
	let thirdCircle = 0;

	const iter = setInterval(() => {
		circleValue.forEach((value, i) => {
			i < 1 ? value.textContent = `${firstCircle}%`:
			i < 2 ? value.textContent = `${secondCircle}%` :
			value.textContent = `${thirdCircle}%`;
		})

		circle.forEach((circle, i) => {
			i < 1 ? circle.style.background = `conic-gradient(
				#19bd9a ${firstCircle * 3.6}deg,
				#047378 ${firstCircle * 3.6}deg
			)` : i < 2 ? circle.style.background = `conic-gradient(
				#19bd9a ${secondCircle * 3.6}deg,
				#047378 ${secondCircle * 3.6}deg
			)` : circle.style.background = `conic-gradient(
				#19bd9a ${thirdCircle * 3.6}deg,
				#047378 ${thirdCircle * 3.6}deg
			)`
		})

			thirdCircle !== 60 ? thirdCircle++ : null;
			secondCircle !== 75 ? secondCircle++ : null;
			firstCircle !== 80 ? firstCircle++ : clearInterval(iter);

	}, 10)

}, 10)



document.querySelectorAll('.portfolio-link').forEach((el, i, arr) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();

		arr.forEach(elem => {
			elem.classList.toggle('portfolio-link__active', elem === el)
		})

	})
})



const arrPortfolioElems = [
	'web', 'html', 'print',
	'identity', 'branding', 'wordpress'
];

document.getElementById('allWorks').addEventListener('click', () => {
	arrPortfolioElems.forEach(el => {
		document.querySelectorAll(`.${el}`).forEach(elem => {
			elem.style.display = 'flex';
		})
	})
})

const filterElems  = (element) => {
	arrPortfolioElems.forEach(el => {
		el !== element.getAttribute('id') ? document.querySelectorAll(`.${el}`).forEach(elem => {
			elem.style.display = 'none'
		}) : document.querySelectorAll(`.${el}`).forEach(elem => {
			elem.style.display = 'flex'
		});
	})
}



document.querySelectorAll('.btn-link').forEach((btn, i) => {
	btn.addEventListener('click', (e) => {
		i < 3 ? e.preventDefault() : null
	})
})



document.querySelector('.mailingNews__form-btn').addEventListener('click', (e) => {
	e.preventDefault();
	alert('ok');
})



document.querySelector('.user-info__form-btn').addEventListener('click', (e) => {
	e.preventDefault();
	alert('form successfully sended');
})