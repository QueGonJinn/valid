const parrent = document.querySelector('.description-wrapper');

const totalWrapper = document.createElement('div');
const totalItems = document.createElement('span');
const currentItems = document.createElement('span');
const separatorItems = document.createElement('span');
separatorItems.innerHTML = '/';

totalWrapper.classList.add('total__wrapper');
totalItems.classList.add('total__items');
currentItems.classList.add('current__items');

parrent.append(totalWrapper);
totalWrapper.append(currentItems);
totalWrapper.append(separatorItems);
totalWrapper.append(totalItems);

currentItems.innerHTML = `1`;
totalItems.innerHTML = `4`;

function slider({ container, wrapper, field, slide, currentCounter, totalCounter, totalWrapper }) {
	const slider = document.querySelector(container);
	const slidesWrapper = document.querySelector(wrapper);
	const slideField = document.querySelector(field);
	const slides = document.querySelectorAll(slide);
	const total = document.querySelector(totalCounter);
	const current = document.querySelector(currentCounter);
	const width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	total.textContent = `${slides.length}`;

	slideField.style.width = 100 * slides.length + '%';
	slideField.style.display = 'flex';
	slideField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach((slide) => {
		slide.style.width = width;
	});

	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
		dots = [];

	indicators.classList.add('carousel-indicators');
	slider.append(indicators);

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

	slideField.addEventListener('mousedown', () => {
		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigits(width);
		}

		slideField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		if (slides.length < 10) {
			current.textContent = `${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		dots.forEach((dot) => (dot.style.opacity = '.5'));
		dots[slideIndex - 1].style.opacity = 1;
	});

	dots.forEach((dot) => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = deleteNotDigits(width) * (slideTo - 1);
			slideField.style.transform = `translateX(-${offset}px)`;

			if (slides.length < 10) {
				current.textContent = `${slideIndex}`;
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
	wrapper: '.slider-block',
	field: '.slider-items',
	slide: '.slider-img',
	totalWrapper: '.total__wrapper',
	currentCounter: '.current__items',
	totalCounter: '.total__items',
});
