const prompt = require('prompt-sync')();

let num = prompt("Introduce un número del 1 al 7: ");

num = Number(num);

switch(num) {
    case 1:
        console.log("Dia feiner");
        break;
    case 2:
        console.log("Dia feiner");
        break;
    case 3:
        console.log("Dia feiner");
        break;
    case 4:
        console.log("Dia feiner");
        break;
    case 5:
        console.log("Dia feiner");
        break;
    case 6:
        console.log("Cap de setmana");
        break;
    case 7:
        console.log("Cap de setmana");
        break;
    default:
        console.log("Dia no valid");
}