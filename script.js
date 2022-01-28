const scoreBoard = document.querySelector('.container .score'),
gameBox = document.querySelector(".game"),
buttons = gameBox.querySelectorAll('.button-screen button'),
resultText = gameBox.querySelector('.result-screen span'),
againButton = gameBox.querySelector('.result-screen button');

const choices = [
    {"name": 'rock', 'beats': 'scissor'},
    {"name": 'paper', 'beats': 'rock'},
    {"name": 'scissor', 'beats': 'paper'}
];
let userChoice;
let computerChoice;

// //pegando a escolha do usuário
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        userChoice = e.currentTarget.id;

        // gerando a escolha do computador
        getComputerChoice();
    })
});

//retorna um número gerado aleatóriamente que será utilizando como uma key para encontrar o valor no array 'choice'
function getComputerChoice() {
    // pegando a escolha do computador (0, 1 ou 2) e armazenando em 'indice'
    let indice = Math.floor(Math.random() * choices.length);
    computerChoice = choices[indice];

    // processa e exibe o resultado na tela
    showResult();
}

// processando a lógica do jogo e exibindo na tela
function showResult(){
    gameBox.classList.add('active');

    // caso o resultado saia empatado
    if(userChoice == computerChoice.name){
        // insere o valor do usuário
        // insere o valor do computador

        //modifica o texto
        resultText.textContent = 'DEU EMPATE!';

    // caso não haja empate
    }else {
        // usuário perde
        if(userChoice == computerChoice.beats){
            resultText.textContent = 'VOCÊ PERDEU!';

        //usuário ganha
        }else {
            resultText.textContent = 'VOCÊ GANHOU!';
        }
    }
}