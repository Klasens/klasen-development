'use strict';

// --------------- Grid Cards Slide-in on Scroll --------------- //

// Selectors
const allCards = document.querySelectorAll('.gridCard-universal');

// Event Listeners
window.addEventListener('scroll', checkBoxes);

// Functions
function checkBoxes() {
  const triggerScroll = (window.innerHeight / 5) * 6;

  allCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerScroll) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

/* ------------------------------------------------------ 
  ====================== CARDS ======================
 ------------------------------------------------------ */

/* ------------------- Smile Card ------------------ */

// Selectors
const heartCard = document.querySelector('#cardHeart');

// Variables
let i = 0;

// Event Listeners
heartCard.addEventListener('click', function (e) {
  i++;
  let heartCoordinatesX = e.offsetX;
  let heartCoordinatesY = e.offsetY;
  let heartPop = document.createElement('div');
  heartPop.innerHTML = `<i class="card-heart fas fa-heart"></i>`;
  heartPop.className = 'card-heart-pop';
  heartPop.style.top = heartCoordinatesY + 'px';
  heartPop.style.left = heartCoordinatesX + 'px';
  heartCard.appendChild(heartPop);
  console.log(heartCoordinatesX, heartCoordinatesY);
});
