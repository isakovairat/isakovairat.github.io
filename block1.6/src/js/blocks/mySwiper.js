const breakpoint = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
const paginations = document.querySelectorAll('.swiper-pagination');
let swipers = [];

const breakpointChecker = function () {
  if (breakpoint.matches === false) {
    swipers.forEach(swiper => swiper.destroy(true, true));
    paginations.forEach(pagination => pagination.style.display = 'none');
    return;
  }
  if (breakpoint.matches === true) {
    return enableSwiper();
  }
}

const enableSwiper = function () {
  swipers.push(new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    a11y: {
      enabled: false,
    },
  }));
  paginations.forEach(pagination => pagination.style.display = 'block');
}

window.addEventListener('resize', breakpointChecker);
breakpointChecker();

export {breakpoint, swipers, paginations, breakpointChecker, enableSwiper };
