'use strict';

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
