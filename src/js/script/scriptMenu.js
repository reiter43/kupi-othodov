window.addEventListener('DOMContentLoaded', function () {
    let btnCatalog = document.querySelector('.nav__item--drop');
    let submenu = document.querySelector('.nav__submenu');
    let burger = document.querySelector('.burger');
    let burgerIcon = document.querySelector('.burger__icon');
    let menu = document.querySelector('.nav__list');
    let btnSublinks = document.querySelectorAll('.nav__btn--submenu');
    let sublinks = document.querySelectorAll('.nav__sublink');
    let sublinks2 = document.querySelectorAll('.nav__link2');
    let btnCatLink = document.querySelector('.nav__link--drop');
    let widht = document.documentElement.clientWidth;
    let pathName = window.location.pathname;


    // Показ элемента бургер для скринридера в мобильных экранах    
    if (widht <= 700) {
        document.querySelector('.nav__burger').removeAttribute("aria-hidden");
    }

    // Показ/скрытие субменю при наведении мыши    
    if (pathName != "/catalog.html" || (pathName == "/catalog.html" && widht <= 890)) {
        btnCatalog.addEventListener("mouseenter", event => {
            if (widht > 700) { submenu.classList.remove('visual') }
        });

        btnCatalog.addEventListener("mouseleave", event => {
            if (widht > 700) { submenu.classList.add('visual') }
        });
    }

    // Скрыть/показать меню
    burger.addEventListener('click', event => {
        if (widht <= 700) {
            burgerIcon.classList.toggle('burger__icon--active');

            expanded(burger);

            if (burgerIcon.classList.contains('burger__icon--active')) {
                menu.classList.remove('nav__list--visial');
                menu.style.zIndex = "10";
            } else {
                menu.classList.add('nav__list--visial');
                menu.style.zIndex = "0";
            }
        }
    });

    // Показ/скрытие субменю
    btnSublinks.forEach(elem => {
        elem.addEventListener('click', event => {
            expanded(elem);

            elem.parentNode.nextElementSibling.classList.toggle('nav__submenu2--visial');
            elem.firstElementChild.classList.toggle('active');

            sublinks2.forEach(elem => {
                tabIndex(elem, elem);
            });
        });

        inFocus(elem, 'focus', '#B7000E');
        inFocus(elem, 'blur', '#ffffff');
    });

    btnCatLink.addEventListener('click', event => {
        expanded(btnCatLink);

        submenu.classList.toggle('visual');
        document.querySelector('.svg__drop').classList.toggle('active');

        sublinks.forEach(elem => {
            tabIndex(elem, elem);

            inFocus(elem, 'focus', '#B7000E');
            inFocus(elem, 'blur', '#ffffff');
        })

        btnSublinks.forEach(elem => {
            tabIndex(elem, elem.parentNode.parentNode.querySelector('.nav__sublink'));
        })
    });

    // Страница каталог
    // Показ/скрытие субменю при наведении мыши

    document.querySelectorAll('.nav-catalog__item-content>button').forEach(elem => {
        elem.addEventListener('click', event => {
            event.preventDefault();

            let submenuCat = elem.parentNode.parentNode.querySelector('.nav-catalog__submenu');

            if (submenuCat) {
                submenuCat.classList.toggle('visual');

                expanded(elem);

                submenuCat.querySelectorAll('.nav-catalog__sublink ').forEach(link => {
                    submenuCat.classList.contains('visual') ? link.setAttribute("tabindex", "-1") :
                        link.setAttribute("tabindex", "0");
                });
            }
        })
    })

    // Функции назначения аргументов и стилей
    function expanded(element) {
        element.getAttribute("aria-expanded") == "false" ? element.setAttribute("aria-expanded", "true") :
            element.setAttribute("aria-expanded", "false")
    }

    function tabIndex(tabindex, dis) {
        tabindex.getAttribute("tabindex") == "-1" ? tabindex.setAttribute("tabindex", "0") :
            tabindex.setAttribute("tabindex", "-1")

        if (dis.classList.contains('disabled')) {
            tabindex.setAttribute("tabindex", "-1");
        }
    }

    function inFocus(el, ev, color) {
        el.addEventListener(ev, event => {
            if (widht <= 700) { el.parentNode.parentNode.style.background = color }
        });
    }
})