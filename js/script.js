function playGame(playerInput) {
    clearMessages();
    playerInput;
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

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