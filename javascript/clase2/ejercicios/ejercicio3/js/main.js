const edad = parseInt(prompt("Bienvenido! Por favor, ingrese su edad y calcularemos su año de nacimiento"))
const mesNacimiento = parseInt(prompt("Por favor, ingrese el mes de nacimiento"))
const mesActual = parseInt(prompt("Por favor, ingrese el mes de actual"))
let anioNacimiento;

if (mesActual > mesNacimiento) {
    anioNacimiento = (2024 - edad)

} else if (mesActual < mesNacimiento) {
    anioNacimiento = ((2024 - edad) - 1)
} else if (mesActual == mesNacimiento) {
    const diaNacimiento = parseInt(prompt("Por favor, ingrese su dia de nacimiento"))
    const diaActual = parseInt(prompt("Por favor, ingrese su dia de actual"))
    if (diaNacimiento <= diaActual) {
        anioNacimiento = ((2024 - edad))
    } else {
        anioNacimiento = ((2024 - edad) - 1)
    }
}


alert("Su año de nacimiento es: " + anioNacimiento)