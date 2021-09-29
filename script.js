"use strict";

const messageElem = document.querySelector(".message");
const scoreElem = document.querySelector(".score");
const highScoreElem = document.querySelector(".highscore");
const secretNumberElem = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkGuessBtn = document.querySelector(".btn.check");
const resetGameBtn = document.querySelector(".btn.again");
const upperLimitElem = document.querySelector(".upper-limit");

const maxNumber = 100;
let secretNumber = getRandom(maxNumber);
let score = 20;
let highScore = Number(highScoreElem.textContent);

upperLimitElem.textContent = maxNumber;

resetGameBtn.addEventListener("click", resetGame);

checkGuessBtn.addEventListener("click", computeResult);

document.body.addEventListener("keyup", (e) => {
  const keyPressed = e.key;
  const targetElemClass = e.target.className;
  if (keyPressed === "Enter" && targetElemClass === "guess") {
    computeResult();
  }
});

function getRandom(val) {
  return Math.floor(Math.random() * val) + 1;
}

function computeResult() {
  const guess = parseInt(guessInput.value);
  if (score > 0) {
    if (guess) {
      if (guess === secretNumber) {
        messageElem.textContent = "Correct!!!";
        secretNumberElem.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        secretNumberElem.style.width = "30rem";
        resetGameBtn.focus();
      } else {
        score--;
        scoreElem.textContent = score;

        if (score < 1) {
          messageElem.textContent = "You lost the game.";
        } else if (guess < secretNumber) {
          messageElem.textContent = "Too low...";
        } else {
          messageElem.textContent = "Too high...";
        }
        guessInput.focus();
      }
      guessInput.value = "";
    } else {
      console.log("Invalid input detected");
    }
  }
}

function resetGame() {
  if (score > highScore) {
    highScore = score;
    highScoreElem.textContent = highScore;
  }

  score = 20;
  scoreElem.textContent = score;
  secretNumber = getRandom(maxNumber);
  document.querySelector("body").style.backgroundColor = "#222";
  guessInput.value = "";
  secretNumberElem.textContent = "?";
  secretNumberElem.style.width = "15rem";
  messageElem.textContent = "Start guessing...";
  guessInput.focus();
}
