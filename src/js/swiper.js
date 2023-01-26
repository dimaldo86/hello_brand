import Swiper from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper(".commentsSwiper", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
  });

export default swiper