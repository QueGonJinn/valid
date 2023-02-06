const slides = document.querySelectorAll('.slide-one'),
	slidesWrapper = document.getElementById('slider-one'),
	slidesField = document.querySelector('.slider-one-wrapper'),
	slider = document.querySelector('.swiper'),
	prev = document.getElementById('prev'),
	next = document.getElementById('next');

width = window.getComputedStyle(slidesWrapper).width;

let slideIndex = 1;
let offset = 0;

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all ';

slidesWrapper.style.overflow = 'hidden';

slides.forEach((slide) => {
	slide.style.width = width;
});

const indicators = document.createElement('ol'),
	dots = [];

indicators.classList.add('carousel-indicators');

slider.append(indicators);

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('li');
	dot.classList.add('dot');
	dot.setAttribute('data-slide-to', i + 1);
	if (i == 0) {
		dot.style.opacity = '1';
	}
	indicators.append(dot);

	dots.push(dot);
}

let pressed = false;
let startX;
let x;

next.addEventListener('click', () => {
	if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
		offset = 0;
	} else {
		offset += +width.slice(0, width.length - 2);
	}
	slidesField.style.transform = `translateX(-${offset}px)`;

	if (slideIndex == slides.length) {
		slideIndex = 1;
	} else {
		slideIndex++;
	}

	dots.forEach((dot) => (dot.style.opacity = '.5'));
	dots[slideIndex - 1].style.opacity = 1;
});

prev.addEventListener('click', () => {
	if (offset == 0) {
		offset = +width.slice(0, width.length - 2) * (slides.length - 1);
	} else {
		offset -= +width.slice(0, width.length - 2);
	}
	slidesField.style.transform = `translateX(-${offset}px)`;

	if (slideIndex == 1) {
		slideIndex = slides.length;
	} else {
		slideIndex--;
	}

	dots.forEach((dot) => {
		return (dot.style.opacity = '.5');
	});
	dots[slideIndex - 1].style.opacity = 1;
});

slidesWrapper.addEventListener('mousedown', (e) => {
	pressed = true;
	startX = e.offsetX - slidesField.offsetLeft;
	slidesWrapper.style.cursor = 'grabbing';
});

slidesWrapper.addEventListener('mouseup', () => {
	slidesWrapper.style.cursor = 'grab';
	pressed = false;
});

slidesWrapper.addEventListener('mousemove', (e) => {
	if (!pressed) return;
	e.preventDefault();

	x = e.offsetX;
	slidesField.style.transform = `translateX(-${offset}px)`;
});

dots.forEach((dot) => {
	dot.addEventListener('click', (e) => {
		const slideTo = e.target.getAttribute('data-slide-to');
		slideIndex = slideTo;
		offset = +width.slice(0, width.length - 2) * (slideTo - 1);
		slidesField.style.transform = `translateX(-${offset}px)`;
		dots.forEach((dot) => {
			return (dot.style.opacity = '.5');
		});
		dots[slideIndex - 1].style.opacity = 1;
	});
});
