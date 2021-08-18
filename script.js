let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // vai passar a tratar o arquivo como um plano 2d
let box = 32; // cada quadradinho tem 32px
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

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
CriarBG();
criarCobrinha();