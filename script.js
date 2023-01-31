"use strict";

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

let gameFinished = false;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0 && !gameFinished) {
    if (!guess) {
      displayMessage("⛔️ No number!");
    } else if (guess === secretNumber) {
      displayMessage("🎊 ¡Correct Number! 🎊");
      document.querySelector(".secret-number").textContent = secretNumber;

      document.querySelector("body").style.backgroundColor = "#60b347";

      document.querySelector(".secret-number").style.width = "30rem";

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      gameFinished = true;
    } else if (guess > secretNumber) {
      if (guess > secretNumber + 10) {
        displayMessage("⬆️⬆️⬆️ Too high! ⬆️⬆️⬆️");

        score--;
      } else {
        displayMessage("⬆️ High! ⬆️");

        score--;
      }
    } else if (guess < secretNumber) {
      if (guess < secretNumber - 10) {
        displayMessage("⬇️⬇️⬇️ Too low! ⬇️⬇️⬇️");

        score--;
      } else {
        displayMessage("⬇️ Low! ⬇️");

        score--;
      }
    }
  }

  document.querySelector(".score").textContent = score;

  if (score === 0) {
    displayMessage("You loose... 😔");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  gameFinished = false;
  secretNumber = generateSecretNumber();
  score = 20;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".secret-number").style.width = "15rem";

  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").textContent = "?";

  displayMessage("Start guessing...");
});

function generateSecretNumber() {
  return Math.trunc(Math.random() * 50) + 1;
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
