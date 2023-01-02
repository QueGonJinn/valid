const nameI = document.getElementById('personal_data_name');
const email = document.getElementById('personal_data_email');
const city = document.getElementById('personal_data_city');
const searchQuery = document.getElementById('personal_data_searchQuery');
const address = document.getElementById('personal_data_address');
const instagram = document.getElementById('personal_data_instagramAddress');
const telegram = document.getElementById('personal_data_telegramAddress');
const wrapperInputAll = document.querySelectorAll('.input-outter');
const telegaQ = document.querySelectorAll('.select');
const button = document.querySelectorAll('.open-popup-button');
const closeButton = document.querySelectorAll('.close-popup-button');

const modalOne = document.getElementById('popup2');
const modalTwo = document.getElementById('popup4');

let labelS = document.createElement('span');
labelS.innerHTML = 'Минимальное колличество символов 25';
labelS.setAttribute('style', 'color: #ff7171;');
let labelTelegram = document.createElement('span');
labelTelegram.innerHTML = 'Минимальное колличество символов 4';
labelTelegram.setAttribute('style', 'color: #ff7171;');
let labelQ = document.createElement('span');
labelQ.innerHTML = 'Максимальное колличество символов 75';
labelQ.setAttribute('style', 'color: #ff7171;');

function validateName(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ -]+$/);
}

function validateEmail(email) {
	return String(email).match(
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
	);
}

function validateCity(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ -]+$/);
}

function validateSearchQuery(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9, -]+$/);
}

function validateAddress(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9:;.,#№&@\/ -]+$/);
}

function validate(elem) {
	return String(elem).match(/[a-zA-Z0-9-._]+$/);
}

function validateTG(elem) {
	return String(elem).match(/[a-zA-Z0-9-._]+$/);
}

nameI.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateName(e.target.value)) {
		nameI.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateName(e.target.value)) {
		nameI.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		nameI.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		nameI.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 25) {
		e.target.value = e.target.value.substr(0, 25);
		nameI.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ' ') {
		e.target.value = '';
		nameI.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '-') {
		e.target.value = '';
		nameI.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace(/([0-9.,_#:~`?/\\|!"№;%&*^$()'+@\[\]{}<>])/gi, '');
});

email.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (validateEmail(e.target.value)) {
		e.target.classList.remove('input-error');
		email.removeAttribute('style', 'color: #ff7171;');
	}

	if (!validateEmail(e.target.value)) {
		e.target.classList.add('input-error');
		email.setAttribute('style', 'color: #ff7171;');
	}

	if (e.target.value[i - 1] === '@' && e.target.value[i] === '@') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[@]/, '');
		email.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		email.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '@') {
		e.target.value = '';
	}
	if (e.target.value[0] === '-') {
		e.target.value = '';
	}
	if (e.target.value.match(/([а-яА-ЯёЁ,_#:~ `?/\\|!"№;%&*^$()<>{}||'+-])/gi)) {
		e.target.value = e.target.value.replace(/([а-яА-ЯёЁ,_#:~ `?/\\|!"№;%&*^$()<>{}||'+-])/gi, '');
		email.setAttribute('style', 'color: #ff7171;');
	}
});

city.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCity(e.target.value)) {
		city.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateCity(e.target.value)) {
		city.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		city.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		city.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 25) {
		e.target.value = e.target.value.substr(0, 25);
		city.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ' ') {
		e.target.value = '';
	}
	if (e.target.value[0] === '.') {
		e.target.value = '';
	}
	if (e.target.value[0] === '-') {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([0-9.,_#:~`?/\\|!"№;%&*^$()'+@\[\]{}<>])/gi, '');
});

searchQuery.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;

	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.length < 25) {
		searchQuery.setAttribute('style', 'color: #ff7171;');
		wrapperInputAll[6].appendChild(labelS);
	}
	if (e.target.value.length === 25) {
		searchQuery.setAttribute('style', 'color: #ff7171;');
		wrapperInputAll[6].removeChild(labelS);
	}
	if (validateSearchQuery(e.target.value)) {
		searchQuery.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateSearchQuery(e.target.value)) {
		searchQuery.setAttribute('style', 'color: #ff7171;');
	}

	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		searchQuery.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		searchQuery.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		searchQuery.setAttribute('style', 'color: #ff7171;');
	}

	if (e.target.value.length > 75) {
		e.target.value = e.target.value.substr(0, 75);
		wrapperInputAll[6].appendChild(labelQ);
		searchQuery.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length < 75) {
		e.target.value = e.target.value.substr(0, 75);
		wrapperInputAll[6].removeChild(labelQ);
		searchQuery.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ' ') {
		e.target.value = '';
	}
	if (e.target.value[0] === '.') {
		e.target.value = '';
	}
	if (e.target.value[0] === '-') {
		e.target.value = '';
	}
	if (e.target.value[0] === ',') {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([._#:~`?/\\|!"№;%&*^$()'+@\[\]{}<>])/gi, '');
});

address.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateAddress(e.target.value)) {
		address.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateAddress(e.target.value)) {
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '@' && e.target.value[i] === '@') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[@]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '#' && e.target.value[i] === '#') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[#]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ':' && e.target.value[i] === ':') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '/' && e.target.value[i] === '/') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[/]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ';' && e.target.value[i] === ';') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '№' && e.target.value[i] === '№') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[№]/, '');
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 25) {
		e.target.value = e.target.value.substr(0, 25);
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ' ') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '-') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '@') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '#') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '№') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '.') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ',') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '&') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ';') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ':') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '/') {
		e.target.value = '';
		address.setAttribute('style', 'color: #ff7171;');
	}

	e.target.value = e.target.value.replace(/([_~`?\\|!"%*^$()'+\[\]{}<>])/gi, '');
});

telegram.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');

	e.target.value = e.target.value.split('?')[0];

	if (validate(e.target.value)) {
		telegram.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validate(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,#:~ `?=|!"№;{}%&*^$()'+]+$/, '');
		telegram.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length < 25) {
		telegram.setAttribute('style', 'color: #ff7171;');
		telegaQ[1].appendChild(labelTelegram);
	}
	if (e.target.value.length === 25) {
		telegram.setAttribute('style', 'color: #ff7171;');
		telegaQ[1].removeChild(labelTelegram);
	}
	if (e.target.value.length > 32) {
		e.target.value = e.target.value.substr(0, 32);
		telegram.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
	e.target.value = e.target.value.replace('@', '');
	e.target.value = e.target.value.replace('@@', '');
});

instagram.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	e.target.value = e.target.value.split('?')[0];
	if (e.target.value.split('/')[0] !== 'instagram.com') {
		e.target.value = 'instagram.com/' + e.target.value.split('/')[0];
	}
	if (validate(e.target.value)) {
		instagram.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validate(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,#:~ `?=|!"№;{}%&*^$()'+]+$/, '');
		instagram.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 44) {
		e.target.value = e.target.value.substr(0, 44);
		instagram.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
	e.target.value = e.target.value.replace('@@', '@');
});

console.log(button[0]);

button[2].addEventListener('click', () => {
	modalOne.setAttribute('style', 'display: block');
});

closeButton[0].addEventListener('click', () => {
	modalOne.setAttribute('style', 'display: none');
});

button[0].addEventListener('click', () => {
	modalTwo.setAttribute('style', 'display: block');
});
button[1].addEventListener('click', () => {
	modalTwo.setAttribute('style', 'display: block');
});

closeButton[1].addEventListener('click', () => {
	modalTwo.setAttribute('style', 'display: none');
});
