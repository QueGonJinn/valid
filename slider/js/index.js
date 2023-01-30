const parrent = document.querySelector('.description-wrapper');
const sliderItems = document.createElement('div');
const sliderTrack = document.createElement('div');
const totalWrapper = document.createElement('div');
const totalItems = document.createElement('span');
const currentItems = document.createElement('span');
const separatorItems = document.createElement('span');
separatorItems.innerHTML = '/';

sliderItems.classList.add('slider__items');
sliderTrack.classList.add('slider__track');
totalWrapper.classList.add('total__wrapper');
totalItems.classList.add('total__items');
currentItems.classList.add('current__items');
parrent.append(sliderItems);
sliderItems.append(sliderTrack);
parrent.append(totalWrapper);
totalWrapper.append(currentItems);
totalWrapper.append(separatorItems);
totalWrapper.append(totalItems);

const img = [
	'https://uj-images.ru/images/spare_part/2021/12/61b4efa0ac467.jpeg',
	'https://uj-images.ru/images/spare_part/2021/12/61b4efa15fc69.jpeg',
	'https://uj-images.ru/images/spare_part/2021/12/61b4efa1baac4.jpeg',
	'https://uj-images.ru/images/spare_part/2021/12/61b4efa237811.jpeg',
	'https://uj-images.ru/images/seller-landing-page/2021/01/600016950afed.png',
];

function sliderCreate() {
	class Slider {
		constructor(src, alt, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.parrent = document.querySelector(parentSelector);
			this.classes = classes;
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.element = 'slider__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach((className) => element.classList.add(className));
			}

			element.innerHTML = `
							<img src=${this.src} alt=${this.alt}>
			`;
			this.parrent.append(element);
		}
	}

	img.forEach((e, i) => {
		new Slider(e, `img-number-${i}`, '.slider__track').render();
	});
}

sliderCreate();

currentItems.innerHTML = `0`;
totalItems.innerHTML = `${img.length}`;

function slider({ container, wrapper, field, slide, currentCounter, totalCounter, totalWrapper }) {
	const slider = document.querySelector(container);
	const slidesWrapper = document.querySelector(wrapper);
	const slideField = document.querySelector(field);
	const slides = document.querySelectorAll(slide);
	const total = document.querySelector(totalCounter);
	const current = document.querySelector(currentCounter);
	const indicatorWrapper = document.querySelector(totalWrapper);
	const width = window.getComputedStyle(slidesWrapper).width;

	console.log(indicatorWrapper);

	let slideIndex = 1;
	let offset = 0;

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slideField.style.width = 100 * slides.length + '%';
	slideField.style.display = 'flex';
	slideField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach((slide) => {
		slide.style.width = width;
	});

	slider.style.position = 'relative';

	indicatorWrapper.style.position = 'relative';

	const indicators = document.createElement('ol'),
		dots = [];

	indicators.classList.add('carousel-indicators');
	indicatorWrapper.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	function deleteNotDigits(str) {
		return +str.replace(/\D/g, '');
	}

	dots.forEach((dot) => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = deleteNotDigits(width) * (slideTo - 1);
			slideField.style.transform = `translateX(-${offset}px)`;

			if (slides.length < 10) {
				current.textContent = `0${slideIndex}`;
			} else {
				current.textContent = slideIndex;
			}

			dots.forEach((dot) => (dot.style.opacity = '.5'));
			dots[slideIndex - 1].style.opacity = 1;
		});
	});
}

slider({
	container: '.description-wrapper',
	wrapper: '.slider__items',
	field: '.slider__track',
	slide: '.slider__item',
	totalWrapper: '.total__wrapper',
	currentCounter: '.current__items',
	totalCounter: '.total__items',
});
