const prompt = require('prompt-sync')();

// Parte 1 - Solicitar dirección

console.log("=== CLASIFICADOR DE DIRECCIONES IP===");

let primerByte = prompt("Escribe un primer octeto: ");
console.log();
primerByte = Number(primerByte);
let segundoByte = prompt("Escribe un segundo octeto: ");
console.log();
segundoByte = Number(segundoByte);
let tercerByte = prompt("Escribe un tercer octeto: ");
console.log();
tercerByte = Number(tercerByte);
let cuartoByte = prompt("Escribe un cuarto octeto: ");
console.log();
cuartoByte = Number(cuartoByte);

// Parte 2 - Validar direcciones

let primerByteValido;
let segundoByteValido;
let tercerByteValido;
let cuartoByteValido;

// switch (direccionValida) {
//     case (primerByte >= 0 && primerByte <= 255):
//         direccionValida = true;
//     default:
//         direccionValida = false
// }

if (primerByte >= 0 && primerByte <= 255) {
    primerByteValido = true;
} else {
    primerByteValido = false;
    console.log("Dirección no válida: Cada octeto debe estar entre 0 y 255")
}

if (segundoByte >= 0 && segundoByte <= 255) {
    segundoByteValido = true;
} else {
    segundoByteValido = false;
    console.log("Dirección no válida: Cada octeto debe estar entre 0 y 255")
}

if (tercerByte >= 0 && tercerByte <= 255) {
    tercerByteValido = true;
} else {
    tercerByteValido = false;
    console.log("Dirección no válida: Cada octeto debe estar entre 0 y 255")
}

if (cuartoByte >= 0 && cuartoByte <= 255) {
    cuartoByteValido = true;
} else {
    cuartoByteValido = false;
    console.log("Dirección no válida: Cada octeto debe estar entre 0 y 255")
}

if (primerByteValido == true && segundoByteValido == true && tercerByteValido == true && cuartoByteValido == true) {
    console.log(`Dirección: ${primerByte}.${segundoByte}.${tercerByte}.${cuartoByte}`);
}

// Parte 3 - La clase

let clase;

if (primerByte >= 1 && primerByte <= 127) {
    clase = "A";
} else if (primerByte == 127) {
    clase = "Loopback";
} else if (primerByte >= 128 && primerByte <= 191) {
    clase = "B";
} else if (primerByte >= 192 && primerByte <= 223) {
    clase = "C";
} else if (primerByte >= 224 && primerByte <= 239) {
    clase = "D(multicast)";
} else if (primerByte >= 240 && primerByte <= 255) {
    clase = "E(experimental)"
} else {
    clase = "Reservada"
}

console.log(clase);

// Parte 4 -  La máscara por defecto
