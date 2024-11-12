const arrayA = [];
const arrayB = [1, 2];
const arrayC = ["C1", "C2", "C3"];
const arrayD = [false, true, false];
const arrayE = [1, true, "C2"];


const persona = ["Micaela", "Juan", "Erika", "Catalia"]

for (let i = 0; i < 4; i++) {
    console.log(persona[i])
}

console.log(persona.length)


for (let x = 0; x < persona.length; x++) {
    console.log(persona[x])

}


persona.push("Pedro") //AGREGAR ELEMENTOS AL FINAL DEL ARRAY

console.log(persona)


persona.unshift("Roberto") //AGREGAR ELEMENTOS AL INCIO DEL ARRAY

console.log(persona)


// //ELIMINAR ULTIMO ELEMENTO DE LA LISTA.

const ultimoElemento = persona.pop()

console.log(persona)
console.log(ultimoElemento)

// //ELIMINAR PRIMER ELEMENTO DE LA LISTA.

const primerElemento = persona.shift()

console.log(persona)
console.log(primerElemento)


//SPLICE: elimnar elementos especificos - modifica el array original



const personaSegunda = ["Micaela", "Juan", "Roberto", "Erika", "Catalina"];

//desde el elemento 2, elimina 1 elemeto 
personaSegunda.splice(2, 1);

console.log(personaSegunda)



//join - ME devuelve todos los elementos separados por lo que le defino, en mi caso una ,
const list = personaSegunda.join(" , ")
console.log(list)


//CONCAT - no modifica los arrays originales, sino que concatena y guarda en otra constante.

const perros = ["perrito1", "perrito2", "perrito3"];
const gatos = ["gatito1", "gatito2", "gatito3"]

const mascotas = perros.concat(gatos)

console.log(mascotas)


//SLICE - se utiliza para geenrar un nuevo array aparte de otro, es decir, COPIA.



const personaTercera = ["Micaela", "Juan", "Roberto", "Erika", "Catalina"];
const masculinos = personaTercera.slice(1, 3) //COPIA DESDE EL 1 AL 3, PERO EL 3 NO LO INCLUYE.

console.log(masculinos)



//INDEXOF:  le paso un valor y me devuelve el indice. Si tengo valores repetidos, me devolvera el primer elemento.


const personaCuatro = ["Micaela", "Juan", "Roberto", "Erika", "Catalina"];


console.log(personaCuatro.indexOf("Roberto"))


//INCLUDES


console.log(personaCuatro.includes("Roberto")) //ME DEVUELVE TRUE, si existe el elemento en el array

//REVERSE - INVIERTE EL ORDEN DE LOS ELEMENTOS.
console.log(personaCuatro.reverse())


function buescarProducto(nombre) {
    let encontrado;
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        if (producto.nombre === nombre) {
            encontrado = producto;
            break
        }
    }
    return encontrado

}

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio
    }
}

const productos2 = [
    new Producto("Fideos", 40),
    new Producto("Arroz", 30),
    new Producto("Leche", 10)
];

console.log(buescarProducto("Fideos"))



const nombres = ["Juan", "Pedro", "Roberto"]
let a = "Micaela"

nombres.push(a)
console.log(nombres)



/**
 * EJEMPLO 1
 */

// Clases
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Funciones
function opcionValida() {

    while (opcion < 0 || opcion > 3) {
        alert("OPCIÓN INVÁLIDA");

        opcion = parseInt(prompt(opcionesMenu));
    }

    if (opcion === 0) {
        alert("GRACIAS POR UTILIZAR NUESTRO SISTEMA");
        return false;
    }

    return true;
}

function buscarIndiceDeProducto(nombreDeProducto) {
    let indice = -1;

    for (let i = 0; i < productos.length; i++) {

        const producto = productos[i];

        if (
            producto.nombre.toUpperCase() === nombreDeProducto.toUpperCase()
        ) {
            indice = i;
            break;
        }
    }

    return indice;
}

function eliminarProducto() {

    // Pido el nombre del producto a eliminar
    let nombreProducto = prompt("Ingrese el nombre del producto a eliminar");
    let indiceProducto = buscarIndiceDeProducto(nombreProducto);

    while (indiceProducto === -1) {
        alert("EL PRODUCTO NO EXISTE");
        nombreProducto = prompt("Ingrese el nombre del producto a eliminar");
        indiceProducto = buscarIndiceDeProducto(nombreProducto);
    }

    // Elimino el producto
    productos.splice(indiceProducto, 1);
}

function agregarProducto() {

    const nombre = prompt("Nombre del producto");
    const precio = parseFloat(prompt("Precio del producto"));

    // Creamos el producto
    const producto = new Producto(nombre, precio);

    // Agregamos el producto a la lista
    productos.push(producto);

    alert("Producto agregado satisfactoriamente!");
}

function calcularTotal() {

    let total = 0;

    // Recorremos los productos
    for (let i = 0; i < productos.length; i++) {
        total = total + (productos[i].precio);
    }

    alert("EL TOTAL ES: $" + total);
}

// Inicio del programa
const opcionesMenu = "1- Agregar Producto, 2- Eliminar producto, 3- Calcular total, 0- Salir";
let opcion = parseInt(prompt(opcionesMenu));

let productos = [
    new Producto("Papa", 30),
    new Producto("Tomates", 50),
    new Producto("Lechuga", 25),
];

while (opcionValida()) {

    switch (opcion) {
        case 1:
            agregarProducto();
            break;

        case 2:
            eliminarProducto();
            break;

        case 3:
            calcularTotal();
            break;
    }

    opcion = parseInt(prompt(opcionesMenu));
}