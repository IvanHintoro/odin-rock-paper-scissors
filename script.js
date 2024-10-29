function getComputerChoice() {
    let rng = Math.random();
    let rockComputer = document.querySelector("#rockComputer");
    let paperComputer = document.querySelector("#paperComputer");
    let scissorsComputer = document.querySelector("#scissorsComputer");
    rockComputer.setAttribute("style", "border: 1px solid gray");
    paperComputer.setAttribute("style", "border: 1px solid gray");
    scissorsComputer.setAttribute("style", "border: 1px solid gray");

    if (rng < 0.333){
        rockComputer.setAttribute("style", "border: 2px solid black");
        return("rock");
    }
    else if (rng < 0.667) {
        paperComputer.setAttribute("style", "border: 2px solid black");
        return("paper");
    }
    else {
        scissorsComputer.setAttribute("style", "border: 2px solid black");
        return("scissors");
    }
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 1;

    function updateScoreboard() {
        const scoreBoard = document.querySelector("#scoreBoard");
        scoreBoard.textContent = `Current Score: ${humanScore} Win(s) ${computerScore} Loss`
    }

    function playRound(humanChoice, computerChoice) {
        const result = document.querySelector("#result");
        result.textContent = "";
        const choiceMessage = document.createElement("h3");
        const winMessage = document.createElement("h2");

        choiceMessage.textContent = `You pick ${humanChoice}, Computer used ${computerChoice}`;

        if (humanChoice == computerChoice){
            winMessage.textContent = "It's a draw";
        }
        else if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            winMessage.textContent = "Congratulations! You win"
            humanScore = humanScore + 1;
        }
        else {
            winMessage.textContent = "Unfortunately, you lose"
            computerScore = computerScore + 1;
        }

        result.appendChild(choiceMessage);
        result.appendChild(winMessage);
        updateScoreboard();
        roundNumber = roundNumber + 1;

        if (roundNumber > 5){
            const gameResult = document.createElement("h1");
            if (humanScore == computerScore){
                gameResult.textContent = "It's a draw, good game!";
            }
            else if (humanScore > computerScore){
                gameResult.textContent = "Congratulations! You win the game";
            }
            else {
                gameResult.textContent = "You lose, better luck next time";
            }
            result.appendChild(gameResult);

            roundNumber = 1;
            humanScore = 0;
            computerScore = 0;
        }
    }

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", () => {
        let playerChoice = "rock";
        playRound(playerChoice, getComputerChoice());
    })

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
        let playerChoice = "paper";
        playRound(playerChoice, getComputerChoice());
    })

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        let playerChoice = "scissors";
        playRound(playerChoice, getComputerChoice());
    })

}

playGame();