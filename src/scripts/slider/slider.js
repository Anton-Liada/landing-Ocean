const swiper = new Swiper('.swiper', {
  fadeEffect: { crossFade: true, },
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const cardSwiper = new Swiper('.card-swiper', {
  loop: false,
  autoHeight: false,
  spaceBetween: 10,
  breakpoints: {
    375: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1696: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragClass: true,
  },
});
