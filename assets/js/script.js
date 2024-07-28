const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let opponentScore = 0;

document.querySelector('select').forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});