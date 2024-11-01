const numeroUno = parseInt(prompt("Por favor, ingrese el primero numero: "))
const numeroDos = parseInt(prompt("Por favor, ingrese el segundo numero: "))


if (numeroUno < numeroDos) {
    for (let i = numeroDos - 1; i > numeroUno; i--) {
        console.log(i);
    }
} else if (numeroUno > numeroDos) {
    for (let i = numeroUno - 1; i > numeroDos; i--) {
        console.log(i);
    }
} else {
    console.log("Los números son iguales, no hay números en el rango.");
}