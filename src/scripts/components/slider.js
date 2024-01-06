import Swiper from 'swiper/bundle';

'use strict';

const slider = new Swiper('.slider', {
	direction: 'horizontal',
	slideClass: 'slide',
	wrapperClass: 'slider-wrapper',
	spaceBetween: 30,

	pagination: {
		el: '.slider-pagination',
	},

	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
	breakpoints: {
		550: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
});