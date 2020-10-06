const readline = require("readline-sync");

parImpar (parseInt(readline.question("Ingrese un numero:")));

function parImpar(num){
    if (num%2 == 0) {
        return console.log("Num es numero par");
    } else {
        //return console.log("impar");
        return console.log("Num es numero impar");
    }
}