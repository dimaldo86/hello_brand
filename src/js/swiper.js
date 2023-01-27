import Swiper, { Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'

const swiper = new Swiper(".commentsSwiper", {
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1.15,
    spaceBetween:20,
    breakpoints: {
        475: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
    modules: [Navigation],
});

export default swiper