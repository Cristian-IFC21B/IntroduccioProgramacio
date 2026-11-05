const prompt = require('prompt-sync')();

let edad = prompt("Introduce tu edad: ");
let entrada = prompt("Tienes una entrada? (si/no): ");

if (edad == 18 && entrada == "si") {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}