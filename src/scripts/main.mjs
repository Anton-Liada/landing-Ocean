'use strict';
// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

const accordion = document.querySelectorAll('.accordion__content');

accordion.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('accordion__content--active');
  });
});

document.querySelector('form').addEventListener("click", function(event){
  event.preventDefault()
});
