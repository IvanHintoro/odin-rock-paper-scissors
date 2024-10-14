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

function playGame() {
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
            humanScore = humanScore + 1;
        }
        else {
            console.log("Unfortunately, you lose")
            computerScore = computerScore + 1;
        }
    }

    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    console.log(`Your score = ${humanScore}`);
    console.log(`Computer score = ${computerScore}`);
    if (humanScore == computerScore){
        console.log("It's a draw, good game!")
    }
    else if (humanScore > computerScore){
        console.log("Congratulations! You win the game")
    }
    else {
        console.log("You lose, better luck next time")
    }
}

playGame();