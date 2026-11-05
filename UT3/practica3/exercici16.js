/* Los operadores lógico &, | y ! (and, or, not) hacen posible
cumplir las funciones de estos mismos operadores pero
en el código, es decir, que permite concatenar, condicionar
y o negar la estructura de nuestro código */



let edad = 18;
let ticket = true;

// AND

if (edad == 18 && ticket == true)
    console.log("Tienes un descuento")


// OR

if (edad == 18 || ticket == true)
    console.log("No tienes un descuento")

// NOT

if (edad !== 18) {
    console.log("Acceso denegado")
}