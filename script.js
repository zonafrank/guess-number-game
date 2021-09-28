"use strict";

const messageElem = document.querySelector(".message");
const scoreElem = document.querySelector(".score");
const highScoreElem = document.querySelector(".highscore");
const secretNumberElem = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkGuessBtn = document.querySelector(".btn.check");
const resetGameBtn = document.querySelector(".btn.again");

const maxNumber = 20;
let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
let score = 20;
let highScore = Number(highScoreElem.textContent);

resetGameBtn.addEventListener("click", () => {
  if (score > highScore) {
    highScore = score;
    highScoreElem.textContent = highScore;
  }

  score = 20;
  scoreElem.textContent = score;
  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  guessInput.value = "";
  secretNumberElem.textContent = "?";
  secretNumberElem.style.width = "15rem";
  messageElem.textContent = "Start guessing...";
});

checkGuessBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  if (score > 0) {
    if (guess) {
      if (guess === secretNumber) {
        messageElem.textContent = "Correct!!!";
        secretNumberElem.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        secretNumberElem.style.width = "30rem";
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
      }
    } else {
      console.log("Invalid input detected");
    }
  }
});
