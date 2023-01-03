'use strict';

//====== SELECTORS ======

//----- ALL SELECTORS
const allListContainers = document.querySelectorAll(
  '.topNav-ddMenu--linkContainer'
);
const allArrowContainers = document.querySelectorAll('.topNav-ddMenu--ddArrow');
//----- MENUS
const hamMenu = document.querySelector('#hamMenu');
const sideMenu = document.querySelector('#sideMenu');
const hamSlide1 = document.querySelector('#hamLine1');
const hamHide = document.querySelector('#hamLine2');
const hamSlide2 = document.querySelector('#hamLine3');

//----- ARROWS
const ddArrowNonfiction_long = document.querySelector(
  '#ddArrow-nonfiction-long'
);
const ddArrowNonfiction_short = document.querySelector(
  '#ddArrow-nonfiction-short'
);
const ddArrowShortStories = document.querySelector('#ddArrow-shortStories');
const ddArrowAphorisms = document.querySelector('#ddArrow-aphorisms');
const ddArrowArticles = document.querySelector('#ddArrow-articles');
const ddArrowPoetry = document.querySelector('#ddArrow-poetry');
const ddArrowChapters = document.querySelector('#ddArrow-chapters');
//----- LISTS
const chaptersList = document.querySelector('#list-chapters');
const nonfictionList_long = document.querySelector('#list-nonfiction-long');
const nonfictionList_short = document.querySelector('#list-nonfiction-short');
const shortStoriesList = document.querySelector('#list-shortStories');
const aphorismsList = document.querySelector('#list-aphorisms');
const articlesList = document.querySelector('#list-articles');
const theGreenerSideList = document.querySelector('#list-theGreenerSide');
const poetryList = document.querySelector('#list-poetry');
//----- CATEGORIES
const chapters = document.querySelector('#chapters');
const nonfiction_long = document.querySelector('#nonfiction-long');
const nonfiction_short = document.querySelector('#nonfiction-short');
const articles = document.querySelector('#articles');
const shortStories = document.querySelector('#shortStories');
const aphorisms = document.querySelector('#aphorisms');
const poetry = document.querySelector('#poetry');

//FUNCTIONS

const showSideMenu = function () {
  sideMenu.classList.toggle('show');
  hamSlide1.classList.toggle('hamSlide1');
  hamSlide2.classList.toggle('hamSlide2');
  hamHide.classList.toggle('hamHide');
};

const ddArrowReset = function () {
  ddArrowNonfiction_long.classList.remove('rotateZ-90');
  ddArrowNonfiction_short.classList.remove('rotateZ-90');
  ddArrowShortStories.classList.remove('rotateZ-90');
  ddArrowArticles.classList.remove('rotateZ-90');
  ddArrowAphorisms.classList.remove('rotateZ-90');
  ddArrowPoetry.classList.remove('rotateZ-90');
  ddArrowChapters.classList.remove('rotateZ-90');
};

const listReset = function () {
  chaptersList.classList.remove('opacity-1');
  chaptersList.classList.remove('z-index-10');
  shortStoriesList.classList.remove('opacity-1');
  shortStoriesList.classList.remove('z-index-10');
  nonfictionList_long.classList.remove('opacity-1');
  nonfictionList_long.classList.remove('z-index-10');
  nonfictionList_short.classList.remove('opacity-1');
  nonfictionList_short.classList.remove('z-index-10');
  aphorismsList.classList.remove('opacity-1');
  aphorismsList.classList.remove('z-index-10');
  articlesList.classList.remove('opacity-1');
  articlesList.classList.remove('z-index-10');
  poetryList.classList.remove('opacity-1');
  poetryList.classList.remove('z-index-10');
};

const showNonfictionList_long = function () {
  if (!nonfictionList_long.classList.contains('opacity-1')) {
    ddArrowReset();
    listReset();
  }

  nonfictionList_long.classList.toggle('opacity-1');
  nonfictionList_long.classList.toggle('z-index-10');
  ddArrowNonfiction_long.classList.toggle('rotateZ-90');
};

const showShortStoriesList = function () {
  if (!shortStoriesList.classList.contains('opacity-1')) {
    ddArrowReset();
    listReset();
  }
  shortStoriesList.classList.toggle('opacity-1');
  shortStoriesList.classList.toggle('z-index-10');
  ddArrowShortStories.classList.toggle('rotateZ-90');
};

const showChaptersList = function () {
  if (!chaptersList.classList.contains('opacity-1')) {
    ddArrowReset();
    listReset();
  }
  chaptersList.classList.toggle('opacity-1');
  chaptersList.classList.toggle('z-index-10');
  ddArrowChapters.classList.toggle('rotateZ-90');
};
const showAphorismsList = function () {
  if (!aphorismsList.classList.contains('opacity-1')) {
    ddArrowReset();
    listReset();
  }
  aphorismsList.classList.toggle('opacity-1');
  aphorismsList.classList.toggle('z-index-10');
  ddArrowAphorisms.classList.toggle('rotateZ-90');
};

const showNonfictionList_short = function () {
  if (!nonfictionList_short.classList.contains('opacity-1')) {
    ddArrowReset();
    listReset();
  }
  nonfictionList_short.classList.toggle('opacity-1');
  nonfictionList_short.classList.toggle('z-index-10');
  ddArrowNonfiction_short.classList.toggle('rotateZ-90');
};
const showArticlesList = function () {
  if (!articlesList.classList.contains('opacity-1')) {
    ddArrowReset();
    listReset();
  }
  articlesList.classList.toggle('opacity-1');
  articlesList.classList.toggle('z-index-10');
  ddArrowArticles.classList.toggle('rotateZ-90');
};

const showPoetryList = function () {
  if (!poetryList.classList.contains('opacity-1')) {
    ddArrowReset();
    listReset();
  }
  poetryList.classList.toggle('opacity-1');
  poetryList.classList.toggle('z-index-10');
  ddArrowPoetry.classList.toggle('rotateZ-90');
};
//EVENT LISTNERS
hamMenu.addEventListener('click', showSideMenu);

ddArrowNonfiction_long.addEventListener('click', showNonfictionList_long);
ddArrowNonfiction_short.addEventListener('click', showNonfictionList_short);
ddArrowShortStories.addEventListener('click', showShortStoriesList);
ddArrowAphorisms.addEventListener('click', showAphorismsList);
ddArrowArticles.addEventListener('click', showArticlesList);
ddArrowPoetry.addEventListener('click', showPoetryList);
ddArrowChapters.addEventListener('click', showChaptersList);
