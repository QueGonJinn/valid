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

function validate(elem) {
	return String(elem).match(/[a-zA-Z0-9-._]+$/);
}
function validateTiktok(elem) {
	return String(elem).match(/[a-zA-Z0-9-._@]+$/);
}

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
	e.target.value = e.target.value.replace('undefined', '');
});

facebook.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
	if (e.target.value.split('/')[0] !== 'facebook.com') {
		e.target.value = 'facebook.com/' + e.target.value.split('/')[0];
	}
	e.target.value = e.target.value.replace('undefined', '');
});

twitter.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
});

linkedin.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value =
		e.target.value.split('/')[0] +
		'/' +
		e.target.value.split('/')[1] +
		'/' +
		target.value.split('/')[2];
});

odnoklassniki.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
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
});

yandexNews.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
});

yandexZen.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
});

pulse.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0] + '/' + e.target.value.split('/')[1];
});
