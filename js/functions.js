function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
	if (argMoveId === 1) {
		return 'rock';
	}
	else if (argMoveId === 2) {
		return 'paper';
	}
	else if (argMoveId === 3) {
		return 'scissors';
	}
	printMessage('I dont know move ID ' + argMoveId + '.');
	return 'unknown move';
}

function displayResult(argComputerMove, argPlayerMove) {
	console.log('moves:', argComputerMove, argPlayerMove);
	printMessage('I played ' + argComputerMove + ', and You ' + argPlayerMove);

	if (argPlayerMove === 'unknown move') {
		printMessage('You can type only numbers 1, 2 or 3.');
	} else if (argComputerMove === 'rock' && argPlayerMove === 'paper') {
		printMessage('You win!');
		state.playerWins = state.playerWins + 1;
	} else if (argComputerMove === 'paper' && argPlayerMove === 'scissors') {
		printMessage('You win!');
		state.playerWins = state.playerWins + 1;
	} else if (argComputerMove === 'scissors' && argPlayerMove === 'rock') {
		printMessage('You win!');
		state.playerWins = state.playerWins + 1;
	} else if (argComputerMove === 'rock' && argPlayerMove === 'scissors') {
		printMessage('Computer wins!');
		state.computerWins = state.computerWins + 1;
	} else if (argComputerMove === 'scissors' && argPlayerMove === 'paper') {
		printMessage('Computer wins!');
		state.computerWins = state.computerWins + 1;
	} else if (argComputerMove === 'paper' && argPlayerMove === 'rock') {
		printMessage('Computer wins!');
		state.computerWins = state.computerWins + 1;
	} else {
		printMessage('Draw!');
	}
}