const readNext = document.querySelector('#read-next');
const showAllBrands = document.querySelector('#show-all-brands');
const showAllDevices = document.querySelector('#show-all-devices');

readNext.addEventListener('click', showReadNext);
showAllBrands.addEventListener('click', showBrands);
showAllDevices.addEventListener('click', showDevices);

function showBrands() {
  if (this.textContent === 'Показать все') {
    this.textContent = 'Скрыть';
    document.querySelector('.brands__wrapper').style.height = 'auto';
    this.style.marginTop = '10px';
    this.classList.add('btn_additional-rotate');
  } else {
  this.textContent = 'Показать все';
  this.style.marginTop = '20px';
  document.querySelector('.brands__wrapper').style.height = '160px';
  this.classList.remove('btn_additional-rotate');
  }
}

function showDevices() {
  if (this.textContent === 'Показать все') {
    this.textContent = 'Скрыть';
    document.querySelector('.devices__wrapper').style.height = 'auto';
    this.style.marginTop = '10px';
    this.classList.add('btn_additional-rotate');
  } else {
    this.textContent = 'Показать все';
    this.style.marginTop = '20px';
    document.querySelector('.devices__wrapper').style.height = '165px';
    this.classList.remove('btn_additional-rotate');
  }
}


function showReadNext() {
  if (this.textContent === 'Читать далее') {
    this.textContent = 'Скрыть';
    document.querySelector('.about__text').style.height = 'auto';
    this.classList.add('btn_additional-rotate');
  } else {
    this.textContent = 'Читать далее';
    if (window.matchMedia('screen and (min-width: 320px) and (max-width: 767px)').matches)
      document.querySelector('.about__text').style.height = '90px';
    else
      document.querySelector('.about__text').style.height = '160px';
    this.classList.remove('btn_additional-rotate');
  }
}




