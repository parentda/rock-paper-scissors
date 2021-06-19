function computerPlay() {
  let randomSelection = Math.floor(Math.random() * 3);
  let computerSelection;

  switch (randomSelection) {
    case 0:
      computerSelection = "Rock";
      break;
    case 1:
      computerSelection = "Paper";
      break;
    case 2:
      computerSelection = "Scissors";
      break;
    default:
      console.error("Something went wrong");
      break;
  }
  console.log(computerSelection);
  return computerSelection;
}

computerPlay();
