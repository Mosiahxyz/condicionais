var entrada2 = require("readline-sync");
var salfix = parseFloat(entrada2.question("Seu salario: "));
var lucro = parseFloat(entrada2.question("Lucro com vendas: "));

if (lucro <= 1500) {console.log("seu salario ficou em: " + (salfix + (0.03 * lucro)));}
    
else if (lucro > 1500) {    console.log("seu salario ficou em: " + (salfix + 0.05 * lucro + 0.03 * lucro));}

