"use strict";

//VARIABLES
let imageArray = ["rock.svg", "paper.svg", "scissors.svg"];
let scoreArray = [0, 0];
let current = 0;
let gameSet = 0;
let maxGameSet = 10;

//ELEMENTS
const body = document.querySelector("body");
const playBtn = document.querySelector(".btn--play");
const resetBtn = document.querySelector(".btn--reset");
const image = document.querySelectorAll(".img");
const imageLeft = document.querySelector(".left__img");
const imageRight = document.querySelector(".right__img");
const scoreBoxLeft = document.querySelector(".score-box-left");
const scoreBoxRight = document.querySelector(".score-box-right");
const settings = document.querySelector(".btn--settings");
const modal = document.querySelector(".modal");
const backBtn = document.querySelector(".btn--back");
const toggle = document.querySelector("input[type='checkbox']");

////FUNCTIONS
const getRandom = function () {
  return Number(Math.floor(Math.random() * 3));
};

const imgChanger = function (player1Random, player2Random) {
  imageLeft.src = `images/${imageArray[player1Random]}`;
  imageRight.src = `images/${imageArray[player2Random]}`;
};

const counter = function (a, b) {
  if (a === b) {
    current = 0;
  } else if (a !== b) {
    current = 1;
  }
  return current;
};

const updateScore = function (player1Random, player2Random) {
  if (current !== 0) {
    if (
      (player1Random === 0 && player2Random === 1) ||
      (player1Random === 1 && player2Random === 2) ||
      (player1Random === 2 && player2Random === 0)
    ) {
      scoreArray[1] = scoreArray[1] + current;
    } else {
      scoreArray[0] = scoreArray[0] + current;
    }
  }
  return scoreArray;
};

////EVENTS

//play btn
playBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const player1Random = getRandom();
  const player2Random = getRandom();

  imgChanger(player1Random, player2Random);
  counter(player1Random, player2Random);
  updateScore(player1Random, player2Random);

  scoreBoxLeft.textContent = scoreArray[0];
  scoreBoxRight.textContent = scoreArray[1];
});

// reset btn
resetBtn.addEventListener("click", function (e) {
  e.preventDefault();

  scoreArray[0] = scoreArray[1] = 0;
  scoreBoxLeft.textContent = scoreArray[0];
  scoreBoxRight.textContent = scoreArray[1];
  imageLeft.src = imageRight.src = "images/question-mark.jpeg";
});

//settings btn
settings.addEventListener("click", function (e) {
  e.preventDefault();

  modal.style.display = "block";
});

// back btn
backBtn.addEventListener("click", function (e) {
  e.preventDefault();

  modal.style.display = "none";
});

//back by clicking outside
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// dark mode toggle
toggle.addEventListener("change", function (e) {
  e.preventDefault();
  if (toggle.checked) {
    body.classList.add("body");
  } else {
    body.classList.remove("body");
  }
});
