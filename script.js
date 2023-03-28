//Run main function
playGame();

//FUNCTION DEFINITION
//Initialize a game of 5 rounds. Play 5 rounds, add the socre after each round, and determine the winner of the game.

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let getResult
    //For each round, call functions to prompt the user for a choice and generate computer's choice. Store those variables and run
    //them through playRound() to get the result of each round. Add 1 score to the winner of the round.
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i)
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        getResult = playRound(playerSelection, computerSelection);
        if (getResult === "Player wins the round") {
            playerScore++;
        } else if (getResult === "Computer wins the round") {
            computerScore++;
        } else if (getResult === "Error") {
            //If we get "Error" after a round, substract 1 from the counter so the for loop will run 1 more time, efectively repeating the round
            i--;
        }
    }
    console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore)

    if (playerScore > computerScore) {
        console.log("PLAYER WINS");
    } else {
        console.log("COMPUTER WINS");
    }
}

//Function: Generate and register computer's choice (Rock, Paper OR Scissors)

function getComputerChoice() {
    let computerChoice;
    //Generate a random number between 0 and 1.
    let randomNumber = Math.random();
    //If number < 0.333 register Rock.
    if (randomNumber < 0.333) {
        computerChoice = "Rock";
    //If number >= 0.333 and < 0.666 register Paper.
    } else if (randomNumber >= 0.333 && randomNumber < 0.666) {
        computerChoice = "Paper";
    //If number >= 0.666 Register Scissors.
    } else if (randomNumber >= 0.666) {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

//Function: Prompt user for input and register user's choice (Rock, Paper OR Scissors).

function getPlayerChoice() {
    playerChoice = prompt("Please write your choice (Rock, Paper or Scissors)", undefined)
    console.log(playerChoice);
    return playerChoice;
}

//Function: Play a round - Input computer's choice and player's choice values, output the winner of the round. If passed unexpected arguments, return "Error".

function playRound(playerSelection, computerSelection) {
    let roundResult

    //Compare computerSelection and playerSelection to determine the result of the round
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            roundResult = "Tie";
        } else if (computerSelection === "Paper") {
            roundResult = "Computer wins the round";
        } else if (computerSelection === "Scissors") {
            roundResult = "Player wins the round";
        } playerSelection, computerSelection
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            roundResult = "Player wins the round";
        } else if (computerSelection === "Paper") {
            roundResult = "Tie";
        } else if (computerSelection === "Scissors") {
            roundResult = "Computer wins the round";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            roundResult = "Computer wins the round";
        } else if (computerSelection === "Paper") {
            roundResult = "Player wins the round";
        } else if (computerSelection === "Scissors") {
            roundResult = "Tie";
        }
    } else {
        // If input is not one of the expected values, return "Error"
        console.log("Error: Input must be 'Rock', 'Paper' or 'Scissors'");
        roundResult = "Error";
    }
    return roundResult
}

