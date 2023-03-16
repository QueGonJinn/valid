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

			sliderItems.style.width = `${sliderItems.children.length * width}px`;
		}
	}
});
