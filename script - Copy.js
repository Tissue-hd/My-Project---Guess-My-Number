"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}

// click CHECK button!
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // if not a number!
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number!";
    displayMessage("⛔ No Number!");
  }

  // if answer right
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // if too high or low
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = 
      // guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.score').textContent = 0;
      document.querySelector(".message").textContent = "❌ You lost the game!";
    }
  }
  
  // // if too high!
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High!";
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector(".message").textContent = "❌ You lost the game!";
  //   }
  // }

  // // if too low!
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low!";
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector(".message").textContent = "❌ You lost the game!";
  //   }
  // }
});

// click AGAIN button!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // message
  // document.querySelector('.message').textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector('.number').textContent = "?";
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // layout
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
