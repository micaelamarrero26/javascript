class Receta {
    constructor(nombreReceta, ingredientesReceta, pasosReceta) {
        this.nombreReceta = nombreReceta;
        this.ingredientesReceta = ingredientesReceta;
        this.pasosReceta = pasosReceta;
    }
}


function eliminarRecetaPorIndice(index) {

    const confirmar = confirm("¿Estás seguro de que deseas eliminar esta receta?");
    if (confirmar){
        recetas.splice(index, 1);
        renderizarTablaEliminarReceta();
    }

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
        alert("Por favor, ingresa un nombre de receta.");
        return;
    }

    if (!ingredientesReceta) {
        alert("Por favor, ingrese al menos un ingrediente para su nueva receta.");
        return;
    }

    if (!pasosReceta) {
        alert("Por favor, ingrese al menos un paso para preparar su nueva receta.");
        return;
    }

    const nuevaReceta = new Receta(nombreReceta, ingredientesReceta, pasosReceta);
    recetas.push(nuevaReceta);

    renderizarTablaReceta(nuevaReceta);

    const confirmar = confirm("¿Desea agregar otra receta?");

    if (confirmar){
        inputNombreReceta.value = "";
        inputIngredientesReceta.value = "";
        inputPasosReceta.value = "";
    }else{
        renderizarVisibilidad("formAgregarReceta","none");
    }
}



function buscarUnaReceta(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del submit

    const inputRecetaABuscar = document.getElementById("nombreRecetaABuscar");
    const nombreBuscado = inputRecetaABuscar.value.toLowerCase().trim();

    if (!nombreBuscado) {
        alert("Por favor, ingresa un nombre de receta para buscar.");
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
        alert("No se encontró la receta");
        inputRecetaABuscar.value = "";
        return null;
    }
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

function rellenarFormularioEdicion(receta) {
    document.getElementById("nombreRecetaEditar").value = receta.nombreReceta;
    document.getElementById("ingredientesRecetaEditar").value = receta.ingredientesReceta;
    document.getElementById("pasosRecetaEditar").value = receta.pasosReceta;
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

function renderizarVisibilidad(elemento, displayStyle) {
    const elementoABuscar = document.getElementById(elemento);
    elementoABuscar.style.display = displayStyle;
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
});

botonPrincipalBuscarReceta.addEventListener("click", () => {
    renderizarVisibilidad("formBuscarReceta", "block");
    renderizarVisibilidad("formAgregarReceta", "none");
    renderizarVisibilidad("tablaEliminarRecetas", "none");
    renderizarVisibilidad("tablaVerTodasLasRecetas", "none");
});

botonPrincipalEliminarReceta.addEventListener("click", () => {
    renderizarVisibilidad("formBuscarReceta", "none");
    renderizarVisibilidad("formAgregarReceta", "none");
    renderizarVisibilidad("tablaVerTodasLasRecetas", "none");
    renderizarTablaEliminarReceta();
});

botonPrincipalModificarReceta.addEventListener("click", () => {
    alert("COMIIIIING SOOOON");
});

botonPrincipalVerTodasLasRecetas.addEventListener("click", () => {
    renderizarVisibilidad("formBuscarReceta", "none");
    renderizarVisibilidad("formAgregarReceta", "none");
    renderizarVisibilidad("tablaVerTodasLasRecetas", "none");
    renderizarVisibilidad("tablaEliminarRecetas", "none");
    verTodasLasRecetas();
});

//Eventos botones secundarios
botonAgregarNuevaReceta.addEventListener("submit", agregarReceta);
botonBuscarUnaReceta.addEventListener("submit", buscarUnaReceta);


// Array de recetas inicial
let recetas = [
    new Receta("Pastel de chocolate", "Leche, harina, azúcar, chocolate", "1. Lavar la naranja, 2. Agregar la harina"),
    new Receta("Budín de naranja", "Leche, harina, azúcar, naranja", "1. Lavar la naranja, 2. Agregar la harina"),
];


//TODO: agregar controles para input vacios, ejemplo en buscar