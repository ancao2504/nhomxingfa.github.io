$(document).ready(function() {
    var swiperbanner1 = new Swiper('.banner-swiper', {
        slidesPerView: 3,
        loop: false,
        grabCursor: true,
        spaceBetween: 30,
        roundLengths: true,
        slideToClickedSlide: false,
        navigation: {
            nextEl: '.banner-swiper .swiper-button-next',
            prevEl: '.banner-swiper .swiper-button-prev',
        },
        autoplay: false,
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
});