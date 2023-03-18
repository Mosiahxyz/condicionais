const entrada = require("readline-sync");

let nome: string = (entrada.question("Como voce se chama?: "))
let anos: number = parseFloat(entrada.question("Quantos anos voce trabalha aqui?: "))
let salario: number = parseFloat(entrada.question("Qual e seu salario atual?: "))

if(anos < 3){

salario = (salario*0.3 +salario)

console.log(`${nome}, seu novo salario ficou em ${salario}`)

}

else if(3 == salario || salario < 10){

    salario = (salario*0.125 +salario)

console.log(`${nome}, seu novo salario ficou em ${salario}`)

}

else{

    salario = (salario*0.20 +salario)

    console.log(`${nome}, seu novo salario ficou em ${salario}`)

}