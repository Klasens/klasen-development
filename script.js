'use strict';
/* --------------------------- MAIN --------------------------- */

// Main Selectors

const modalClose = document.querySelector('.modal-close');
const modal = document.querySelector('.resume-modal');
const modalCover = document.querySelector('.modal-cover');
const resumeBtn = document.querySelector('.resume-btn');

resumeBtn.addEventListener('click', function () {
  console.log('test');
  modal.classList.add('fadeIn');
  modalCover.classList.add('fadeIn');
  modalClose.classList.add('fadeIn');
  modal.classList.remove('pointerEvents-none');
  modalCover.classList.remove('pointerEvents-none');
  modalClose.classList.remove('pointerEvents-none');
});

modalClose.addEventListener('click', function () {
  console.log('test');
  modal.classList.remove('fadeIn');
  modalCover.classList.remove('fadeIn');
  modalClose.classList.remove('fadeIn');
  modal.classList.add('pointerEvents-none');
  modalCover.classList.add('pointerEvents-none');
  modalClose.classList.add('pointerEvents-none');
});
