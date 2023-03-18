const swiperTeam = new Swiper('.swiper-team', {
	loop: true,
	speed: 500,

	autoplay: {
		delay: 2000
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

});

const testimonial = new Swiper('.swiper-bg', {
	loop: true,
	speed: 600,

	autoplay: {
		delay: 2000
	},

	pagination : {
		el: '.swiper-pagination',
		clickable: true,
	}
})

const swiperNews = new Swiper('.swiper-news', {
	loop: true,
	speed: 500,
	direction: 'vertical',

	autoplay: {
		delay: 2500,
	},

	pagination : {
		el: '.swiper-pagination',
		clickable: true,
	}
})