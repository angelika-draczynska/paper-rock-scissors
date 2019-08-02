
function printMessage(msg) {
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	}
	else if (argMoveId == 2) {
		return 'papier';
	}
	else if (argMoveId == 3) {
		return 'nożyce';
	}
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}


function displayResult(argComputerMove, argPlayerMove) {
	console.log('moves:', argComputerMove, argPlayerMove);
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

	if (argPlayerMove === 'nieznany ruch') {
		printMessage('Możesz wpisać tylko liczbę 1, 2 lub 3');
	} else if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
		printMessage('Ty wygrywasz!');
	} else if (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') {
		printMessage('Komputer wygrywa');
	} else if (argComputerMove === 'nożyce' && argPlayerMove === 'papier') {
		printMessage('Komputer wygrywa!');
	} else if (argComputerMove === 'papier' && argPlayerMove === 'kamień') {
		printMessage('Komputer wygrywa!');
	} else {
		printMessage('Remis!');
	}
} 