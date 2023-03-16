window.addEventListener('load', () => {
	const slider = document.querySelector('.slider');
	const dotNode = document.createElement('div');
	if (slider) {
		dotNode.classList.add('dots');
		slider.after(dotNode);

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
			const sliderItems = document.querySelector('.slides');
			const slides = document.querySelectorAll('.slide-live-wrapper');
			const coordsContainer = slider.getBoundingClientRect();
			const width = coordsContainer.width;

			slides.forEach((e) => {
				e.style.width = `${width}px`;
			});

			slide(slider, sliderItems);

			function slide(wrapper, items) {
				const slideElement = items.querySelectorAll('.slide-live-wrapper');
				const slideElementLength = slideElement.length;
				const slideElementSize = items.querySelectorAll('.slide-live-wrapper')[0].offsetWidth;
				const firstSlide = slideElement[0];
				const lastSlide = slideElement[slideElementLength - 1];
				const cloneFirst = firstSlide.cloneNode(true);
				const cloneLast = lastSlide.cloneNode(true);

				let posX1 = 0;
				let posX2 = 0;
				let posY1 = 0;
				let posY2 = 0;
				let posInitial;
				let posFinal;
				let threshold = 100;
				let index = 0;
				let allowShift = true;

				items.append(cloneFirst);
				items.insertBefore(cloneLast, firstSlide);

				//TouchEvents
				items.addEventListener('touchstart', dragStart);
				items.addEventListener('touchend', dragEnd);
				items.addEventListener('touchmove', dragAction);

				function dragStart(e) {
					e = e || window.event;
					e.preventDefault();
					posInitial = items.offsetLeft;

					if (e.type === 'touchstart') {
						posX1 = e.touches[0].clientX;
						posY1 = e.touches[0].clientY;
					}
				}

				function dragAction(e) {
					e = e || window.event;
					if (e.type === 'touchmove') {
						posX2 = posX1 - e.touches[0].clientX;
						posX1 = e.touches[0].clientX;
						posY2 = posY1 - e.touches[0].clientY;
						posY1 = e.touches[0].clientY;
					}
					if (Math.abs(posX2) > Math.abs(posY2)) {
						e.preventDefault();
						items.style.left = items.offsetLeft - posX2 + 'px';
					}
				}

				function dragEnd(e) {
					posFinal = items.offsetLeft;
					if (posFinal - posInitial < -threshold) {
						shiftSlide(1, 'drag');
					} else if (posFinal - posInitial > threshold) {
						shiftSlide(-1, 'drag');
					} else {
						items.style.left = posInitial + 'px';
					}
				}

				function shiftSlide(dir, action) {
					items.classList.add('shifting');
					if (allowShift) {
						if (!action) {
							posInitial = items.offsetLeft;
						}
						if (dir == 1) {
							items.style.left = posInitial - slideElementSize + 'px';
							index++;
						} else if (dir == -1) {
							items.style.left = posInitial + slideElementSize + 'px';
							index--;
						}
					}
					allowShift = false;
				}

				items.addEventListener('transitioned', checkIndex);

				function checkIndex() {
					items.classList.remove('shifting');
					if (index == -1) {
						items.style.left = -slideElementLength * slideElementSize + 'px';
						index = slideElementLength - 1;
					}

					if (index == slideElementLength) {
						items.style.left = -1 * slideElementSize + 'px';
						index = 0;
					}
					allowShift = true;
				}
			}

			sliderItems.style.width = `${sliderItems.children.length * width}px`;
			sliderItems.style.left = `${-width}px`;
		}
	}
});
