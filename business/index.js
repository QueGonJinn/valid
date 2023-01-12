const checkedOther = document.getElementById('seller_sellerCompany_isOther');
const checkedCard = document.getElementById('seller_sellerCompany_workflow_isCreditCard');

const radioBTN = document.querySelectorAll('.filter-input-radio');
const fieldDelivery = document.getElementById('seller_sellerCompany_workflow_deliveryDetail');
const fielGuarantee = document.getElementById('seller_sellerCompany_workflow_guaranteeDetail');

window.onload = () => {
	checkedOther.setAttribute('checked', 'true');
	checkedCard.setAttribute('checked', 'true');
	fieldDelivery.setAttribute('style', 'display: none');
	fielGuarantee.setAttribute('style', 'display: none');
};

radioBTN[0].addEventListener('change', () => {
	fieldDelivery.setAttribute('style', 'display: block');
});

radioBTN[1].addEventListener('change', () => {
	fieldDelivery.setAttribute('style', 'display: none');
});

radioBTN[2].addEventListener('change', () => {
	fielGuarantee.setAttribute('style', 'display: block');
});

radioBTN[3].addEventListener('change', () => {
	fielGuarantee.setAttribute('style', 'display: none');
});

const companyName = document.getElementById('seller_sellerCompany_companyName');
const companyUNP = document.getElementById('seller_sellerCompany_unp');
const companyCity = document.getElementById('seller_sellerCompany_city');
const companyAddres = document.getElementById('seller_sellerCompany_address');
const companyAbout = document.getElementById('seller_sellerCompany_activityDescription');
const companySite = document.getElementById('seller_sellerCompany_siteAddress');
const companyLink = document.getElementById('seller_sellerCompany_linkImportAdverts');

const parrentBlock = document.querySelectorAll('.input-outter');

parrentBlock.forEach((e) => {
	e.setAttribute('style', 'display: flex');
	e.setAttribute('style', 'flex-direction: column');
});

const parrentBlockText = document.querySelectorAll('.delivery-text');

let labelCompanyNameMinMax = document.createElement('span');
parrentBlock[0].appendChild(labelCompanyNameMinMax);
labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanyUNPMinMax = document.createElement('span');
parrentBlock[1].appendChild(labelCompanyUNPMinMax);
labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;');

let labelCityUNPMinMax = document.createElement('span');
parrentBlock[2].appendChild(labelCityUNPMinMax);
labelCityUNPMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanyAddressMinMax = document.createElement('span');
parrentBlock[3].appendChild(labelCompanyAddressMinMax);
labelCompanyAddressMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanySiteMinMax = document.createElement('span');
parrentBlock[4].appendChild(labelCompanySiteMinMax);
labelCompanySiteMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanyLinkMinMax = document.createElement('span');
parrentBlock[5].appendChild(labelCompanyLinkMinMax);
labelCompanyLinkMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanyAboutMinMax = document.createElement('span');
parrentBlock[6].appendChild(labelCompanyAboutMinMax);
labelCompanyAboutMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanyDeliveryMinMax = document.createElement('span');
parrentBlockText[0].appendChild(labelCompanyDeliveryMinMax);
labelCompanyDeliveryMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanyGarntieMinMax = document.createElement('span');
parrentBlockText[1].appendChild(labelCompanyGarntieMinMax);
labelCompanyGarntieMinMax.setAttribute('style', 'color: #2d4059;');

function validateCompanyName(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 ",.&«»-]+$/);
}

function validateCompanyUNP(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 ]+$/);
}

function validateCompanyAddress(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 #№&:;,./-]+$/);
}

function validateCompanyCity(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 -]+$/);
}

function validateCompanySite(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 /&:._-]+$/);
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
		? ((labelCompanyNameMinMax.innerHTML = 'Max 30 символов'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyNameMinMax.innerHTML = 'Min 10 - Max 30 символов'),
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
	e.target.value = e.target.value.replace(/([_#:~`?/\\|!="№;%*^$()'+@\[\]{}<>])/gi, '');
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
		? ((labelCompanyUNPMinMax.innerHTML = 'Max 20 символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyUNPMinMax.innerHTML = 'Min 5 - Max 20 символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;'));
	e.target.value = e.target.value.replace(/([_#:~`?/\\|!"«»,.№;%*^$(=)'+@\[\]{}<>&-])/gi, '');
});

companyCity.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyCity(e.target.value)) {
		companyCity.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateCompanyCity(e.target.value)) {
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
		? ((labelCityUNPMinMax.innerHTML = 'Max 20 символов'),
		  labelCityUNPMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCityUNPMinMax.innerHTML = 'Min 3 - Max 20 символов'),
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

companyAddres.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyAddress(e.target.value)) {
		companyAddres.removeAttribute('style', 'color: #ff7171;');
	}
	if (!validateCompanyAddress(e.target.value)) {
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ':' && e.target.value[i] === ':') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === ';' && e.target.value[i] === ';') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '№' && e.target.value[i] === '№') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[№]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '#' && e.target.value[i] === '#') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[#]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}
	if (e.target.value[i - 1] === '/' && e.target.value[i] === '/') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[/]/, '');
		companyAddres.setAttribute('style', 'color: #ff7171;');
	}

	e.target.value.length > 45
		? ((labelCompanyAddressMinMax.innerHTML = 'Достигнут лимит введенных символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 45)))
		: e.target.value.length < 45 && e.target.value.length > 10
		? ((labelCompanyAddressMinMax.innerHTML = 'Max 45 символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyAddressMinMax.innerHTML = 'Min 10 - Max 45 символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #2d4059;'));

	e.target.value[0] === '-'
		? (e.target.value = '')
		: e.target.value[0] === '#'
		? (e.target.value = '')
		: e.target.value[0] === '&'
		? (e.target.value = '')
		: e.target.value[0] === '№'
		? (e.target.value = '')
		: e.target.value[0] === ':'
		? (e.target.value = '')
		: e.target.value[0] === ';'
		? (e.target.value = '')
		: e.target.value[0] === '/'
		? (e.target.value = '')
		: e.target.value[0] === ' '
		? (e.target.value = '')
		: e.target.value[0] === ','
		? (e.target.value = '')
		: e.target.value[0] === '.'
		? (e.target.value = '')
		: (e.target.value = e.target.value);
	e.target.value = e.target.value.replace(/([_~`?\\|!"«»%=*^$()'+@\[\]{}<>])/gi, '');
});

companySite.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	e.target.value.length > 80
		? ((labelCompanySiteMinMax.innerHTML = 'Достигнут лимит введенных символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 80)))
		: e.target.value.length < 20 && e.target.value.length > 20
		? ((labelCompanySiteMinMax.innerHTML = 'Max 80 символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanySiteMinMax.innerHTML = 'Min 20 - Max 80 символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #2d4059;'));

	e.target.value[0] === '-'
		? (e.target.value = '')
		: e.target.value[0] === '#'
		? (e.target.value = '')
		: e.target.value[0] === '&'
		? (e.target.value = '')
		: e.target.value[0] === '№'
		? (e.target.value = '')
		: e.target.value[0] === ':'
		? (e.target.value = '')
		: e.target.value[0] === ';'
		? (e.target.value = '')
		: e.target.value[0] === '/'
		? (e.target.value = '')
		: e.target.value[0] === ' '
		? (e.target.value = '')
		: e.target.value[0] === ','
		? (e.target.value = '')
		: e.target.value[0] === '.'
		? (e.target.value = '')
		: e.target.value[0] === '@'
		? (e.target.value = '')
		: e.target.value[0] === '!'
		? (e.target.value = '')
		: e.target.value[0] === '%'
		? (e.target.value = '')
		: e.target.value[0] === '*'
		? (e.target.value = '')
		: e.target.value[0] === '$'
		? (e.target.value = '')
		: e.target.value[0] === '^'
		? (e.target.value = '')
		: (e.target.value = e.target.value);
});

companyLink.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	e.target.value.length > 80
		? ((labelCompanyLinkMinMax.innerHTML = 'Достигнут лимит введенных символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 80)))
		: e.target.value.length < 20 && e.target.value.length > 20
		? ((labelCompanyLinkMinMax.innerHTML = 'Max 80 символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyLinkMinMax.innerHTML = 'Min 20 - Max 80 символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #2d4059;'));

	e.target.value[0] === '-'
		? (e.target.value = '')
		: e.target.value[0] === '#'
		? (e.target.value = '')
		: e.target.value[0] === '&'
		? (e.target.value = '')
		: e.target.value[0] === '№'
		? (e.target.value = '')
		: e.target.value[0] === ':'
		? (e.target.value = '')
		: e.target.value[0] === ';'
		? (e.target.value = '')
		: e.target.value[0] === '/'
		? (e.target.value = '')
		: e.target.value[0] === ' '
		? (e.target.value = '')
		: e.target.value[0] === ','
		? (e.target.value = '')
		: e.target.value[0] === '.'
		? (e.target.value = '')
		: e.target.value[0] === '@'
		? (e.target.value = '')
		: e.target.value[0] === '!'
		? (e.target.value = '')
		: e.target.value[0] === '%'
		? (e.target.value = '')
		: e.target.value[0] === '*'
		? (e.target.value = '')
		: e.target.value[0] === '$'
		? (e.target.value = '')
		: e.target.value[0] === '^'
		? (e.target.value = '')
		: (e.target.value = e.target.value);
});

companyAbout.addEventListener('input', (e) => {
	e.target.value.length > 200
		? ((labelCompanyAboutMinMax.innerHTML = 'Достигнут лимит введенных символов в размере 200'),
		  labelCompanyAboutMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 200)))
		: ((labelCompanyAboutMinMax.innerHTML = ''),
		  labelCompanyAboutMinMax.setAttribute('style', 'color: #2d4059;'));
});

fieldDelivery.addEventListener('input', (e) => {
	e.target.value.length > 150
		? ((labelCompanyDeliveryMinMax.innerHTML = 'Достигнут лимит введенных символов в размере 150'),
		  labelCompanyDeliveryMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 150)))
		: ((labelCompanyDeliveryMinMax.innerHTML = ''),
		  labelCompanyDeliveryMinMax.setAttribute('style', 'color: #2d4059;'));
});

fielGuarantee.addEventListener('input', (e) => {
	e.target.value.length > 150
		? ((labelCompanyGarntieMinMax.innerHTML = 'Достигнут лимит введенных символов в размере 150'),
		  labelCompanyGarntieMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 150)))
		: ((labelCompanyGarntieMinMax.innerHTML = ''),
		  labelCompanyGarntieMinMax.setAttribute('style', 'color: #2d4059;'));
});
