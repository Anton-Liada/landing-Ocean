'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const applicantForm = document.querySelector('.form');
applicantForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const input = document.querySelector('.form__input');

  const pattern =
    /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!pattern.test(input.value.trim())) {
    input.classList.add('invalid');
    setTimeout(() => {
      input.classList.remove('invalid');
    }, 2000);
  } else {
    input.value = '';

    input.classList.add('valid');
    setTimeout(() => {
      input.classList.remove('valid');
    }, 2000);
  }
}

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
