const text = document.querySelector('.content-editable');
const textParametrs = text.getBoundingClientRect();
const textHeight = textParametrs.height;
const textWidth = textParametrs.width;
const moreDetails = document.querySelector('.info-btn');

console.log(textHeight);

textHeight <= 154 && textWidth <= 410
	? moreDetails.classList.add('display-hide')
	: textHeight <= 93 && textWidth >= 410
	? moreDetails.classList.add('display-hide')
	: moreDetails.classList.remove('display-hide');

textHeight >= 154 && textWidth <= 410
	? text.classList.add('collapse-text-mobile')
	: textHeight >= 93 && textWidth >= 410
	? text.classList.add('collapse-text')
	: text.classList.remove('collapse-text');

moreDetails.addEventListener('click', () => {
	text.classList.remove('collapse-text');
	text.classList.remove('collapse-text-mobile');
	moreDetails.classList.add('display-hide');
});
