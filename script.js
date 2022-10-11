document.addEventListener('DOMContentLoaded', () => {
	const burgerMenu = document.querySelector('.burger-menu');
	const websiteNavigation = document.querySelector('.navigation');
	if(burgerMenu) {
		burgerMenu.addEventListener('click', () => {
			burgerMenu.classList.toggle('_active');
			document.body.classList.toggle('_lock');
			if(websiteNavigation) {
				websiteNavigation.classList.toggle('_active');
			}
		});
	};

	const swiper = new Swiper('.swiper', {
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 5500,
		},
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'bullets',
		},
	});
});