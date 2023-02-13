const nameAuthor = document.getElementById('seller_landing_feedback_name');
const phoneAuthor = document.getElementById('seller_landing_feedback_phone');
const emailAuthor = document.getElementById('seller_landing_feedback_email');
const messageAuthor = document.getElementById('seller_landing_feedback_message');

const confirm = document.getElementById('seller_landing_feedback_submit');

const title = document.querySelector('.column-feedback h2');

const link = document.createElement('a');

link.setAttribute('href', 'https://www.autoparus.by/publication/77778');

console.log(title);

if (confirm) {
	function validateEmail(email) {
		return String(email).match(
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
		);
	}

	confirm.setAttribute('disabled', true);
	confirm.setAttribute('style', 'background: #303f30');

	nameAuthor.addEventListener('input', (e) => {
		let i = e.target.value.length - 1;

		if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
			let s = e.target.value;
			e.target.value = s[0].toUpperCase() + s.slice(1);
		}
		if (e.target.value.length > 25) {
			e.target.value = e.target.value.substr(0, 25);
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		}
		if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i].match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
		}

		if (e.target.value.match(/^[_~#&/|,.`?\\|!"№;«»%=*^$()'+@\[\]{}<> -]/)) {
			e.target.value = '';
		}
		e.target.value = e.target.value.replace(/([.,_#:~`?/\\|!"№;%&*^$()'=+@\[\]{}<>])/gi, '');
	});

	phoneAuthor.addEventListener('input', (e) => {
		let i = e.target.value.length - 1;

		e.target.value = '+' + e.target.value.substr(1, i);
		if (e.target.value.length > 24) {
			e.target.value = e.target.value.substr(0, 24);
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		}
		if (e.target.value[i - 1] === '+' && e.target.value[i] === '+') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[+]/, '');
		}
		if (e.target.value[i - 1] === '-' && e.target.value[i] === '-') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		}
		if (e.target.value[i - 1] === '(' && e.target.value[i] === '(') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[(]/, '');
		}
		if (e.target.value[i - 1] === ')' && e.target.value[i] === ')') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[)]/, '');
		}

		if (e.target.value.match(/^[_~#&/|,.`?\\|!"№;«»%=*^$()'@\[\]{}<>a-zA-Zа-яА-ЯёЁ -]/)) {
			e.target.value = '';
		}

		e.target.value = e.target.value.replace(
			/([.,_#:~`?/\\|!"№;%&*^$'=@\[\]{}<>a-zA-Zа-яА-ЯёЁa-zA-Zа-яА-ЯёЁ])/gi,
			'',
		);
	});

	emailAuthor.addEventListener('input', (e) => {
		let i = e.target.value.length - 1;
		if (validateEmail(e.target.value)) {
			e.target.classList.remove('input-error');
			emailAuthor.removeAttribute('style', 'color: #ff7171;');
		}

		if (!validateEmail(e.target.value)) {
			e.target.classList.add('input-error');
			emailAuthor.setAttribute('style', 'color: #ff7171;');
		}

		if (e.target.value[i - 1] === '@' && e.target.value[i] === '@') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[@]/, '');
		}
		if (e.target.value[i - 1] === '.' && e.target.value[i] === '.') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '');
		}
		if (e.target.value[0] === '@') {
			e.target.value = '';
		}
		if (e.target.value[0] === '-') {
			e.target.value = '';
		}
		if (e.target.value.match(/([а-яА-ЯёЁ,_#:~ `?/\\|!"№;%&*^$()<>{}||'+-])/gi)) {
			e.target.value = e.target.value.replace(/([а-яА-ЯёЁ,_#:~ `?/\\|!"№;%&*^$()<>{}||'+-])/gi, '');
		}
	});

	messageAuthor.addEventListener('input', (e) => {
		let i = e.target.value.length - 1;

		if (e.target.value.match(/^[a-zA-Zа-яА-ЯёЁ]/)) {
			let s = e.target.value;
			e.target.value = s[0].toUpperCase() + s.slice(1);
		}
		if (e.target.value.length > 500) {
			e.target.value = e.target.value.substr(0, 500);
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i] === ' ') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[ ]/, '');
		}
		if (
			e.target.value[i - 2] === '-' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i] === '-'
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, '');
		}
		if (
			e.target.value[i - 2] === ',' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i] === ','
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, '');
		}
		if (
			e.target.value[i - 2] === ';' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i] === ';'
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '');
		}
		if (
			e.target.value[i - 2] === ':' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i] === ':'
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, '');
		}
		if (
			e.target.value[i - 2] === '!' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i] === '!'
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[!]/, '');
		}
		if (
			e.target.value[i - 2] === '?' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i] === '?'
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[?]/, '');
		}
		if (
			e.target.value[i - 2] === '.' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i].match(/^[a-zA-Zа-яА-ЯёЁ]/)
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
		}

		if (
			e.target.value[i - 2] === '!' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i].match(/^[a-zA-Zа-яА-ЯёЁ]/)
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
		}

		if (
			e.target.value[i - 2] === '?' &&
			e.target.value[i - 1] === ' ' &&
			e.target.value[i].match(/^[a-zA-Zа-яА-ЯёЁ]/)
		) {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].toUpperCase();
		}

		if (e.target.value[i - 1] === ' ' && e.target.value[i] === '.') {
			e.target.value = e.target.value.substr(0, i - 1) + e.target.value[i - 1].replace(/[ ]/, '. ');
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i] === ',') {
			e.target.value = e.target.value.substr(0, i - 1) + e.target.value[i - 1].replace(/[ ]/, ', ');
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i] === '!') {
			e.target.value = e.target.value.substr(0, i - 1) + e.target.value[i - 1].replace(/[ ]/, '! ');
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i] === '?') {
			e.target.value = e.target.value.substr(0, i - 1) + e.target.value[i - 1].replace(/[ ]/, '? ');
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i] === ';') {
			e.target.value = e.target.value.substr(0, i - 1) + e.target.value[i - 1].replace(/[ ]/, '; ');
		}
		if (e.target.value[i - 1] === ' ' && e.target.value[i] === ':') {
			e.target.value = e.target.value.substr(0, i - 1) + e.target.value[i - 1].replace(/[ ]/, ': ');
		}
		if (e.target.value[i] === '-') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[-]/, ' - ');
		}
		if (e.target.value[i] === '.') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[.]/, '. ');
		}
		if (e.target.value[i] === ',') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[,]/, ', ');
		}
		if (e.target.value[i] === '!') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[!]/, '! ');
		}
		if (e.target.value[i] === '?') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[?]/, '? ');
		}
		if (e.target.value[i] === ';') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[;]/, '; ');
		}
		if (e.target.value[i] === ':') {
			e.target.value = e.target.value.substr(0, i) + e.target.value[i].replace(/[:]/, ': ');
		}

		if (e.target.value.match(/^[_~#&/|,.`?\\|!"№;«»%=*^$()'+@\[\]{}<> -]/)) {
			e.target.value = '';
		}

		if (messageAuthor.value.length > 15) {
			confirm.removeAttribute('disabled');
			confirm.setAttribute('style', 'background: #4caf50');
		}

		e.target.value = e.target.value.replace(/([_#~`/\\|"№%&*^$()'=+@\[\]{}<>])/gi, '');
	});
} else {
	title.parentNode.append(link);
	link.append(title);
}
