//FUNCIONES


// function saludar() {
//     console.log("Hola estudiantes!")
// }

// function imprimirNombre() {
//     console.log("Hola Juan")
// }

// imprimirNombre()


// function mostrarSaludo(nombre) {
//     if (nombre === "John") {
//         console.log("Hello")
//     } else if (nombre === "Paulinho") {
//         console.log("Bom dia")
//     } else {
//         console.log("Hola")
//     }
// }

// function imprimirNombre(nombre) {
//     mostrarSaludo(nombre)
//     console.log(nombre)
// }


// nombre = prompt("Ingrese su nombre:")

// imprimirNombre(nombre)



// function sumar(numero1, numero2) {
//     const resultado = numero1 + numero2
//     console.log("La suma es: " + resultado)
// }


// sumar(10, 40)



// function sumar(numero1, numero2) {
//     const resultado = numero1 + numero2
//     return resultado
// }

// const resultadoNuevo = sumar(40, 50)
// console.log(resultadoNuevo)


// SI NO DEVUELVE NADA, SE LE SUCELE LLAMAR PROCESEDIMIENTO, SI DEVUELVE SE LE LLAMA FUNCIONES

// function getSaludo(nombre) {
//     if (nombre === "John") {
//         return "Hello"
//     } else if (nombre === "Paulinho") {
//         return "Bom dia"
//     } else {
//         return "Hola"
//     }
// }

// function imprimirNombre(nombre) {

//     const saludo = getSaludo(nombre)

//     console.log(saludo + " " + nombre)
// }

// const nombre = prompt("Ingrese su nombre ")
// imprimirNombre(nombre)


//FUNCIONES FLECHA

const saludar = (nombre) => {
    console.log("Hola " + nombre)
}

saludar("Micaela")

//FUNCIONES FLECHA TIENEN RETURN IMPLICITO 


const suma = (a, b) => a + b;

console.log("El resultado de la suma es: " + suma(40, 10))