/*jshint esversion: 6 */

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let opponentScore = 0;
let triesLeft = 5;
let history = [];
let levelDifficulty = 1;

//  Add event listener for button elements //
document.querySelectorAll('.select').forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});


// Function calls players choice and the opponents choice to display a result//
function playGame(playerChoice) {
    if (triesLeft === 0){
        gameOver();
        return;
    }

    const opponentChoice = getOpponentChoice();

    const result = getResult(playerChoice, opponentChoice);

    updateScores(result);
    displayMessage(`You chose ${playerChoice}, Opponent chose ${opponentChoice}. ${result}`);
    history.push(playerChoice);
    triesLeft--;
    document.getElementById('tries-left').textContent = triesLeft;

    if (triesLeft === 0) {
        gameOver();
    }
}

// Generate opponents random choice //
function getOpponentChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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

function displayMessage(message) {
    document.getElementById('message').textContent = message;
}