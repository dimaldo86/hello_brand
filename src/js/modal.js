const modal = () => {
    const popup = document.querySelector('.modal__wrapper'),
        popupToggle = document.querySelector('.btn'),
        popupClose = document.querySelector('.modal__close'),
        popupOverlay = document.querySelector('.overlay__modal');

    const lockScroll = () => {
        document.body.classList.toggle('lock');
    }

    const unlockScroll = () => {
        document.body.classList.remove('lock');
    }

    popupToggle.addEventListener('click', () => {
        popup.classList.add('active');
        popupOverlay.classList.add('active');
        popupClose.classList.add('active');
        lockScroll()
    })
    popupClose.addEventListener('click', () => {
        popup.classList.remove('active');
        popupOverlay.classList.remove('active');
        popupClose.classList.remove('active');
        unlockScroll()
    })

    window.addEventListener('click', (e) => {
        if ( e.target === popupOverlay) {
            popup.classList.remove('active');
            popupOverlay.classList.remove('active');
            popupClose.classList.remove('active');
            unlockScroll()
        }
    })

}
export default modal;