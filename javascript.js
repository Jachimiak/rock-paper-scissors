// All Query Selections

const buttons = document.querySelectorAll(".player-btn");
const playerPaper = document.querySelector("#player-paper");
const playerRock = document.querySelector("#player-rock");
const playerScissor = document.querySelector("#player-scissors");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#comp-score");

// Define the score.

let humanScore = 0;
let computerScore = 0;

// Get numbered choice for computer.

function getComputerChoice() {
    let choice  = Math.floor((Math.random() * 3) + 1);
    document.getElementById("center-rock-computer").style.display = "none";
    document.getElementById("center-paper-computer").style.display = "none";
    document.getElementById("center-scissors-computer").style.display = "none";
    switch (choice) {
        case 1:
            choice = "rock";
            document.getElementById("center-rock-computer").style.display = "block";
            return choice;
        case 2:
            choice = "paper";
            document.getElementById("center-paper-computer").style.display = "block";
            return choice;
        case 3:
            choice = "scissors";
            document.getElementById("center-scissors-computer").style.display = "block";
            return choice;   
    }

}

// Get numbered choice for human.
function getHumanChoice(humselection) {
    let choice = humselection
    document.getElementById("center-rock-player").style.display = "none";
    document.getElementById("center-paper-player").style.display = "none";
    document.getElementById("center-scissors-player").style.display = "none";
    document.getElementsByClassName("versus")[0].style.display = "none";
    switch (choice) {
        case "player-rock":
            document.getElementById("center-rock-player").style.display = "block";
            document.getElementsByClassName("versus")[0]
                .style.display = "block";
            return "rock";
        case "player-paper":
            document.getElementById("center-paper-player").style.display = "block";
            document.getElementsByClassName("versus")[0]
                .style.display = "block";
            return "paper";
        case "player-scissors":
            document.getElementById("center-scissors-player").style.display = "block";
            document.getElementsByClassName("versus")[0]
                .style.display = "block";
            return "scissors";   
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

    // Play the Game!

function playGame(humselect) {    
        let x = humselect;
        let humanSelection = getHumanChoice(x);
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        
        if (humanScore < 5 && computerScore < 5 ) {
            document.getElementById("player-score").textContent = humanScore;
            document.getElementById("comp-score").textContent = computerScore;
        } else if (humanScore === 5) {
            document.getElementById("player-score").textContent = humanScore;
            document.getElementById("comp-score").textContent = computerScore;
            document.getElementById("player-won").style.display = "block";
            document.getElementById("player-rock").disabled = true;
            document.getElementById("player-scissors").disabled = true;
            document.getElementById("player-paper").disabled = true;
        } else {
            document.getElementById("player-score").textContent = humanScore;
            document.getElementById("comp-score").textContent = computerScore;
            document.getElementById("computer-won").style.display = "block";
            document.getElementById("player-rock").disabled = true;
            document.getElementById("player-scissors").disabled = true;
            document.getElementById("player-paper").disabled = true;
        }
    
    
/*     if (humanScore > computerScore) {
        console.log(`Wonderful work, you won ${humanScore} to ${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`I am sorry, the computer won ${computerScore} to ${humanScore}!`);
    } else {
        console.log(`Look at that, ${humanScore} to ${computerScore}, it's a tie!`)
    } */
}


buttons.forEach(btn => {
            btn.addEventListener('click', event => {
                console.log(event.target.id);
                playGame(event.target.id);
            });
        }); 


