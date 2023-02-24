const listDetail = document.querySelectorAll('.show-m');
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
