'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const modify = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const number = Number(document.querySelector('.guess').value);

    //check-ul este gol
    if (!number) {
      document.querySelector('.message').textContent =
        'Please insert a number!';
      //numarul introdus este mai mic decat 0 si mai mare de 20
    } else if (number < 0 || number > 20) {
      document.querySelector('.message').textContent =
        'The number should be between 0 and 20!';
      // daca numarul introdus e mai mare decat numarul secret
    } else if (number > secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent =
          'The number is to high!';
        document.querySelector('.score').textContent = score -= 1;
      } else {
        document.querySelector('.message').textContent = 'Game over!';
      }
      //daca numarul introdus este mai mic decat numarul secret
    } else if (number < secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent =
          'The number is to low!';
        document.querySelector('.score').textContent = score -= 1;
      } else {
        document.querySelector('.message').textContent = 'Game over!';
      } //numarul introdus este numarul secret atunci
    } else if (number === secretNumber) {
      document.querySelector('.message').textContent = 'Correct number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '200px';
      document.querySelector('.number').style.fontSize = '80px';

      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      } else if (score < highscore) {
        document.querySelector('.highscore').textContent = highscore;
      } else {
        document.querySelector('.highscore').textContent = score;
      }
    }
  });

//restet
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '';
  document.querySelector('.number').style.fontSize = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});
