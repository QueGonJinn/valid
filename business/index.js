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
const sellerAdvantagesFirst = document.getElementById('seller_advantages_advantage1');
const sellerAdvantagesSecond = document.getElementById('seller_advantages_advantage2');
const sellerAdvantagesThrid = document.getElementById('seller_advantages_advantage3');
const sellerAdvantagesFour = document.getElementById('seller_advantages_advantage4');
const sellerAdvantagesFives = document.getElementById('seller_advantages_advantage5');
const coments = document.getElementById('seller_commentOrDescription');
const youtubeLink = document.getElementById('seller_social_youtubeLink')

const parrentBlock = document.querySelectorAll('.input-outter');
console.log(parrentBlock);

parrentBlock.forEach((e) => {
	e.setAttribute('style', 'display: flex;');	
});
parrentBlock.forEach((e) => {
	e.setAttribute('style', 'flex-direction: column!important;');	
});



const parrentBlockText = document.querySelectorAll('.delivery-text');
const parrentBlockComments = document.querySelector('.textarea-bus-comment');

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

let labelSellerAdvantagesFirst = document.createElement('span');
parrentBlock[7].appendChild(labelSellerAdvantagesFirst);
labelSellerAdvantagesFirst.setAttribute('style', 'color: #2d4059;');

let labelSellerAdvantagesSecond = document.createElement('span');
parrentBlock[8].appendChild(labelSellerAdvantagesSecond);
labelSellerAdvantagesSecond.setAttribute('style', 'color: #2d4059;');

let labelSellerAdvantagesThrid = document.createElement('span');
parrentBlock[9].appendChild(labelSellerAdvantagesThrid);
labelSellerAdvantagesThrid.setAttribute('style', 'color: #2d4059;');

let labelSellerAdvantagesFour = document.createElement('span');
parrentBlock[10].appendChild(labelSellerAdvantagesFour);
labelSellerAdvantagesFour.setAttribute('style', 'color: #2d4059;');

let labelSellerAdvantagesFives = document.createElement('span');
parrentBlock[11].appendChild(labelSellerAdvantagesFives);
labelSellerAdvantagesFives.setAttribute('style', 'color: #2d4059;');

let labelCompanyDeliveryMinMax = document.createElement('span');
parrentBlockText[0].appendChild(labelCompanyDeliveryMinMax);
labelCompanyDeliveryMinMax.setAttribute('style', 'color: #2d4059;');

let labelCompanyGarntieMinMax = document.createElement('span');
parrentBlockText[1].appendChild(labelCompanyGarntieMinMax);
labelCompanyGarntieMinMax.setAttribute('style', 'color: #2d4059;');

let labelCommentsMinMax = document.createElement('span');
parrentBlockComments.appendChild(labelCommentsMinMax);
labelCommentsMinMax.setAttribute('style', 'color: #2d4059;');

let labelYoutube = document.createElement('span');
parrentBlock[12].appendChild(labelYoutube);
labelYoutube.setAttribute('style', 'color: #2d4059;');

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
		? ((labelCompanyNameMinMax.innerHTML = 'Достигнут лимит в 30 символов'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 30)))
		: e.target.value.length < 30 && e.target.value.length > 10
		? ((labelCompanyNameMinMax.innerHTML = 'Max 30 символов'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyNameMinMax.innerHTML = 'Min 10 - Max 30 символов'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;'));

	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_#:~`?/\\|!="№;%*^$()'+@\[\]{}<>])/gi, '');
});
companyName.addEventListener('focus', (e) => {
	e.target.value.length > 30
		? ((labelCompanyNameMinMax.innerHTML = 'Достигнут лимит в 30 символов'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 30)))
		: e.target.value.length < 30 && e.target.value.length > 10
		? ((labelCompanyNameMinMax.innerHTML = 'Max 30 символов'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyNameMinMax.innerHTML = 'Min 10 - Max 30 символов'),
		  labelCompanyNameMinMax.setAttribute('style', 'color: #2d4059;'));
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
		? ((labelCompanyUNPMinMax.innerHTML = 'Достигнут лимит в 20 символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 20)))
		: e.target.value.length < 20 && e.target.value.length > 5
		? ((labelCompanyUNPMinMax.innerHTML = 'Max 20 символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyUNPMinMax.innerHTML = 'Min 5 - Max 20 символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;'));

	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_#:~`?/\\|!"«»,.№;%*^$(=)'+@\[\]{}<>&-])/gi, '');
});
companyUNP.addEventListener('focus', (e) => {
	e.target.value.length > 20
		? ((labelCompanyUNPMinMax.innerHTML = 'Достигнут лимит в 20 символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 20)))
		: e.target.value.length < 20 && e.target.value.length > 5
		? ((labelCompanyUNPMinMax.innerHTML = 'Max 20 символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyUNPMinMax.innerHTML = 'Min 5 - Max 20 символов'),
		  labelCompanyUNPMinMax.setAttribute('style', 'color: #2d4059;'));
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
		? ((labelCityUNPMinMax.innerHTML = 'Достигнут лимит в 20 символов'),
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
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_#:~`?/\\|!"«»,.№;%*^$(=)'+@\[\]{}<>&])/gi, '');
});
companyCity.addEventListener('focus', (e) => {
	e.target.value.length > 20
		? ((labelCityUNPMinMax.innerHTML = 'Достигнут лимит в 20 символов'),
		  labelCityUNPMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 20)))
		: e.target.value.length < 20 && e.target.value.length > 3
		? ((labelCityUNPMinMax.innerHTML = 'Max 20 символов'),
		  labelCityUNPMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCityUNPMinMax.innerHTML = 'Min 3 - Max 20 символов'),
		  labelCityUNPMinMax.setAttribute('style', 'color: #2d4059;'));
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
		? ((labelCompanyAddressMinMax.innerHTML = 'Достигнут лимит в 45 символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 45)))
		: e.target.value.length < 45 && e.target.value.length > 10
		? ((labelCompanyAddressMinMax.innerHTML = 'Max 45 символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyAddressMinMax.innerHTML = 'Min 10 - Max 45 символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #2d4059;'));

	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?\\|!"«»%=*^$()'+@\[\]{}<>])/gi, '');
});
companyAddres.addEventListener('focus', (e) => {
	e.target.value.length > 45
		? ((labelCompanyAddressMinMax.innerHTML = 'Достигнут лимит в 45 символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 45)))
		: e.target.value.length < 45 && e.target.value.length > 10
		? ((labelCompanyAddressMinMax.innerHTML = 'Max 45 символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyAddressMinMax.innerHTML = 'Min 10 - Max 45 символов'),
		  labelCompanyAddressMinMax.setAttribute('style', 'color: #2d4059;'));
});

companySite.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	e.target.value.length > 25
		? ((labelCompanySiteMinMax.innerHTML = 'Достигнут лимит в 25 символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 25)))
		: e.target.value.length < 25 && e.target.value.length > 5
		? ((labelCompanySiteMinMax.innerHTML = 'Max 25 символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanySiteMinMax.innerHTML = 'Min 5 - Max 25 символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #2d4059;'));

	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
});
companySite.addEventListener('focus', (e) => {
	e.target.value.length > 25
		? ((labelCompanySiteMinMax.innerHTML = 'Достигнут лимит в 25 символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 25)))
		: e.target.value.length < 25 && e.target.value.length > 5
		? ((labelCompanySiteMinMax.innerHTML = 'Max 25 символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanySiteMinMax.innerHTML = 'Min 5 - Max 25 символов'),
		  labelCompanySiteMinMax.setAttribute('style', 'color: #2d4059;'));
})

companyLink.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	e.target.value.length > 80
		? ((labelCompanyLinkMinMax.innerHTML = 'Достигнут лимит в 80 символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 80)))
		: e.target.value.length < 80 && e.target.value.length > 10
		? ((labelCompanyLinkMinMax.innerHTML = 'Max 80 символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyLinkMinMax.innerHTML = 'Min 10 - Max 80 символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #2d4059;'));

	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
});
companyLink.addEventListener('focus', (e) => {
	e.target.value.length > 80
		? ((labelCompanyLinkMinMax.innerHTML = 'Достигнут лимит в 80 символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 80)))
		: e.target.value.length < 80 && e.target.value.length > 20
		? ((labelCompanyLinkMinMax.innerHTML = 'Max 80 символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #2d4059;'))
		: ((labelCompanyLinkMinMax.innerHTML = 'Min 10 - Max 80 символов'),
		  labelCompanyLinkMinMax.setAttribute('style', 'color: #2d4059;'));
});

companyAbout.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 200
		? ((labelCompanyAboutMinMax.innerHTML = 'Достигнут лимит в 200 символов'),
		  labelCompanyAboutMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 200)))
		: ((labelCompanyAboutMinMax.innerHTML = 'Max колличество символов 200'),
		  labelCompanyAboutMinMax.setAttribute('style', 'color: #2d4059;'));
});
companyAbout.addEventListener('focus', (e) => {
	e.target.value.length > 200
		? ((labelCompanyAboutMinMax.innerHTML = 'Достигнут лимит в 200 символов'),
		  labelCompanyAboutMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 200)))
		: ((labelCompanyAboutMinMax.innerHTML = 'Max колличество символов 200'),
		  labelCompanyAboutMinMax.setAttribute('style', 'color: #2d4059;'));
});

fieldDelivery.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 150
		? ((labelCompanyDeliveryMinMax.innerHTML = 'Достигнут лимит в 150 символов'),
		  labelCompanyDeliveryMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 150)))
		: ((labelCompanyDeliveryMinMax.innerHTML = 'Max колличество символов 150'),
		  labelCompanyDeliveryMinMax.setAttribute('style', 'color: #2d4059;'));
});
fieldDelivery.addEventListener('focus', (e) => {
	e.target.value.length > 150
		? ((labelCompanyDeliveryMinMax.innerHTML = 'Достигнут лимит в 150 символов'),
		  labelCompanyDeliveryMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 150)))
		: ((labelCompanyDeliveryMinMax.innerHTML = 'Max колличество символов 150'),
		  labelCompanyDeliveryMinMax.setAttribute('style', 'color: #2d4059;'));
});

fielGuarantee.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 150
		? ((labelCompanyGarntieMinMax.innerHTML = 'Достигнут лимит в 150 символов'),
		  labelCompanyGarntieMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 150)))
		: ((labelCompanyGarntieMinMax.innerHTML = 'Max колличество символов 150'),
		  labelCompanyGarntieMinMax.setAttribute('style', 'color: #2d4059;'));
});
fielGuarantee.addEventListener('focus', (e) => {
	e.target.value.length > 150
		? ((labelCompanyGarntieMinMax.innerHTML = 'Достигнут лимит в 150 символов'),
		  labelCompanyGarntieMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 150)))
		: ((labelCompanyGarntieMinMax.innerHTML = 'Max колличество символов 150'),
		  labelCompanyGarntieMinMax.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesFirst.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 250
		? ((labelSellerAdvantagesFirst.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesFirst.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesFirst.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesFirst.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesFirst.addEventListener('focus', (e) => {
	e.target.value.length > 250
		? ((labelSellerAdvantagesFirst.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesFirst.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesFirst.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesFirst.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesSecond.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 250
		? ((labelSellerAdvantagesSecond.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesSecond.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesSecond.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesSecond.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesSecond.addEventListener('focus', (e) => {
	e.target.value.length > 250
		? ((labelSellerAdvantagesSecond.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesSecond.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesSecond.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesSecond.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesThrid.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 250
		? ((labelSellerAdvantagesThrid.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesThrid.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesThrid.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesThrid.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesThrid.addEventListener('focus', (e) => {
	e.target.value.length > 250
		? ((labelSellerAdvantagesThrid.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesThrid.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesThrid.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesThrid.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesFour.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 250
		? ((labelSellerAdvantagesFour.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesFour.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesFour.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesFour.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesFour.addEventListener('focus', (e) => {
	e.target.value.length > 250
		? ((labelSellerAdvantagesFour.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesFour.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesFour.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesFour.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesFives.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 250
		? ((labelSellerAdvantagesFives.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesFives.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesFives.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesFives.setAttribute('style', 'color: #2d4059;'));
});

sellerAdvantagesFives.addEventListener('focus', (e) => {
	e.target.value.length > 250
		? ((labelSellerAdvantagesFives.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelSellerAdvantagesSFilabelSellerAdvantagesFivessetAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelSellerAdvantagesFives.innerHTML = 'Max колличество символов 250'),
		  labelSellerAdvantagesFives.setAttribute('style', 'color: #2d4059;'));
});

coments.addEventListener('input', (e) => {
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	e.target.value.length > 250
		? ((labelCommentsMinMax.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelCommentsMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelCommentsMinMax.innerHTML = 'Max колличество символов 250'),
		  labelCommentsMinMax.setAttribute('style', 'color: #2d4059;'));
});

coments.addEventListener('focus', (e) => {
	e.target.value.length > 250
		? ((labelCommentsMinMax.innerHTML = 'Достигнут лимит в 250 символов'),
		  labelCommentsMinMax.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 250)))
		: ((labelCommentsMinMax.innerHTML = 'Max колличество символов 250'),
		  labelCommentsMinMax.setAttribute('style', 'color: #2d4059;'));
});

youtubeLink.addEventListener('input', (e) => {
	
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {		
		e.target.value = '';
	}
	let sYoutube = 'youtube.com/embed/'
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = sYoutube + e.target.value.split('v=')[1];

	e.target.value.length > 80
		? ((labelYoutube.innerHTML = 'Достигнут лимит в 80 символов'),
		  labelYoutube.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 80)))
		: e.target.value.length < 80 && e.target.value.length > 20
		? ((labelYoutube.innerHTML = 'Max 80 символов'),
		  labelYoutube.setAttribute('style', 'color: #2d4059;'))
		: ((labelYoutube.innerHTML = 'Min 20 - Max 80 символов'),
		  labelYoutube.setAttribute('style', 'color: #2d4059;'));
			
	e.target.value = e.target.value.replace('undefined', '');
})

youtubeLink.addEventListener('focus', (e) => {
	
	e.target.value.length > 80
		? ((labelYoutube.innerHTML = 'Достигнут лимит в 80 символов'),
		  labelYoutube.setAttribute('style', 'color: #ff7171;'),
		  (e.target.value = e.target.value.substr(0, 80)))
		: e.target.value.length < 80 && e.target.value.length > 20
		? ((labelYoutube.innerHTML = 'Max 80 символов'),
		  labelYoutube.setAttribute('style', 'color: #2d4059;'))
		: ((labelYoutube.innerHTML = 'Min 20 - Max 80 символов'),
		  labelYoutube.setAttribute('style', 'color: #2d4059;'));
})
