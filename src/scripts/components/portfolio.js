'use strict';

const worksBtn = document.querySelector('.portfolio__works-btn');
const apartmentsBtn = document.querySelector('.portfolio__apartments-btn');
const housesBtn = document.querySelector('.portfolio__houses-btn');
const premisesBtn = document.querySelector('.portfolio__premises-btn');

const workImages = document.querySelector('.portfolio__work-images');
const apartmentImages = document.querySelector('.portfolio__apartment-images');
const houseImages = document.querySelector('.portfolio__house-images');
const premiseImages = document.querySelector('.portfolio__premise-images');

document.addEventListener('click', function (e) {
	if (e.target === worksBtn) {
		apartmentImages.classList.remove('grid');
		houseImages.classList.remove('grid');
		premiseImages.classList.remove('grid');
		workImages.classList.add('grid');

	} else if (e.target === apartmentsBtn) {
		workImages.classList.remove('grid');
		houseImages.classList.remove('grid');
		premiseImages.classList.remove('grid');
		apartmentImages.classList.add('grid')

	} else if (e.target === housesBtn) {
		workImages.classList.remove('grid');
		apartmentImages.classList.remove('grid');
		premiseImages.classList.remove('grid');
		houseImages.classList.add('grid')
		
	} else if (e.target === premisesBtn) {
		workImages.classList.remove('grid');
		houseImages.classList.remove('grid');
		apartmentImages.classList.remove('grid');
		premiseImages.classList.add('grid')
	}
})