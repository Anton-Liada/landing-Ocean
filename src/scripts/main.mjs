'use strict';

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

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

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('form').addEventListener('click', (event) => {
  event.preventDefault();
});

const toggleSwitch = document.querySelector('.switch__input');
const toggleSwitchMenu = document.querySelector('.switch__input-menu');

function switchTheme(e) {
  console.log(e);
  if (e.target.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
toggleSwitchMenu.addEventListener('change', switchTheme, false);
