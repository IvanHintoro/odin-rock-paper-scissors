function getComputerChoice() {
    let rng = Math.random();
    if (rng < 0.333){
        return("Rock");
    }
    else if (rng < 0.667) {
        return("Paper");
    }
    else {
        return("Scissors");
    }
};