const menuBurger = () => {
    const burger = document.querySelector('.burger'),
            overlay = document.querySelector('.overlay'),
            menu = document.querySelector('.header__mobile')


    const lockScroll = () => {
                document.body.classList.toggle('lock');
            }

    const unlockScroll = () => {
                document.body.classList.remove('lock');
            }

    burger.addEventListener('click', () => {
        menu.classList.toggle('show');
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        lockScroll();
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('show');
        burger.classList.remove('active');
        overlay.classList.remove('active');
        unlockScroll();
    });
};

export default menuBurger;