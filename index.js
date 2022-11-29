const instagram = document.getElementById('personal_data_instagram');
const tiktok = document.getElementById('personal_data_tiktok');
const vkontakte = document.getElementById('personal_data_vkontakte');
const facebook = document.getElementById('personal_data_facebook');
const twitter = document.getElementById('personal_data_twitter');
const linkedin = document.getElementById('personal_data_linkedin');
const odnoklassniki = document.getElementById('personal_data_odnoklassniki');

const youtube = document.getElementById('personal_data_youtube');
const rutube = document.getElementById('personal_data_rutube');

const googleNews = document.getElementById('personal_data_googleNews');
const yandexNews = document.getElementById('personal_data_yandexNews');
const yandexZen = document.getElementById('personal_data_yandexZen');
const pulse = document.getElementById('personal_data_pulse');

const nameInput = document.getElementById('personal_data_name');
const emailInput = document.getElementById('personal_data_email');
const countryInput = document.getElementById('personal_data_country');
const cityInput = document.getElementById('personal_data_city');
const addressInput = document.getElementById('personal_data_address');

function validate(elem) {
	return String(elem).match(/[a-zA-Z0-9-._]+$/);
}
function validateVK(elem) {
	return String(elem).match(/[a-zA-Z0-9_]+$/);
}
function validateFacebook(elem) {
	return String(elem).match(/[a-zA-Z0-9?=.]+$/);
}
function validateTwitter(elem) {
	return String(elem).match(/[a-zA-Z0-9_]+$/);
}
function validateLinkedine(elem) {
	return String(elem).match(/[a-zA-Z0-9_%-]+$/);
}
function validateOdnaklassniki(elem) {
	return String(elem).match(/[a-zA-Z0-9_%.-]+$/);
}
function validateYoutube(elem) {
	return String(elem).match(/[a-zA-Z0-9]+$/);
}
function validateDzen(elem) {
	return String(elem).match(/[a-z0-9_]+$/);
}
function validateName(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 -]+$/);
}
function validateEmail(email) {
	return String(email).match(
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
	);
}

function validateAddress(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9,.#№ `:;/-]+$/);
}

nameInput.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateName(e.target.value)) {
		nameInput.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateName(e.target.value)) {
		nameInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length < 2) {
		nameInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ' ') {
		e.target.value = e.target.value.replace(/([ ])/gi, '');
		nameInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 32) {
		e.target.value = e.target.value.substr(0, 32);
		nameInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.match(/^[0-9]/)) {
		e.target.value = e.target.value.replace(/[0-9]/, '');
		nameInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		nameInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		nameInput.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace(/([.,_#:~`?/\\|!"№;%&*^$()'+@\[\]{}<>])/gi, '');
});
emailInput.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (validateEmail(e.target.value)) {
		e.target.classList.remove('input-error');
		emailInput.removeAttribute('style', 'color: #ff7171;');
	}

	if (!validateEmail(e.target.value)) {
		e.target.classList.add('input-error');
		emailInput.setAttribute('style', 'color: #ff7171;');
	}

	if (e.target.value[i - 1] === '@' && e.target.value[i] === '@') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[@]/, '');
		emailInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		emailInput.setAttribute('style', 'color: #ff7171;');
	}

	if (e.target.value.match(/([а-яА-ЯёЁ,_#:~ `?/\\|!"№;%&*^$()<>{}||'+-])/gi)) {
		e.target.value = e.target.value.replace(/([а-яА-ЯёЁ,_#:~ `?/\\|!"№;%&*^$()<>{}||'+-])/gi, '');
		emailInput.setAttribute('style', 'color: #ff7171;');
	}
});

countryInput.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateName(e.target.value)) {
		countryInput.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateName(e.target.value)) {
		countryInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 25) {
		e.target.value = e.target.value.substr(0, 25);
		countryInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		countryInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		countryInput.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace(/([.,_#:~`?/\\|!"№;%&*^$()'+@\[\]{}<>])/gi, '');
});

cityInput.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateName(e.target.value)) {
		cityInput.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateName(e.target.value)) {
		cityInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 25) {
		e.target.value = e.target.value.substr(0, 25);
		cityInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		cityInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		cityInput.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace(/([.,_#:~`?/\\|!"№;%&*^$()'+@\[\]{}<>])/gi, '');
});

addressInput.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateAddress(e.target.value)) {
		addressInput.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateAddress(e.target.value)) {
		addressInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 50) {
		e.target.value = e.target.value.substr(0, 50);
		addressInput.setAttribute('style', 'color: #ff7171;');
	}
	if (
		e.target.value[i - 1] === ' ' ||
		e.target.value[i - 1] === '-' ||
		e.target.value[i - 1] === '.'
	) {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		addressInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		addressInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		addressInput.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		addressInput.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace(/([_~?\\|!"%&*^$()'+@\[\]{}<>])/gi, '');
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

tiktok.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	if (e.target.value.split('/')[0] !== 'tiktok.com/@') {
		e.target.value = 'tiktok.com/@' + e.target.value.split('/')[1];
	}
	if (validate(e.target.value)) {
		tiktok.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validate(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,#:~ .`?=|!"№;{}%&*^$()'+]+$/, '');
		tiktok.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 36) {
		e.target.value = e.target.value.substr(0, 36);
		tiktok.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
	e.target.value = e.target.value.replace('@@', '@');
});

vkontakte.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	if (e.target.value.split('/')[0] !== 'vk.com') {
		e.target.value = 'vk.com/' + e.target.value.split('/')[0];
	}
	if (validateVK(e.target.value)) {
		vkontakte.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateVK(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,#:~ .@<>`?=|!"№;{}%&*^$()'+]+$/, '');
		vkontakte.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 39) {
		e.target.value = e.target.value.substr(0, 39);
		vkontakte.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

facebook.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	if (e.target.value.split('/')[0] !== 'facebook.com') {
		e.target.value = 'facebook.com/' + e.target.value.split('/')[0];
	}
	if (validateFacebook(e.target.value)) {
		facebook.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateFacebook(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ_,#:~ @<>`|!"№;{}%&*^$()'+-]+$/, '');
		facebook.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 56) {
		e.target.value = e.target.value.substr(0, 56);
		facebook.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

twitter.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	if (e.target.value.split('/')[0] !== 'twitter.com') {
		e.target.value = 'twitter.com/' + e.target.value.split('/')[0];
	}
	if (validateTwitter(e.target.value)) {
		twitter.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateTwitter(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,#:~ @<>`|!"№;{}%&*^$()'+-]+$/, '');
		twitter.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 56) {
		e.target.value = e.target.value.substr(0, 56);
		twitter.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

linkedin.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value =
		e.target.value.split('/')[0] +
		'/' +
		e.target.value.split('/')[1] +
		'/' +
		e.target.value.split('/')[2];
	if (e.target.value.split('/')[0] !== 'linkedin.com') {
		e.target.value = 'linkedin.com/in/' + e.target.value.split('/')[0];
	}
	if (validateLinkedine(e.target.value)) {
		linkedin.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateLinkedine(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,#:~ @<>`|!"№;{}&*^$()'+]+$/, '');
		linkedin.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 100) {
		e.target.value = e.target.value.substr(0, 100);
		linkedin.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

odnoklassniki.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	if (e.target.value.split('/')[0] !== 'ok.ru') {
		e.target.value = 'ok.ru/' + e.target.value.split('/')[0];
	}
	if (validateOdnaklassniki(e.target.value)) {
		odnoklassniki.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateOdnaklassniki(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,#:~ @<>`|!"№;{}&*^$()'+]+$/, '');
		odnoklassniki.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 40) {
		e.target.value = e.target.value.substr(0, 40);
		odnoklassniki.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

youtube.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value =
		e.target.value.split('/')[0] +
		'/' +
		e.target.value.split('/')[1] +
		'/' +
		e.target.value.split('/')[2];
	if (e.target.value.split('/')[0] !== 'youtube.com') {
		e.target.value = 'youtube.com/channel/' + e.target.value.split('/')[0];
	}
	if (validateYoutube(e.target.value)) {
		youtube.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateYoutube(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,.#:~ @<>`|!"№;{}&*^$()'_+-]+$/, '');
		youtube.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 46) {
		e.target.value = e.target.value.substr(0, 46);
		youtube.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

rutube.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value =
		e.target.value.split('/')[0] +
		'/' +
		e.target.value.split('/')[1] +
		'/' +
		e.target.value.split('/')[2];
	if (e.target.value.split('/')[0] !== 'rutube.ru') {
		e.target.value = 'rutube.ru/channel/' + e.target.value.split('/')[0];
	}
	if (validateYoutube(e.target.value)) {
		rutube.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateYoutube(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,.#:~ @<>`|!"№;{}&*^$()'_+-]+$/, '');
		rutube.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 46) {
		e.target.value = e.target.value.substr(0, 46);
		rutube.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

googleNews.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value =
		e.target.value.split('/')[0] +
		'/' +
		e.target.value.split('/')[1] +
		'/' +
		e.target.value.split('/')[2];
	e.target.value = e.target.value.replace('undefined', '');
});

yandexNews.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	if (e.target.value.split('/')[0] !== 't.me') {
		e.target.value = 't.me/' + e.target.value.split('/')[0];
	}
	if (validateDzen(e.target.value)) {
		yandexNews.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateDzen(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁ,.#:~ @<>`|!"№;{}&*^$()'+-]+$/, '');
		yandexNews.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 46) {
		e.target.value = e.target.value.substr(0, 46);
		yandexNews.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

yandexZen.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	if (e.target.value.split('/')[0] !== 'dzen.ru') {
		e.target.value = 'dzen.ru/' + e.target.value.split('/')[0];
	}
	if (validateDzen(e.target.value)) {
		yandexZen.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateDzen(e.target.value)) {
		e.target.value = e.target.value.replace(/[а-яА-ЯёЁA-Z,.#:~ @<>`|!"№;{}&*^$()'+-]+$/, '');
		yandexZen.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value.length > 46) {
		e.target.value = e.target.value.substr(0, 46);
		yandexZen.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace('undefined', '');
});

pulse.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	e.target.value = e.target.value.replace('undefined', '');
});
