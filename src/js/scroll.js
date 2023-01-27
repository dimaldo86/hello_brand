 const onScrollHeader = () => {
    let lastScroll = 0;
    const defaultOffset = 300;
    const header = document.querySelector('.header');
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('hide');
    window.addEventListener('scroll', () => {
        if( window.pageYOffset > 160) {
            header.style.background = 'black'
        } else {
            header.style.background = 'transparent'
        }
        if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            header.classList.add('hide');
        }
        else if(scrollPosition() < lastScroll && containHide()){
            header.classList.remove('hide');
        }
        lastScroll = scrollPosition();
    })
}
export default onScrollHeader