const anioNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento: "))
let anioActual = 2024
const edad = anioActual - anioNacimiento

if (edad >= 18) {
    const nombre = prompt("Por favor, ingresa tu nombre: ")
    const apellido = prompt("Por favor, ingresa tu apellido: ")

    alert("Hola " + nombre + " " + apellido + ", tu edad actual es: " + edad + " años")
}
