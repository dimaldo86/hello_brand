const menuBurger = () => {
    const blueBurger = document.querySelector('.burger'),
            overlay = document.querySelector('.overlay'),
            menu = document.querySelector('.header__mobile')


    const lockScroll = () => {
                document.body.classList.toggle('lock');
            }

    const unlockScroll = () => {
                document.body.classList.remove('lock');
            }

    blueBurger.addEventListener('click', () => {
        menu.classList.toggle('show');
        blueBurger.classList.toggle('active');
        overlay.classList.toggle('active');
        lockScroll();
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('show');
        blueBurger.classList.remove('active');
        overlay.classList.remove('active');
        unlockScroll();
    });
};

export default menuBurger;