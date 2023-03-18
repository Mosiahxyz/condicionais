var entradat = require("readline-sync");

let numero1: number = parseFloat(entradat.question("Me diga o primeiro numero: "))
let numero2: number = parseFloat(entradat.question("Me diga o segundo numero: "))
let numero3: number = parseFloat(entradat.question("Me diga o terceiro numero: "))

if(numero1>numero2 && numero1>numero3){

    if(numero2 > numero3) {console.log( numero3  , numero2 , numero1)}

    else{console.log(numero2 , numero3 , numero1)}
    
}

if(numero2>numero1 && numero2>numero3){

    if(numero1 > numero3){console.log( numero3  , numero1 , numero2)}

    else{console.log(numero1 , numero3 , numero2)}
    
}

if(numero3>numero2 && numero3>numero1){

    if(numero1 > numero2){console.log( numero2  , numero1 , numero3)}

    else{console.log(numero1 , numero2 , numero3)}
    
}



