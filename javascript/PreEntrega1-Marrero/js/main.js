function menuPrincipal() {
    let opcionMenuReceta
    let receta

    while (opcionMenuReceta !== 0) {
        console.log("***************************************************************************")
        console.log("_________________ * BIENVENIDO AL RECETARIO * CULINARIA * __________________")
        console.log("***************************************************************************")

        opcionMenuReceta = parseInt(prompt("Menu: \n1 - Crear nueva receta\n2 - Ver mi receta \n3 - Mi receta es saludable? \n0 - Salir"));

        if (isNaN(opcionMenuReceta)) {
            console.log("Por favor, ingrese un numero valido.")
        }
        switch (opcionMenuReceta) {
            case 1:
                receta = crearReceta()
                console.log("La receta: " + receta.nombreReceta + " fue ingresada con exito!")
                break;
            case 2:
                verReceta(receta)
                break;
            case 3:
                recetaSaludable()

        }
    }

}

function crearReceta() {
    Receta = {
        nombreReceta: prompt("Ingrese el nombre de la receta. "),
        ingredientesReceta: prompt("Ingrese los ingredientes de la receta"),
        pasos: prompt("Ingrese los pasos para preparar esta receta")
    }
    return Receta
}

function verReceta(receta) {
    let opcionMenuReceta

    while (opcionMenuReceta !== 0) {
        console.log("***************************************************************************")
        console.log("------------------ BIENVENIDO AL MODULO DE VER RECETA  --------------------")
        console.log("***************************************************************************")
        if (!isNaN(receta)) {
            console.log("Para preparar la receta: " + receta.nombreReceta + " debemos tener los ingredientes: " + receta.ingredientesReceta + "\n y seguir los siguientes pasos: " + receta.pasos)
            opcionMenuReceta = parseInt(prompt("Desea ver la receta nuevamente? Ingrese 1 para verla de nuevo, ingrese 0 para salir"))
            if (isNaN(opcionMenuReceta) || opcionMenuReceta !== 1) {
                alert("Por favor, ingrese un numero valido")
            }
        } else {
            console.log("Aun no hay recetas guardadas en el sistema, por favor primero ingrese una nueva receta.")
            break;
        }
    }
}


function recetaSaludable() {


    const tieneAzucar = prompt("¿Su producto tiene azucar? si/no")

    if ((tieneAzucar !== "no") || (tieneAzucar !== "si") || isNaN(tieneSal)) {
        console.log("Opcion no valida.")
    }

    if (tieneAzucar === "si") {
        const gramosTotales = parseFloat(prompt("¿Cuantos gramos totales tiene su receta?"))
        const gramosAzucar = parseFloat(prompt("¿Cuantos gramos tiene de azucar?"))

        //Se considera exceso de azucar, cuando mas del 13% del producto tiene azucar. 
        if (gramosAzucar > (gramosTotales * 0.13)) {
            console.log("CUIDADO. Su producto tiene exceso de azucar!")
        } else {
            console.log("Felicitaciones. Se producto esta dentro de los limites saludables!")
        }
    }
    const tieneSal = prompt("¿Su producto tiene sal? si/no")

    if ((tieneSal !== "no") || (tieneSal !== "si") || isNaN(tieneSal)) {
        console.log("Opcion no valida. Volviendo al menu principal")
    }

    if (tieneSal === "si") {

        const gramosTotales = parseFloat(prompt("¿Cuantos gramos totales tiene su receta?"))
        const gramosSal = parseFloat(prompt("¿Cuantos gramos tiene de sal?"))
        //Se considera exceso de sal, cuando mas del 0.5% del producto tiene azucar. 
        if ((gramosTotales * 0.005) >= gramosSal) {
            console.log("CUIDADO. Su producto tiene exceso de sal!")
        } else {
            console.log("Felicitaciones. Se producto esta dentro de los limites saludables!")
        }

    }
}


menuPrincipal()