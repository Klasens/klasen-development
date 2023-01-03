'use strict';

const scrollBtn = document.querySelector('.article-header--btn');
const scrollContent = document.querySelector('.article-content--header');

scrollBtn.addEventListener('click', function (e) {
  e.preventDefault();
  scrollContent.scrollIntoView({ behavior: 'smooth' });
});
