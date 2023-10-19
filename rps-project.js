function random(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let computerSelection = options[random(2)];
    return computerSelection
}

function playRound(playerSelection) {
    const validOptions = ["rock", "paper", "scissors"];
    if (!(validOptions.includes(playerSelection.toLowerCase()))) {
        console.log("Invalid input. Please try again");
        let result = "invalid input"
        return result
    }

    let winner;
    let computerSelection;
    computerSelection = getComputerChoice().toLowerCase();
    console.log(`The Computer chose ${computerSelection}`)
    playerSelection = playerSelection.toLowerCase();
    console.log(`The player chose ${playerSelection}`)

    if ((playerSelection == 'rock' && computerSelection == 'scissors') 
    || (playerSelection == 'paper' && computerSelection == 'rock') 
    || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        // win message 
        console.log(`You win. ${playerSelection} beats ${computerSelection}!`);
        winner = 'player'
        return winner
        
    } else if (playerSelection == computerSelection) {
        // tie message
        console.log(`It's a tie. The player chose ${playerSelection} and the computer chose ${computerSelection}`);
        winner = 'tie'
        return winner
    } else {
        // lose message
        console.log(`You lose. ${computerSelection} beats ${playerSelection} (your option)`);
        winner = 'computer'
        return winner
    }

}


let btns;
btns = document.body.querySelector('#container');
// set scores to zero
let playerScore = 0;
let computerScore = 0;
// create div for reporting of round result
let resultDiv = document.createElement('div');
resultDiv.className = 'result';
document.body.appendChild(resultDiv);
// create div for reporting of each player result
let scoreDiv = document.createElement('div');
document.body.appendChild(scoreDiv);
scoreDiv.className = 'score';

// Event Delegation: to avoid creating multiple event listeners for each button.
btns.addEventListener('click', (event) => {
    let target = event.target;
    let playerSelection = target.id;
    console.log(playerSelection);
    let result = playRound(playerSelection);    

    if (result == 'player') {
        playerScore++
        resultDiv.textContent = `The ${result} wins this round!`
    } else if (result == 'computer') {
        computerScore++
        resultDiv.textContent = `The ${result} wins this round!`
    } else if (result == 'invalid input') {
        alert("invalid input. Please try again.")
    } else {
        resultDiv.textContent = `It's a ${result}. Try again`
    }
    scoreDiv.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`

    if (playerScore == 5 || computerScore == 5) {
        let finalResult = document.createElement('div');
        finalResult.id = 'final-result';
        document.body.appendChild(finalResult);
        if (playerScore > computerScore) {
            finalResult.textContent = 'The Player is the ultimate winner'
        } else if (computerScore > playerScore) {
            finalResult.textContent = 'The Computer is the ultimate winner'
        } else if (computerScore == playerScore) {
            finalResult.textContent = `It's a tie.`
        }
    
        // hide option buttons
        btns.style.visibility = 'hidden';
        // creation of reset btn
        let resetBtn = document.createElement('button');
        resetBtn.id = 'reset';
        resetBtn.className = 'btn';
        resetBtn.textContent = 'Reset';
        document.body.appendChild(resetBtn);
        // reset button to reset game when button is pushed
        resetBtn.addEventListener('click', (event) => {
            playerScore = 0;
            computerScore = 0;
            document.body.removeChild(resetBtn)
            document.body.removeChild(resultDiv)
            document.body.removeChild(finalResult)
            scoreDiv.textContent = '';
            btns.style.visibility = 'visible'
            resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            document.body.appendChild(resultDiv)}
    )};
    console.log(playerScore)
    console.log(computerScore)
})

