function computerPlay() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let randomSelection = Math.floor(Math.random() * 3);
  return computerOptions[randomSelection];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  // if (playerSelection === computerSelection) {
  //   return "It's a tie!";
  // }
  // else if ()
}

const playerSelection = "rOcK";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
