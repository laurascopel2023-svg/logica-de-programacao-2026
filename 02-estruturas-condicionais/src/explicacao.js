
// E - SÓ VAI DAR VERDADEIRO SE TODOS FOREM VERDADEIROS
// OU - SÓ VAI DAR FALSO SE TODOS FOREM FALSOS 

var idade = 30;
var temCnh = true;

if(idade < 1) {
    console.log("RECÉM NASCIDO")
} else if(idade > 12 && idade <= 12) {
    console.log("CRIANÇA")
} else if(idade > 12 && idade < 18) {
    console.log("ADOLESCENTE")
} else if(idade >= 18 && idade <= 60) {
    console.log("ADULTO")
} else {
    console.log("IDOSO")
}


var mediaFinal = 6.5;

if(mediaFinal >= 7) {
    console.log("APROVADO !!")
} else if(mediaFinal >= 5 && mediaFinal < 7){
    console.log("EM RECUPERAÇÃO!!")
} else {
    console.log("REPROVADO!!")
}




var diaSemana = "quarta";
if(diaSemana === "sabado" || diaSemana === "domingo") {
    console.log("FIM DE SEMANA");
} else {
    console.log("DIA ÚTIL")

}


var formaPagamento = "pix";
var valorProduto = 15.6;

if(formaPagamento === "pix" || formaPagamento === 'dinheiro' || formaPagamento === "debito"){
    console.log("VALOR DO PRODUTO É: R$" + valorProduto.toFixed(2))
} else {
    var valorFinal = valorProduto + (valorProduto * 0.15)
    console.log("VALOR DO PRODUTO É: R$" + valorFinal.toFixed(2))
}


 // DESAFIO DO NÚMERO PAR OU IMPAR;
 var numero = 6;
 if(numero % 2 === 0) {
    console.log("PAR")
 } else {
    console.log("IMPAR")
 }

 // SWITCH CASE
var cor = "VERMELHO"
 switch (cor) {
    case "VERMELHO":
        console.log("PARE")
        break;
        case "AMARELO":
            console.log("ATENÇÃO")
            break;
      case "VERDE":
        console.log("SIGA")
        break;
 }
 

 // SWITCH CASE 
 var idioma = 'pt';
 switch(idioma){
    case 'fr':
        console.log("BONJOUR !!")
        break;
        case 'pt':
            console.log("OLÁ")
            break;
            case 'es':
                console.log("HOLA")
                break;
                default:
                    console.log("HELLO")

 }