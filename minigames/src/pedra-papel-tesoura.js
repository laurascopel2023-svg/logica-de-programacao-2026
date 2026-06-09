import leia from 'readline-sync';

var opcoes = ["PEDRA", "PAPEL", "TESOURA"]

var escolhaComputador = Math.floor(Math.randon() * 3);
var escolhaUsuario = leia.keyInselect(opcoes, "ESCOLHA SUA OPCAO:")

if(escolhaUsuario === -1) {
    console.log("OPCAO INVÁLIDA, JOGO CANCELADO!!!")
} else 
    console.log("VOCÊ ESCOLHEU: " + opcoes[escolhaUsuario]);
    console.log("O COMPUTADOR ESCOLHEU: " + opcoes[escolhaComputador]);

    if(escolhaComputador === escolhaUsuario) {
        console.log("EMPATOU!!")
    } else if(
        escolhaUsuario === 0 && escolhaComputador === 2 ||
        escolhaUsuario === 1 && escolhaComputador === 0 ||
        escolhaUsuario === 2 && escolhaComputador === 1

    ){
        console.log("USUÁRIO GANHOUUUU!!")
    }else {
        console.log("COMPUTADOR GANHOUUU!!")
    }
   
        