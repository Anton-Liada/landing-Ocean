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

  const input = document.querySelector('.form__add-email');
  const button = document.querySelector('.form__submit-email');

  const pattern =
    /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!pattern.test(input.value.trim())) {
    return;
  } else {
    input.value = '';

    applicantForm.classList.add("done");
    setTimeout(() => {
      applicantForm.classList.remove("done");
    }, 2500);
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
