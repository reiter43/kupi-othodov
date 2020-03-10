window.addEventListener('DOMContentLoaded', function () {
    function modalWindow(openModal, windowModal, hideModal, elemFocusModal) {
        const modal = document.querySelector(windowModal);
        const btnOpen = document.querySelectorAll(openModal);
        const btnClose = document.querySelector(hideModal);
        const modalElem = document.getElementById(elemFocusModal);
        const body = document.querySelector('body');
        const focusableElements = modal.querySelectorAll('*[tabindex="0"]');
        const firstTabStop = focusableElements[0];
        const lastTabStop = focusableElements[focusableElements.length - 1];
        let lastFocus;

        btnOpen.forEach(elem => { elem.addEventListener('click', showModal) });

        btnClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { closeModal() }
        });

        function showModal() {
            lastFocus = document.activeElement;

            modal.classList.remove('hide');
            body.style.overflow = 'hidden';
            body.style.marginRight = '17px';
            modalElem.focus();

            modal.addEventListener('keydown', function (e) {
                if (e.keyCode === 9) {
                    if (e.shiftKey) {
                        if (document.activeElement === firstTabStop) { lastTabStop.focus() }
                    } else {
                        if (document.activeElement === lastTabStop) { firstTabStop.focus() }
                    }
                }

                if (e.keyCode === 27) { closeModal() }
            });
        }

        function closeModal() {
            modal.classList.add('hide');
            body.style.overflow = '';
            body.style.marginRight = '0px';
            modalElem.focus();
            lastFocus.focus();
            document.onkeydown = null;
        }
    }

    modalWindow('.btn-base--call', '.modal', '.modal__btn-close', 'form__tel--modal')
})