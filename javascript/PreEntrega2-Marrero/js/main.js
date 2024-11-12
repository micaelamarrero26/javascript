class Receta {
    constructor(nombreReceta, ingredientesReceta, pasosReceta,) {
        this.nombreReceta = nombreReceta;
        this.ingredientesReceta = ingredientesReceta;
        this.pasosReceta = pasosReceta;
    }
}

function preguntarModificar(campo) {
    let respuesta = prompt(`¿Desea ${campo} a la receta? 1 - Si, 0 - No`);
    return parseInt(respuesta) === 1;
}


function modificarReceta() {

    let recetaABuscar = prompt("Ingrese la receta que desea modificar: ").toLowerCase();
    const recetaEncontrada = recetas.find((el) => el.nombreReceta.toLowerCase() === recetaABuscar);


    if (recetaEncontrada) {

        if (preguntarModificar("el nombre")) {
            let nuevoNombreReceta = prompt("Ingrese el nuevo nombre de la receta: ");
            recetaEncontrada.nombreReceta = nuevoNombreReceta;
        }

        if (preguntarModificar("los ingredientes")) {
            let nuevoIngredientesReceta = funcionIngredientesReceta(recetaABuscar);
            recetaEncontrada.ingredientes = nuevoIngredientesReceta;
        }

        if (preguntarModificar("los pasos")) {
            let nuevoPasosReceta = funcionPasosReceta(recetaABuscar);
            recetaEncontrada.pasosReceta = nuevoPasosReceta;
        }
        alert("Receta modificada exitosamente.");
    } else {
        alert("No se encontro la receta");
    }
}
function eliminarReceta() {

    let recetaABuscar = prompt("Ingrese la receta(s) que desea eliminar: ").toLowerCase();
    const recetaEncontrada = recetas.filter((el) => el.nombreReceta.toLowerCase() === recetaABuscar);

    if (recetaEncontrada !== -1) {
        const confirmacion = confirm(`¿Estás seguro de que quieres eliminar ${recetaEncontrada.length} receta(s) con ese nombre?`);
        if (confirmacion) {
            recetas = recetas.filter((el) => el.nombreReceta.toLowerCase() !== recetaABuscar);
            alert("Receta(s) eliminada(s) exitosamente.");
        } else {
            alert("Eliminación cancelada.");
        }
    } else {
        alert("No se encontro la receta");
    }
}

function buscarUnaReceta() {

    recetaABuscar = prompt("Ingrese la receta que desea buscar: ").toLowerCase();
    const recetaEncontrada = recetas.find((el) => el.nombreReceta.toLowerCase() === recetaABuscar);

    if (recetaEncontrada) {
        console.log(recetaEncontrada);
    } else {
        console.log("No se encontro la receta");
    }
}

function verTodasLasRecetas() { //TODO : MEJORAR ESTA FUNCION PARA VER TODOS LOS INGREGIENTES Y PASOS.
    //PODEMOS UTILIZAR UN FILTER
    recetas.forEach((el, i) => {
        console.log("Receta: " + (i + 1) + " - " + el.nombreReceta);
    })
}

function agregarIngredientesReceta(nombreReceta) {

    let opcionMenu;
    let ingredientesReceta = {};
    alert(`Ingrese los ingredientes de la receta: ${nombreReceta}`);

    while (opcionMenu !== 0) {
        let nombreIngrediente = prompt("Ingrese el nombre del ingrediente: ").toLowerCase();
        let cantidad = parseFloat(prompt(`Ingrese la cantidad de ${nombreIngrediente}: \n\nEn el siguiente paso ingresara la medida (ml, kg, gr, unidad)`));
        let unidad = prompt(`Ingrese la unidad de medida para ${nombreIngrediente}: Recuerde: ml, kg, gr, unidad`).toLowerCase();

        ingredientesReceta[nombreIngrediente] = {
            cantidad: cantidad,
            unidad: unidad
        };

        opcionMenu = parseInt(prompt("¿Desea agregar otro ingrediente? 1 - Si, 0 - No"));

        if (tieneSal !== 0 && tieneSal !== 1) {
            alert("Opcion no valida. Volviendo al menu principal")
            return;
        }

        return ingredientesReceta;
    }

}
function agregarPasosReceta(nombreReceta) {

    let opcionMenu;
    let pasosReceta = {};
    let paso = 1

    alert(`Ingrese los pasos para realizar: ${nombreReceta}`);


    while (opcionMenu !== 0) {
        let descripcionPaso = prompt("Ingrese la descripcion del paso: " + paso).toLowerCase();
        pasosReceta[paso] = {
            descripcionPaso: descripcionPaso,
        };

        paso = paso + 1;
        opcionMenu = parseInt(prompt("¿Desea agregar otro paso? 1 - Si, 0 - No"));
    }

    return pasosReceta;
}
function agregarReceta() {

    let opcionReceta;

    while (opcionReceta !== 0) {
        const nombreReceta = prompt("Ingrese el nombre de la receta: ").toLowerCase();
        ingredientesReceta = agregarIngredientesReceta(nombreReceta);
        pasosReceta = agregarPasosReceta(nombreReceta);

        let nuevaReceta = new Receta(nombreReceta, ingredientesReceta, pasosReceta);
        recetas.push(nuevaReceta);
        console.log(nuevaReceta);
        alert("Receta agregada exitosamente.");

        opcionReceta = parseInt(prompt("¿Desea agregar otra receta? 1 - Si, 0 - No"));
    }
}

function menuPrincipal() {

    let opcionMenuReceta;
    recetas = [];

    while (opcionMenuReceta !== 0) {
        console.log("***************************************************************************")
        console.log("_________________ * BIENVENIDO AL RECETARIO * CULINARIA * __________________")
        console.log("***************************************************************************")

        opcionMenuReceta = parseInt(prompt("Menu: \n1 - Crear nueva receta\n2 - Buscar una receta \n3 - Ver todas las recetas\n4 - Modificar receta\n5 - Eliminar receta\n0 - Salir"));

        if (isNaN(opcionMenuReceta)) {
            alert("Por favor, ingrese un numero valido.")
        }
        switch (opcionMenuReceta) {
            case 1:
                agregarReceta();
                break;
            case 2:
                buscarUnaReceta();
                break;
            case 3:
                verTodasLasRecetas();
                break;
            case 4:
                modificarReceta();
                break;
            case 5:
                eliminarReceta();
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

menuPrincipal();



/**
 * MEJORAS:
 * 
 * 
 * 1. Funcion buscar recetas faciles -->  cuando una receta tiene menos de 3 pasos, se considera receta facil.
 * 2. Funcion buscar recetas dificiles -->  cuando una receta tiene mas de 3 pasos, se considera receta dificil.
 * 3. Funcion buscar recetas dulces --> cuando una receta tiene azucar en sus ingredientes, se consediera dulce.
 * 4. Funcion buscar recetas saladas --> cuando una receta tiene sal en sus ingredientes, se consediera salada.
 * 5. Mejorar la funcion de verTodasLasRecetas, para que muestre los pasos y las cantidades de los ingredientes.
 */