const gameOptions = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const randomSelection = Math.floor(Math.random() * 3);
  return gameOptions[randomSelection];
}

function userPlay() {
  let userInput = prompt('Please enter "Rock", "Paper", or "Scissors"').trim();
  return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
}

function getRounds() {
  let numRounds = prompt(
    "How many rounds would you like to play? (Please enter an integer greater than 0)"
  );
  if (numRounds === null) {
    return;
  } else if (!Number.isInteger(numRounds) || numRounds <= 0) {
    numRounds = getRounds();
  }
  return numRounds;
}

function playRound(playerSelection, computerSelection) {
  const indexDiff =
    gameOptions.indexOf(playerSelection) -
    gameOptions.indexOf(computerSelection);

  if (indexDiff === 0) {
    console.log(`It's a Tie!`);
    return 0;
  }
  if (indexDiff === 1 || indexDiff === -2) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  }
  console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return -1;
}

function game() {
  const rounds = getRounds();
  let keepScore = 0;

  for (let i = 0; i < rounds; i++) {
    const computerSelection = computerPlay();
    const playerSelection = userPlay();
    keepScore += playRound(playerSelection, computerSelection);
  }

  if (keepScore === 0) {
    console.log(`After ${rounds} rounds, it's a tie!`);
  } else if (keepScore > 0) {
    console.log(`After ${rounds} rounds, you win!`);
  } else {
    console.log(`After ${rounds} rounds, you lose!`);
  }
}

game();
