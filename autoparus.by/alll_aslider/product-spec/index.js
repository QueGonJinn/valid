const sliderWrapper = (parent, children, indexParent) => {
	const dotsParrent = document.querySelectorAll('.slider-block');

	const parrentTotal = document.querySelector('.slider-block');
	const totalWrapper = document.createElement('div');
	const totalItems = document.createElement('span');
	const currentItems = document.createElement('span');
	const separatorItems = document.createElement('span');

	separatorItems.innerHTML = '/';
	totalWrapper.classList.add('total__wrapper');
	totalItems.classList.add('total__items');
	currentItems.classList.add('current__items');

	parrentTotal.append(totalWrapper);
	totalWrapper.append(currentItems);
	totalWrapper.append(separatorItems);
	totalWrapper.append(totalItems);

	const dotNode = document.createElement('div');
	dotNode.classList.add('dots');

	//Slider

	const slider = document.querySelector(parent);
	dotsParrent[indexParent].append(dotNode);

	slider.innerHTML = `
			<div class="slides">
				${slider.innerHTML}
			</div>
		`;
	const slides = slider.querySelectorAll(children);
	const slideList = slider.querySelector('.slides');
	const dotsContainer = document.querySelectorAll('.dots');

	const coordsContainer = slider.getBoundingClientRect();
	const width = coordsContainer.width;

	slideList.style.width = `${slides.length * width}px`;

	slides.forEach((e) => {
		e.style.width = `${width}px`;
	});

	totalItems.innerHTML = slides.length;
	currentItems.innerHTML = '1';

	if (slides.length <= 1) {
		dotsContainer[indexParent].setAttribute('style', 'display: none');
		totalWrapper.setAttribute('style', 'display: none');
	}

	if (slides.length >= 2) {
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
					slides.forEach(
						(slide) =>
							(slide.style.transform = `translateX(${
								distX - currentSlide * slider.offsetWidth
							}px)`),
					);
				}
			}
		});

		slider.addEventListener('touchend', (event) => {
			if (isDragging) {
				const elapsedTime = new Date().getTime() - startTime;
				if (elapsedTime < 500 || Math.abs(distX) > slider.offsetWidth / slides.length) {
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

		slider.addEventListener(
			'mousedown',
			(event) => {
				isDragging = true;
				startX = event.clientX;
				startTime = new Date().getTime();
			},
			true,
		);

		slider.addEventListener('click', (event) => {
			distX = event.clientX - startX;
			if (distX === 0) {
				window.open(`${targetLink.href}`);
			}
		});

		slider.addEventListener('mousemove', (event) => {
			if (isDragging) {
				distX = event.clientX - startX;
				event.preventDefault();
				slides.forEach(
					(slide) =>
						(slide.style.transform = `translateX(${distX - currentSlide * slider.offsetWidth}px)`),
				);
			}
		});

		slider.addEventListener('mouseup', (event) => {
			if (isDragging) {
				const elapsedTime = new Date().getTime() - startTime;
				if (elapsedTime < 500 || Math.abs(distX) > slider.offsetWidth / slides.length) {
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

		dotsContainer[indexParent].addEventListener('click', (event) => {
			if (event.target.classList.contains('dot')) {
				currentSlide = parseInt(event.target.dataset.slideIndex);
				currentItems.innerHTML = currentSlide + 1;
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
			dotsContainer[indexParent].append(dot);
		}

		function goToSlide(index) {
			if (index < 0) {
				currentSlide = 0;
			} else if (index > slides.length - 1) {
				currentSlide = slides.length - 1;
			}
			slides.forEach(
				(slide) => (slide.style.transform = `translateX(${-currentSlide * slider.offsetWidth}px)`),
				(currentItems.innerHTML = currentSlide + 1),
			);
			dotsContainer[indexParent]
				.querySelectorAll('.dot')
				.forEach((dot) => dot.classList.remove('active'));
			dotsContainer[indexParent].querySelectorAll('.dot')[currentSlide].classList.add('active');
		}
	}
};

sliderWrapper('.slider-items', '.slider-slide', 0);
