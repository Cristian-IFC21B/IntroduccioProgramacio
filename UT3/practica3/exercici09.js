const prompt = require('prompt-sync')();

let edad = prompt("Introduce tu edad: ");

if (edad < 18) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}