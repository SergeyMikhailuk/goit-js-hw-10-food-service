import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
inputRef.addEventListener('change', changeTheme);

const currentTheme = localStorage.getItem('theme');

function defaultTheme() {
  if (!currentTheme) {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.add(Theme.LIGHT);
    return;
  }

  if (currentTheme) {
    localStorage.setItem('theme', currentTheme);
    bodyRef.classList.add(currentTheme);
  }

  if (currentTheme === Theme.DARK) {
    inputRef.checked = true;
  }
}
defaultTheme();

function changeTheme() {
  if (this.checked) {
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    return;
  }

  localStorage.setItem('theme', Theme.LIGHT);
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
}

//Handlebars
import template from './templates/template.hbs';
import menu from './menu.json';

const menuListRef = document.querySelector('.js-menu');

const markup = template(menu);

menuListRef.insertAdjacentHTML('afterbegin', markup);
