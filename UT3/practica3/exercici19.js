const prompt = require('prompt-sync')();

let num = prompt("Escribe un número del 1 al 2: ");

if (num >= 1 && num <= 2) {
    console.log("Número correcto")
} else {
    console.log("Número fuera del rango")
}