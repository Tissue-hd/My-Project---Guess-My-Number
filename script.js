"use strict";

let secretNumber = Math.trunc(Math.random()*10) + 1;
console.log(secretNumber);

let score = 10;
let highscore = 0;

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // if guess is not Number
    if (!guess) {
        displayMessage('⚠️ ကိန်းဂဏန်းကို ထည့်သွင်းပါ ⚠️');
    }

    // if guess is correct
    else if (guess === secretNumber) {
        displayMessage('🎉 သင့်ရဲ့ခန့်မှန်းချက် မှန်ကန်သွားပါပြီ 🎉');
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector('.message').style.fontSize = 'x-large';
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
    }

    // if guess is incorrect
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 သင့်ရဲ့ခန့်မှန်းချက် များနေပါသေးတယ် 📈' : '📉 သင့်ရဲ့ခန့်မှန်းချက် နည်းနေပါသေးတယ် 📉');
            score--;
            document.querySelector('.score').textContent = score;
        }

        else {
            displayMessage('⚠️ သင့်ရဲ့ခန့်မှန်းခွင့် ကုန်ဆုံးသွားပါပြီ ⚠️');

            document.querySelector('.score').textContent = 0;
        }
    }

    // // if guess is greater
    // else if (guess > secretNumber) {
    //     displayMessage('📈 သင့်ရဲ့ခန့်မှန်းချက် များနေပါသေးတယ် 📈');
    // }

    // // if guess is less
    // else if (guess < secretNumber) {
    //     displayMessage('📉 သင့်ရဲ့ခန့်မှန်းချက် နည်းနေပါသေးတယ် 📉');
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random()*10) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'စတင် ခန့်မှန်းပါ'
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#08AEEA';
    document.querySelector('.message').style.fontSize = '2rem';
})