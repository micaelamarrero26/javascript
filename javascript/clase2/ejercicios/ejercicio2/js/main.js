const numeroHelados = parseInt(prompt("Bienvenido a la heladeria Montevideo! :) \nPor favor, ingrese cuantos helados desea!"))

if (isNaN(numeroHelados)) {
    alert("No es un numero correcto, lamentablemente no podemos procesar su solicitud.");
}


if (numeroHelados > 0) {
    alert("El costo de sus helados es: " + (numeroHelados * 5) + " pesos")
}
