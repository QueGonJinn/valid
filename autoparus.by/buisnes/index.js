const companyName = document.getElementById('seller_sellerCompany_companyName');
const companyUNP = document.getElementById('seller_sellerCompany_unp');
const companyCity = document.getElementById('seller_sellerCompany_city');
const companyLegalAddress = document.getElementById('seller_sellerCompany_address');
const companySite = document.getElementById('seller_sellerCompany_siteAddress');
const companyAbout = document.getElementById('seller_sellerCompany_activityDescription');
const companyDelivery = document.getElementById('seller_sellerCompany_workflow_deliveryDetail');
const companyGuarantee = document.getElementById('seller_sellerCompany_workflow_guaranteeDetail');

const deliveryYes = document.getElementById('seller_sellerCompany_workflow_delivery_0');
const deliveryNo = document.getElementById('seller_sellerCompany_workflow_delivery_1');
const deliveryText = document.getElementById('seller_sellerCompany_workflow_deliveryDetail');

const guarantiesYes = document.getElementById('seller_sellerCompany_workflow_guarantee_0');
const guarantiesNo = document.getElementById('seller_sellerCompany_workflow_guarantee_1');
const guarantiesText = document.getElementById('seller_sellerCompany_workflow_guaranteeDetail');

const parrentBlock = document.querySelectorAll('.input-outter');
parrentBlock.forEach((e) => {
	e.style.cssText = 'display: flex; align-items: flex-start; flex-direction: column; ';
});

const fieldBlock = document.querySelectorAll('.block-item');
fieldBlock.forEach((e) => {
	e.style.cssText = 'display: flex; width: 100%; align-items: flex-start; flex-direction: column; ';
});

const textWidth = document.querySelectorAll('.delivery-text');
textWidth.forEach((e) => {
	e.setAttribute('style', 'width: 100%');
});

const informName = document.createElement('span');
parrentBlock[0].appendChild(informName);
informName.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informUNP = document.createElement('span');
parrentBlock[1].appendChild(informUNP);
informUNP.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informCity = document.createElement('span');
parrentBlock[2].appendChild(informCity);
informCity.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informLegalAddress = document.createElement('span');
parrentBlock[3].appendChild(informLegalAddress);
informLegalAddress.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informAbout = document.createElement('span');
parrentBlock[6].appendChild(informAbout);
informAbout.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informDeliveri = document.createElement('span');
fieldBlock[0].appendChild(informDeliveri);
informDeliveri.setAttribute('style', 'color: #84a98c; margin-bottom: 10px; margin-top: 10px;');

const informGuranties = document.createElement('span');
fieldBlock[1].appendChild(informGuranties);
informGuranties.setAttribute('style', 'color: #84a98c; margin-bottom: 10px; margin-top: 10px;');

window.onload = () => {
	deliveryYes.setAttribute('checked', 'true');
	guarantiesYes.setAttribute('checked', 'true');
	deliveryText.setAttribute('style', 'display: none');
	guarantiesText.setAttribute('style', 'display: none');
};

deliveryNo.addEventListener('change', () => {
	deliveryText.setAttribute('style', 'display: block');
});

guarantiesNo.addEventListener('change', () => {
	guarantiesText.setAttribute('style', 'display: block');
});

deliveryYes.addEventListener('change', () => {
	deliveryText.setAttribute('style', 'display: none');
});

guarantiesYes.addEventListener('change', () => {
	guarantiesText.setAttribute('style', 'display: none');
});

companyName.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informName.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informName.innerHTML = 'Неприемлемый символ';
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
	}
	if (e.target.value[i - 1] === '"' && e.target.value[i] === '"') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/["]/, '');
	}
	if (e.target.value[i - 1] === ':' && e.target.value[i] === ':') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
	}
	if (e.target.value[i - 1] === '#' && e.target.value[i] === '#') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[#]/, '');
	}
	if (e.target.value[i - 1] === '№' && e.target.value[i] === '№') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[№]/, '');
	}
	if (e.target.value[i - 1] === '+' && e.target.value[i] === '+') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[+]/, '');
	}
	if (e.target.value[i - 1] === ';' && e.target.value[i] === ';') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
	}

	if (e.target.value.length > 40) {
		informName.innerHTML = 'Достигнут лимит в 40 символов';
		e.target.value = e.target.value.substr(0, 40);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

companyUNP.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informUNP.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informUNP.innerHTML = 'Неприемлемый символ';
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
	}
	if (e.target.value[i - 1] === '"' && e.target.value[i] === '"') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/["]/, '');
	}
	if (e.target.value[i - 1] === ':' && e.target.value[i] === ':') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
	}
	if (e.target.value[i - 1] === '#' && e.target.value[i] === '#') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[#]/, '');
	}
	if (e.target.value[i - 1] === '№' && e.target.value[i] === '№') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[№]/, '');
	}
	if (e.target.value[i - 1] === '+' && e.target.value[i] === '+') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[+]/, '');
	}
	if (e.target.value[i - 1] === ';' && e.target.value[i] === ';') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
	}

	if (e.target.value.length > 15) {
		informUNP.innerHTML = 'Достигнут лимит в 15 символов';
		e.target.value = e.target.value.substr(0, 15);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

companyCity.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyCity(e.target.value)) {
		informCity.innerHTML = '';
	}
	if (!validateCompanyCity(e.target.value)) {
		informCity.innerHTML = 'Неприемлемый символ';
	}
	if (e.target.value[i - 1] === ' ' || e.target.value[i - 1] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
	}

	if (e.target.value.length > 20) {
		informCity.innerHTML = 'Достигнут лимит в 20 символов';
		e.target.value = e.target.value.substr(0, 20);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$:;#&+"()@\[\]{}<>])/gi, '');
});

companyLegalAddress.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informLegalAddress.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informLegalAddress.innerHTML = 'Неприемлемый символ';
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
	}
	if (e.target.value[i - 1] === '"' && e.target.value[i] === '"') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/["]/, '');
	}
	if (e.target.value[i - 1] === ':' && e.target.value[i] === ':') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
	}
	if (e.target.value[i - 1] === '#' && e.target.value[i] === '#') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[#]/, '');
	}
	if (e.target.value[i - 1] === '№' && e.target.value[i] === '№') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[№]/, '');
	}
	if (e.target.value[i - 1] === '+' && e.target.value[i] === '+') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[+]/, '');
	}
	if (e.target.value[i - 1] === ';' && e.target.value[i] === ';') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
	}

	if (e.target.value.length > 60) {
		informLegalAddress.innerHTML = 'Достигнут лимит в 60 символов';
		e.target.value = e.target.value.substr(0, 60);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

companySite.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	e.target.value = e.target.value.split('/')[0];
});

companyAbout.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informAbout.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informAbout.innerHTML = 'Неприемлемый символ';
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
	}
	if (e.target.value[i - 1] === '"' && e.target.value[i] === '"') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/["]/, '');
	}
	if (e.target.value[i - 1] === ':' && e.target.value[i] === ':') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
	}
	if (e.target.value[i - 1] === '#' && e.target.value[i] === '#') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[#]/, '');
	}
	if (e.target.value[i - 1] === '№' && e.target.value[i] === '№') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[№]/, '');
	}
	if (e.target.value[i - 1] === '+' && e.target.value[i] === '+') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[+]/, '');
	}
	if (e.target.value[i - 1] === ';' && e.target.value[i] === ';') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
	}

	if (e.target.value.length > 300) {
		informAbout.innerHTML = 'Достигнут лимит в 300 символов';
		e.target.value = e.target.value.substr(0, 300);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

companyDelivery.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informDeliveri.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informDeliveri.innerHTML = 'Неприемлемый символ';
	}

	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
	}
	if (e.target.value[i - 1] === '"' && e.target.value[i] === '"') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/["]/, '');
	}
	if (e.target.value[i - 1] === ':' && e.target.value[i] === ':') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
	}
	if (e.target.value[i - 1] === '#' && e.target.value[i] === '#') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[#]/, '');
	}
	if (e.target.value[i - 1] === '№' && e.target.value[i] === '№') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[№]/, '');
	}
	if (e.target.value[i - 1] === '+' && e.target.value[i] === '+') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[+]/, '');
	}
	if (e.target.value[i - 1] === ';' && e.target.value[i] === ';') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
	}

	if (e.target.value.length > 180) {
		informDeliveri.innerHTML = 'Достигнут лимит в 180 символов';
		e.target.value = e.target.value.substr(0, 180);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

companyGuarantee.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informGuranties.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informGuranties.innerHTML = 'Неприемлемый символ';
	}
	if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
	}
	if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
	}
	if (e.target.value[i - 1] === '&' && e.target.value[i] === '&') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[&]/, '');
	}
	if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
	}
	if (e.target.value[i - 1] === ',' && e.target.value[i] === ',') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
	}
	if (e.target.value[i - 1] === '«' && e.target.value[i] === '«') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[«]/, '');
	}
	if (e.target.value[i - 1] === '»' && e.target.value[i] === '»') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[»]/, '');
	}
	if (e.target.value[i - 1] === '"' && e.target.value[i] === '"') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/["]/, '');
	}
	if (e.target.value[i - 1] === ':' && e.target.value[i] === ':') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
	}
	if (e.target.value[i - 1] === '#' && e.target.value[i] === '#') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[#]/, '');
	}
	if (e.target.value[i - 1] === '№' && e.target.value[i] === '№') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[№]/, '');
	}
	if (e.target.value[i - 1] === '+' && e.target.value[i] === '+') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[+]/, '');
	}
	if (e.target.value[i - 1] === ';' && e.target.value[i] === ';') {
		e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
	}

	if (e.target.value.length > 180) {
		informGuranties.innerHTML = 'Достигнут лимит в 180 символов';
		e.target.value = e.target.value.substr(0, 180);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

function validateCompanyName(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9#;:+ "№,.&«»-]+$/);
}

function validateCompanyCity(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 -]+$/);
}
