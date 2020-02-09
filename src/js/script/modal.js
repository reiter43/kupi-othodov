var lastFocus;//элемент на странице, на котором был фокус при открытии модального окна
let modal = document.querySelector('.modal');
let btnOpen = document.querySelectorAll('.btn-base--call');
let btnClose = document.querySelectorAll('.btn-close');
let modalElem = document.getElementById('form__tel--modal'); //куда поставить фокус при открытии
let body = document.querySelector('body');
let focusableElements = modal.querySelectorAll('*[tabindex="0"]'); //все фокусабельные элементы окна   
let firstTabStop = focusableElements[0];
let lastTabStop = focusableElements[focusableElements.length - 1];

btnOpen.forEach(elem => { elem.addEventListener('click', showModal) })

function showModal() {
    lastFocus = document.activeElement;

    modal.classList.remove('hide');
    body.style.overflow = 'hidden';
    modalElem.focus();

    modal.addEventListener('keydown', function (e) {
        // "Слушаем клавишу Tab"
        if (e.keyCode === 9) {
            // Если сочетание Shift + Tab
            if (e.shiftKey) {
                // Если текущий элемент является первым фокусируемым в модальном окне....
                if (document.activeElement === firstTabStop) {
                    e.preventDefault();
                    // ...переход к последнему фокусируемому элементу
                    lastTabStop.focus();
                }
                // Если нажимается Tab
            } else {
                // Если текущий элемент является последним фокусируемым в модальном окне....
                if (document.activeElement === lastTabStop) {
                    e.preventDefault();
                    // ...переход к первому фокусируемому элементу
                    firstTabStop.focus();
                }
            }
        }
        // Закрытие модального окна клавишей Esc
        if (e.keyCode === 27) { closeModal() }
    });
}

//Закрытие модального окна по клавише "закрыть" и по "затемненной области"
btnClose.forEach(elem => { elem.addEventListener('click', closeModal) });
modal.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('hide');
    body.style.overflow = 'auto';
    lastFocus.focus();
    document.onkeydown = null;
}

document.querySelector('.modal__content').onclick = (event) => event.stopPropagation();