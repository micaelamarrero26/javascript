const opcion = prompt("¡Bienvenido a nuestro sistema viajero! ¿Que destino desearia obtener informacion? \nColombia\nMéxico\nBrasil\nUruguay\nChile\nEcuador\nPerú\nEstados Unidos")
let precio


if (opcion == "Colombia" || opcion == "colombia") {
    precio = 40
    alert("El precio de viajar a " + opcion + " es: $ " + precio)
} else if (opcion == "México" || opcion == "méxico" || opcion == "mexico" || opcion == "Mexico") {
    precio = 50
    alert("El precio de viajar a " + opcion + " es: $ " + precio)
} else if (opcion == "Brasil" || opcion == "brasil") {
    precio = 30
    alert("El precio de viajar a " + opcion + " es: $ " + precio)
} else if (opcion == "Uruguay" || opcion == "uruguay") {
    precio = 20
    alert("El precio de viajar a " + opcion + " es: $ " + precio)
} else if (opcion == "Chile" || opcion == "chile") {
    precio = 20
    alert("El precio de viajar a " + opcion + " es: $ " + precio)
} else if (opcion == "Ecuador" || opcion == "ecuador") {
    precio = 20
    alert("El precio de viajar a " + opcion + " es: $ " + precio)
} else if (opcion == "Perú" || opcion == "perú" || opcion == "Peru" || opcion == "peru") {
    precio = 40
    alert("El precio de viajar a " + opcion + " es: $ " + precio)
}
else if (opcion == "Estados Unidos" || opcion == "estados unidos" || opcion == "EEUU" || opcion == "Estados unidos") {
    precio = 50
    alert("El precio de viajar a " + opcion + " es: $ " + precio)
} else {
    alert("Pais no encontrado, por favor, seleccione nuevamente un pais")
}