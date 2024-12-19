class Receta {
    constructor(nombreReceta, ingredientesReceta, pasosReceta) {
        this.nombreReceta = nombreReceta;
        this.ingredientesReceta = ingredientesReceta;
        this.pasosReceta = pasosReceta;
    }
}

function guardarRecetaEnLS(){
    const recetasJson = JSON.stringify(recetas);
    localStorage.setItem("recetas", recetasJson);   
}

function eliminarRecetaPorIndice(index) {

    Swal.fire({
        title: "Estas seguro de que deseas eliminar esta receta?",
        icon: "warning",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            recetas.splice(index, 1);
            guardarRecetaEnLS();
            renderizarTablaEliminarReceta();
        }
    });

}

function agregarReceta(e) {
    e.preventDefault();


    const inputNombreReceta = document.getElementById("nombreReceta");
    const inputIngredientesReceta = document.getElementById("ingredientesReceta");
    const inputPasosReceta = document.getElementById("pasosReceta");


    const nombreReceta = inputNombreReceta.value;
    const ingredientesReceta = inputIngredientesReceta.value;
    const pasosReceta = inputPasosReceta.value;

    if (!nombreReceta) {
        alertaInputVacio("el nombre de la receta");
        return;
    }

    if (!ingredientesReceta) {
        alertaInputVacio("los ingredientes de la receta");
        return;
    }

    if (!pasosReceta) {
        alertaInputVacio("al menos un paso");
        return;
    }

    const nuevaReceta = new Receta(nombreReceta, ingredientesReceta, pasosReceta);
    recetas.push(nuevaReceta);

    //Se guardan las recetas en local storage
    guardarRecetaEnLS();

    renderizarTablaReceta(nuevaReceta);

    Swal.fire({
        title: "Desea agregar otra receta?",
        icon: "success",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            inputNombreReceta.value = "";
            inputIngredientesReceta.value = "";
            inputPasosReceta.value = "";
        } else {
            renderizarVisibilidad("formAgregarReceta","none");
            inputNombreReceta.value = "";
            inputIngredientesReceta.value = "";
            inputPasosReceta.value = "";
        }
    });
}


function buscarUnaReceta(e) {
    e.preventDefault();
    const inputRecetaABuscar = document.getElementById("nombreRecetaABuscar");
    const nombreBuscado = inputRecetaABuscar.value.toLowerCase().trim();

    if (!nombreBuscado) {
        alertaInputVacio("un nombre de receta para buscar.")
        return;
    }
    const recetaEncontrada = recetas.find((receta) =>
        receta.nombreReceta.toLowerCase() === nombreBuscado
    );

    if (recetaEncontrada) {
        renderizarTablaReceta(recetaEncontrada);
        inputRecetaABuscar.value = "";
        return recetaEncontrada;
    } else {
        Swal.fire({
            title: `No se encontro la receta: ${nombreBuscado}`,
            icon: "error",
            confirmButtonText: "Ok"
        })

        inputRecetaABuscar.value = "";
        return null;
    }
}

function modificarRecetaPorIndice(index) {
    const receta = recetas[index];

    // Cambiar visibilidad de los elementos
    renderizarVisibilidad("tablaModificarRecetas", "none");
    renderizarVisibilidad("formModificarReceta", "block");

    // Precargar datos en el formulario
    document.getElementById("nombreRecetaModificar").value = receta.nombreReceta;
    document.getElementById("ingredientesRecetaModificar").value = receta.ingredientesReceta;
    document.getElementById("pasosRecetaModificar").value = receta.pasosReceta;

    const form = document.getElementById("formModificarReceta");
    form.onsubmit = (e) => {
        e.preventDefault();

        const nombreReceta = document.getElementById("nombreRecetaModificar").value.trim();
        const ingredientesReceta = document.getElementById("ingredientesRecetaModificar").value.trim();
        const pasosReceta = document.getElementById("pasosRecetaModificar").value.trim();

        if (!nombreReceta) {
            alertaInputVacio("el nombre de la receta");
            return;
        }
    
        if (!ingredientesReceta) {
            alertaInputVacio("los ingredientes de la receta");
            return;
        }
    
        if (!pasosReceta) {
            alertaInputVacio("al menos un paso");
            return;
        }

        recetas[index] = {
            nombreReceta: nombreReceta,
            ingredientesReceta: ingredientesReceta,
            pasosReceta: pasosReceta,
        };

        guardarRecetaEnLS();

        Swal.fire({
            title: `La receta ${receta.nombreReceta} ha sido modificada`,
            icon: "success",
            confirmButtonText: "Ok"
        })

        renderizarTablaModificarReceta();
        renderizarVisibilidad("formModificarReceta", "none");

    };
}


function verTodasLasRecetas() {

    renderizarVisibilidad("tablaVerTodasLasRecetas","block");    
    tbodyRecetas.innerHTML = "";
    recetas.forEach((receta) => {
        tbodyRecetas.innerHTML += `
        <tr>
            <td>${receta.nombreReceta}</td>
            <td>${receta.ingredientesReceta}</td>
            <td>${receta.pasosReceta}</td>
        </tr>`;
    });
}

function renderizarTablaReceta(recetaEncontrada) {

    tbodyRecetas.innerHTML = "";
        tbodyRecetas.innerHTML += `
        <tr>
            <td>${recetaEncontrada.nombreReceta}</td>
            <td>${recetaEncontrada.ingredientesReceta}</td>
            <td>${recetaEncontrada.pasosReceta}</td>
        </tr>`;
    renderizarVisibilidad("tablaVerTodasLasRecetas","block");    
}

function renderizarTablaEliminarReceta() {
    renderizarVisibilidad("tablaEliminarRecetas","block");

    tbodyEliminarRecetas.innerHTML = "";

    recetas.forEach((receta, index) => {
        tbodyEliminarRecetas.innerHTML += `
        <tr>
            <td>${receta.nombreReceta}</td>
            <td>${receta.ingredientesReceta}</td>
            <td>${receta.pasosReceta}</td>
            <td><button class="eliminar-button" data-index="${index}">Eliminar</button></td>
        </tr>`;
    });

    const botonesEliminar = document.querySelectorAll(".eliminar-button");
    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            const index = parseInt(event.target.getAttribute("data-index"));
            eliminarRecetaPorIndice(index);
        });
    });
}

function renderizarTablaModificarReceta() {
    renderizarVisibilidad("tablaModificarRecetas","block");

    tbodyModificarRecetas.innerHTML = "";

    recetas.forEach((receta, index) => {
        tbodyModificarRecetas.innerHTML += `
        <tr>
            <td>${receta.nombreReceta}</td>
            <td>${receta.ingredientesReceta}</td>
            <td>${receta.pasosReceta}</td>
            <td><button class="modificar-button" data-index="${index}">Modificar</button></td>
        </tr>`;
    });

    const botonModificar = document.querySelectorAll(".modificar-button");
    botonModificar.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            const index = parseInt(event.target.getAttribute("data-index"));
            modificarRecetaPorIndice(index);
        });
    });
}

function renderizarVisibilidad(elemento, displayStyle) {
    const elementoABuscar = document.getElementById(elemento);
    elementoABuscar.style.display = displayStyle;
}

fetch("recetas.json")
    .then((response) => response.json())
    .then((json) => {
        agregarRecetasSinDuplicados(json);
        recetas = JSON.parse(localStorage.getItem("recetas")) || [];
    });


function agregarRecetasSinDuplicados(jsonRecetas) {
    const recetasGuardadas = JSON.parse(localStorage.getItem("recetas")) || [];

    const recetasNuevas = jsonRecetas.filter((recetaJson) => {
        return !recetasGuardadas.some((recetaGuardada) => recetaGuardada.nombreReceta === recetaJson.nombreReceta);
    });

    if (recetasNuevas.length > 0) {
        const recetasFinales = [...recetasGuardadas, ...recetasNuevas];
        localStorage.setItem("recetas", JSON.stringify(recetasFinales));
    }
}

function obtenerDesdeLocalStorage() {
    const recetasGuardadas = JSON.parse(localStorage.getItem("recetas")) || [];

    if (recetasGuardadas.length === 0) {
        return [
            new Receta("Pastel de chocolate", "Leche, harina, azúcar, chocolate", "1. Lavar la naranja, 2. Agregar la harina"),
            new Receta("Budín de naranja", "Leche, harina, azúcar, naranja", "1. Lavar la naranja, 2. Agregar la harina"),
        ];
    } else {    
        return recetasGuardadas;
    }
}

// Variables globales
const tbodyRecetas = document.getElementById("tbodyRecetas");

const botonAgregarNuevaReceta = document.getElementById("formAgregarReceta");
const botonBuscarUnaReceta = document.getElementById("formBuscarReceta");
const botonPrincipalEliminarReceta = document.getElementById("botonPrincipalEliminarReceta");
const botonPrincipalVerTodasLasRecetas = document.getElementById("botonPrincipalVerTodasLasRecetas");
const botonPrincipalModificarReceta = document.getElementById("botonPrincipalModificarReceta");

//Botones principales
botonPrincipalCrearReceta.addEventListener("click", () => {
    renderizarVisibilidad("formAgregarReceta", "block");
    renderizarVisibilidad("tablaVerTodasLasRecetas", "none");
    renderizarVisibilidad("tablaEliminarRecetas", "none");
    renderizarVisibilidad("formBuscarReceta", "none");
    renderizarVisibilidad("tablaModificarRecetas", "none");
    renderizarVisibilidad("formModificarReceta", "none");
});

botonPrincipalBuscarReceta.addEventListener("click", () => {
    renderizarVisibilidad("formBuscarReceta", "block");
    renderizarVisibilidad("formAgregarReceta", "none");
    renderizarVisibilidad("tablaEliminarRecetas", "none");
    renderizarVisibilidad("tablaVerTodasLasRecetas", "none");
    renderizarVisibilidad("tablaModificarRecetas", "none");
    renderizarVisibilidad("formModificarReceta", "none");
});

botonPrincipalEliminarReceta.addEventListener("click", () => {
    renderizarVisibilidad("formBuscarReceta", "none");
    renderizarVisibilidad("formAgregarReceta", "none");
    renderizarVisibilidad("tablaVerTodasLasRecetas", "none");
    renderizarVisibilidad("tablaModificarRecetas", "none");
    renderizarVisibilidad("formModificarReceta", "none");
    renderizarTablaEliminarReceta();
});

botonPrincipalModificarReceta.addEventListener("click", () => {
    renderizarVisibilidad("formBuscarReceta", "none");
    renderizarVisibilidad("formAgregarReceta", "none");
    renderizarVisibilidad("tablaVerTodasLasRecetas", "none");
    renderizarVisibilidad("tablaEliminarRecetas", "none");
    renderizarTablaModificarReceta() 
});

botonPrincipalVerTodasLasRecetas.addEventListener("click", () => {
    renderizarVisibilidad("formBuscarReceta", "none");
    renderizarVisibilidad("formAgregarReceta", "none");
    renderizarVisibilidad("tablaVerTodasLasRecetas", "none");
    renderizarVisibilidad("tablaEliminarRecetas", "none");
    renderizarVisibilidad("tablaModificarRecetas", "none");
    renderizarVisibilidad("formModificarReceta", "none");
    verTodasLasRecetas();
});

//Eventos botones secundarios
botonAgregarNuevaReceta.addEventListener("submit", agregarReceta);
botonBuscarUnaReceta.addEventListener("submit", buscarUnaReceta);


// Array de recetas inicial
let recetas = obtenerDesdeLocalStorage();


//Alert input vacios

function alertaInputVacio(valor) {

    Swal.fire({
        title: `Por favor, debe ingresar ${valor}`,
        icon: "error",
        confirmButtonText: "Ok"
    })
}

