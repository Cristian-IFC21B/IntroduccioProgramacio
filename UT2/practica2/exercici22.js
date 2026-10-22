const prompt = require('prompt-sync')();

let num1 = prompt("Escribe un número: ");

let num2 = prompt("Escribe otro número: ");

num1 = Number(num1);
num2 = Number(num2);

console.log("suma: " + (num1 + num2));
console.log("resta: " + (num1 - num2));
console.log("muliplicación: " + (num1 * num2));
console.log("suma: " + (num1 / num2));