const prompt = require('prompt-sync')();

let nombre = prompt("Introduce tu nombre: ");

let edad = prompt("Introduce tu edad: ");

edad = Number(edad);

console.log(`Hola ${nombre}! Tienes ${edad} años.`);
console.log("El año que viene tendrás " + (edad + 1) + " años");