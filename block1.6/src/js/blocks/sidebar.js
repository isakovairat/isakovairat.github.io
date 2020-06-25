const closeBtn = document.querySelector('#close');
const burgerBtn = document.querySelector('#burger');
const sidebar = document.querySelector('.sidebar');
const pageHeader = document.querySelector('.page-header');
const main = document.querySelector('main')
const footer = document.querySelector('.footer')
const menuItems = document.querySelectorAll('.menu__item_mobile');
const html = document.querySelector('html');
const overlaySidebar = document.querySelector('.overlay_sidebar');


menuItems.forEach(item => item.addEventListener('click', addActiveClass));

function addActiveClass() {
  menuItems.forEach(item => item.classList.remove('menu__item_mobile_active'));
  this.classList.add('menu__item_mobile_active');
}

closeBtn.addEventListener('click', closeSidebar);
burgerBtn.addEventListener('click', showSidebar);
overlaySidebar.addEventListener('click', closeSidebar);

function closeSidebar() {
  sidebar.style.left = '-1000px';
  main.style.opacity = '1';
  footer.style.opacity = '1';
  pageHeader.style.opacity = '1';
  html.style.overflow = 'visible';
  overlaySidebar.style.display = 'none';
}

function showSidebar() {
  sidebar.style.left = '0px';
  main.style.opacity = '0.1';
  footer.style.opacity = '0.1';
  pageHeader.style.opacity = '0.1';
  html.style.overflow = 'hidden';
  if (matchMedia('screen and (min-width: 768px) and (max-width: 1439px)').matches)
    overlaySidebar.style.display = 'block';
}

export { closeBtn, burgerBtn, sidebar, pageHeader, main, footer, menuItems, addActiveClass, closeSidebar, showSidebar }
