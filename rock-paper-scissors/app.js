const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'paper';
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === computerChoice) {
    result = "It's a draw";
  }
  if (userChoice === 'rock' && computerChoice === 'paper') {
    result = 'You lose!';
  }
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    result = 'You win!';
  }
  if (userChoice === 'paper' && computerChoice === 'scissors') {
    result = 'You lose!';
  }
  if (userChoice === 'paper' && computerChoice === 'rock') {
    result = 'You win!';
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    result = 'You lose!';
  }
  if (userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'You win!';
  }
  resultDisplay.innerHTML = result;
}
