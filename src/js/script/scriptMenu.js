let btnCatalog = document.querySelector('.nav__item--drop');
let submenu = document.querySelector('.nav__submenu');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__list');
let btnSublinks = document.querySelectorAll('.nav__btn--submenu');
let btnCatLink = document.querySelector('.nav__link--drop');


// Показ элемента бургер для скринридера в мобильных экранах

if (document.documentElement.clientWidth <= 700) {
    document.querySelector('.nav__burger').removeAttribute("aria-hidden");
}

// Показ/скрытие субменю при наведении мыши

if (window.location.pathname != "/catalog.html" || (window.location.pathname == "/catalog.html" && document.documentElement.clientWidth <= 890) ) {
    btnCatalog.addEventListener("mouseenter", showSub, false);
    btnCatalog.addEventListener("mouseleave", hideSub, false);

    function showSub(e) {
        if (document.documentElement.clientWidth > 700) {
            submenu.classList.remove('visual');
        }
    }
    function hideSub(e) {
        if (document.documentElement.clientWidth > 700) {
            submenu.classList.add('visual');
        }
    }
}

// Скрыть/показать меню

burger.addEventListener('click', event => {
    if (document.documentElement.clientWidth <= 700) {
        document.querySelector('.burger__icon').classList.toggle('burger__icon--active');

        if (burger.getAttribute("aria-expanded") == "false") {
            burger.setAttribute("aria-expanded", "true");
        } else {
            burger.setAttribute("aria-expanded", "false")
        }

        if (document.querySelector('.burger__icon').classList.contains('burger__icon--active')) {
            menu.classList.remove('nav__list--visial');
            menu.style.zIndex = "10";
        } else {
            menu.classList.add('nav__list--visial');
            menu.style.zIndex = "0";
        }

        document.querySelector('.head__wrap').classList.toggle('head__wrap--active');
    }
}
);

// Показ/скрытие субменю

btnSublinks.forEach(elem => {
    elem.addEventListener('click', event => {
        if (elem.getAttribute("aria-expanded") == "false") {
            elem.setAttribute("aria-expanded", "true");
        } else {
            elem.setAttribute("aria-expanded", "false")
        }

        elem.parentNode.nextElementSibling.classList.toggle('nav__submenu2--visial');

        let sublinks2 = document.querySelectorAll('.nav__link2');

        sublinks2.forEach(elem => {
            if (elem.getAttribute("tabindex") == "-1") {
                elem.setAttribute("tabindex", "0");
            } else {
                elem.setAttribute("tabindex", "-1");
            }

            if (elem.classList.contains('nav__link2--disabled')) {
                elem.setAttribute("tabindex", "-1");
            }
        })

        elem.firstElementChild.classList.toggle('active');
    })

    elem.addEventListener('focus', event => {
        if (document.documentElement.clientWidth <= 700) {
            elem.parentNode.parentNode.style.background = '#B7000E';
        }
    })
    elem.addEventListener('blur', event => {
        if (document.documentElement.clientWidth <= 700) {
            elem.parentNode.parentNode.style.background = '#ffffff';
        }
    })
});

btnCatLink.addEventListener('click', event => {
    if (btnCatLink.getAttribute("aria-expanded") == "false") {
        btnCatLink.setAttribute("aria-expanded", "true");
    } else {
        btnCatLink.setAttribute("aria-expanded", "false")
    }

    submenu.classList.toggle('visual');
    document.querySelector('.svg__drop').classList.toggle('active');

    let sublinks = document.querySelectorAll('.nav__sublink');

    sublinks.forEach(elem => {
        if (elem.getAttribute("tabindex") == "-1") {
            elem.setAttribute("tabindex", "0");
        } else {
            elem.setAttribute("tabindex", "-1");
        }

        elem.addEventListener('focus', event => {
            if (document.documentElement.clientWidth <= 700) {
                elem.parentNode.parentNode.style.background = '#B7000E';
            }
        })
        elem.addEventListener('blur', event => {
            if (document.documentElement.clientWidth <= 700) {
                elem.parentNode.parentNode.style.background = '#ffffff';
            }
        })
    })

    btnSublinks.forEach(elem => {
        if (elem.getAttribute("tabindex") == "-1") {
            elem.setAttribute("tabindex", "0");
        } else {
            elem.setAttribute("tabindex", "-1");
        }
    })

})


// // Показ субменю при получении фокуса табированием

// if (document.documentElement.clientWidth > 700) {

//     // document.querySelector('.nav__link--drop').addEventListener('focus', event => {
//     //     document.querySelector('.nav__submenu').classList.remove('visual');
//     // });
//     // document.querySelector('.nav__link--drop').addEventListener('click', event => {
//     //     document.querySelector('.nav__submenu').classList.remove('visual');
//     // });
//     // document.querySelector('.nav__link--drop').addEventListener('blur', event => {
//     //     document.querySelector('.nav__submenu').classList.add('visual');
//     // });
// }

// Страница каталог
// Показ/скрытие субменю при наведении мыши

document.querySelectorAll('.nav-catalog__item-content>button').forEach(elem => {
    elem.addEventListener('click', event => {
        event.preventDefault();

        let submenuCat = elem.parentElement.parentElement.querySelector('.nav-catalog__submenu')
        
        if (submenuCat) {
            submenuCat.classList.toggle('visual');
            if (elem.getAttribute("aria-expanded") == "false") {
                elem.setAttribute("aria-expanded", "true");
            } else {
                elem.setAttribute("aria-expanded", "false")
            }
            if (submenuCat.classList.contains('visual')) {
                submenuCat.querySelectorAll('.nav-catalog__sublink ').forEach(link => {
                    link.setAttribute("tabindex", "-1");
                })
            }
            else {
                submenuCat.querySelectorAll('.nav-catalog__sublink ').forEach(link => {
                    link.setAttribute("tabindex", "0");
                })
            }
        }
    })
})










