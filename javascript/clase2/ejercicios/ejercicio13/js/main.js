const primerNumero = parseFloat(prompt("¡Bienvenido a nuestro sistema! \nPor favor, Ingrese el primer numero"))
const segundoNumero = parseFloat(prompt("Por favor, ingrese el segundo numero: "))


const resultadoSuma = primerNumero + segundoNumero
const resto = primerNumero % segundoNumero


if ((resultadoSuma == 10) && (resto == 0)) {
    alert("GOOOOOOL")
} else {
    alert("GAME OVER")
}