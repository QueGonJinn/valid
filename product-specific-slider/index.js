const SliderClassName = 'slider';
const SliderLineClassName = 'slider-line';
const SliderSlideClassName = 'slider-slide';
const SliderDotsClassName = 'slider-dot';
const SliderDotClassName = 'dot';
const SliderDotsActiveClassName = 'dot-active';
const SliderNavClassName = 'nav';
const SliderNavLeftClassName = 'nav-left';
const SliderNavRightClassName = 'nav-right';

const parrent = document.querySelector('.slider-block');
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

class Slider {
	constructor(elem, options = {}) {
		this.containerNode = elem;
		this.size = elem.childElementCount;
		this.currentSlide = 0;
		this.currentSlideWasChange = false;
		this.settings = {
			margin: options.margin || 0,
		};

		totalItems.innerHTML = this.size;
		currentItems.innerHTML = this.size / this.size;

		this.manageHTML = this.manageHTML.bind(this);
		this.setParrameters = this.setParrameters.bind(this);
		this.setEvents = this.setEvents.bind(this);
		this.resizeSlider = this.resizeSlider.bind(this);
		this.startDrag = this.startDrag.bind(this);
		this.stopDrag = this.stopDrag.bind(this);
		this.dragging = this.dragging.bind(this);
		this.setStylePosition = this.setStylePosition.bind(this);
		this.setStylePositionReset = this.setStylePositionReset.bind(this);
		this.clickDots = this.clickDots.bind(this);
		this.moveToLeft = this.moveToLeft.bind(this);
		this.moveToRight = this.moveToRight.bind(this);
		this.changeCurrentSlide = this.changeCurrentSlide.bind(this);
		this.changeActiveDotClass = this.changeActiveDotClass.bind(this);

		this.manageHTML();
		this.setParrameters();
		this.setEvents();
	}
	manageHTML() {
		this.containerNode.classList.add(SliderClassName);
		this.containerNode.innerHTML = `
			<div class="${SliderLineClassName}">
				${this.containerNode.innerHTML}
			</div>
			<div class="${SliderNavClassName}">
				<button class="${SliderNavLeftClassName}">
					
				</button>
				<button class="${SliderNavRightClassName}">
					
				</button>
			</div>
			<div class="${SliderDotsClassName}"></div>
		`;

		this.lineNode = this.containerNode.querySelector(`.${SliderLineClassName}`);
		this.dotsNode = this.containerNode.querySelector(`.${SliderDotsClassName}`);

		this.slideNodes = Array.from(this.lineNode.children).map((childNode) => {
			return wrpapElementByDiv({
				element: childNode,
				className: SliderSlideClassName,
			});
		});

		this.dotsNode.innerHTML = Array.from(Array(this.size).keys())
			.map((key) => {
				return `<button class="${SliderDotClassName} ${
					key === this.currentSlide ? SliderDotsActiveClassName : ''
				}"></button>`;
			})
			.join('');

		this.dotNodes = this.dotsNode.querySelectorAll(`.${SliderDotClassName}`);
		console.log(this.dotNodes.length);
		this.navLeft = this.containerNode.querySelector(`.${SliderNavLeftClassName}`);
		this.navRight = this.containerNode.querySelector(`.${SliderNavRightClassName}`);
	}

	setParrameters() {
		const coordsContainer = this.containerNode.getBoundingClientRect();
		this.width = coordsContainer.width;
		this.maximumX = -(this.size - 1) * (this.width + this.settings.margin);
		this.x = -this.currentSlide * (this.width + this.settings.margin);

		this.lineNode.style.width = `${this.size * (this.width + this.settings.margin)}px`;
		this.setStylePosition();
		Array.from(this.slideNodes).forEach((slideNode) => {
			return (slideNode.style.width = `${this.width}px`);
		});
		Array.from(this.slideNodes).forEach((slideNode) => {
			return (slideNode.style.marginRight = `${this.settings.margin}px`);
		});

		if (this.size === 1) {
			totalWrapper.style.visibility = 'hidden';
		}
		if (this.size === 1) {
			this.dotsNode.style.visibility = 'hidden';
		}
	}

	setEvents() {
		this.debouncedResizeSlider = debounce(this.resizeSlider);
		window.addEventListener('resize', this.debouncedResizeSlider);
		this.lineNode.addEventListener('pointerdown', this.startDrag);
		window.addEventListener('pointerup', this.stopDrag);
		window.addEventListener('pointercancel', this.stopDrag);

		this.dotsNode.addEventListener('click', this.clickDots);
		this.navLeft.addEventListener('click', this.moveToLeft);
		this.navRight.addEventListener('click', this.moveToRight);
	}

	destroyEvents() {
		window.removeEventListener('resize', this.debouncedResizeSlider);
		this.lineNode.removeEventListener('pointerdown', this.startDrag);
		window.removeEventListener('pointerup', this.stopDrag);
		window.removeEventListener('pointercancel', this.stopDrag);

		this.dotsNode.removeEventListener('click', this.clickDots);
		this.navLeft.removeEventListener('click', this.moveToLeft);
		this.navRight.removeEventListener('click', this.moveToRight);
	}

	resizeSlider() {
		this.setParrameters();
	}

	startDrag(evt) {
		this.currentSlideWasChange = false;
		this.clickX = evt.pageX;
		this.startX = this.x;
		this.resetStyleTransition();
		window.addEventListener('pointermove', this.dragging);
	}

	stopDrag() {
		window.removeEventListener('pointermove', this.dragging);
		this.x = -this.currentSlide * (this.width + this.settings.margin);
		this.setStylePosition();
		this.setStyleTransition();
		this.changeCurrentSlide();
	}

	dragging(evt) {
		evt.preventDefault();
		this.dragX = evt.pageX;
		const dragShift = this.dragX - this.clickX;
		const easing = dragShift / 5;
		this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);
		this.setStylePosition();

		if (dragShift > 100 && dragShift > 0 && !this.currentSlideWasChange && this.currentSlide > 0) {
			this.currentSlideWasChange = true;
			this.currentSlide = this.currentSlide - 1;
		}

		if (
			dragShift < -100 &&
			dragShift < 0 &&
			!this.currentSlideWasChange &&
			this.currentSlide < this.size - 1
		) {
			this.currentSlideWasChange = true;
			this.currentSlide = this.currentSlide + 1;
		}
		evt.stopPropagation();
	}

	clickDots(evt) {
		const dotNode = evt.target.closest('button');
		if (!dotNode) {
			return;
		}
		let dotNumber;
		for (let i = 0; i < this.dotNodes.length; i++) {
			if (this.dotNodes[i] === dotNode) {
				dotNumber = i;
				break;
			}
		}
		if (dotNumber === this.currentSlide) {
			return;
		}

		this.currentSlide = dotNumber;
		this.changeCurrentSlide();
	}

	moveToLeft() {
		if (this.currentSlide <= 0) {
			return;
		}
		this.currentSlide = this.currentSlide - 1;
		this.changeCurrentSlide();
	}

	moveToRight() {
		if (this.currentSlide >= this.size - 1) {
			return;
		}

		this.currentSlide = this.currentSlide + 1;
		this.changeCurrentSlide();
	}

	changeCurrentSlide() {
		this.x = -this.currentSlide * (this.width + this.settings.margin);
		this.setStylePosition();
		this.setStyleTransition();
		this.changeActiveDotClass();
		currentItems.innerHTML = this.currentSlide + 1;
	}

	changeActiveDotClass() {
		for (let i = 0; i < this.dotNodes.length; i++) {
			this.dotNodes[i].classList.remove(SliderDotsActiveClassName);
		}

		this.dotNodes[this.currentSlide].classList.add(SliderDotsActiveClassName);
	}

	setStylePosition() {
		this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;
	}

	setStylePositionReset() {
		this.lineNode.style.transform = `translate3d(${
			this.x - this.width * this.currentSlide
		}px, 0, 0)`;
	}

	setStyleTransition() {
		this.lineNode.style.transition = `all 0.25s ease 0s`;
	}

	setStyleTransitionEnd() {
		this.lineNode.style.transition = `all 0s ease 0s`;
	}

	resetStyleTransition() {
		this.lineNode.style.transition = `all 0s ease 0s`;
	}
}

function wrpapElementByDiv({ element, className }) {
	const wrapperNode = document.createElement('div');
	wrapperNode.classList.add(className);
	element.parentNode.insertBefore(wrapperNode, element);
	wrapperNode.appendChild(element);

	return wrapperNode;
}

function debounce(func, time = 100) {
	let timer;
	return function (event) {
		clearTimeout(timer);
		timer = setTimeout(func, time, event);
	};
}

new Slider(document.querySelector('.slider-items'), {
	margin: 10,
});
