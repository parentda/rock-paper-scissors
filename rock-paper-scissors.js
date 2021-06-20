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
  let numRounds = parseInt(
    prompt(
      "How many rounds would you like to play? (Please enter an integer greater than 0)"
    )
  );
  if (!Number.isInteger(numRounds) || numRounds <= 0) {
    numRounds = getRounds();
  }
  return numRounds;
}

function playRound(playerSelection, computerSelection) {
  // eslint-disable-next-line no-param-reassign
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

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
  const playerSelection = "paper";
  let keepScore = 0;
  for (let i = 0; i < rounds; i++) {
    const computerSelection = computerPlay();
    keepScore += playRound(playerSelection, computerSelection);
    console.log(keepScore);
  }
}

// console.log(playerSelection);
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
console.log(getRounds());
