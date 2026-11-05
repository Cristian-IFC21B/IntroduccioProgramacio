const prompt = require('prompt-sync')();

let edad = prompt("Introduce tu edad: ");
let carnetEstudiante = prompt("Tienes carnet de estudiante? (si/no):  ");

if (edad < 18 || edad > 65 && carnetEstudiante == "si") {
    console.log("Tienes un descuento")
} else {
    console.log("Precio normal")
}
