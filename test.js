/* const rtbBlock = document.getElementsByTagName('div');

const rtbID = 'yandex_rtb_R-A-1464694-17-';
let number = 1;
let timer = setInterval(() => {
	window.yaContextCb.push(() => {
		rtbBlock[8].id = rtbID + number;

		Ya.Context.AdvManager.render({
			renderTo: `yandex_rtb_R-A-1464694-17-${number}`,
			blockId: `R-A-1464694-17-${number}`,
		});
		number++;
	});
}, 8000);
 */
const inserterBF = document.querySelector('.yarpp');
const bannerWrapper = document.createElement('div');
bannerWrapper.classList.add('banner__wrapper');

const mainLink = document.createElement('a');
const bannerImg = document.createElement('img');

bannerImg.src = 'https://uj-images.ru/images/article/2023/03/641c68a08965c.webp';
mainLink.href = 'https://www.autoparus.by/';

mainLink.append(bannerImg);
bannerWrapper.append(mainLink);
inserterBF.parentNode.insertBefore(bannerWrapper, inserterBF);

const rtbBanerBlock = document.createElement('div');
rtbBanerBlock.id = 'yandex_rtb_R-A-2246410-6';
rtbBanerBlock.style.cssText = 'width:100%; height:500px; background-color: #f1f3f3';

bannerWrapper.append(rtbBanerBlock);

//Update RTB

const rtbWrapper = document.getElementsByClassName('rtb__one');
const rtbBlock = document.createElement('div');
rtbBlock.style.cssText = 'width:100%; height:180px; background-color: #f1f3f3';

const rtbID = 'yandex_rtb_R-A-2246410-7-';
let number = 1;

function first() {
	rtbWrapper[0].append(rtbBlock);
	window.yaContextCb.push(() => {
		rtbBlock.id = `yandex_rtb_R-A-2246410-7-${number}`;
		console.log(rtbID + number);
		Ya.Context.AdvManager.render({
			renderTo: `yandex_rtb_R-A-2246410-7-${number}`,
			blockId: `R-A-2246410-7`,
		});
	});
}
first();

let timer = setInterval(() => {
	rtbWrapper[0].append(rtbBlock);
	window.yaContextCb.push(() => {
		rtbBlock.id = `yandex_rtb_R-A-2246410-7-${number + 1}`;
		Ya.Context.AdvManager.render({
			renderTo: `yandex_rtb_R-A-2246410-7-${number + 1}`,
			blockId: `R-A-2246410-7`,
		});
		number++;
	});
}, 8000);
