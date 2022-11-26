"use strict";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

//swiper
const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const cardSwiper = new Swiper(".card-swiper", {
  slidesPerView: 'auto',

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragClass: true,
  },
});

//burger-menu
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#menu") {
    document.body.classList.add("page__body--with-menu");
  } else {
    document.body.classList.remove("page__body--with-menu");
  }
});

// const accordion = document.querySelectorAll(".accordion__content");

// accordion.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.classList.toggle("accordion__content--active");
//   });
// });

// button-send
document.querySelector("form").addEventListener("click", (event) => {
  event.preventDefault();
});

const toggleSwitch = document.querySelector(".switch__input" );
const toggleSwitchMenu = document.querySelector(".switch__input-menu");

function switchTheme(e) {
  console.log(e);
  if(e.target.checked) {
    document.body.classList.add('dark-theme');
    // document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    // document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
toggleSwitchMenu.addEventListener('change', switchTheme, false);
