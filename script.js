"use strict";

/*
console.log(document.querySelector(".message").textContent);
console.log(document.querySelector(".score").textContent);
console.log(document.querySelector(".highscore").textContent);

document.querySelector(".message").textContent = "🎊 ¡Correct Number! 🎊";

document.querySelector(".secret-number").textContent = 50;
document.querySelector(".score").textContent = 95;
document.querySelector(".highscore").textContent = 999;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highScore = 0;

let gameFinished = false;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0 && !gameFinished) {
    if (!guess) {
      document.querySelector(".message").textContent = `⛔️ No number!`;
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎊 ¡Correct Number! 🎊";
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
        document.querySelector(
          ".message"
        ).textContent = `⬆️⬆️⬆️ Too high! ⬆️⬆️⬆️ `;
        score--;
      } else {
        document.querySelector(".message").textContent = `⬆️ High! ⬆️`;
        score--;
      }
    } else if (guess < secretNumber) {
      if (guess < secretNumber - 10) {
        document.querySelector(
          ".message"
        ).textContent = `⬇️⬇️⬇️ Too low! ⬇️⬇️⬇️`;
        score--;
      } else {
        document.querySelector(".message").textContent = `⬇️ Low! ⬇️`;
        score--;
      }
    }
  }

  document.querySelector(".score").textContent = score;

  if (score === 0) {
    document.querySelector(".message").textContent = `You loose... 😔`;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = `Start guessing...`;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".secret-number").style.width = "15rem";
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").textContent = "?";
  gameFinished = false;
});
