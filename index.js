'use strict';

const scrollTag = document.querySelector('.card__tag');
const tagContent = document.querySelector('#founder');
const scrollResume = document.querySelector('#resume');
const resumeContent = document.querySelector('#modalScroll');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('.body');
const primary = document.querySelector('#primary');
const cardPicture = document.querySelector('#picture');

cardPicture.addEventListener('click', function (e) {
  let coordX = e.offsetX;
  let coordY = e.offsetY;
  let heart = document.createElement('div');
  heart.innerHTML = `<i class="card-heart fas fa-heart"></i>`;
  heart.className = 'heart-pop';
  heart.style.top = coordY + 'px';
  heart.style.left = coordX + 'px';
  cardPicture.appendChild(heart);
  console.log(clickCoX, clickCoY);
});
overlay.addEventListener('click', function () {
  body.classList.remove('overflow--hidden');
  overlay.classList.remove('opacity--1');
  overlay.classList.add('pointer-events--none');
  modal.classList.remove('opacity--1');
  modal.classList.add('pointer-events--none');
  modalClose.classList.remove('opacity--1');
  modalClose.classList.add('pointer-events--none');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    body.classList.remove('overflow--hidden');
    overlay.classList.remove('opacity--1');
    overlay.classList.add('pointer-events--none');
    modal.classList.remove('opacity--1');
    modal.classList.add('pointer-events--none');
    modalClose.classList.remove('opacity--1');
    modalClose.classList.add('pointer-events--none');
  }
});
modalClose.addEventListener('click', function (e) {
  e.preventDefault();
  body.classList.remove('overflow--hidden');
  overlay.classList.remove('opacity--1');
  overlay.classList.add('pointer-events--none');
  modal.classList.remove('opacity--1');
  modal.classList.add('pointer-events--none');
  modalClose.classList.remove('opacity--1');
  modalClose.classList.add('pointer-events--none');
  primary.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

scrollResume.addEventListener('click', function (e) {
  e.preventDefault();
  resumeContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
  overlay.classList.add('opacity--1');
  overlay.classList.remove('pointer-events--none');
  modal.classList.add('opacity--1');
  modal.classList.remove('pointer-events--none');
  modalClose.classList.add('opacity--1');
  modalClose.classList.remove('pointer-events--none');
  setTimeout(() => {
    body.classList.add('overflow--hidden');
  }, 500);
});

scrollTag.addEventListener('click', function (e) {
  e.preventDefault();
  tagContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
});
