function crearReceta() {

    const nombreReceta = prompt("Ingrese el nombre de la receta. ")
    const ingredientesReceta = prompt("Ingrese los ingredientes de la receta")
    const pasos = prompt("Ingrese los pasos para preparar esta receta")

    alert("La receta: " + nombreReceta + " fue ingresada con éxito!");
    return [nombreReceta, ingredientesReceta, pasos]
}

function verReceta(nombreReceta, ingredientesReceta, pasos) {

    console.log("***************************************************************************")
    console.log("------------------ BIENVENIDO AL MODULO DE VER RECETA  --------------------")
    console.log("***************************************************************************")

    if (!nombreReceta || !ingredientesReceta || !pasos) {
        return alert("Aun no hay recetas guardadas en el sistema, por favor primero ingrese una nueva receta.")

    }
    return console.log("Para preparar la receta: " + nombreReceta + " debemos tener los ingredientes: " + ingredientesReceta + "\n y seguir los siguientes pasos: " + pasos)
}

function recetaConAzucar() {

    const tieneAzucar = prompt("¿Su producto tiene azúcar? si/no").toLowerCase();

    if (tieneAzucar !== "si" && tieneAzucar !== "no") {
        alert("Opcion no valida. Volviendo al menu principal")
        return;
    } else {
        if (tieneAzucar === "si") {
            const gramosTotales = parseFloat(prompt("¿Cuantos gramos totales tiene su receta?"))
            const gramosAzucar = parseFloat(prompt("¿Cuantos gramos tiene de azucar?"))

            if (isNaN(gramosTotales) || isNaN(gramosAzucar)) {
                alert("Por favor, ingrese un valor valido.")
            } else {
                //Se considera exceso de azucar, cuando mas del 13% del producto tiene azucar. 

                if (gramosAzucar > (gramosTotales * 0.13)) {
                    alert("CUIDADO. Su producto tiene exceso de azucar!")
                } else {
                    alert("Felicitaciones. Se producto esta dentro de los limites saludables!")
                }
            }
        }
    }

}

function recetaConSal() {
    const tieneSal = prompt("¿Su producto tiene sal? si/no").toLowerCase();

    if (tieneSal !== "si" && tieneSal !== "no") {
        alert("Opcion no valida. Volviendo al menu principal")
        return;
    }

    if (tieneSal === "si") {

        const gramosTotales = parseFloat(prompt("¿Cuantos gramos totales tiene su receta?"))
        const gramosSal = parseFloat(prompt("¿Cuantos gramos tiene de sal?"))

        if (isNaN(gramosTotales) || isNaN(gramosSal)) {
            alert("Por favor, ingrese un valor valido.")
        } else {

            //Se considera exceso de sal, cuando mas del 0.5% del producto tiene azucar. 
            if ((gramosTotales * 0.005) >= gramosSal) {
                alert("CUIDADO. Su producto tiene exceso de sal!")
            } else {
                alert("Felicitaciones. Se producto esta dentro de los limites saludables!")
            }
        }
    }
}

function menuPrincipal() {
    let opcionMenuReceta
    let nombreReceta
    let ingredientesReceta
    let pasos

    while (opcionMenuReceta !== 0) {
        console.log("***************************************************************************")
        console.log("_________________ * BIENVENIDO AL RECETARIO * CULINARIA * __________________")
        console.log("***************************************************************************")

        opcionMenuReceta = parseInt(prompt("Menu: \n1 - Crear nueva receta\n2 - Ver mi receta \n3 - Mi receta tiene mucha azucar? \n4 - Mi receta tiene mucha sal?\n0 - Salir"));

        if (isNaN(opcionMenuReceta)) {
            alert("Por favor, ingrese un numero valido.")
        }
        switch (opcionMenuReceta) {
            case 1:
                [nombreReceta, ingredientesReceta, pasos] = crearReceta()
                break;
            case 2:
                verReceta(nombreReceta, ingredientesReceta, pasos)
                break;
            case 3:
                recetaConAzucar()
                break;
            case 4:
                recetaConSal()
                break;
            case 0:
                alert("Muchas gracias por usar el sistema, esperamos verlo pronto! :)")
                break;
            default:
                alert("Por favor, ingrese un numero valido")
                break;
        }
    }
}

menuPrincipal()

