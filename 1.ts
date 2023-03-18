var entrada0 = require("readline-sync");

var s1: number = parseFloat(entrada0.question("Valor de sua hora de trabalho: "));
var t:number = parseFloat(entrada0.question("Horas trabalhadas: "))

if (t>160) { console.log("seu salario esse mes será: " + ((s1*160)+((s1*1.5)*(t-160)))); }

else { console.log("Seu salario mensal ficou em : " + (s1*160));}