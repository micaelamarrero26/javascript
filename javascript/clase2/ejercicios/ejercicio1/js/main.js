const numeroUno = parseFloat(prompt("Ingrese el primer numero: "))
const numeroDos = parseFloat(prompt("Ingrese el segundo numero: "))


if (isNaN(numeroUno) || (isNaN(numeroDos))) {
    alert("No es un numero");
}

if (numeroUno > numeroDos) {
    alert(numeroUno + " es mayor que " + numeroDos)
} else {
    alert(numeroDos + " es mayor que " + numeroUno)
}