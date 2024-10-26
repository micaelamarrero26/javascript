const peso = parseFloat(prompt("¡Bienvenido a nuestro sistema de nutrición! \nPor favor, Ingrese su peso"))
const altura = parseFloat(prompt("Por favor, Ingrese su altura"))


/*
Peso inferior al normal	Menos de 18.5
Normal	18.5 – 24.9
Peso superior al normal	25.0 – 29.9
Obesidad	Más de 30.0


IMC = peso / altura * 2

*/


const imc = peso / (altura ** 2)

if (isNaN(peso) || isNaN(altura)) {
    alert("No es un numero correcto, lamentablemente no podemos procesar su solicitud.");
}

if (imc < 18.5) {
    alert("El resultado de su imc es: " + imc + "\nBAJO PESO, debes consultar con un especilista.")
} else if ((imc > 18.5) && (imc > 24.9)) {
    alert("El resultado de su imc es: " + imc + "\nPESO NORMAL :)")
} else if ((imc > 25.0) && (imc < 29.9)) {
    alert("El resultado de su imc es: " + imc + "\nSOBREPESO - Se recomienda consultar con un especialista")
} else {
    alert("El resultado de su imc es: " + imc + "\nOBESIDAD, debes consultar con un especilista.")
}   