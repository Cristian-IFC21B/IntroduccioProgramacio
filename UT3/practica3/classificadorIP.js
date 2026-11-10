const prompt = require('prompt-sync')();

// Parte 1 - Solicitar dirección

console.log("=== CLASIFICADOR DE DIRECCIONES IP===");

let primerByte = prompt("Escribe un primer octeto: ");
console.log();
primerByte = Number(primerByte);
let segundoByte = prompt("Escribe un segundo octeto: ");
console.log();
segundoByte = Number(primerByte);
let tercerByte = prompt("Escribe un tercer octeto: ");
console.log();
tercerByte = Number(primerByte);
let cuartoByte = prompt("Escribe un cuarto octeto: ");
console.log();
cuartoByte = Number(primerByte);

// Parte 2 - Validar direcciones

let direccionValida = true;

switch (direccionValida) {
    case (primerByte >= 0 && primerByte <= 255):
        direccionValida = true;
    default:
        direccionValida = false
}


console.log(typeof (direccionValida));
console.log(direccionValida);
console.log(typeof(primerByte))
console.log(typeof(segundoByte))
console.log(typeof(tercerByte))
console.log(typeof(cuartoByte))