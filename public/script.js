// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            const currentSlide = s.slides[s.activeIndex];
            const progressBar = currentSlide.querySelector(".progressBar");
            if (progressBar) {
                const widthPercentage = parseFloat(progress) * 100;
                progressBar.style.width = widthPercentage + "%";
            }
        }
    }
});
