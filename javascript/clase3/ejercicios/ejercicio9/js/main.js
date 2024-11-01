const numero = parseInt(prompt("Ingrese un numero"))
let cantidadDigitos = 1;
let resultado = numero / 10

while (resultado > 1) {
    resultado = resultado / 10
    cantidadDigitos++;
}


console.log("La cantidad de digitos es: " + cantidadDigitos)
