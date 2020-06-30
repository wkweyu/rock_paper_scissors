const winnerScores = [0, 0];
const messagePlayer = document.querySelector('.message');
const messageComputer = document.querySelector('.message');
const playerScore =
    document.querySelector('.playerScore');
const computerScore =
    document.querySelector('.computerScore');
const buttons = document.querySelectorAll('button')
const message = document.querySelector('.vs')
    //Declare loop that runs through buttons-returns clicked button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', funcPlay)
}
//Function on play
function funcPlay(e) {
    //Get user played value
    let playerSelection = e.target.innerHTML;
    //Get computer played value randomly.
    let playOptions = ['Rock', 'Scissors', 'Paper'];
    let compSelect = playOptions[Math.floor(Math.random() * playOptions.length)]
        //Compare the two played values against rationale.
    let result = getWinner(playerSelection, compSelect);
    if (result === 'Player') {
        result += ' Wins'
        winnerScores[0]++;
    }
    if (result === 'Computer') {
        result += ' Wins'
        winnerScores[1]++;

    }
    if (result === 'Draw') {
        result += ' It\'s a tie!'
    }
    //change innerHTML to display Game results messages
    playerScore.innerHTML = 'Player:' + '<strong>' + playerSelection + '</strong>' + '[' + winnerScores[0] + ']';
    computerScore.innerHTML = 'Computer:' + '<strong>' + compSelect + '</strong>' + '[' + winnerScores[1] + ']';
    messenger('<strong>' + result + '</strong>');
}
//Assignment function.
function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}
//The score board.
function getWinner(Player, Computer) {
    if (Player === Computer) {
        return 'Draw';
    }
    if (Player === 'Scissors') {
        if (Computer === 'Rock') {
            return 'Computer'
        } else {
            return 'Player'
        }
    }
    if (Player === 'Paper') {
        if (Computer === 'Rock') {
            return 'Player'
        } else {
            return 'Computer'
        }
    }
    if (Player === 'Rock') {
        if (Computer === 'Paper') {
            return 'Computer'
        } else {
            return 'Player'
        }
    }
}