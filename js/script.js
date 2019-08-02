function playGame(playerInput) {
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Random number is: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    printMessage('My move is: ' + computerMove);

    console.log('Player typed: ' + playerInput);

    let playerMove = getMoveName(playerInput);
    printMessage('Your move is: ' + playerMove);

    displayResult(computerMove, playerMove);
 
}

document.getElementById('button-1').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('button-2').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('button-3').addEventListener('click', function () {
    playGame(3);
});