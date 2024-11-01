const numero = parseInt(prompt("Ingrese un numero"))
let resultado = "*"
while (isNaN(numero) || numero < 0) {
    if (numero < 0) {
        alert("ERROR: numero invalido\nPor favor, ingrese un numero positivo")
    } else {
        alert("ERROR: numero invalido")
    }
    numero = parseInt(prompt("Ingrese nuevamente un numero: "))
}

for (let i = 1; i <= numero; i++) {
    console.log(resultado)
    resultado = resultado + "*"
}