let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // vai passar a tratar o arquivo como um plano 2d
let box = 32; // cada quadradinho tem 32px

function CriarBG() {
    context.fillStyle = "lightgreen"; //cor do fundo
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retangulo onde o jogo vai acontecer

}