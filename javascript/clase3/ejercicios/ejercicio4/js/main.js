let numeroUno = parseInt(prompt("Ingrese el primero numero"))
let numeroDos = parseInt(prompt("Ingrese el segundo numero"))
let resultado = 0

while (isNaN(numeroUno) || isNaN(numeroDos)) {
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        alert("ERROR: numero invalido\nPor favor, ingrese un numero valido")
    }
    numeroUno = parseInt(prompt("Ingrese nuevamente el primer numero: "))
    numeroDos = parseInt(prompt("Ingrese nuevamente el segundo numero: "))

}

for (let i = numeroDos; i > 0; i--) {
    resultado = resultado + numeroUno;
}

alert("El resultado es: " + resultado)