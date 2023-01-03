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
const heartCard = gridInner.querySelector('#cardHeart');
const heartCount = gridInner.querySelector('#heartCount');

// Variables
let i = 0;

// Event Listeners
heartCard.addEventListener('click', function (e) {
  i++;
  heartCount.innerText = i;
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

/* ------------------- Milestone Card ------------------ */

// Selectors
const timeInaYearCard = document.querySelector('#timeInaYear');
const timeCounters = document.querySelectorAll('.timeCounter');

// Event Listeners
timeInaYearCard.addEventListener('click', increment);

// Functions
function increment() {
  console.log('test');
  timeCounters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;

      const shortIncrement = target / 400;
      const mediumIncrement = target / 600;
      const longIncrement = target / 800;
      const extraLongIncrement = target / 1000;

      if (c < target && target < 15000) {
        counter.innerText = `${Math.ceil(c + shortIncrement)}`;
        setTimeout(updateCounter, 1);
      } else if (c < target && target > 100000 && target < 1000000) {
        counter.innerText = `${Math.ceil(c + mediumIncrement)}`;
        setTimeout(updateCounter, 1);
      } else if (c < target && target > 1000000 && target < 100000000) {
        counter.innerText = `${Math.ceil(c + longIncrement)}`;
        setTimeout(updateCounter, 1);
      } else if (c < target && target > 100000000) {
        counter.innerText = `${Math.ceil(c + extraLongIncrement)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

//Randomizers (UNUSED)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

/* ------------------- Clock Card ------------------ */

// Selectors
const clockCard = document.querySelector('.card_clock');
const clockBtn = document.querySelector('.card_clock-btn');
const hourEl = document.querySelector('.hourHand');
const minuteEl = document.querySelector('.minuteHand');
const secondEl = document.querySelector('.secondHand');
const timeEl = document.querySelector('.card_clock-timeDisplay');
const dateEl = document.querySelector('.card_clock-dateDisplay');
const circle = document.querySelector('.card_clock-center');

// Arrays
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// Toggle Dark & Light Mode
clockBtn.addEventListener('click', function () {
  if (clockBtn.innerText === 'Dark Mode') {
    clockBtn.innerText = 'Light Mode';
  } else {
    clockBtn.innerText = 'Dark Mode';
  }

  // Card background
  clockCard.classList.toggle('backgroundColor-cream');
  clockCard.classList.toggle('borderColor-white');

  // Clock Hands
  hourEl.classList.toggle('backgroundColor-black');
  minuteEl.classList.toggle('backgroundColor-black');
  secondEl.classList.toggle('backgroundColor-black');
  hourEl.classList.toggle('backgroundColor-white');
  minuteEl.classList.toggle('backgroundColor-white');
  secondEl.classList.toggle('backgroundColor-white');

  // Btn
  clockBtn.classList.toggle('borderColor-black');
  clockBtn.classList.toggle('borderColor-white');
  clockBtn.classList.toggle('color-white');

  // Text
  timeEl.classList.toggle('color-white');
  dateEl.classList.toggle('color-white');
});

// Set Date and Time Function
function setTime() {
  // Selectors
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Create Circles for Clock Hands
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  // ??
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  // ??
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`;
}

// ??
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

setInterval(setTime, 1000);
