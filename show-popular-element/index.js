/* const listDetail = document.querySelectorAll('.show-m');
const showButton = document.getElementById('button-mod');

listDetail[0].setAttribute('style', 'display: none;');

showButton.addEventListener('click', () => {
	listDetail[1].setAttribute('style', 'display: none;');
	listDetail[0].setAttribute('style', 'display: flex;');
	window.scrollTo({
		top: 20,
		left: 0,
		behavior: 'smooth',
	});
	showButton.setAttribute('style', 'display: none;');
});
 */
const brandImg = document.querySelectorAll('.showMoreModel li');
const buttonShow = document.querySelectorAll('.initiator-scroll');
const title = document.querySelector('.model-title');
buttonShow[1].setAttribute('style', 'display: none;');

brandImg.forEach((e) => {
	if (e.getAttribute('ng-show') == 'showAll') {
		e.setAttribute('style', 'display: none;');
	}
});

buttonShow[0].addEventListener('click', () => {
	brandImg.forEach((e) => {
		if (e.getAttribute('ng-show') == 'showAll') {
			e.setAttribute('style', 'display: block;');
		}

		title.scrollIntoView({
			behavior: 'smooth',
		});
		buttonShow[1].setAttribute('style', 'display: block;');
		buttonShow[0].setAttribute('style', 'display: none;');
	});
});

buttonShow[1].addEventListener('click', () => {
	brandImg.forEach((e) => {
		if (e.getAttribute('ng-show') == 'showAll') {
			e.setAttribute('style', 'display: none;');
		}

		title.scrollIntoView({
			behavior: 'smooth',
		});
		buttonShow[0].setAttribute('style', 'display: block;');
		buttonShow[1].setAttribute('style', 'display: none;');
	});
});
