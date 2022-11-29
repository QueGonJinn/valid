nameInput.addEventListener('blur', (e) => {
	if (e.target.value.length === 0)
		showError(e.target.parentNode, 'Обязательно для заполнения', nameError);
	else hideError(nameError);
});
emailInput.addEventListener('input', (e) => {
	e.target.value = e.target.value.trim();
	const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	console.log(pattern.test(e.target.value));
	pattern.test(e.target.value)
		? hideError(emailError)
		: showError(e.target.parentNode, 'Не корректный e-mail', emailError);
});
emailInput.addEventListener('blur', (e) => {
	if (e.target.value.length === 0)
		showError(e.target.parentNode, 'Обязательно для заполнения', emailError);
});
countryInput.addEventListener('input', (e) => {
	const originalText = e.target.value;
	if (e.target.value.length > 25) {
		showError(e.target.parentNode, 'Максимум 25 символов', countryError);
		e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1, 25);
	}
	if (e.target.value.length > 0 && e.target.value.length < 25) {
		e.target.value[0] === ' ' ? (e.target.value = e.target.value.slice(1, 25)) : e.target.value;
		e.target.value[1] === ' '
			? (e.target.value = e.target.value[0] + e.target.value.slice(2, 25))
			: e.target.value;
		e.target.value[2] === ' '
			? (e.target.value = e.target.value.slice(0, 2) + e.target.value.slice(3, 25))
			: e.target.value;
		e.target.value = e.target.value.replaceAll(/[^А-Яа-яa-zA-Z ]/g, '').replaceAll('  ', ' ');
		e.target.value.length >= 1
			? (e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1, 25))
			: e.target.value;
		if (e.target.value.toLowerCase() === originalText.toLowerCase()) {
			hideError(countryError);
		} else {
			if (originalText[originalText.length - 1] === ' ') hideError(countryError);
			else showError(e.target.parentNode, 'Используйте только буквы', countryError);
		}
	}
});
cityInput.addEventListener('input', (e) => {
	const originalText = e.target.value;
	if (e.target.value.length > 30) {
		showError(e.target.parentNode, 'Максимум 30 символов', cityError);
		e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1, 30);
	}
	if (e.target.value.length > 0 && e.target.value.length < 30) {
		e.target.value[0] === ' ' || e.target.value[0] === '-'
			? (e.target.value = e.target.value.slice(1, 30))
			: e.target.value;
		e.target.value = e.target.value
			.replaceAll(/[^А-Яа-яa-zA-Z -]/g, '')
			.replaceAll('  ', ' ')
			.replaceAll('--', '-');
		e.target.value.length >= 1
			? (e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1, 30))
			: e.target.value;
		if (e.target.value.toLowerCase() === originalText.toLowerCase()) {
			hideError(cityError);
		} else {
			if (
				originalText[originalText.length - 1] === ' ' ||
				originalText[originalText.length - 1] === '-'
			)
				hideError(cityError);
			else showError(e.target.parentNode, 'Только буквы и тире', cityError);
		}
	}
});
addressInput.addEventListener('input', (e) => {
	const originalText = e.target.value;
	const symbolArray = ['-', ' ', '/', ':', ';', '.', ',', '#', '№', '`'];
	if (e.target.value.length > 0) {
		let clearString = e.target.value
			.slice(1, e.target.value.length)
			.replaceAll(/[^А-Яа-яa-zA-Z0-9 /:;.,#№`-]/g, '');
		symbolArray.forEach((symbol) => {
			clearString = clearString.replaceAll(symbol.repeat(2), symbol);
		});
		e.target.value =
			e.target.value[0].toUpperCase().replace(/[^А-Яа-яa-zA-Z0-9]/g, '') + clearString;
		if (e.target.value.toLowerCase() === originalText.toLowerCase()) {
			hideError(addressError);
		} else {
			if (symbolArray.includes(originalText[originalText.length - 1])) hideError(addressError);
			else showError(e.target.parentNode, 'Только буквы, цифры и  ` . , ; : / # №', addressError);
		}
	}
});
