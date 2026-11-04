let variableA = "A";
let variableB = "B";
let variableC = "C";    

console.log(variableA);
console.log();
console.log(variableB);
console.log();
console.log(variableC);
console.log();

let primeraVariableTemporal = "C";
let segundaVariableTemporal = "B";

variableC = segundaVariableTemporal;
variableB = primeraVariableTemporal;

console.log("====================================");
console.log(variableA);
console.log();
console.log(variableB);
console.log();
console.log(variableC);