const prompt = require('prompt-sync')();

let separador = "============================================="

const bytesKB = 1024;

const bytesMB = (bytesKB * 1024);

const bytesGB = (bytesMB * 1024);

// Unidades en bits

const bitsKbI = 1000;

const bitsMbI = (bitsKbI * 1000);

const bitsGBiT = (bitsMbI * 1000);


// Parte 2

console.log(separador + "CONVERSOR DE UNIDADES" + separador);

let calculoBytes = prompt("Introduce una cantidad en bytes: ");

resultadoKB = calculoBytes / bytesKB.toFixed(2);

resultadoMB = calculoBytes / bytesMB.toFixed(2);

resultadoGB = calculoBytes / bytesGB.toFixed(2);

console.log(`Resultado en KB: ${resultadoKB}`);
console.log(`Resultado en MB: ${resultadoMB}`);
console.log(`Resultado en GB: ${resultadoGB}`);

// Parte 3

let calculoGB = prompt("Introduce una cantidad en GB: ")

resultadoBytes = calculoGB * bytesGB.toFixed(2);

console.log(`Resultado en bytes: ${resultadoBytes}`);

// Parte 4

console.log(separador + "CÁLCULO DE TIEMPO DE DESCARGA" + separador);

let tamañoArchivoGB = prompt("Qué tamaño tiene el archivo que quieres descargar? ");
let velocidadConexion = prompt("Introduce tu velocidad de descarga en Mbps: ");

// Pasar tamaño del archivo de GB a bytes y a bits

let tamañoArchivoBytes = tamañoArchivoGB * bytesGB;

console.log(tamañoArchivoBytes);

let tamañoArchivoBits = tamañoArchivoBytes * 8;

console.log(tamañoArchivoBits);

// Pasar velocidad de Mbps a bits por segundo

let velocidadConvertida = (velocidadConexion * bitsMbI)

console.log(velocidadConvertida);

let velocidadSegundos = velocidadConvertida /  tamañoArchivoBits;
let velocidadMinutos = velocidadSegundos / 60;

console.log(`Tiempo de descarga: ${velocidadSegundos} segundos (${velocidadMinutos} minutos)`)