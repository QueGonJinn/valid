window.addEventListener('load', () => {
	const slider = document.querySelector('.slider');
	const dotNode = document.createElement('div');
	if (slider) {
		dotNode.classList.add('dots');
		slider.after(dotNode);

		if (slider.children.length === 0) {
			slider.style.display = 'none';
		}

		if (slider.children.length < 2) {
			dotNode.style.display = 'none';
		}

		if (slider.children.length > 1) {
			const imgSrc = document.querySelectorAll('.slide-live-wrapper img');
			imgSrc.forEach((img) => {
				if (img.getAttribute('data-src')) {
					return img.setAttribute('src', `${img.getAttribute('data-src')}`);
				}
			});
			imgSrc.forEach((img) => {
				if (img.getAttribute('data-src')) {
					return img.setAttribute('loading', `lazy`);
				}
			});

			slider.innerHTML = `
			<div class="slides">
				${slider.innerHTML}
			</div>
		`;
			const slides = slider.querySelectorAll('.slide-live-wrapper');
			const slideList = slider.querySelector('.slides');
			const dotsContainer = document.querySelector('.dots');

			const firstSlide = slides[0];
			const lastSlide = slides[slides.length - 1];

			const cloneFirst = firstSlide.cloneNode(true);
			const cloneLast = lastSlide.cloneNode(true);

			slideList.append(cloneFirst);
			slideList.insertBefore(cloneLast, firstSlide);

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
					(slide) =>
						(slide.style.transform = `translateX(${-currentSlide * slider.offsetWidth}px)`),
				);
				dotsContainer.querySelectorAll('.dot').forEach((dot) => dot.classList.remove('active'));
				dotsContainer.querySelectorAll('.dot')[currentSlide].classList.add('active');
			}
		}
	}
});
