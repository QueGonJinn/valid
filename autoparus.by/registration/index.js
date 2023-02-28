const form = document.getElementById('registration-form');
const check = document.getElementById('registration_isAgreeTerms');
const btn = document.getElementById('registration_submit');

const inputName = document.getElementById('registration_name');
const error = document.querySelector('#first-name-errors');

const inputEmail = document.getElementById('registration_email');
const errorEmail = document.querySelector('#first-email-errors');

const inputPhone = document.getElementById('registration_phone');
const errorPhone = document.querySelector('#first-phone-errors');

const inputPassword = document.getElementById('registration_password_first');
const errorPassword = document.querySelector('.prompt-password-first');

const inputPasswordRepeat = document.getElementById('registration_password_second');
const errorPasswordRepeat = document.querySelector('.prompt-password-repeat');

btn.setAttribute('disabled', 'true');
btn.style.background = '#606877e3';

if (document.querySelector('.js-error-form-phone')) {
	setTimeout(() => (window.location.href = '/login'), 3000);
}

inputName.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;

	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}

	if (validateName(e.target.value)) {
		e.target.classList.remove('input-error');
		error.innerHTML = '';
		vName = true;
	}

	if (!validateName(e.target.value)) {
		e.target.classList.add('input-error');
		error.setAttribute('style', 'color: #ff7171;');
		error.innerHTML = 'Используйте: буквы, цифры, тире и пробел';
	}

	if (e.target.value.length < 2) {
		error.setAttribute('style', 'color: green');
		error.innerHTML = 'Min длина имени 2 символа';
	}

	if (e.target.value[0] === ' ') {
		e.target.value = e.target.value.replace(/([ ])/gi, '');
		error.setAttribute('style', 'color: #ff7171;');
		error.innerHTML = 'Пробел не может быть первым символом';
	}

	if (e.target.value.length > 32) {
		e.target.value = e.target.value.substr(0, 32);
		error.setAttribute('style', 'color: #ff7171;');
		error.innerHTML = 'Max количество символов достигнуто';
	}

	if (e.target.value.match(/^[0-9]/)) {
		e.target.value = e.target.value.replace(/[0-9]/, '');
		error.setAttribute('style', 'color: #ff7171;');
		error.innerHTML = 'Имя не может начинаться на цифру';
	}

	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}

	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		error.setAttribute('style', 'color: #ff7171;');
		error.innerHTML = 'Не приемлем ввод двух пробелов подряд';
	}

	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		error.setAttribute('style', 'color: #ff7171;');
		error.innerHTML = 'Не приемлем ввод двух тире подряд';
	}

	e.target.value = e.target.value.replace(/([.,_#:~`?/\\|!"№;%&*^$()'+@\[\]{}<>])/gi, '');
	vName = true;
});

inputEmail.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (validateEmail(e.target.value)) {
		e.target.classList.remove('input-error');
		errorEmail.innerHTML = '';
	}

	if (!validateEmail(e.target.value)) {
		e.target.classList.add('input-error');
		errorEmail.innerHTML = 'Пока еще не является Email адресом';
	}

	if (e.target.value[i - 1] === '@' && e.target.value[i] === '@') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[@]/, '');
		errorEmail.innerHTML = 'Не приемлем ввод двух @ подряд';
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		errorEmail.innerHTML = 'Не приемлем ввод двух точек подряд ';
	}

	if (e.target.value.match(/([а-яА-ЯёЁ,_#:~ `?/\\|!"№;%&*^$()<>{}||'+-])/gi)) {
		e.target.value = e.target.value.replace(/([а-яА-ЯёЁ,_#:~ `?/\\|!"№;%&*^$()<>{}||'+-])/gi, '');
		errorEmail.innerHTML = 'Не верный для E-mail символ';
	}
});

inputPhone.addEventListener('input', (e) => {
	if (e.target.value[0] != '+') {
		e.target.value = '+' + e.target.value;
	}

	if (validatePhone(e.target.value)) {
		e.target.classList.remove('input-error');
		errorPhone.innerHTML = '';
	}
	if (!validatePhone(e.target.value)) {
		e.target.classList.add('input-error');
		errorPhone.innerHTML = 'Пока не достаточно цифр для номера';
	}
	if (e.target.value.length > 14) {
		e.target.value = e.target.value.substr(0, 14);
		errorPhone.innerHTML = 'Max допустимая длина номера достигнута';
	}
	if ((e.target.value[0] = '+')) {
		e.target.value = '+' + e.target.value.slice(1).replace(/[+]/, '');
	}
	if (e.target.value.match(/([a-zA-Zа-яА-ЯёЁ,_#:~ `?/\\{}[\]\\|!="№;%&*^$<>||'])/gi)) {
		e.target.value = e.target.value.replace(
			/([a-zA-Zа-яА-ЯёЁ,_#:~ `?/\\{}[\]\\|=!"№;%&*^$<>||'])/gi,
			'',
		);
		errorPhone.innerHTML = 'Ввод не допустимых символов';
	}
});

inputPassword.addEventListener('input', (e) => {
	if (validatePassword(e.target.value)) {
		e.target.classList.remove('input-error');
		errorPassword.innerHTML = '';
	}

	if (!validatePassword(e.target.value)) {
		e.target.classList.add('input-error');
		errorPassword.setAttribute('style', 'color: #ff7171;');
		errorPassword.innerHTML = 'Используйте: латинский алфавит и цифры';
	}

	if (e.target.value.length > 36) {
		e.target.value = e.target.value.substr(0, 36);
		errorPassword.setAttribute('style', 'color: #ff7171;');
		errorPassword.innerHTML = 'Максимальное колличество символов';
	}
	e.target.value !== inputPasswordRepeat.value
		? (errorPasswordRepeat.innerHTML = 'Пароли не совпадают')
		: (errorPasswordRepeat.innerHTML = '');

	if (e.target.value.length < 6) {
		errorPassword.setAttribute('style', 'color: green');
		errorPassword.innerHTML = 'Min длина пароля 6 символов';
	}

	e.target.value = e.target.value.replace(/([а-яА-ЯёЁ.,_#:~ `?/\\|!"№;@{}%&*^$()'+-])/gi, '');
});

inputPasswordRepeat.addEventListener('input', (e) => {
	e.target.value !== inputPassword.value
		? (errorPasswordRepeat.innerHTML = 'Пароли не совпадают')
		: (errorPasswordRepeat.innerHTML = '');
});

form.addEventListener('input', (event) => {
	event.preventDefault();
	if (
		inputName.value.length &&
		inputEmail.value.length &&
		inputPhone.value.length &&
		inputPassword.value.length &&
		inputPasswordRepeat.value.length &&
		!errorEmail.textContent.length &&
		!errorPhone.textContent.length &&
		!errorPassword.textContent.length &&
		!errorPasswordRepeat.textContent.length &&
		check.checked
	) {
		btn.removeAttribute('disabled');
		btn.style.background = '#1a5b99e3';
	} else {
		btn.setAttribute('disabled', 'true');
		btn.style.background = '#606877e3';
	}
});

form.addEventListener('submit', (event) => {
	event.preventDefault();

	setTimeout(() => form.submit(), 1000);
});

function validateName(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 -]+$/);
}

function validateEmail(email) {
	return String(email).match(
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
	);
}

function validatePhone(phone) {
	return String(phone).match(/(?:\+|\d)[\d\-\(\) ]{9,}\d/g);
}

function validatePassword(password) {
	return String(password).match(/[a-zA-Z0-9]+$/);
}
