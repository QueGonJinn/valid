const checkedOther = document.getElementById('seller_sellerCompany_isOther');

window.onload = () => {
	checkedOther.setAttribute('checked', 'true');
};

const companyName = document.getElementById('seller_sellerCompany_companyName');
const companyUNP = document.getElementById('seller_sellerCompany_unp');
const companyCity = document.getElementById('seller_sellerCompany_city');

const parrentBlock = document.querySelectorAll('.input-outter');

let labelCompanyNameMinMax = document.createElement('span');
parrentBlock[0].appendChild(labelCompanyNameMinMax);
labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanyUNPMinMax = document.createElement('span');
parrentBlock[1].appendChild(labelCompanyUNPMinMax);
labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;');

let labelCityUNPMinMax = document.createElement('span');
parrentBlock[2].appendChild(labelCityUNPMinMax);
labelCityUNPMinMax.setAttribute('style', 'color: #2d4059;');

function validateCompanyName(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 ",.&«»-]+$/);
}

function validateCompanyUNP(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 ]+$/);
}

function validateCompanyUNP(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 -]+$/);
}

companyName.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		companyName.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateCompanyName(e.target.value)) {
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
		companyName.setAttribute('style', 'color: #ff7171;');
	}

	e.target.value.length > 30
		? ((labelCompanyNameMinMax.innerHTML = 'Достигнут лимит введенных символов'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 30)))
		: e.target.value.length < 30 && e.target.value.length > 10
		? ((labelCompanyNameMinMax.innerHTML = 'Максимальное колличество символов 30'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyNameMinMax.innerHTML =
				'Минимальное колличество символов 10, максимальное колличество символов 30'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;'));

	if (e.target.value[0] === ' ') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '-') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '.') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === ',') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '-') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '&') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '»') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '«') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace(/([_#:~`?/\\|!"№;%*^$()'+@\[\]{}<>])/gi, '');
});

companyUNP.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyUNP(e.target.value)) {
		companyUNP.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateCompanyUNP(e.target.value)) {
		companyUNP.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		companyUNP.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		companyUNP.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
		companyUNP.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		companyUNP.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		companyUNP.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
		companyUNP.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
		companyUNP.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value.length > 20
		? ((labelCompanyUNPMinMax.innerHTML = 'Достигнут лимит введенных символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 20)))
		: e.target.value.length < 20 && e.target.value.length > 5
		? ((labelCompanyUNPMinMax.innerHTML = 'Максимальное колличество символов 20'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyUNPMinMax.innerHTML =
				'Минимальное колличество символов 5, максимальное колличество символов 20'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;'));
	e.target.value = e.target.value.replace(/([_#:~`?/\\|!"«»,.№;%*^$()'+@\[\]{}<>&-])/gi, '');
});

companyCity.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyUNP(e.target.value)) {
		companyCity.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateCompanyUNP(e.target.value)) {
		companyCity.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		companyCity.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		companyCity.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
		companyCity.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		companyCity.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		companyCity.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
		companyCity.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
		companyCity.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value.length > 20
		? ((labelCityUNPMinMax.innerHTML = 'Достигнут лимит введенных символов'),
		  labelCityUNPMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 20)))
		: e.target.value.length < 20 && e.target.value.length > 3
		? ((labelCityUNPMinMax.innerHTML = 'Максимальное колличество символов 20'),
		  labelCityUNPMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCityUNPMinMax.innerHTML =
				'Минимальное колличество символов 3, максимальное колличество символов 20'),
		  labelCityUNPMinMax.setAttribute('style', 'color: #2d4059;'));
	if (e.target.value[0] === ' ') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[0] === '-') {
		e.target.value = '';
		companyName.setAttribute('style', 'color: #ff7171;');
	}
	e.target.value = e.target.value.replace(/([_#:~`?/\\|!"«»,.№;%*^$(=)'+@\[\]{}<>&])/gi, '');
});
