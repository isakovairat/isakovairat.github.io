const langItems = document.querySelectorAll('.lang-item');
langItems.forEach(item => item.addEventListener('click', addLangActiveClass));

function addLangActiveClass() {
  langItems.forEach(item => item.classList.remove('lang-item_active'));
  this.classList.add('lang-item_active');
}

export {langItems, addLangActiveClass }
