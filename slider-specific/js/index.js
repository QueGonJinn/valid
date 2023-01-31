const SliderClassName = 'slider';
const SliderLineClassName = 'slider-line';
const SliderSlideClassName = 'slider-slide';

class Slider {
	constructor(elem, options = {}) {
		this.containerNode = elem;
		this.size = elem.childElementCount;
		this.currentSlide = 0;

		this.manageHTML = this.manageHTML.bind(this);
		this.setParameters = this.setParameters.bind(this);

		this.manageHTML();
		this.setParameters();
	}
	manageHTML() {
		this.containerNode.classList.add(SliderClassName);
		this.containerNode.innerHTML = `
			<div class="${SliderLineClassName}">
				${this.containerNode.innerHTML}
			</div>
		`;

		this.lineNode = this.containerNode.querySelector(`.${SliderLineClassName}`);
	}
}

new Slider(document.querySelector('.slider-items'));
