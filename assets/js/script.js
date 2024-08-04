/*jshint esversion: 6 */

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let opponentScore = 0;
let roundsLeft = 5;
let gameHistory = [];
let levelDifficulty = 1;

//  Add event listener for button elements //
document.querySelectorAll('.select').forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});


// Function calls players choice and the opponents choice to display a result, counts down number of rounds left to GameOver //
function playGame(playerChoice) {
    if (roundsLeft === 0){
        gameOver();
        return;
    }

    const opponentChoice = getOpponentChoice();

    const result = getResult(playerChoice, opponentChoice);

    updateScores(result);
    displayMessage(`You chose ${playerChoice}, Opponent chose ${opponentChoice}. ${result}`);
    gameHistory.push(playerChoice);
    roundsLeft--;
    document.getElementById('rounds-left').textContent = roundsLeft;

    if (roundsLeft === 0) {
        gameOver();
    }
}

// Function will remember previous choice and base next choice off of that //
function increasedDifficulty() {
    if (gameHistory.length === 0) return choices[Math.floor(Math.random() * choices.length)];

    const previousGuess = gameHistory[gameHistory.length - 1];
    switch(previousGuess) {
        case 'rock' : return 'paper';
        case 'paper' : return 'scissors';
        case 'scissors' : return 'rock';
        case 'lizard' : return 'spock';
        case 'spock' : return 'lizard';
        default: return choices[Math.floor(Math.random() * choices.length)];
    }
}

// Generate opponents random choice //
function getOpponentChoice() {
    if (levelDifficulty === 1){
     return choices[Math.floor(Math.random() * choices.length)];
    } else {
        return increasedDifficulty();
    }
    
}

// Set the winning condition combination and show what beats what to display message //
function getResult(player, opponent) {
    if (player === opponent) return 'Draw, better than a loss!';

    const winningCombination = {
        rock: ['lizard', 'scissors'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['paper', 'spock'],
        spock: ['rock', 'scissors']
    };

    if (winningCombination[player].includes(opponent)) {
        return 'Victory!';
    } else {
        return 'Sorry....Loser!';
    }
}


// Update score area based on message returned //
function updateScores(result) {
    if (result === 'Victory!') {
        playerScore++;
    } else if (result === 'Sorry....Loser!') {
        opponentScore++;
    }
    document.getElementById('your-score').textContent = playerScore;
    document.getElementById('opponent-score').textContent = opponentScore;
}

// Display message after each choice //
function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

// Display final message when rounds = 0 //
function gameOver() {
    let finalMessage = playerScore > opponentScore ? 'You win!' : 'You lose!';
    displayMessage(finalMessage);
}