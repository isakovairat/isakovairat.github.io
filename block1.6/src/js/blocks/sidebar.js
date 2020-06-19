const closeBtn = document.querySelector('#close');
const burgerBtn = document.querySelector('#burger');
const sidebar = document.querySelector('.sidebar');
const pageHeader = document.querySelector('.page-header');
const main = document.querySelector('main')
const footer = document.querySelector('.footer')
const menuItems = document.querySelectorAll('.menu__item_mobile');

menuItems.forEach(item => item.addEventListener('click', addActiveClass));

function addActiveClass() {
  menuItems.forEach(item => item.classList.remove('menu__item_mobile_active'));
  this.classList.add('menu__item_mobile_active');
}

closeBtn.addEventListener('click', closeSidebar);
burgerBtn.addEventListener('click', showSidebar);

function closeSidebar() {
  sidebar.style.left = '-1000px';
  main.style.opacity = '1';
  footer.style.opacity = '1';
  pageHeader.style.opacity = '1';
}

function showSidebar() {
  sidebar.style.left = '0px';
  main.style.opacity = '0.1';
  footer.style.opacity = '0.1';
  pageHeader.style.opacity = '0.1';
}

export { closeBtn, burgerBtn, sidebar, pageHeader, main, footer, menuItems, addActiveClass, closeSidebar, showSidebar }
