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


// <button id="paper" class="btn" onclick="clickBtn()">Paper</button>
// function clickBtn() {
//     let playerSelection = Event.target.id;
//     playRound(playerSelection);
// }

// select container for button elements (returning null)
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

// Reporting of final result


// if (playerScore == 5 || computerScore == 5) {
//     let finalResult = document.createElement('div');
//     finalResult.id = 'final-result';
//     document.body.appendChild(finalResult);
//     if (playerScore > computerScore) {
//         finalResult.textContent = 'The Player is the ultimate winner'
//     } else if (computerScore > playerScore) {
//         finalResult.textContent = 'The Computer is the ultimate winner'
//     } else if (computerScore == playerScore) {
//         finalResult.textContent = `It's a tie.`
//     }

//     // remove option buttons
//     document.body.removeChild(btns);
//     // creation of reset btn
//     let resetBtn = document.createElement('button');
//     resetBtn.id = 'reset';
//     resetBtn.className = 'btn'
//     document.body.appendChild(resetBtn);
//     // reset button to reset game when button is pushed
//     resetBtn.addEventListener('click', (event) => {
//         playerScore = 0;
//         computerScore = 0;
//         document.body.removeChild(resetBtn)}
// )};



/* <button onclick="fxn_name(this.id)">

function fxn_name(clickedBtnID) {
    let playerSelection = clickedBtnID; (rock)
    playRound(playerSelection);
}

OR

let btn = document.querySelector('#rock')

btn.onclick = function() {
    let playerSelection = this.id
    playRound(playerSelection);
}

OR

onclick=reply_click()
function reply_click() {
    alert(event.srcElement.id)
}

I could also see how to access the text,
value of button clicked to avoid repeating code
*/


// get value from clicked button

// store value in playerSelection variable

// feed variable into playRound Function

// add div with round result

// add round result to score tally

// add div announcing winner of game once one player reaches five points.
// If (computer score == 5 || player score == 5)
// announce winner, exit game.

// function game() {
//     // Loop 5 rounds
//     alert('Start of Game')
//     let playerScore = 0;
//     let computerScore = 0;
//     let result;
//     let playerSelection;
    

//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt();
//         result = playGame(playerSelection);
//         if (result == 'player') {
//             playerScore++
//         } else if (result == 'computer') {
//             computerScore++
//         } else if (result == 'invalid input') {
//             console.log("invalid input. Please try again.")
//             i--
//             continue   
//         } else {
//             continue
//         }
        
//     }

//     console.log(`Player Score: ${playerScore}`);
//     console.log(`Computer Score: ${computerScore}`);
//     if (playerScore > computerScore) {
//         console.log(`Player wins. Player score: ${playerScore}, Computer score: ${computerScore}`)
//     } else if (playerScore == computerScore) {
//         console.log(`It's a tie. Player score: ${playerScore}, Computer score: ${computerScore}`)
//     } else {
//         console.log(`Computer wins. Player score: ${playerScore}, Computer score: ${computerScore}`)
//     }

// }