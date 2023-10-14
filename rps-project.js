function random(number) {
    //number between 0 and specified index number
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = options[random(2)];
    // use Math.random.floor * 2 to choose number from 0 to choose index of array
    return computerChoice
}

function playGame(playerSelection) {
    //function for single round of RPS

    // playerChoice = getPlayerChoice();

    computerSelection = getComputerChoice(); // get computer choice

    // conditionals: choice evaluation
    //switch statement with different cases

    switch(playerSelection) {
        case 'rock':
            if (computerSelection == 'scissors') {
            console.log(`You win. ${playerSelection} beats ${computerSelection}!`);
            break;
            }
            
        case 'paper':
            if (computerSelection == 'rock') {
                console.log(`You win. ${playerSelection} beats ${computerSelection}!`);
                break;
            }
            
        case 'scissors':
            if (computerSelection == 'paper') {
                console.log(`You win. ${playerSelection} beats ${computerSelection}`);
                break;
            }
            
        case computerSelection:
            console.log(`It's a tie. The player chose ${playerSelection} and the computer chose ${computerSelection}`);
            break;
        
        default:
            console.log(`You lose. ${computerSelection} beats ${playerSelection} (your option)`)
            break;

    }
    
    // if player has winning choice (playerchoice == winning choice)
    // print You win. {choice} beats {choice}.

}

function game() {
    // Loop 5 rounds
    alert('Start of Game')
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        playGame(); 
    }


    // use prompt() to prompt player for choice
    // sanitize user input by making all lowercase
    // previous functions go here
    // use console log to print the results of each round.
}