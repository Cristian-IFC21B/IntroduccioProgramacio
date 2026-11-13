const prompt = require("prompt-sync")();

let num1 = prompt("Introduce un primer número: ");
let num2 = prompt("Introduce un segundo número: ");
let operador = prompt("Introduce +, -, * o /: ");

if (operador == "+") {
    console.log(num1 + num2);
} else if (operador == "-") {
    console.log(num1 - num2)
} else if (operador == "*") {
    console.log(num1 * num2)
} else if (operador == "/" && num1 + num2 !== 0) {
    console.log(num1 / num2)
} else {
    console.log("Operación no válida")
}