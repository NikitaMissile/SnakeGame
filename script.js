let canvas = document.getElementById("snake"); // cria elemento que irá rodar o jogo
let context = canvas.getContext("2d"); // vai passar a tratar o arquivo como um plano 2d
let box = 32; // cada quadradinho tem 32px
let snake = []; //cria cobrinha como lista
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}
let direction = "right";

//criando comidinha e aleatorizando na tela
let food = {
    //math.floor retira a parte flutuante (a virgula dps do numero) do Math.random. Math.random retorna sempre um numero aleatório até 1
    //setmos tbm o numero do noss canvas pra nn aparecer fora dele
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,

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

function drawFood() {
    context.fillStyle = "red"; //desenha a maçãzinha
    context.fillRect(food.x, food.y, box, box); //coordenadas da maçã
}

//CONTROLES DE MOVIMENTAÇÃO
document.addEventListener('keydown', update); //ele usa o keydown (evento de clique dos botoes do teclado) e chamar a update q vamos criar abaixo
/*pesquisando aqui, esse keycode é um código do JS para indicar a tecla do teclado que estamos pressionando*/
// isto quer dizer que para o JS a tecla 65 significa que voce esta pressionando a tecla A - eu preferi usar o teclado alfanumerico
//existem várias outras; cada tecla tem o seu keyCode
//a função if abaixo quer dizer que se vc apertar 37, sua cobrinha vai para a esquerda
function update(event) {
    if (event.keyCode == 65 && direction != "right") direction = "left"; //a direção não pode ser a oposta, snao a cobrinha volta pra tras
    if (event.keyCode == 87 && direction != "down") direction = "up";
    if (event.keyCode == 68 && direction != "left") direction = "right";
    if (event.keyCode == 83 && direction != "up") direction = "down";
}

function iniciarJogo() {
    //se snake[0], isto é, a cabeça da cobrinha, estiver na posiçãp for +15 * tamanho do box (do canvas), ela não vai
    //mais ultrapassar a tela, ela vai voltar a posição 0 da box - esquerda pra direita
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box; //mesma logica, só q da direita pra esquerda
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].x = 16 * box;

    /*coordenada q compara se a cobrinha se choca consigo mesmo. Aí o jogo vai parar e acionar um alert*/
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('GAME OVER!')
        }
    }

    CriarBG();
    criarCobrinha();
    drawFood();


    /*movimentos da cobrinha */
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    if (direction == "right") snakeX += box; // se a posição for igual a "right" a posição de snakeX vai acrescentar +1 quadradinho(box)
    if (direction == "left") snakeX -= box; // como estamos no eixo x, a esquerda vc vai decrescendo, então coloque o sinal de decrementar
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); //retira o ultimo elemento do array

    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }



    /*cabeça da cobrinha para saber onde ela começa*/
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 150); //intervalo de milisegundos para iniciar jogo e a cada 100ms ela vai se renovar e dar continuada ao jogo sem ele travar