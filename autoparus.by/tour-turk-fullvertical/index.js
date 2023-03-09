const addActive = document.querySelectorAll('.slider-items');
addActive[0].classList.add('activetes');

const dotNode = document.createElement('div');
dotNode.classList.add('dots');

//Slider

const slider = document.querySelector('.slider-country');
slider.after(dotNode);
slider.innerHTML = `
			<div class="slides">
				${slider.innerHTML}
			</div>
		`;
const slides = slider.querySelectorAll('.slider-items');
const slideList = slider.querySelector('.slides');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;
let startX,
	startY,
	distX,
	distY = 0;

const coordsContainer = slider.getBoundingClientRect();
const width = coordsContainer.width;

slideList.style.width = `${slides.length * width}px`;

slides.forEach((e) => {
	e.style.width = `${width}px`;
});

// Добавим точки для индикации
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (i === currentSlide) {
		dot.classList.add('active');
	}
	dot.addEventListener('click', () => {
		goToSlide(i);
	});
	dotsContainer.append(dot);
}

slider.addEventListener('touchstart', (event) => {
	startX = event.touches[0].clientX;
	console.log(startX);
	startY = event.touches[0].clientY;
});

slider.addEventListener('touchmove', (event) => {
	distX = event.touches[0].clientX - startX;
	distY = event.touches[0].clientY - startY;
	if (Math.abs(distX) > Math.abs(distY)) {
		event.preventDefault();
		slides.forEach(
			(slide) =>
				(slide.style.transform = `translateX(${-currentSlide * slider.offsetWidth + distX / 2}px)`),
		);
	}
});

slider.addEventListener('touchend', (event) => {
	if (Math.abs(distX) > slider.offsetWidth / slides.length && distX > 50 && currentSlide !== 0) {
		currentSlide--;
	} else if (
		Math.abs(distX) > slider.offsetWidth / slides.length &&
		distX < 0 &&
		currentSlide !== slides.length - 1
	) {
		currentSlide++;
	}
	goToSlide(currentSlide);
});

// Обработка событий мыши
let isDragging = false;
let startPos = 0;
let currentPos = 0;

slider.addEventListener('mousedown', (event) => {
	isDragging = true;
	startPos = event.clientX;
});

slider.addEventListener('mouseup', (event) => {
	if (isDragging) {
		currentPos = event.clientX;
		if (currentPos > startPos && currentSlide !== 0) {
			currentSlide--;
		} else if (currentPos < startPos && currentSlide !== slides.length - 1) {
			currentSlide++;
		}
		goToSlide(currentSlide);
		isDragging = false;
	}
});

slider.addEventListener('mouseleave', () => {
	isDragging = false;
});

function goToSlide(slideIndex) {
	currentSlide = slideIndex;
	slides.forEach(
		(slide) => (slide.style.transform = `translateX(${-currentSlide * slider.offsetWidth}px)`),
	);
	dotsContainer.querySelectorAll('.dot').forEach((dot) => dot.classList.remove('active'));
	dotsContainer.querySelectorAll('.dot')[currentSlide].classList.add('active');
}
