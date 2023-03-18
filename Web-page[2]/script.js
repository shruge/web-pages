"use strict";

const nameCategories = document.querySelectorAll('.categories__name');

window.onscroll = function winScroll() {
	const headerNav = document.querySelector('.header-nav');

	if (window.pageYOffset > 105) {
		headerNav.classList.add('header-nav_active');
	}

	if (window.pageYOffset < 105) {
		headerNav.classList.remove('header-nav_active');
	}
}

nameCategories.forEach(item => {
	item.addEventListener("click", () => {
		item.classList.toggle("categories__name_active");
	})
})

// document.addEventListener('click', (event) => {
// "categories__name_active" может быть только 1 элементу,
// а также удаляется при клике на элементы
// без класса "categories__name"
// 
// 	nameCategories.forEach(elem => {
// 		event.target === elem ? null
// 		: elem.classList.remove('categories__name_active');
// 	})
// })

document.querySelector(".search-icon").addEventListener("click", (e) => {
	document.querySelector(".search-input").value = "";
	document.querySelector(".search-input").classList.toggle("search-input_active");
})

document.querySelector(".burger-lines").addEventListener("click", () => {
	document.querySelectorAll(".burger-line").forEach(bLines => {
		bLines.classList.toggle("burger-line_active");
	});
})

document.querySelector(".second-burger").addEventListener("click", () => {
	document.querySelectorAll(".second-burger__line").forEach(bLines => {
		bLines.classList.toggle("second-burger__line_active");
	});

	document.querySelector(".clients__nav-ul")
	.classList.toggle("clients__nav-ul_active");
})