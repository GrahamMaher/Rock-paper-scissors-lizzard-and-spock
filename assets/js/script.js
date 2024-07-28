const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let opponentScore = 0;

//  Add event listener for button elements //
document.querySelector('select').forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});
 // functioin calls players choice and the opponents choice to display a result//
function playGame(playerChoice){
    //calls random opponents choice//
    const opponentChoice = getOpponentChoice();
    //compare players choice to opponents choice to give a result//
    const result = getResult(playerChoice, opponentChoice);
    //function updates the score based on the result//
    updateScores(result);
    displayMessage(`You chose ${playerChoice}, opponent chose ${opponentChoice}. ${result}`);
}

function getOpponentChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(){

}

function updateScores(){

}

function displayMessage(){

}