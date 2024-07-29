const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let opponentScore = 0;

//  Add event listener for button elements //
document.querySelectorAll('.select').forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});
 // Function calls players choice and the opponents choice to display a result//
function playGame(playerChoice) {
    //calls random opponents choice//
    const opponentChoice = getOpponentChoice();
    //compare players choice to opponents choice to give a result//
    const result = getResult(playerChoice, opponentChoice);
    //function updates the score based on the result//
    updateScores(result);
    displayMessage(`You chose ${playerChoice}, opponent chose ${opponentChoice}. ${result}`);
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
        return 'Sorry....loser.';
    }
}


// Update score area based on message returned //
function updateScores(result) {
    if (result === 'Victory!') {
        playerScore++;
    } else if (result === 'Sorry....loser.') {
        opponentScore++;
    }
    document.getElementById('your-score').textContent = playerScore;
    document.getElementById('opponent-score').textContent = opponentScore;
}

function displayMessage(message){
    document.getElementById('message').textContent = message;
}