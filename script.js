const gameBox = document.querySelector(".game");

function getInput(buttonId) {
    //pegando a escolha do usuário
    let userChoice;
    if(buttonId == 'rock') {
        userChoice = 1;
    }else if(buttonId == 'paper') {
        userChoice = 2;
    }else if(buttonId == 'scissor') {
        userChoice = 3;
    }

    //pegando a escolha do computador
    let computerChoice = 2;

    showResult(userChoice, computerChoice);
}

function showResult(user, computer){
    if(user == computer) {
        console.log("EMPATE!");
    }else {
        console.log('Alguém Ganhou.');
    }
}