"use strict";

// // Фильтрация по категориям
// let buttons = document.querySelectorAll('.buttonCat');
// buttons.forEach(elem => {
//     elem.onclick = (event) => {
// 		event.preventDefault();
// 		buttons.forEach(elem => {
// 			elem.classList.remove('buttonCat--active');
// 			event.target.classList.add('buttonCat--active');
//         });
//         let buttonFilter = elem.getAttribute('data-filter');        
//         let portfolioItems = document.querySelectorAll('.portfolio__item');
//         portfolioItems.forEach(elem => {
//             elem.style.display = 'none';
//             if(buttonFilter == 'all') {
//                 elem.style.display = 'block';
//             }
//             if(elem.classList.contains(buttonFilter)) {                
//                 elem.style.display = 'block';
//             }                
//         })
//     }
// }); 	
// // Аякс-запрос формы обратной связи
// let form = document.querySelector('#form');
// form.onsubmit = function (event) { 
//     event.preventDefault();
//     let formData = new FormData(form);    
//     let xhttp = new XMLHttpRequest(); 
//     xhttp.open('POST', 'mail.php'); 
//     xhttp.send(formData); 
//     xhttp.onreadystatechange = function () { 
//         if (this.readyState == 4 && this.status == 200) {
//             form.reset();             
//             chips('Спасибо за обращение! <br> В ближайшее время мы с вами свяжемся', 5000);
//         }
//     }    
// }
//Скрипт для маски ввода телефона
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.form__elem-tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = new_value.indexOf("_");

      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }

      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});
"use strict";

var btnCatalog = document.querySelector('.nav__item--drop');
var submenu = document.querySelector('.nav__submenu');
var burger = document.querySelector('.burger');
var menu = document.querySelector('.nav__list');
var btnSublinks = document.querySelectorAll('.nav__btn--submenu');
var btnCatLink = document.querySelector('.nav__link--drop'); // Показ элемента бургер для скринридера в мобильных экранах

if (document.documentElement.clientWidth <= 700) {
  document.querySelector('.nav__burger').removeAttribute("aria-hidden");
} // Показ/скрытие субменю при наведении мыши


btnCatalog.addEventListener("mouseenter", showSub, false);
btnCatalog.addEventListener("mouseleave", hideSub, false);

function showSub(e) {
  if (document.documentElement.clientWidth > 700) {
    submenu.classList.remove('nav__submenu--visial');
  }
}

function hideSub(e) {
  if (document.documentElement.clientWidth > 700) {
    submenu.classList.add('nav__submenu--visial');
  }
} // Скрыть/показать меню


burger.addEventListener('click', function (event) {
  if (document.documentElement.clientWidth <= 700) {
    document.querySelector('.burger__icon').classList.toggle('burger__icon--active');

    if (burger.getAttribute("aria-expanded") == "false") {
      burger.setAttribute("aria-expanded", "true");
    } else {
      burger.setAttribute("aria-expanded", "false");
    }

    if (document.querySelector('.burger__icon').classList.contains('burger__icon--active')) {
      menu.classList.remove('nav__list--visial');
    } else {
      menu.classList.add('nav__list--visial');
    }

    document.querySelector('.head__wrap').classList.toggle('head__wrap--active');
  }
}); // Показ/скрытие субменю

btnSublinks.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    if (elem.getAttribute("aria-expanded") == "false") {
      elem.setAttribute("aria-expanded", "true");
    } else {
      elem.setAttribute("aria-expanded", "false");
    }

    elem.parentNode.nextElementSibling.classList.toggle('nav__submenu2--visial');
    var sublinks2 = document.querySelectorAll('.nav__link2');
    sublinks2.forEach(function (elem) {
      if (elem.getAttribute("tabindex") == "-1") {
        elem.setAttribute("tabindex", "0");
      } else {
        elem.setAttribute("tabindex", "-1");
      }

      if (elem.classList.contains('nav__link2--disabled')) {
        elem.setAttribute("tabindex", "-1");
      }
    });
    elem.firstElementChild.classList.toggle('active');
  });
  elem.addEventListener('focus', function (event) {
    if (document.documentElement.clientWidth <= 700) {
      elem.parentNode.parentNode.style.background = '#B7000E';
    }
  });
  elem.addEventListener('blur', function (event) {
    if (document.documentElement.clientWidth <= 700) {
      elem.parentNode.parentNode.style.background = '#ffffff';
    }
  });
});
btnCatLink.addEventListener('click', function (event) {
  if (btnCatLink.getAttribute("aria-expanded") == "false") {
    btnCatLink.setAttribute("aria-expanded", "true");
  } else {
    btnCatLink.setAttribute("aria-expanded", "false");
  }

  submenu.classList.toggle('nav__submenu--visial');
  document.querySelector('.svg__drop').classList.toggle('active');
  var sublinks = document.querySelectorAll('.nav__sublink');
  sublinks.forEach(function (elem) {
    if (elem.getAttribute("tabindex") == "-1") {
      elem.setAttribute("tabindex", "0");
    } else {
      elem.setAttribute("tabindex", "-1");
    }

    elem.addEventListener('focus', function (event) {
      if (document.documentElement.clientWidth <= 700) {
        elem.parentNode.parentNode.style.background = '#B7000E';
      }
    });
    elem.addEventListener('blur', function (event) {
      if (document.documentElement.clientWidth <= 700) {
        elem.parentNode.parentNode.style.background = '#ffffff';
      }
    });
  });
  btnSublinks.forEach(function (elem) {
    if (elem.getAttribute("tabindex") == "-1") {
      elem.setAttribute("tabindex", "0");
    } else {
      elem.setAttribute("tabindex", "-1");
    }
  });
}); // Показ субменю при получении фокуса табированием

if (document.documentElement.clientWidth > 700) {// document.querySelector('.nav__link--drop').addEventListener('focus', event => {
  //     document.querySelector('.nav__submenu').classList.remove('nav__submenu--visial');
  // });
  // document.querySelector('.nav__link--drop').addEventListener('click', event => {
  //     document.querySelector('.nav__submenu').classList.remove('nav__submenu--visial');
  // });
  // document.querySelector('.nav__link--drop').addEventListener('blur', event => {
  //     document.querySelector('.nav__submenu').classList.add('nav__submenu--visial');
  // });
}