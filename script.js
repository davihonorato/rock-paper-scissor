const gameBox = document.querySelector(".game"),
buttons = gameBox.querySelectorAll('button');

const choices = ['rock', 'paper', 'scissor'];
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

function showResult(){
    console.log(userChoice, computerChoice);
}