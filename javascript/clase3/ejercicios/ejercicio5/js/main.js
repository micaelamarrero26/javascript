let numeroUno = parseInt(prompt("Ingrese el primero numero"))
let numeroDos = parseInt(prompt("Ingrese el segundo numero"))
let resultado = 0
let contador = 0

while (isNaN(numeroUno) || isNaN(numeroDos)) {
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        alert("ERROR: numero invalido\nPor favor, ingrese un numero valido")
    }
    numeroUno = parseInt(prompt("Ingrese nuevamente el primer numero: "))
    numeroDos = parseInt(prompt("Ingrese nuevamente el segundo numero: "))

}

//NO RESULTOOOOOOOOO

for (let i = numeroDos; i >= 0; i--) {
    resultado = (numeroUno - numeroDos) - resultado;
    contador = contador + 1

}

/* 3 hasta que sea mayor o igual a 0, le voy restando 1 : i vale 3, contador vale 1

resultadoo = (6-3 - 0) ... resultado = 3

segunda vuelta i vale 2, contador vale 2

i vale 2

3 =  6-3 -3

resultado = 0

i vale 1

*/

alert("El resultado del for es: " + resultado + "\nEl resultado es: " + contador)