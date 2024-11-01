let numeroMayor = null
let numeroMenor = null
let cantidad = null
let numero = parseInt(prompt("Ingrese un numero"))
let media = null

while (numero !== 0) {

    if (numeroMayor < numero) {
        numeroMayor = numero
    } else if (numeroMayor > numero) {
        numeroMenor = numero
    }

    numero = parseInt(prompt("Ingrese otro numero: "))
}


console.log("El numero mayor es: " + numeroMayor + " y el numero menor es: " + numeroMenor)
