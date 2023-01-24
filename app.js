let selection = ["rock", "paper", "scrissors"];
function getComputerChoice() {
  return selection[Math.floor(Math.random() * 3)];
}

function playRound() {
  let playerSelection = document.getElementById("playerInput").value;
  let computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    document.getElementById("answer").innerHTML = "Try again"
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scrissors") ||
    (playerSelection == "scrissors" && computerSelection == "rock")
  ) {
    document.getElementById("answer").innerHTML = "You lose!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scrissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scrissors" && computerSelection == "paper")
  ) {
    document.getElementById("answer").innerHTML = "You Win!";
  }
console.log(playerSelection)
console.log(computerSelection)
}


 