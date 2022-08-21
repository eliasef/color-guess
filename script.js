/* eslint-disable no-loop-func */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */

// requisito 2

function correctColor() {
  const text = document.getElementById('rgb-color');
  const balls = document.querySelectorAll('.ball');
  const positionBallCorret = Math.floor(Math.random() * 6);
  text.innerText = balls[positionBallCorret].style.backgroundColor.slice(3);
}

// requisito 4

function insertColor() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    balls[i].style.backgroundColor = rgb;
  }
}

insertColor();

correctColor();

// extra da minha parte:

function addBorder() {
  const balls = document.querySelectorAll('.ball');

  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', () => {
      removeBorder();
      balls[i].classList.add('selected');
    });
  }
}

addBorder();

function removeBorder() {
  const balls = document.querySelectorAll('.ball');

  for (let i = 0; i < balls.length; i += 1) {
    balls[i].classList.remove('selected');
  }
}

// requisito 5 e 7

function answer() {
  const text = document.getElementById('rgb-color');
  const balls = document.querySelectorAll('.ball');
  const score = document.getElementById('score');
  const answer = document.getElementById('answer');
  let wins = 0;
  answer.innerText = 'Escolha uma cor';

  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', () => {
      if (text.innerText === balls[i].style.backgroundColor.slice(3)) {
        wins += 3;
        score.innerText = `Placar: ${wins}`;
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}

answer();

// requisito 6

function resetGame() {
  const reset = document.getElementById('reset-game');
  const answer = document.getElementById('answer');

  reset.addEventListener('click', () => {
    answer.innerText = 'Escolha uma cor';
    insertColor();
    correctColor();
  });
}

resetGame();
