const companyName = document.getElementById('seller_sellerCompany_companyName');
const companyUNP = document.getElementById('seller_sellerCompany_unp');
const companyCity = document.getElementById('seller_sellerCompany_city');
const companyLegalAddress = document.getElementById('seller_sellerCompany_address');
const companySite = document.getElementById('seller_sellerCompany_siteAddress');
const companyAbout = document.getElementById('seller_sellerCompany_activityDescription');
const companyDelivery = document.getElementById('seller_sellerCompany_workflow_deliveryDetail');
const companyGuarantee = document.getElementById('seller_sellerCompany_workflow_guaranteeDetail');
const comments = document.getElementById('seller_commentOrDescription');
const youtubeLink = document.getElementById('seller_social_youtubeLink');

const advantagesOne = document.getElementById('seller_advantages_advantage1');
const advantagesTwo = document.getElementById('seller_advantages_advantage2');
const advantagesThree = document.getElementById('seller_advantages_advantage3');
const advantagesFour = document.getElementById('seller_advantages_advantage4');
const advantagesFives = document.getElementById('seller_advantages_advantage5');
const advantagesBlocks = document.querySelectorAll('.advantages-outter');

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

const commentParrent = document.querySelector('.textarea-bus-comment');
commentParrent.style.cssText =
	'display: flex; width: 100%; align-items: flex-start; flex-direction: column; ';

const textWidth = document.querySelectorAll('.delivery-text');
textWidth.forEach((e) => {
	e.setAttribute('style', 'width: 100%');
});

const informComments = document.createElement('span');
commentParrent.appendChild(informComments);
informComments.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

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

const informAd1 = document.createElement('span');
parrentBlock[7].appendChild(informAd1);
informAd1.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informAd2 = document.createElement('span');
parrentBlock[8].appendChild(informAd2);
informAd2.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informAd3 = document.createElement('span');
parrentBlock[9].appendChild(informAd3);
informAd3.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informAd4 = document.createElement('span');
parrentBlock[10].appendChild(informAd4);
informAd4.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informAd5 = document.createElement('span');
parrentBlock[11].appendChild(informAd5);
informAd5.setAttribute('style', 'color: #84a98c; margin-bottom: 10px');

const informDeliveri = document.createElement('span');
fieldBlock[0].appendChild(informDeliveri);
informDeliveri.setAttribute('style', 'color: #84a98c; margin-bottom: 10px; margin-top: 10px;');

const informGuranties = document.createElement('span');
fieldBlock[1].appendChild(informGuranties);
informGuranties.setAttribute('style', 'color: #84a98c; margin-bottom: 10px; margin-top: 10px;');

window.onload = () => {
	if (!companyDelivery.value.length) {
		deliveryNo.setAttribute('checked', 'true');
		deliveryText.setAttribute('style', 'display: none');
	} else {
		deliveryYes.setAttribute('checked', 'true');
		deliveryNo.setAttribute('disabled', 'true');
	}

	if (!companyGuarantee.value.length) {
		guarantiesNo.setAttribute('checked', 'true');
		guarantiesText.setAttribute('style', 'display: none');
	} else {
		guarantiesYes.setAttribute('checked', 'true');
		guarantiesNo.setAttribute('disabled', 'true');
	}

	if (
		advantagesTwo.value.length === 0 &&
		advantagesOne.value.length === 0 &&
		advantagesThree.value.length === 0 &&
		advantagesFour.value.length === 0 &&
		advantagesFives.value.length === 0
	) {
		advantagesBlocks[4].setAttribute('style', 'display: none');
		advantagesBlocks[3].setAttribute('style', 'display: none');
		advantagesBlocks[2].setAttribute('style', 'display: none');
	}
	if (
		advantagesOne.value.length > 0 ||
		(advantagesTwo.value.length > 0 &&
			advantagesOne.value.length > 0 &&
			advantagesThree.value.length === 0)
	) {
		advantagesBlocks[4].setAttribute('style', 'display: none');
		advantagesBlocks[3].setAttribute('style', 'display: none');
		advantagesBlocks[2].setAttribute('style', 'display: block');
	}
	if (
		advantagesTwo.value.length > 0 &&
		advantagesOne.value.length > 0 &&
		advantagesThree.value.length > 0
	) {
		advantagesBlocks[4].setAttribute('style', 'display: block');
		advantagesBlocks[3].setAttribute('style', 'display: block');
		advantagesBlocks[2].setAttribute('style', 'display: block');
	}
};

deliveryNo.addEventListener('change', () => {
	deliveryText.setAttribute('style', 'display: none');
});

guarantiesNo.addEventListener('change', () => {
	guarantiesText.setAttribute('style', 'display: none');
});

deliveryYes.addEventListener('change', () => {
	deliveryText.setAttribute('style', 'display: block');
});

guarantiesYes.addEventListener('change', () => {
	guarantiesText.setAttribute('style', 'display: block');
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

	if (e.target.value.length === 0) {
		informName.innerHTML = '';
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

	if (e.target.value.length === 0) {
		informUNP.innerHTML = '';
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

	if (e.target.value.length === 0) {
		informCity.innerHTML = '';
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

	if (e.target.value.length === 0) {
		informLegalAddress.innerHTML = '';
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

	if (e.target.value.length === 0) {
		informAbout.innerHTML = '';
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

	if (e.target.value.length > 700) {
		informAbout.innerHTML = 'Достигнут лимит в 700 символов';
		e.target.value = e.target.value.substr(0, 700);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

companyDelivery.addEventListener('input', (e) => {
	deliveryNo.setAttribute('disabled', 'true');
	if (e.target.value.length === 0) {
		deliveryNo.removeAttribute('disabled');
	}
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

	if (e.target.value.length === 0) {
		informDeliveri.innerHTML = '';
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

	if (e.target.value.length > 350) {
		informDeliveri.innerHTML = 'Достигнут лимит в 350 символов';
		e.target.value = e.target.value.substr(0, 350);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

companyGuarantee.addEventListener('input', (e) => {
	guarantiesNo.setAttribute('disabled', 'true');
	if (e.target.value.length === 0) {
		guarantiesNo.removeAttribute('disabled');
	}
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

	if (e.target.value.length === 0) {
		informGuranties.innerHTML = '';
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

	if (e.target.value.length > 350) {
		informGuranties.innerHTML = 'Достигнут лимит в 350 символов';
		e.target.value = e.target.value.substr(0, 350);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

advantagesOne.addEventListener('input', (e) => {
	if (e.target.value.length > 0) {
		advantagesBlocks[2].setAttribute('style', 'display: block');
	}
	if (e.target.value.length === 0) {
		advantagesBlocks[2].setAttribute('style', 'display: none');
	}

	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informAd1.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informAd1.innerHTML = 'Неприемлемый символ';
	}

	if (e.target.value.length === 0) {
		informAd1.innerHTML = '';
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

	if (e.target.value.length > 200) {
		informAd1.innerHTML = 'Достигнут лимит в 200 символов';
		e.target.value = e.target.value.substr(0, 200);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

advantagesTwo.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informAd2.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informAd2.innerHTML = 'Неприемлемый символ';
	}

	if (e.target.value.length === 0) {
		informAd2.innerHTML = '';
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

	if (e.target.value.length > 200) {
		informAd2.innerHTML = 'Достигнут лимит в 200 символов';
		e.target.value = e.target.value.substr(0, 200);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

advantagesThree.addEventListener('input', (e) => {
	if (e.target.value.length > 0) {
		advantagesBlocks[4].setAttribute('style', 'display: block');
		advantagesBlocks[3].setAttribute('style', 'display: block');
	}
	if (e.target.value.length === 0) {
		advantagesBlocks[4].setAttribute('style', 'display: none');
		advantagesBlocks[3].setAttribute('style', 'display: none');
	}
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informAd3.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informAd3.innerHTML = 'Неприемлемый символ';
	}

	if (e.target.value.length === 0) {
		informAd3.innerHTML = '';
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

	if (e.target.value.length > 200) {
		informAd3.innerHTML = 'Достигнут лимит в 200 символов';
		e.target.value = e.target.value.substr(0, 200);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

advantagesFour.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informAd4.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informAd4.innerHTML = 'Неприемлемый символ';
	}

	if (e.target.value.length === 0) {
		informAd4.innerHTML = '';
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

	if (e.target.value.length > 200) {
		informAd4.innerHTML = 'Достигнут лимит в 200 символов';
		e.target.value = e.target.value.substr(0, 200);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

advantagesFives.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informAd5.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informAd5.innerHTML = 'Неприемлемый символ';
	}

	if (e.target.value.length === 0) {
		informAd5.innerHTML = '';
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

	if (e.target.value.length > 200) {
		informAd5.innerHTML = 'Достигнут лимит в 200 символов';
		e.target.value = e.target.value.substr(0, 200);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

comments.addEventListener('input', (e) => {
	let i = e.target.value.length - 1;
	if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
		let s = e.target.value;
		e.target.value = s[0].toUpperCase() + s.slice(1);
	}
	if (validateCompanyName(e.target.value)) {
		informComments.innerHTML = '';
	}
	if (!validateCompanyName(e.target.value)) {
		informComments.innerHTML = 'Неприемлемый символ';
	}

	if (e.target.value.length === 0) {
		informComments.innerHTML = '';
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

	if (e.target.value.length > 200) {
		informComments.innerHTML = 'Достигнут лимит в 200 символов';
		e.target.value = e.target.value.substr(0, 200);
	}

	if (e.target.value.match(/^[_~№#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	e.target.value = e.target.value.replace(/([_~`?/\\|!=%*'^$()@\[\]{}<>])/gi, '');
});

youtubeLink.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace('https://', '');
	e.target.value = e.target.value.replace('www.', '');
	if (e.target.value.match(/^[_~#&/|,.`?\\|!"«»%=*^$()'+@\[\]{}<> -]/)) {
		e.target.value = '';
	}
	let sYoutube = 'youtube.com/embed/';
	if (e.target.value.includes('watch')) {
		e.target.value = sYoutube + e.target.value.split('v=')[1];
	}
	if (e.target.value.includes('live')) {
		e.target.value = sYoutube + e.target.value.split('/')[2];
		e.target.value = e.target.value.split('?')[0];
	}
	if (e.target.value.includes('youtu.be')) {
		e.target.value = sYoutube + e.target.value.split('/')[1];
	}
});

function validateCompanyName(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9#;:+ "№,.&«»-]+$/);
}

function validateCompanyCity(name) {
	return String(name).match(/^[a-zA-Zа-яА-ЯёЁ0-9 -]+$/);
}
