const scoreBoard = document.querySelector('.container .score'),
gameBox = document.querySelector(".game"),
buttons = gameBox.querySelectorAll('.button-screen button'),
resultScreen = gameBox.querySelector('.result-screen'),
resultText = resultScreen.querySelector('.result span'),
againButton = resultScreen.querySelector('.result button'),
resultCircle = resultScreen.querySelectorAll('.choices .output'),
rules = document.querySelector('.rules'),
rulesButton = document.querySelector('#rulesButton'),
rulesCloseButton = rules.querySelector('i');

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

    //alterando as imagens no resultado
    document.querySelectorAll('.output img').forEach( (img, index) => {
        if(index == 0) {
            img.src = `images/${userChoice}-left.png`;
        }else {
            img.src = `images/${computerChoice.name}-right.png`;
        }
    })

    // caso o resultado saia empatado
    if(userChoice == computerChoice.name){
        //modifica o texto
        resultText.textContent = 'DEU EMPATE!';
        resultCircle.forEach(circle => circle.style.border = '20px solid #2541db');

    // caso não haja empate
    }else {
        // usuário perde
        if(userChoice == computerChoice.beats){
            resultText.textContent = 'VOCÊ PERDEU!';
            resultCircle.forEach(circle => circle.style.border = '20px solid #cf2d38');

        //usuário ganha
        }else {
            resultText.textContent = 'VOCÊ GANHOU!';
            resultCircle.forEach(circle => circle.style.border = '20px solid #25db34');
        }
    }
}

againButton.onclick = function() {
    gameBox.classList.remove('active');
}

rulesButton.onclick = function() {
    rules.classList.add('active');
}

rulesCloseButton.onclick = function() {
    rules.classList.remove('active');
}