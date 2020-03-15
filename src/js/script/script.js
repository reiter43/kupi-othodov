window.addEventListener('DOMContentLoaded', function () {

	// Аякс-запрос формы обратной связи
	function formSend(formSelector) {
		const form = document.querySelector(formSelector);

		// const message = {
		// 	loading: 'Загрузка...',
		// 	success: 'Спасибо! Скоро мы с вами свяжемся',
		// 	failure: 'Что-то пошло не так...'
		// };

		// const postData = async (url, data) => {
		// 	document.querySelector('.status').textContent = message.loading;
		// 	let res = await fetch(url, {
		// 		method: "POST",
		// 		body: data
		// 	});

		// 	return await res.text();
		// };

		if (form) {
			form.onsubmit = function (event) {
				event.preventDefault();

				// let statusMessage = document.createElement('div');
				// statusMessage.classList.add('status');
				// form.appendChild(statusMessage);

				const formData = new FormData(form);

				// postData('mail.php', formData)
				// 	.then(res => {
				// 		statusMessage.textContent = message.success;
				// 	})
				// 	.catch(() => statusMessage.textContent = message.failure)
				// 	.finally(() => {
				// 		form.reset();
				// 		setTimeout(() => {
				// 			statusMessage.remove();
				// 		}, 5000);
				// 	});

				let xhttp = new XMLHttpRequest();
				xhttp.open('POST', 'mail.php');
				xhttp.send(formData);

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						form.reset();
						alert('Спасибо за обращение! В ближайшее время мы с вами свяжемся');
					}
				}
			}
		}
	}

	formSend('#form');
	formSend('#form--modal');
	formSend('.anons__form');
	formSend('.form--delivery');


	//Скрипт для маски ввода телефона
	function createMask(event) {
		let matrix = '+7 (___) ___ __ __';
		let i = 0;
		let def = matrix.replace(/\D/g, '');
		let val = this.value.replace(/\D/g, '');

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
		});

		if (event.type === 'blur') {
			if (this.value.length == 2) {
				this.value = '';
			}
		} else {
			setCursorPosition(this.value.length, this);
		}
	}

	let setCursorPosition = (pos, elem) => {
		elem.focus();

		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();

			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};

	let inputs = document.querySelectorAll('[type="tel"]');

	inputs.forEach(input => {
		input.addEventListener('input', createMask);
		input.addEventListener('focus', createMask);
		input.addEventListener('blur', createMask);
	});


	// Ввод значений только на русском языке
	function rus(selector) {
		const txtInputs = document.querySelectorAll(selector);

		txtInputs.forEach(input => {
			input.addEventListener('keypress', function (e) {
				if (e.key.match(/[^а-яё 0-9]/ig)) {
					e.preventDefault();
				}
			});
		});
	}

	rus('textarea');
	rus('[type="text"');

})











