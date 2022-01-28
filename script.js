const gameBox = document.querySelector(".game");

function getInput(buttonId) {
    //opções disponíveis
    let choices = ['rock', 'paper', 'scissor'];

    //pegando a escolha do usuário
    let userChoice = buttonId;

    //pegando a escolha do computador
    let computerChoice = choices[getComputerChoiceId(choices.length)];

    //processa e exibe o resultado na tela
    showResult(userChoice, computerChoice);
}

//retorna um número gerado aleatóriamente que é utilizando como uma key para encontrar um valor em um array
function getComputerChoiceId(qntOptions) {
    return Math.floor(Math.random() * qntOptions);
}

function showResult(user, computer){
    if(user == computer) {
        console.log("EMPATE!");
    }else {
        console.log('Alguém Ganhou.');
    }
}