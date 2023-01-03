'use strict';

const scrollBtn = document.querySelector('.card_header-tag');
const scrollContent = document.querySelector('.col');

scrollBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('test');
  scrollContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
});
