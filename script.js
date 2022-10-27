'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const modify = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      document.querySelector('.message').textContent =
        'Please insert a number!';
    } else if (guess < 0 || guess > 20) {
      document.querySelector('.message').textContent =
        'The number should be between 0 and 20!';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'The number is to low!';
      if (score > 0) {
        document.querySelector('.score').textContent = score -= 1;
      } else {
        document.querySelector('.message').textContent = 'You lost the game !';
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'The number is to high!';
      if (score > 0) {
        document.querySelector('.score').textContent = score -= 1;
      } else {
        document.querySelector('.message').textContent = 'You lost the game !';
      }
    } else if (guess === secretNumber) {
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '200px';
      document.querySelector('.number').style.fontSise = '80px';

      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      } else if (score < highscore) {
        document.querySelector('.highscore').textContent = highscore;
      } else {
        document.querySelector('.highscore').textContent = score;
      }
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = ' Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '';
  document.querySelector('.number').style.fontSise = '';
  document.querySelector('.guess').value = ' ';
});
