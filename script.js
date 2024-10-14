function getComputerChoice() {
    let rng = Math.random();
    if (rng < 0.333){
        return("rock");
    }
    else if (rng < 0.667) {
        return("paper");
    }
    else {
        return("scissors");
    }
};

function getHumanChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    return (playerChoice.toLowerCase());
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You pick ${humanChoice}`);
    console.log(`Computer used ${computerChoice}`);

    if (humanChoice == computerChoice){
        console.log("It's a draw");
    }
    else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log("Congratulations! You win")
    }
    else {
        console.log("Unfortunately, you lose")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
