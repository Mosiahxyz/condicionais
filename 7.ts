var entrada = require("readline-sync");
var homema = parseFloat(entrada.question("digite sua idade: "));
var homemb = parseFloat(entrada.question("digite sua idade: "));
var mulhera = parseFloat(entrada.question("digite sua idade: "));
var mulherb = parseFloat(entrada.question("digite sua idade: "));

if (homema > homemb && mulhera > mulherb) {

    console.log("a soma das idades: " + ( homema + mulherb) + " e o produto é: " + (homemb * mulhera));
}
if (homema > homemb && mulherb > mulhera) {

    console.log("a soma das idades: " + (homema + mulhera) + " e o produto é: " + (homemb * mulherb));
}

if (homemb > homema && mulhera > mulherb) {

    console.log("a soma das idades: " + (homemb + mulherb) + " e o produto é: " + (homema * mulhera));
}

if (homemb > homema && mulherb > mulhera) {

    console.log("a soma das idades: " + (homemb + mulhera) + " e o produto é: " + (homema * mulherb));
}