const precioProducto = parseFloat(prompt("Por favor, ingrese el precio del producto que desea calcular su IVA"))

if (isNaN(precioProducto)) {
    alert("No es un numero correcto, lamentablemente no podemos procesar su solicitud.");
}

if (precioProducto > 0) {
    const precioFinal = (precioProducto + (precioProducto / 100) * 21)
    alert("El precio del producto + IVA es: " + precioFinal)
}