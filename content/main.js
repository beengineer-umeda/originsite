const swiper = new Swiper(".position__intro", {
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
});