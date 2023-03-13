const dotNode = document.createElement('div');
dotNode.classList.add('dots');
function wrpapElementByDiv({ element, className }) {
	const wrapperNode = document.createElement('div');
	wrapperNode.classList.add(className);
	element.parentNode.insertBefore(wrapperNode, element);
	wrapperNode.appendChild(element);

	return wrapperNode;
}

const totalWrapper = document.createElement('div');
const totalItems = document.createElement('span');
const currentItems = document.createElement('span');
const separatorItems = document.createElement('span');
separatorItems.innerHTML = '/';
totalWrapper.classList.add('total__wrapper');

//Slider

const slider = document.querySelector('.slider-block');
slider.after(dotNode);
const slideList = slider.querySelector('.slider-items');
const dotsContainer = document.querySelector('.dots');

slider.append(totalWrapper);
totalWrapper.append(currentItems);
totalWrapper.append(separatorItems);
totalWrapper.append(totalItems);

const slidesWrap = Array.from(slideList.children).map((childNode) => {
	return wrpapElementByDiv({
		element: childNode,
		className: 'slides',
	});
});

const coordsContainer = slider.getBoundingClientRect();
const width = coordsContainer.width;

slideList.style.width = `${slidesWrap.length * width}px`;

slidesWrap.forEach((e) => {
	e.style.width = `${width}px`;
});

currentItems.innerHTML = `1`;
totalItems.innerHTML = `${slidesWrap.length}`;

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
		if (Math.abs(distX) > Math.abs(distY)) {
			event.preventDefault();
			slidesWrap.forEach(
				(slide) =>
					(slide.style.transform = `translateX(${distX - currentSlide * slider.offsetWidth}px)`),
			);
		}
	}
});

slider.addEventListener('touchend', (event) => {
	if (isDragging) {
		const elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime < 1000 || Math.abs(distX) > slider.offsetWidth / slidesWrap.length) {
			if (distX > 0) {
				currentSlide--;
				currentItems.innerHTML = `${currentSlide + 1}`;
			} else if (distX < 0) {
				currentSlide++;
				currentItems.innerHTML = `${currentSlide + 1}`;
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
		slidesWrap.forEach(
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
				currentItems.innerHTML = `${currentSlide + 1}`;
			} else if (distX < 0) {
				currentSlide++;
				currentItems.innerHTML = `${currentSlide + 1}`;
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
			currentItems.innerHTML = `${currentSlide + 1}`;
			isDragging = false;
		}
		if (distX < 0) {
			currentSlide = currentSlide + 1;
			goToSlide(currentSlide);
			currentItems.innerHTML = `${currentSlide + 1}`;
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
for (let i = 0; i < slidesWrap.length; i++) {
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
		currentItems.innerHTML = `${currentSlide + 1}`;
	} else if (index > slidesWrap.length - 1) {
		currentSlide = slidesWrap.length - 1;
		currentItems.innerHTML = `${currentSlide + 1}`;
	}
	slidesWrap.forEach(
		(slide) => (slide.style.transform = `translateX(${-currentSlide * slider.offsetWidth}px)`),
	);
	dotsContainer.querySelectorAll('.dot').forEach((dot) => dot.classList.remove('active'));
	dotsContainer.querySelectorAll('.dot')[currentSlide].classList.add('active');
}
