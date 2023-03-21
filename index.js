// Select DOM elements
const tag = document.querySelector('.card__tag');
const tagContent = document.querySelector('#founder');
const resume = document.querySelector('#resume');
const modalContent = document.querySelector('#modalScroll');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('.body');
const primary = document.querySelector('#primary');
const cardPicture = document.querySelector('#picture');

// Function to close the modal
function closeModal() {
  body.classList.remove('overflow--hidden');
  overlay.classList.remove('opacity--1');
  overlay.classList.add('pointer-events--none');
  modal.classList.remove('opacity--1');
  modal.classList.add('pointer-events--none');
  modalClose.classList.remove('opacity--1');
  modalClose.classList.add('pointer-events--none');
}

// Function to open the modal
function openModal() {
  overlay.classList.add('opacity--1');
  overlay.classList.remove('pointer-events--none');
  modal.classList.add('opacity--1');
  modal.classList.remove('pointer-events--none');
  modalClose.classList.add('opacity--1');
  modalClose.classList.remove('pointer-events--none');
  setTimeout(() => {
    body.classList.add('overflow--hidden');
  }, 500);
}

// Event listener for clicking the card picture
cardPicture.addEventListener('click', function (event) {
  let clickX = event.offsetX;
  let clickY = event.offsetY;
  let heart = document.createElement('div');
  heart.innerHTML = `<i class="card-heart fas fa-heart"></i>`;
  heart.className = 'heart-pop';
  heart.style.top = clickY + 'px';
  heart.style.left = clickX + 'px';
  cardPicture.appendChild(heart);
});

// Event listener for clicking the overlay
overlay.addEventListener('click', function () {
  closeModal();
});

// Event listener for pressing the Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Event listener for clicking the modal close button
modalClose.addEventListener('click', function (event) {
  event.preventDefault();
  closeModal();
  primary.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

// Event listener for clicking the resume button
resume.addEventListener('click', function (event) {
  event.preventDefault();
  modalContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
  openModal();
});

// Event listener for clicking the tag
tag.addEventListener('click', function (event) {
  event.preventDefault();
  tagContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
});
