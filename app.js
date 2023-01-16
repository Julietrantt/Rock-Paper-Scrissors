let selection = ["rock", "paper", "scrissors"];
function getComputerChoice() {
  return selection[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Try again";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scrissors") ||
    (playerSelection == "scrissors" && computerSelection == "rock")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scrissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scrissors" && computerSelection == "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game() {
  console.log(playRound(playerSelection, getComputerChoice()));
}

for (let i = 0; i < 5; i++) {
  game();
}
