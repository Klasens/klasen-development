'use strict';
/* --------------------------- MAIN --------------------------- */

// Main Selectors

const grid = document.querySelector('.grid');
const gridInner = document.querySelector('.grid-inner');
const flipGrid = document.querySelector('#flipGrid');
const founderCard = document.querySelector('#cardFounder');
const formCard = document.querySelector('#cardForm');
const smileCard = document.querySelector('.card_smile');
const allCols = document.querySelectorAll('.col');
const mainFooter = document.querySelector('#mainFooter');
const fullPage = document.querySelector('.grid_container');
const headerCard = document.querySelector('.card_header');
const headerTag = document.querySelector('.card_header-tag');
const headerMainHead = document.querySelector('.card_header-mainHead');
const headerText = document.querySelector('.card_header-text');
const headerBtn = document.querySelector('.card_header-btn');
const headerSubHead = document.querySelector('.card_header-subHead');

//ARTICLE SELECTORS
const article1 = document.querySelector('#article1');
const article2 = document.querySelector('#article2');
const article3 = document.querySelector('#article3');
const article4 = document.querySelector('#article4');
const article5 = document.querySelector('#article5');
const article6 = document.querySelector('#article6');

headerBtn.addEventListener('click', function () {
  article1.classList.toggle('translate-1');
  article4.classList.toggle('translate-1');
  article3.classList.toggle('translate-2');
  article6.classList.toggle('translate-2');
  article2.classList.toggle('rotate-1');
  article5.classList.toggle('rotate-1');
  flipGrid.classList.toggle('opacity-0');
  flipGrid.classList.toggle('pointerEvents-none');
  for (let i = 0; i < allCols.length; i++) {
    allCols[i].classList.toggle('opacity-0');
    allCols[i].classList.toggle('pointerEvents-none');
    allCols[i].classList.toggle('height-0');
  }
  mainFooter.classList.toggle('opacity-0');
  mainFooter.classList.toggle('pointerEvents-none');
  mainFooter.classList.toggle('height-0');
  headerCard.classList.toggle('background-chocolate');
  fullPage.classList.toggle('background-off-white-2');
  headerTag.classList.toggle('background-off-white-2');
  headerMainHead.classList.toggle('color-off-white-2');
  headerText.classList.toggle('color-off-white-2');
  headerText.classList.toggle('border-left-off-white-2');
  headerBtn.classList.toggle('background-off-white-2');
  headerBtn.classList.toggle('color-chocolate');
  headerSubHead.classList.toggle('color-off-white-2');
});

// Cards Array
const cardsArrayOfObjects = [
  { cardID: 'card-milestone' },
  { cardID: 'card-theWatchers' },
  { cardID: 'card-MITM' },
  { cardID: 'card-andToday' },
  { cardID: 'card-baysideRecovery' },
  { cardID: 'card-samBodhiJazz' },
  { cardID: 'card-activityTracker' },
  { cardID: 'card-clock' },
];

/* --------------------------- DREADFULLY LONG IF STATEMENT --------------------------- */
//Randomly insert HTML for each element in array object
const loadAllCards = function (array) {
  const arrayCopy = array.slice();
  while (arrayCopy.length) {
    const random = Math.floor(Math.random() * arrayCopy.length);
    const el = arrayCopy.splice(random, 1)[0];
    let html;
    /* ------------- CARD MILESTONE ------------- */
    if (el.cardID === 'card-milestone') {
      html = document.createElement('div');
      html.innerHTML = `
          <div class="card_milestone gridCard-universal">
            <div
              class="card_milestone-contentContainer contentCard-universal"
              id="timeInaYear"
            >
              <span class='cardCream-tag card_milestone-tag'>Widget</span>
              <div class="card-shapeContainer">
                <div class="card-square-left square-one"></div>
                <div class="card-square-left square-three"></div>
                <div class="card-circle circle-one"></div>
                <div class="card-circle circle-two"></div>
                <div class="card-circle circle-three"></div>
                <div class="card-circle circle-four"></div>
                <div class="card-square-right square-two"></div>
                <div class="card-square-right square-four"></div>
              </div>
              <h2 class="cardCream-h2">Latest Milestone: <br> Age &mdash; 30</h2>
              <div class="cardCream-wrapper">
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="10950"
                  ></span>
                  <span class="cardCream-text">days</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="262800"
                  ></span>
                  <span class="cardCream-text">hours</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="15768000"
                  ></span>
                  <span class="cardCream-text">minutes</span>
                </div>
                <div class="cardCream-text">
                  <span
                    class="cardCream-text timeCounter"
                    data-target="946080000"
                  ></span>
                  <span class="cardCream-text">seconds</span>
                </div>
              </div>
            </div>
      `;
      formCard.after(html);
      /* ------------- CARD THE WATCHERS ------------- */
    } else if (el.cardID === 'card-theWatchers') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_nonfiction gridCard-universal">
          <div class="designLine-right borderColorYellow"></div>
          <div class="designLine-left borderColorYellow"></div>
          <div class="card_nonfiction-contentContainer contentCard-universal">
            <span class="cardChocolate-tag card_nonfiction-tag">
              Creative Non-Fiction
            </span>
            <h2 class="cardChocolate-h2">Severed</h2>
            <p class="cardChocolate-text">
              "I watched the man attempt to raise his arms but only the right one moved."
            </p>
            <a target="_blank" href="http://maxamillennial.getforge.io/severed.html" class="cardChocolate-btn">
              Read Now
            </a>
          </div>
        </div>
      `;
      founderCard.after(html);
      /* ------------- CARD AND, TODAY  ------------- */
    } else if (el.cardID === 'card-andToday') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_nonfiction gridCard-universal">
          <div class="designLine-right borderColorYellow"></div>
          <div class="designLine-left borderColorYellow"></div>
          <div class="card_nonfiction-contentContainer contentCard-universal">
            <span class="cardChocolate-tag card_nonfiction-tag">
              Creative Non-Fiction
            </span>
            <h2 class="cardChocolate-h2">The Sonderer</h2>
            <p class="cardChocolate-text">
              "There are basic facts about the world that we take for granted, but there are some we don't."
            </p>
            <a target="_blank" href="http://maxamillennial.getforge.io/theSonderer.html" class="cardChocolate-btn">
              Read Now
            </a>
          </div>
        </div>
      `;
      smileCard.after(html);
      /* ------------- CARD MIRROR IN THE MIRROR  ------------- */
    } else if (el.cardID === 'card-MITM') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_fiction gridCard-universal">
          <div class="designLine-right borderColorGreen"></div>
          <div class="designLine-left borderColorGreen"></div>
          <div class="card_fiction-contentContainer contentCard-universal">
            <span class="cardChocolate-tag card_fiction-tag">
              Fiction
            </span>
            <h2 class="cardChocolate-h2">A Chair To Nowhere</h2>
            <p class="cardChocolate-text">
              "I woke up with my hands tied and my feet bound to the legs of this chair."
            </p>
            <a target="_blank" href="https://maxamillennial.getforge.io/achairtonowhere.html" class="cardChocolate-btn">
              Read Now
            </a>
          </div>
        </div>
      `;
      formCard.after(html);
      /* ------------- CARD SAM BODHI JAZZ ------------- */
    } else if (el.cardID === 'card-samBodhiJazz') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_freelance gridCard-universal">
          <div class="card_freelance-contentContainer contentCard-universal">
            <span class="cardCream-tag card_freelance-tag">
              Freelance
            </span>
            <div class="card-iconContainer">
              <img
                class="card-icon"
                src="./img/piano.png"
                alt="piano-image https://iconscout.com/"
              />
            </div>
            <h2 class="cardCream-h2">Sam Bodhi Jazz</h2>
            <p class="cardCream-text">Website &mdash; local jazz musician</p>
            <button class="cardCream-btn"><a href="http://sambodhijazz.getforge.io/">View</a></button>
          </div>
        </div>
      `;
      founderCard.after(html);
      /* ------------- CARD MM.ORG ------------- */
    } else if (el.cardID === 'card-baysideRecovery') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class="card_freelance gridCard-universal">
          <div class="card_freelance-contentContainer contentCard-universal">
            <span class="cardCream-tag card_freelance-tag">
              Freelance
            </span>
            <div class="card-iconContainer">
              <img
                class="card-icon"
                src="./img/pencil.png"
                alt="pencil-image https://iconscout.com/"
              />
            </div>
            <h2 class="cardCream-h2">Maxamillennial.org</h2>
            <p class="cardCream-text">
              Website &mdash; author's portfolio 
            </p>
            <button class="cardCream-btn"><a href="http://maxamillennial.getforge.io/">View</a></button>
          </div>
        </div>
      `;
      smileCard.after(html);
      /* ------------- CARD APP ------------- */
    } else if (el.cardID === 'card-activityTracker') {
      html = document.createElement('div');
      html.innerHTML = `
          <div class="card_app gridCard-universal">
            <div class="card_app-contentContainer contentCard-universal">
              <span class="cardCream-tag card_app-tag">App</span>
              <div class="card-cubeContainer">
                <div class="card-cube">
                  <div class="card-cube--front"></div>
                  <div class="card-cube--back"></div>
                  <div class="card-cube--top"></div>
                  <div class="card-cube--bottom"></div>
                  <div class="card-cube--left"></div>
                  <div class="card-cube--right"></div>
                </div>
              </div>
              <h2 class="cardCream-h2">Activity Tracker</h2>
              <p class="cardCream-text">An app to keep you on track</p>
              <button class="cardCream-btn"><a href="http://activitytracker.org/">Sign Up (coming soon)</a></button>
            </div>
          </div>
      `;
      founderCard.after(html);
      /* ------------- CARD CLOCK ------------- */
    } else if (el.cardID === 'card-clock') {
      html = document.createElement('div');
      html.innerHTML = `
        <div class='card_clock gridCard-universal backgroundColor-cream' id='cardClock'>
          <div class='card_clock-contentContainer contentCard-universal'>
            <span class='card_clock-tag'>Widget</span>
            <button class='card_clock-btn backgroundColor-cream borderColor-black'>
              Dark Mode
            </button>
            <div class='card_clock-clockContainer'>
              <div class='card_clock-needle backgroundColor-black hourHand'></div>
              <div class='card_clock-needle backgroundColor-black minuteHand'></div>
              <div class='card_clock-needle backgroundColor-black secondHand'></div>
              <div class='card_clock-center'></div>
            </div>
          <div class='card_clock-timeDisplay'></div>
          <div class='card_clock-dateDisplay'></div>
        </div>
      </div>
      `;
      smileCard.after(html);
    }
  }
};

//!DISPLAY CARDS RANDOMLY ON PAGE
loadAllCards(cardsArrayOfObjects);

//!DELETE ALL CARDS ON PAGE
// headerBtn.addEventListener('click', function () {
//   document.querySelector('.grid-inner').innerHTML = '';
// });

//!ASSIGN ALL CARDS IDS
// Assign each element of an array an ID# property -- UNUSED
// const assignIDs = function (array) {
//   const array_IDs = array.slice();
//   for (let i = 0; i < array_IDs.length; i++) {
//     array_IDs[i].id = i + 1;
//   }
//   return array_IDs;
// };
