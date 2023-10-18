function random(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let computerSelection = options[random(2)];
    return computerSelection
}

function playGame(playerSelection) {
    const validOptions = ["rock", "paper", "scissors"]
    if (!(validOptions.includes(playerSelection.toLowerCase))) {
        "Invalid input. Please try again"
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

function game() {
    // Loop 5 rounds
    alert('Start of Game')
    let playerScore = 0;
    let computerScore = 0;
    let result;
    let playerSelection;
    

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt();
        result = playGame(playerSelection);
        if (result == 'player') {
            playerScore++
        } else if (result == 'computer') {
            computerScore++
        } else if (result == 'invalid input') {
            console.log("invalid input. Please try again.")
            i--
            continue   
        } else {
            continue
        }
        
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log(`Player wins. Player score: ${playerScore}, Computer score: ${computerScore}`)
    } else if (playerScore == computerScore) {
        console.log(`It's a tie. Player score: ${playerScore}, Computer score: ${computerScore}`)
    } else {
        console.log(`Computer wins. Player score: ${playerScore}, Computer score: ${computerScore}`)
    }

}