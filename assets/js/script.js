const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let opponentScore = 0;

// Add event listener for button elements //
document.querySelector('select').forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});

function getOpponentChoice(){

}

function getResult(){

}

function updateScores(){

}

function displayMessage(){
    
}