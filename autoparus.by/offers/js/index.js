const prices = document.querySelectorAll('.price');

prices.forEach((price, i) => {
	if (price.innerHTML === 'BYN') {
		price.setAttribute('style', 'display: none');
	}
	if (price.innerHTML === '0 BYN') {
		price.setAttribute('style', 'display: none');
	}
});
