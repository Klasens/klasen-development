'use strict';

const scrollTag = document.querySelector('.card__tag');
const tagContent = document.querySelector('#founder');
const scrollResume = document.querySelector('#resume');
const resumeContent = document.querySelector('#resumeAdhoc');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('.u--center');
const primary = document.querySelector('#primary');
const cardPicture = document.querySelector('#picture');

cardPicture.addEventListener('click', function (e) {
  let coordX = e.offsetX;
  let coordY = e.offsetY;
  let heart = document.createElement('div');
  heart.innerHTML = `<i class="card-heart fas fa-heart"></i>`;
  heart.className = 'card-heart-pop';
  heart.style.top = coordY + 'px';
  heart.style.left = coordX + 'px';
  cardPicture.appendChild(heart);
  console.log(clickCoX, clickCoY);
});

modalClose.addEventListener('click', function (e) {
  e.preventDefault();
  body.classList.remove('u--overflow--hidden');
  overlay.classList.remove('u--opacity--1');
  overlay.classList.add('u--pointer-events--none');
  modal.classList.remove('u--opacity--1');
  modal.classList.add('u--pointer-events--none');
  modalClose.classList.remove('u--opacity--1');
  modalClose.classList.add('u--pointer-events--none');
  primary.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

scrollResume.addEventListener('click', function (e) {
  e.preventDefault();
  resumeContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
  overlay.classList.add('u--opacity--1');
  overlay.classList.remove('u--pointer-events--none');
  modal.classList.add('u--opacity--1');
  modal.classList.remove('u--pointer-events--none');
  modalClose.classList.add('u--opacity--1');
  modalClose.classList.remove('u--pointer-events--none');
  setTimeout(() => {
    body.classList.add('u--overflow--hidden');
  }, 500);
});

scrollTag.addEventListener('click', function (e) {
  e.preventDefault();
  tagContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
});
