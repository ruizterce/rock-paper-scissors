
let getResult;
let playerScore = 0;
let computerScore = 0;
let resultText = document.querySelector('#roundResult');
let playerScoreDisplay = document.querySelector('#playerScore');
let computerScoreDisplay = document.querySelector('#computerScore');
let gameResultDisplay = document.querySelector('#gameResult');
let playerSelectionDisplay = document.querySelector('#playerSelectionDisplay');
let computerSelectionDisplay = document.querySelector('#computerSelectionDisplay');

//Run main function to play a game of Rock, Paper, Scissors.
playGame();

//FUNCTION DEFINITIONS
//Initialize a game until player or computer reaches 5 wins.

function playGame() {
    playerScore = 0;
    computerScore = 0;

    //Initialize event listener to read clicks on elements inside the button pad.
    const btnPad = document.querySelector('#btnPad');

    btnPad.addEventListener('click', (e) => {
        let target = e.target;
        let computerSelection;

        switch (target.id) {
            //Save player choice, call a function to get computer choice, update textContents and call playRound with both choices to return round winner to getResult.
            case 'Rock':
                console.log('Rock clicked');
                playerSelection = 'Rock';
                playerSelectionDisplay.textContent = 'Rock';
                computerSelection = getComputerChoice();
                computerSelectionDisplay.textContent = computerSelection;
                getResult = playRound(playerSelection, computerSelection);
                break;
            case 'Paper':
                console.log('Paper clicked');
                playerSelection = 'Paper';
                playerSelectionDisplay.textContent = 'Paper';
                computerSelection = getComputerChoice();
                computerSelectionDisplay.textContent = computerSelection;
                getResult = playRound(playerSelection, computerSelection);
                break;
            case 'Scissors':
                console.log('Scissors clicked');
                playerSelection = 'Scissors';
                playerSelectionDisplay.textContent = 'Scissors';
                computerSelection = getComputerChoice();
                computerSelectionDisplay.textContent = computerSelection;
                getResult = playRound(playerSelection, computerSelection);
                break;

            //Reset button to clear saved values from previous game and reset btnPad with the player choice buttons.
            case 'Reset':
                playerScore = 0;
                computerScore = 0;
                playerSelectionDisplay.textContent = '';
                computerSelectionDisplay.textContent = '';
                resultText.textContent = '';
                gameResultDisplay.textContent = '';


                while (btnPad.firstChild) {
                    btnPad.removeChild(btnPad.firstChild);
                }
                const Rock = document.createElement('button');
                Rock.id = 'Rock';
                Rock.textContent = "Rock";

                const Paper = document.createElement('button');
                Paper.id = 'Paper';
                Paper.textContent = "Paper";

                const Scissors = document.createElement('button');
                Scissors.id = 'Scissors';
                Scissors.textContent = "Scissors";

                btnPad.appendChild(Rock);
                btnPad.appendChild(Paper);
                btnPad.appendChild(Scissors);
                break;
        }

        //Add up round wins to score counters and update textContent values.
        
        if (getResult === "Player wins the round") {
            playerScore++;
            getResult = '';
        } else if (getResult === "Computer wins the round") {
            computerScore++;
            getResult = '';

        }


        playerScoreDisplay.querySelector('span').textContent = playerScore;
        computerScoreDisplay.querySelector('span').textContent = computerScore;


        //Check for 5 wins to show winner text, add Reset button and remove choice buttons.
        if (playerScore === 5 || computerScore === 5) {
            let winner;
            if (playerScore === 5) {
                winner = "Player";
            } else if (computerScore === 5) {
                winner = "Computer";
            }

            gameResultDisplay.textContent = 'The winner is: ' + winner;

            while (btnPad.firstChild) {
                btnPad.removeChild(btnPad.firstChild);
            }

            const resetBtn = document.createElement('button');
            resetBtn.id = 'Reset';
            resetBtn.textContent = "Reset";

            btnPad.appendChild(resetBtn);
            return;
        }
    })
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
    let roundResult;

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

    //Update textContent value.
    resultText.textContent = roundResult;

    return roundResult;
}



