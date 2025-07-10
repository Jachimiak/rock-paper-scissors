// All Query Selections

const buttons = document.querySelectorAll(".player-btn");
const playerPaper = document.querySelector("#player-paper");
const playerRock = document.querySelector("#player-rock");
const playerScissor = document.querySelector("#player-scissors");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#comp-score");
const playAgainButton = document.getElementById('playAgainButton');

// Define the score.

let humanScore = 0;
let computerScore = 0;

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
function getHumanChoice(humselection) {
    let choice = humselection
    document.getElementsByClassName("versus")[0].style.display = "none";
    switch (choice) {
        case "player-rock":
            document.getElementsByClassName("versus")[0]
                .style.display = "block";
            return "rock";
        case "player-paper":
            document.getElementsByClassName("versus")[0]
                .style.display = "block";
            return "paper";
        case "player-scissors":
            document.getElementsByClassName("versus")[0]
                .style.display = "block";
            return "scissors";   
    }
}

// Function plays a single round.

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            // console.log("You win! Rock beats Paper!");
            document.getElementById("center-player-choice").src="./images/rock-player-green.png";
            document.getElementById("center-comp-choice").src="./images/scissors-comp-red.png";
            humanScore += 1;
        } else if (computerChoice === "paper") {
            // console.log("You lose! Paper beats Rock!");
            document.getElementById("center-player-choice").src="./images/rock-player-red.png";
            document.getElementById("center-comp-choice").src="./images/paper-comp-green.png";
            computerScore += 1;
        } else {
            document.getElementById("center-player-choice").src="./images/rock-player.png";
            document.getElementById("center-comp-choice").src="./images/rock-comp.png";
            // console.log("A tie! A rock is a rock!");
        }
    } else if (humanChoice ==="paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            document.getElementById("center-player-choice").src="./images/paper-player-green.png";
            document.getElementById("center-comp-choice").src="./images/rock-comp-red.png";
            humanScore += 1;
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissor beats Paper!");
            document.getElementById("center-player-choice").src="./images/paper-player-red.png";
            document.getElementById("center-comp-choice").src="./images/scissors-comp-green.png";
            computerScore += 1;
        } else {
            console.log("A tie! Paper is paper!");
            document.getElementById("center-player-choice").src="./images/paper-player.png";
            document.getElementById("center-comp-choice").src="./images/paper-comp.png";
        }
    } else {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!");
            document.getElementById("center-player-choice").src="./images/scissors-player-green.png";
            document.getElementById("center-comp-choice").src="./images/paper-comp-red.png";
            humanScore += 1;
        } else if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            document.getElementById("center-player-choice").src="./images/scissors-player-red.png";
            document.getElementById("center-comp-choice").src="./images/rock-comp-green.png";
            computerScore += 1;
        } else {
            console.log("A tie! Scissors are Scissors!");
            document.getElementById("center-player-choice").src="./images/scissors-player.png";
            document.getElementById("center-comp-choice").src="./images/scissors-comp.png";
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
            playAgainButton.style.display = 'block';
        } else {
            document.getElementById("player-score").textContent = humanScore;
            document.getElementById("comp-score").textContent = computerScore;
            document.getElementById("computer-won").style.display = "block";
            document.getElementById("player-rock").disabled = true;
            document.getElementById("player-scissors").disabled = true;
            document.getElementById("player-paper").disabled = true;
            playAgainButton.style.display = 'block';
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


function resetGame() {
        // Reset game variables
        humanScore = 0;
        computerScore = 0;
        // Reset starting choice images
        document.getElementById("center-player-choice").src="./images/question.png";
        document.getElementById("center-comp-choice").src="./images/question.png";
        document.getElementById("player-won").style.display = "none";
        document.getElementById("computer-won").style.display = "none";
        document.getElementById("player-score").textContent = humanScore;
        document.getElementById("comp-score").textContent = computerScore;
        document.getElementById("player-rock").disabled = false;
        document.getElementById("player-scissors").disabled = false;
        document.getElementById("player-paper").disabled = false;
        playAgainButton.style.display = 'none';
    }

    playAgainButton.addEventListener('click', resetGame);

