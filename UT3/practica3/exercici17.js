// Cas A
let hora = 9;
if (hora < 10 || hora > 18) {
console.log("Accés denegat");
}

/* No se mostrará, porque se cumplió una condición */

// Cas B
hora = 15;
capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
console.log("Accés denegat");
}

/* Se mostrará, porque la tercera condición no se cumple */

// Cas C
hora = 17;
let capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
console.log("Accés denegat");
}

/* No se mostrará, porque ninnguna condición se cumple */