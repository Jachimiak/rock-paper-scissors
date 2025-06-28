
// Get numbered choice for computer.

function getComputerChoice() {
    let choice  = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            choice = "rock";
            return choice;
        case 2:
            choice = "paper";
            return choice;
        case 3:
            choice = "scissors";
            return choice;   
    }

}

// Get numbered choice for human.

function getHumanChoice() {
    let choice  = (prompt(`Please select Rock, Paper, or Scissors!`));
    choice = choice.toLowerCase();
    switch (choice) {
        case "rock":
            return choice;
        case "paper":
            return choice;
        case "scissors":
            return choice;   
    }
}

// Function plays a single round.

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Paper!");
            humanScore += 1;
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore += 1;
        } else {
            console.log("A tie! A rock is a rock!");
        }
    } else if (humanChoice ==="paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore += 1;
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissor beats Paper!");
            computerScore += 1;
        } else {
            console.log("A tie! Paper is paper!");
        }
    } else {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore += 1;
        } else if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore += 1;
        } else {
            console.log("A tie! Scissors are Scissors!");
        }
    }
}

    // Define the score.

    let humanScore = 0;
    let computerScore = 0;

    // Play the Game!

function playGame() {
    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);

        console.log(`The score is Human: ${humanScore} and Computer: ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log(`Wonderful work, you won ${humanScore} to ${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`I am sorry, the computer won ${computerScore} to ${humanScore}!`);
    } else {
        console.log(`Look at that, ${humanScore} to ${computerScore}, it's a tie!`)
    }
}


playGame();





