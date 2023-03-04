const inputPhone = document.getElementById('forgot_password_phone');
const errorPhone = document.querySelector('#first-phone-errors');
const form = document.querySelector('#forgot-password-form');
const preloader = document.querySelector('#preloader-view');
const btn = document.getElementById('forgot_password_submit');

btn.setAttribute('disabled', 'true');
form.style.display = 'flex';
form.style.cssText = 'flex-direction: column; align-items: center;';

errorPhone.style.cssText = 'display: block; margin: 0 auto; text-align: center; color: #84a98c';

form.addEventListener('submit', (e) => {
	e.preventDefault();

	preloader.style.display = 'block';

	setTimeout(() => form.submit(), 3000);
	errorPhone.innerHTML = '';
	btn.setAttribute('disabled', 'true');
	btn.setAttribute('style', 'background: #a7b0b9e3');
});

form.addEventListener('input', (event) => {
	event.preventDefault();
	if (inputPhone.value.length > 12) {
		btn.removeAttribute('disabled');
		btn.style.background = '#1a5b99e3';
	} else {
		btn.setAttribute('disabled', 'true');
		btn.style.background = '#a7b0b9e3';
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
	if (e.target.value.length > 13) {
		e.target.value = e.target.value.substr(0, 13);
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

function validatePhone(phone) {
	return String(phone).match(/(?:\+|\d)[\d\-\(\) ]{9,}\d/g);
}
