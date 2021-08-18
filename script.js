let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // vai passar a tratar o arquivo como um plano 2d
let box = 32; // cada quadradinho tem 32px
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function CriarBG() {
    context.fillStyle = "lightgreen"; //cor do fundo
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retangulo onde o jogo vai acontecer

}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    CriarBG();
    criarCobrinha();
    /*movimentos da cobrinha */
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box // se a posição for igual a "right" a posição de snakeX vai acrescentar +1 quadradinho(box)
    if (direction == "left") snakeX -= box; // como estamos no eixo x, a esquerda vc vai decrescendo, então coloque o sinal de decrementar
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop(); //retira o ultimo elemento do array

    /*cabeça da cobrinha para saber onde ela começa*/
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); //intervalo de milisegundos para iniciar jogo e a cada 100ms ela vai se renovar e dar continuada ao jogo sem ele travar