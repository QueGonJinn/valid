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

const coordsContainer = slider.getBoundingClientRect();
const width = coordsContainer.width;

slideList.style.width = `${slides.length * width}px`;

slides.forEach((e) => {
	e.style.width = `${width}px`;
});

let currentSlide = 0;
let startX,
	startY,
	distX,
	distY,
	startTime = 0;
let isDragging = false;

slider.addEventListener('touchstart', (event) => {
	isDragging = true;
	startX = event.touches[0].clientX;
	startY = event.touches[0].clientY;
	startTime = new Date().getTime();
});

slider.addEventListener('touchmove', (event) => {
	if (isDragging) {
		distX = event.touches[0].clientX - startX;
		distY = event.touches[0].clientY - startY;
		if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX > 30)) {
			event.preventDefault();
			slides.forEach(
				(slide) =>
					(slide.style.transform = `translateX(${distX - currentSlide * slider.offsetWidth}px)`),
			);
		}
	}
});

slider.addEventListener('touchend', (event) => {
	if (isDragging) {
		const elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime < 500 || Math.abs(distX) > slider.offsetWidth / 3) {
			if (distX > 0) {
				currentSlide--;
			} else if (distX < 0) {
				currentSlide++;
			}
		}
		goToSlide(currentSlide);
		isDragging = false;
	}
});

slider.addEventListener('mousedown', (event) => {
	isDragging = true;
	startX = event.clientX;
	startTime = new Date().getTime();
});

slider.addEventListener('mousemove', (event) => {
	if (isDragging) {
		distX = event.clientX - startX;
		slides.forEach(
			(slide) =>
				(slide.style.transform = `translateX(${distX - currentSlide * slider.offsetWidth}px)`),
		);
	}
});

slider.addEventListener('mouseup', (event) => {
	if (isDragging) {
		const elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime < 500 || Math.abs(distX) > slider.offsetWidth / 3) {
			if (distX > 0) {
				currentSlide--;
			} else if (distX < 0) {
				currentSlide++;
			}
		}
		goToSlide(currentSlide);
		isDragging = false;
	}
});

slider.addEventListener('mouseleave', (event) => {
	if (isDragging) {
		if (distX > 0) {
			currentSlide = currentSlide - 1;
			goToSlide(currentSlide);
			isDragging = false;
		}
		if (distX < 0) {
			currentSlide = currentSlide + 1;
			goToSlide(currentSlide);
			isDragging = false;
		}
	}
});

dotsContainer.addEventListener('click', (event) => {
	if (event.target.classList.contains('dot')) {
		currentSlide = parseInt(event.target.dataset.slideIndex);
		goToSlide(currentSlide);
	}
});

// Добавляем точки для индикации
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dot.dataset.slideIndex = i;
	if (i === 0) {
		dot.classList.add('active');
	}
	dotsContainer.append(dot);
}

function goToSlide(index) {
	if (index < 0) {
		currentSlide = 0;
	} else if (index > slides.length - 1) {
		currentSlide = slides.length - 1;
	}
	slides.forEach(
		(slide) => (slide.style.transform = `translateX(${-currentSlide * slider.offsetWidth}px)`),
	);
	dotsContainer.querySelectorAll('.dot').forEach((dot) => dot.classList.remove('active'));
	dotsContainer.querySelectorAll('.dot')[currentSlide].classList.add('active');
}
