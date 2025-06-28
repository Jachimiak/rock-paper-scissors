    console.log("Hello World");

    const rock = "Rock";
    const paper = "Paper"
    const scissors = "Scissors"

    function getComputerChoice() {
        let choice  = Math.floor((Math.random() * 3) + 1);
        switch (choice) {
            case 1:
                return choice;
            case 2:
                return choice;
            case 3:
                return choice;   
        }

    }



    function getHumanChoice() {
        let choice  = parseInt(prompt(`Please select 1 for ${rock}, 2 for ${paper}, or 3 for ${scissors}`));
        switch (choice) {
            case 1:
                return choice;
            case 2:
                return choice;
            case 3:
                return choice;   
        }
    }

console.log(getHumanChoice());

console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {

}