function computerPlay() {
  let myRPS = ['ROCK', 'PAPER', 'SCISSORS'];
  let randomValue = myRPS[Math.floor(Math.random() * myRPS.length)];
  return randomValue;
}

function resetScore() {
  winCount = 0;
  loseCount = 0;
  drawCount = 0;
  roundCount = 1;
}

let winCount = 0;
let loseCount = 0;
let drawCount = 0;
let roundCount = 1;

const handRock = document.querySelector('#hand-rock');
handRock.addEventListener('click', function (e) {
  console.log(handRock.value);
  let computerHand = computerPlay();
  let playerHand = 'ROCK';
  let roundResult = document.querySelector('#round-result');
  if (computerHand == 'SCISSORS') {
    winCount++;
    roundCount++;
    roundResult.textContent = 'Player wins the round!';
  }
  else if (computerHand == 'PAPER') {
    loseCount++;
    roundCount++;
    roundResult.textContent = 'Computer wins the round!';
  }
  else {
    drawCount++;
    roundCount++;
    roundResult.textContent = 'Round ended in a draw!';
  }

  finalResult = document.querySelector('#final-result');
  finalResult.textContent = '';

  const playerScore = document.querySelector('#player-score');
  playerScore.textContent = winCount;
  const computerScore = document.querySelector('#computer-score');
  computerScore.textContent = loseCount;
  const round = document.querySelector('#round-count');
  round.textContent = 'Round ' + roundCount + ' - Choose your hand!'
  const phValue = document.querySelector('#ph-value');
  phValue.textContent = playerHand;
  const chValue = document.querySelector('#ch-value');
  chValue.textContent = computerHand;

  if (winCount == 5) {
    finalResult.textContent = 'YOU WON THE GAME!'
    resetScore();
  }
  else if (loseCount == 5) {
    finalResult.textContent = 'YOU LOSE THE GAME!'
    resetScore();
  }
})

const handPaper = document.querySelector('#hand-paper');
handPaper.addEventListener('click', function (e) {
  console.log(handPaper.value);
  let computerHand = computerPlay();
  let playerHand = 'PAPER';
  let roundResult = document.querySelector('#round-result');
  if (computerHand == 'ROCK') {
    winCount++;
    roundCount++;
    roundResult.textContent = 'Player wins the round!';
  }
  else if (computerHand == 'SCISSORS') {
    loseCount++;
    roundCount++;
    roundResult.textContent = 'Computer wins the round!';
  }
  else {
    drawCount++;
    roundCount++;
    roundResult.textContent = 'Round ended in a draw!';
  }

  finalResult = document.querySelector('#final-result');
  finalResult.textContent = '';

  const playerScore = document.querySelector('#player-score');
  playerScore.textContent = winCount;
  const computerScore = document.querySelector('#computer-score');
  computerScore.textContent = loseCount;
  const round = document.querySelector('#round-count');
  round.textContent = 'Round ' + roundCount + ' - Choose your hand!'
  const phValue = document.querySelector('#ph-value');
  phValue.textContent = playerHand;
  const chValue = document.querySelector('#ch-value');
  chValue.textContent = computerHand;

  if (winCount == 5) {
    finalResult.textContent = 'YOU WON THE GAME!'
    resetScore();
  }
  else if (loseCount == 5) {
    finalResult.textContent = 'YOU LOSE THE GAME!'
    resetScore();
  }
})

const handScissors = document.querySelector('#hand-scissors');
handScissors.addEventListener('click', function (e) {
  console.log(handScissors.value);
  let computerHand = computerPlay();
  let playerHand = 'SCISSORS';
  let roundResult = document.querySelector('#round-result');
  if (computerHand == 'PAPER') {
    winCount++;
    roundCount++;
    roundResult.textContent = 'Player wins the round!';
  }
  else if (computerHand == 'ROCK') {
    loseCount++;
    roundCount++;
    roundResult.textContent = 'Computer wins the round!';
  }
  else {
    drawCount++;
    roundCount++;
    roundResult.textContent = 'Round ended in a draw!';
  }

  finalResult = document.querySelector('#final-result');
  finalResult.textContent = '';

  const playerScore = document.querySelector('#player-score');
  playerScore.textContent = winCount;
  const computerScore = document.querySelector('#computer-score');
  computerScore.textContent = loseCount;
  const round = document.querySelector('#round-count');
  round.textContent = 'Round ' + roundCount + ' - Choose your hand!'
  const phValue = document.querySelector('#ph-value');
  phValue.textContent = playerHand;
  const chValue = document.querySelector('#ch-value');
  chValue.textContent = computerHand;
  
  if (winCount == 5) {
    finalResult.textContent = 'YOU WON THE GAME!'
    resetScore();
  }
  else if (loseCount == 5) {
    finalResult.textContent = 'YOU LOSE THE GAME!'
    resetScore();
  }
})

