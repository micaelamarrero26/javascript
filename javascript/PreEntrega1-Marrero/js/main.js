class Receta {
    constructor(nombre, ingredientes, cantidades, ingredientesTipoUnidad, pasos) {
        this.nombre = nombre,
            this.ingredientes = ingredientes,
            this.cantidades = cantidades,
            this.ingredientesTipoUnidad = ingredientesTipoUnidad,
            this.pasos = pasos
    }
}

function crearReceta(nombre, ingredientes, cantidad, ingredientesTipoUnidad, pasos) {

    const receta1 = new Receta(nombre, ingredientes, cantidad, ingredientesTipoUnidad, pasos)
    return receta1
}


let opcion

while (opcion !== 0) {
    console.log("***************************************************************************")
    console.log("_________________ * BIENVENIDO AL RECETARIO * CULINARIA * __________________")
    console.log("***************************************************************************")

    opcion = parseInt(prompt("Menu: \n1 - Ver recetas \n2 - Crear nuevas recetas\n3 - Modificar recetas"));

    if (isNaN(opcion)) {
        console.log("Por favor, ingrese un numero valido.")
    }
    switch (opcion) {

        case 1:
            const nombre = prompt("Ingrese el nombre de la receta");
            const ingredientes = prompt("Ingrese los ingredientes de la receta");
            const cantidad = prompt("Ingrese las cantidad");
            const ingredientesTipoUnidad = prompt("Ingrese el tipo de unidad de que vamos a medir");
            const pasos = prompt("Ingrese los pasos de preparacion");
            const nuevaReceta = crearReceta(nombre, ingredientes, cantidad, ingredientesTipoUnidad, pasos)

            console.log("La receta: " + nuevaReceta.nombre + " fue creada con exito! :) ");
            break;

        case 2:
            console.log("Aca se crearan nuevas recetas");
            break;

        case 3:
            console.log("Aca se modificaran recetas");
            break;
        case 0:
            console.log("GRACIAS POR USAR NUESTRO SISTEMA, ESPERAMOS VERNOS PRONTO")
            break;
        default:
            console.log("Por favor, seleccione una opcion valida")
    }





}

// class Producto {
//     constructor(nombre, precio, vendido = false) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.vendido = vendido;
//     }

//     calcularIva() {
//         return this.precio * 0.21;
//     }

//     imprimirNombre() {
//         console.log("El nombre del producto es: " + this.nombre);
//     }

//     vender() {
//         this.vendido = true;
//     }
// }
