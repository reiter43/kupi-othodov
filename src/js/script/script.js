window.addEventListener('DOMContentLoaded', function () {
	// Аякс-запрос формы обратной связи
	function formSend(formSelector) {
		let form = document.querySelector(formSelector);

		form.onsubmit = function (event) {
			event.preventDefault();

			let formData = new FormData(form);

			let xhttp = new XMLHttpRequest();
			xhttp.open('POST', 'mail.php');
			xhttp.send(formData);

			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					form.reset();
					alert('Спасибо за обращение! <br> В ближайшее время мы с вами свяжемся');
				}
			}
		}
	}

	if (window.location.pathname == "/othodov/" || window.location.pathname == "/othodov/index.html" || window.location.pathname == "/") {
		formSend('#form');
	}

	formSend('#form--modal');



	//Скрипт для маски ввода телефона
	[].forEach.call(document.querySelectorAll('.form__elem-tel'), function (input) {
		let keyCode;

		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			let pos = this.selectionStart;
			if (pos < 3) event.preventDefault();

			let matrix = "+7 (___) ___ ____",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");

			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}

			let reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");

			reg = new RegExp("^" + reg + "$");

			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)
	});


})











