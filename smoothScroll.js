'use strict';

const scrollBtn = document.querySelector('.card_header-tag');
const scrollContent = document.querySelector('#cardFounder');

scrollBtn.addEventListener('click', function (e) {
  e.preventDefault();
  scrollContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
});
