const prompt = require('prompt-sync')();

let temperatura = prompt("Introduce una temperatura: ");

if (temperatura < 10) {
    console.log("Hace frío");
} else if (temperatura >= 10 && temperatura < 25) {
    console.log("Temperatura moderada");
} else {
    console.log("Hace calor");
}