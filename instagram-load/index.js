const img = document.querySelector('.profile-avatar');
const src = document.querySelector('.read-instagram').href;

getElement(src, 'img', function (element) {
	console.log(element);
});

function getElement(url, selector, c) {
	request(new XMLHttpRequest());

	function request(xhr) {
		xhr.open('GET', 'https://crossorigin.me/' + url, true);
		xhr.send();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					html = document.createElement('div');
					html.innerHTML = xhr.responseText;
					c(html.querySelector(selector));
				}
			}
		};
	}
}
