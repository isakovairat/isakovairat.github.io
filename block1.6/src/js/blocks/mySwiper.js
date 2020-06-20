var swiper;
var init = false;
var paginations = document.querySelectorAll('.swiper-pagination');

const swiperMode = () => {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let tablet = window.matchMedia('(min-width: 768px');

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        a11y: {
          enabled: false,
        },
      });
      paginations.forEach(pagination => pagination.style.display = '');
    }

  } else if (tablet.matches) {
    init = false;
    paginations.forEach(pagination => pagination.style.display = 'none');
  }
}

const swiperListener = () => swiperMode();

window.addEventListener('load', swiperListener);
window.addEventListener('resize', swiperListener);
