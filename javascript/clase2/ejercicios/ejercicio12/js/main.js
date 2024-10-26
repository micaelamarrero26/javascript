const nombre = prompt("¡Bienvenido a nuestro sistema! \nPor favor, Ingrese su nombre")
const edad = parseInt(prompt("Por favor, ingrese su edad: "))

if ((nombre == "Gabriel") && (edad > 24)) {
    alert("Bienvenido " + nombre)
} else if ((nombre == "Maria") && ((edad > 28) && (edad < 35))) {
    alert("Bienvenida " + nombre)
} else {
    alert("Acesso no permitido")
}