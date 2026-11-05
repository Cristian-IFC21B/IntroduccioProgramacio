const prompt = require('prompt-sync')();

let num = prompt("Escribe un número del 1 al 7: ");
num = Number(num);

switch(num) {
    case 1:
        console.log("Dilluns");
        break;
    case 2:
        console.log("Dimarts");
        break;
    case 3:
        console.log("Dimecres");
        break;
    case 4:
        console.log("Dijous");
        break;
    case 5:
        console.log("Divendres");
        break;
    case 6:
        console.log("Dissapte");
        break;
    case 7:
        console.log("Diumenge");
        break;
    default:
        console.log("Día no válido")
}