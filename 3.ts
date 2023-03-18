const  entradac = require('readline-sync');

entradac.question("Digite o numero da conta: ");
let saldo: number= parseFloat(entradac.question("Digite seu saldo: "));
let debito: number = parseFloat(entradac.question("Digite seu debito: "));
let credito: number = parseFloat(entradac.question("Digite seu credito: "));

let saldoatual: number = (saldo - debito) + credito 

if(saldoatual < 0){
    console.log("Seu saldo atual é " + saldoatual + " voce esta no negativo")
}
else{
    console.log("Seu saldo atual é " + saldoatual + " voce esta no positivo")

}


