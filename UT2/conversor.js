const prompt = require('prompt-sync')();

const bytesKB = 1024;

const bytesMB = (bytesKB * 1024);

const bytesGB = (bytesMB * 1024);

// Parte 2

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


