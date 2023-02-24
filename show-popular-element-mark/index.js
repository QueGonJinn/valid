const detailBlock = document.querySelectorAll('.showMoreModel li');

const buttonShow = document.querySelectorAll('.initiator-scroll');
const title = document.querySelector('.mod-title');
buttonShow[1].setAttribute('style', 'display: none;');

detailBlock.forEach((e) => {
	if (e.getAttribute('ng-show') == 'showAll') {
		e.hidden = true;	
	}
});

buttonShow[0].addEventListener('click', (elem) => {
	elem.preventDefault();
	detailBlock.forEach((e) => {
		if (e.getAttribute('ng-show') == 'showAll') {
			e.hidden = false;	
		}
		title.scrollIntoView({
			behavior: 'smooth',
		});
		buttonShow[1].setAttribute('style', 'display: block;');
		buttonShow[0].setAttribute('style', 'display: none;');
	});
});

buttonShow[1].addEventListener('click', (elem) => {
	elem.preventDefault();
	detailBlock.forEach((e) => {
		if (e.getAttribute('ng-show') == 'showAll') {
			e.hidden = true;	
		}
		title.scrollIntoView({
			behavior: 'smooth',
		});
		buttonShow[0].setAttribute('style', 'display: block;');
		buttonShow[1].setAttribute('style', 'display: none;');
	});
});
