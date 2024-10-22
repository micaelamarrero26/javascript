// const resultado = 10 + 15;


// if (true) {
//     console.log(resultado)
// }

// if (false) {
//     console.log("No se va a mostrar este resultado")
// }

// //OPERADORES DE COMPARACION

// //COMPARADOR IGUAL: ==

// const nombre = "Juan"

// if (nombre == "Pedro") {

//     console.log("El nombre es: Pedro")
// } else {
//     console.log("El nombre NO es: Pedro")

// }


// const nombreIngresar = prompt("Ingrese su nombre: ")

// if (nombreIngresar == "Pedro") {

//     console.log("Hola Juaaaaan")
// } else {
//     console.log("Hola quien sea que seas")
// }


// //
// const nombreNuevo = prompt("Ingrese su nombre: ")


// if (nombreNuevo == "Lautaro") {
//     console.log("Hola Lautaro");
// }
// else if (nombreNuevo == "Pepe") {
//     console.log("Hola Pepe");
// }
// else if (nombreNuevo == "Juan") {
//     console.log("Hola Juan");
// } else {
//     console.log("Hola persona que no es Lautaro, ni Pepe, ni Juan")
// }


// const nombrecito = prompt("Ingrese su nombre: ")
// const edad = prompt("Ingrese su EDAD: ")

// if (isNaN(edad)) {
//     console.log("No es un numero");
// }

// if (edad < 18) {
//     alert("Acesso prohibido")
// } else {
//     alert("Acceso posible")
// }


//BOLEANOS

const numero = 15
const boleano = false

const esMayorQue15 = (numero > 20)

if (esMayorQue15) {
    console.log("Es mayo que 15")
}


/* OPERADORES LOGICOOOOOOSSS */

// const numeroUno = "20";
// const numeroDos = 20;


// if (numeroUno == numeroDos) {
//     console.log("Son iguales")
// }


// if (numeroUno != numeroDos) {
//     console.log("Son DISTINTOS")
// }

// //me compra el valor y el tipo de datos
// if (numeroUno === numeroDos) {
//     console.log("Son iguales y mismo tipo de datos")
// }

// if (numeroUno !== numeroDos) {
//     console.log("SON IGUALES EN VALOR PERO DIFERENTE TIPO DE DATOS")
// }



//OPERADORES : AND y OR .. se representan como && o || 


const operadorUno = "Juan"
const operadorDos = "Maria"


if ((operadorUno == "Juan") || (operadorUno == "Maria")) {
    console.log("Aca esta Juan o Maria");
}

if ((operadorUno == "Juan") && (operadorDos == "Maria")) {
    console.log("Aca esta Juan Y Maria");
}
