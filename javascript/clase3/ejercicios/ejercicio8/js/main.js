const numeroUno = parseInt(prompt("Por favor, ingrese un numero: "))
let resultado = 0
let variableUno = resultado
let variableDos = 1
let resultadoFinal = "";

// variable1 + variable2 = resultado
// 0 + 1  = 1 
//1 + 2 = 3
//3 5  = 8
//8 13 = 21
// 21 34 = *

// 0 
// 1
// 2 
for (let i = numeroUno - 1; i >= 0; i--) {
    resultadoFinal += +variableUno + "," + variableDos + ",";
    if (i > 0) {
        resultadoFinal += "";
    }
    resultado = variableUno + variableDos
    variableUno = resultado
    variableDos = resultado + variableDos
}

console.log(resultadoFinal)