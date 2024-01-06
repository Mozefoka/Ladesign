'use strict';

const header = document.querySelector(".header");
const logo = document.querySelector(".header__logo-img");
const phone = document.querySelectorAll(".header__phone-img");
const burger = document.querySelector(".header__burger");
const line1 = document.querySelector(".header__burger-line1");
const line2 = document.querySelector(".header__burger-line2");
const line3 = document.querySelector(".header__burger-line3");
const menu = document.querySelector(".header__menu");
const menuList = document.querySelectorAll(".header__menu-list > li");
const scrollPortfolio = document.querySelector(".header__portfolio-scroll");
const portfolioTitle = document.querySelector(".portfolio__title");
const swiper = document.querySelector(".swiper");

window.onscroll = function () {

	if (window.scrollY > 50) {
		header.style.background = "#fff";
		header.style.color = "#393246";
		line1.style.background = "#393246";
		line2.style.background = "#393246";
		line3.style.background = "#393246";
		logo.classList.add('header__logo-img--black');
		phone.forEach(phone => phone.classList.add('header__phone-img--black'));

	} else if (window.scrollY < 50) {
		header.style.background = "inherit";
		header.style.color = "#fff";
		line1.style.background = "#fff";
		line2.style.background = "#fff";
		line3.style.background = "#fff";
		logo.classList.remove('header__logo-img--black');
		phone.forEach(phone => phone.classList.remove('header__phone-img--black'));
	}
}

burger.addEventListener('click', function () {
	burger.classList.toggle("header__burger--active");
	line1.classList.toggle("header__burger-line1--active");
	line2.classList.toggle("header__burger-line2--active");
	line3.classList.toggle("header__burger-line3--active");
	menu.classList.toggle("header__menu--active");
	swiper.classList.toggle("swiper--disable");
})

menuList.forEach(menuList => {
	menuList.addEventListener("click", function () {
		menu.classList.remove("header__menu--active");
		line1.classList.remove("header__burger-line1--active");
		line2.classList.remove("header__burger-line2--active");
		line3.classList.remove("header__burger-line3--active");
	});
})

scrollPortfolio.addEventListener('click', function () {
	portfolioTitle.scrollIntoView({ behavior: "smooth", block: "start", });
})
