const nombre = prompt("¡Bienvenido a nuestro sistema! \nPor favor, Ingrese su nombre")
const edad = parseInt(prompt("Por favor, Ingrese su edad"))


if (isNaN(edad)) {
    alert("No es un numero correcto, lamentablemente no podemos procesar su solicitud.");
}
if ((nombre == "Pedro" || nombre == "pedro") && (edad > 18)) {
    alert("Bienvenido " + nombre + " - Acceso permitido")
} else if ((nombre == "Juan" || nombre == "JUAN" || nombre == "juan") && (edad > 21)) {
    alert("Bienvenido " + nombre + " - Acceso permitido")
} else if ((nombre == "paula") && (edad > 25)) {
    alert("Bienvenido " + nombre + " - Acceso permitido")
} else {
    alert("Acceso no permitido")
}