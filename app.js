let tentativas = 1;
let palavraTentativas = tentativas > 1 ? " tentativas" : " tentativa";
let numeroMaximo = 10;
let numeroAleatorio = gerarNumeroAleatorio()

function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e " + numeroMaximo);

function gerarNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * numeroMaximo + 1);
    return numeroGerado;
}

function verificarChute() {
    let numeroDoJogador = document.querySelector("input").value;
    
    if (numeroDoJogador == numeroAleatorio) {
        exibirTextoNaTela("h1", "Acertou");
        exibirTextoNaTela("p", "Você descobriu o número secreto com " + tentativas + palavraTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        document.querySelector("input").value = ""
        tentativas++;
        if (numeroDoJogador > numeroAleatorio) {
            exibirTextoNaTela("p", "O número é menor do que " + numeroDoJogador);
        } else {
            exibirTextoNaTela("p", "O número é maior do que " + numeroDoJogador);
        }
    }
}

function reiniciarJogo() {
    document.getElementById("reiniciar").setAttribute("disabled", true)
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 1;
    document.querySelector("input").value = ""
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e " + numeroMaximo);
}