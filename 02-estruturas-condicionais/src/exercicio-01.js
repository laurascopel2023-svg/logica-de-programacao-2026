import leia from 'readline-sync';


var senhaPadrao = "1234";
var senhaDigitada = leia.question("DIGITE A SUA SENHA: ");

if(senhaUsuario === senhaPadrao){
    console.log("ACESSO PERMITIDO!!!")
}else {
    console.log("ACESSO NEGADO!!")
}
   


