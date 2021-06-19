const gameOptions = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const randomSelection = Math.floor(Math.random() * 3);
  return gameOptions[randomSelection];
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
    return `It's a Tie!`;
  }
  if (indexDiff === 1 || indexDiff === -2) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
