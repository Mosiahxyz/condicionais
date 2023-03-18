var entrada = require('readline-sync');
var t1 = entrada.question("time 1: ");
var p1 = entrada.question("numero de gols: ");
var t2 = entrada.question("time 2: ");
var p2 = entrada.question("numero de gols: ");
if (p1 > p2) {
    console.log(t1 + " venceu");
}
if (p2 > p1) {
    console.log(t2 + " venceu");
}
if (p1 == p2) {
    console.log(" empate");
}
