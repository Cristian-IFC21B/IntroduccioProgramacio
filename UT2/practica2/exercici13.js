let variableA = "A";
let variableB = "B";
let variableC = "C";    

console.log(variableA);
console.log(variableB);
console.log(variableC);

let primeraVariableTemporal = "C";
let segundaVariableTemporal = "B";

variableC = segundaVariableTemporal;
variableB = primeraVariableTemporal;

console.log("====================================");
console.log(variableA);
console.log(variableB);
console.log(variableC);