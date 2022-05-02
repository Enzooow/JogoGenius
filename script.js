let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//cria ordem aleatória de cores

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próxima fase.`);
        nextLevel();
    }
}

//função para o clique do usuário

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    })
}

//função que retorna a cor

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }
    else if(color == 1) {
        return red;
    }
    else if(color == 2) {
        return yellow;
    }
    else if(color == 3) {
        return blue;
    }
}

//função para próximo nível do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função caso o jogador tenha perdido o jogo (GameOver)

let gameOver = () => {
    alert(`Pontuação : ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

//iniciar jogo

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo.');
    score = 0;

    nextLevel();
}

//evento de cliques para as cores

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//início do jogo

playGame();