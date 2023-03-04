const form = document.querySelector('#login-form');
const preloader = document.querySelector('#preloader-view');
const user = document.getElementById('login_username');
const password = document.getElementById('login_password');
const btn = document.getElementById('login_submit');
const error = document.querySelector('span');

btn.setAttribute('disabled', 'true');
btn.style.background = '#a7b0b9e3';
form.style.display = 'flex';
form.style.cssText = 'flex-direction: column; align-items: center;';
error.style.cssText =
	'display: block; margin: 0 auto; margin-bottom: 10px; text-align: center; color: #84a98c';

form.addEventListener('submit', (e) => {
	e.preventDefault();

	preloader.style.display = 'block';

	error.innerHTML = '';
	btn.setAttribute('disabled', 'true');
	btn.setAttribute('style', 'background: #a7b0b9e3');

	setTimeout(() => form.submit(), 3000);
});

form.addEventListener('input', (event) => {
	event.preventDefault();
	if (user.value.length > 9 && password.value.length >= 6) {
		btn.removeAttribute('disabled');
		btn.style.background = '#1a5b99e3';
	} else {
		btn.setAttribute('disabled', 'true');
		btn.style.background = '#a7b0b9e3';
	}
});

user.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;

	if (validateName(e.target.value)) {
		error.innerHTML = '';
	}
	if (e.target.value.length < 10) {
		error.innerHTML = 'Min 10 символов';
	}

	if (!validateName(e.target.value)) {
		error.innerHTML = 'Используйте: буквы, цифры, тире, нижнее подчеркивание, @, +';
	}

	if (e.target.value[i - 1] === '@' && e.target.value[i] === '@') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[@]/, '');
		error.innerHTML = 'Не приемлем ввод двух @ подряд';
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		error.innerHTML = 'Не приемлем ввод двух точек подряд ';
	}
	if (e.target.value[i - 1] === '+' && e.target.value[i] === '+') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[+]/, '');
		error.innerHTML = 'Не приемлем ввод двух + подряд ';
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		error.innerHTML = 'Не приемлем ввод двух , подряд ';
	}
	if (e.target.value.length > 50) {
		e.target.value = e.target.value.substr(0, 50);
		error.innerHTML = 'Max допустимая длина';
	}
	if (e.target.value.match(/([а-яА-ЯёЁ#:~ `?/\\{}[\]\\|!="№;%&*^$<>||'])/gi)) {
		e.target.value = e.target.value.replace(/([а-яА-ЯёЁ#:~ `?/\\{}[\]\\|=!"№;%&*^$<>||'])/gi, '');
		error.innerHTML = 'Ввод не допустимых символов';
	}
});

password.addEventListener('input', (e) => {
	if (validatePassword(e.target.value)) {
		e.target.classList.remove('input-error');
		error.innerHTML = '';
	}

	if (!validatePassword(e.target.value)) {
		e.target.classList.add('input-error');
		error.innerHTML = 'Используйте: латинский алфавит и цифры';
	}

	if (e.target.value.length > 30) {
		e.target.value = e.target.value.substr(0, 30);
		error.innerHTML = 'Максимальное колличество символов';
	}

	if (e.target.value.length < 6) {
		error.innerHTML = 'Min длина пароля 6 символов';
	}

	e.target.value = e.target.value.replace(/([а-яА-ЯёЁ.,_#:~ `?/\\|!"№;@{}%&*^$()'+-])/gi, '');
});

function validateName(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 _+@,. -]+$/);
}

function validatePassword(password) {
	return String(password).match(/[a-zA-Z0-9]+$/);
}
