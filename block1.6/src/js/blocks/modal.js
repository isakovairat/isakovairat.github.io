import { showSidebar, closeSidebar } from './sidebar'

const closeBtnModalCall = document.querySelector('#close-modal-call')
const closeBtnModalFeedback = document.querySelector('#close-modal-feedback')
const pageHeader = document.querySelector('.page-header');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');
const sidebar = document.querySelector('.sidebar');
const html = document.querySelector('html');

closeBtnModalCall.addEventListener('click', hideModalCall);
closeBtnModalFeedback.addEventListener('click', hideModalFeedback);

function opacityMin() {
  main.style.opacity = '0.1';
  footer.style.opacity = '0.1';
  pageHeader.style.opacity = '0.1';
  sidebar.style.opacity = '0.1';
}

function hideModalCall() {
  const modalCall = document.querySelector('.modal_call');
  modalCall.style.right = '-768px';
  closeBtnModalCall.style.display = 'none';
  sidebar.style.opacity = '1';
  showSidebar();
}

function hideModalFeedback() {
  const modalFeedback = document.querySelector('.modal_feedback');
  modalFeedback.style.right = '-768px';
  closeBtnModalFeedback.style.display = 'none';
  sidebar.style.opacity = '1';
  showSidebar();
}


const phoneBtn = document.querySelectorAll('.icon_i-phone');
phoneBtn.forEach(btn => btn.addEventListener('click', showModalCall));

function showModalCall() {
  const modalCall = document.querySelector('.modal_call');
  const closeBtnModalCall = document.querySelector('#close-modal-call');
  modalCall.style.right = '0';
  closeBtnModalCall.style.display = 'block';
  opacityMin();
  html.style.overflow = 'hidden';

  if (window.matchMedia('screen (min-width: 320px) and (max-width: 1120px')) {
    sidebar.style.left = '-768px';
  }
}

const messageBtn = document.querySelectorAll('.icon_i-message');
messageBtn.forEach(btn => btn.addEventListener('click', showModalFeedback));

function showModalFeedback() {
  const modalFeedback = document.querySelector('.modal_feedback');
  const closeBtnModalFeedback = document.querySelector('#close-modal-feedback');
  modalFeedback.style.right = '0';
  closeBtnModalFeedback.style.display = 'block';
  opacityMin();
  html.style.overflow = 'hidden';

  if (window.matchMedia('screen (min-width: 320px) and (max-width: 1120px')) {
    sidebar.style.left = '-768px';
  }
}

export {closeBtnModalCall, pageHeader, phoneBtn, messageBtn, opacityMin, showModalCall, showModalFeedback }
