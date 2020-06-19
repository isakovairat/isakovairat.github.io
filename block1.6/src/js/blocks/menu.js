const menuItems = document.querySelectorAll('.menu__item');
menuItems.forEach(item => item.addEventListener('click', makeActive));

function makeActive () {
  menuItems.forEach(item => item.classList.remove('menu__item_active'));
  this.classList.add('menu__item_active');
}

export { menuItems, makeActive }
