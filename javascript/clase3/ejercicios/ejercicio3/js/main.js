let numero = parseInt(prompt("Ingrese un numero"))


while (isNaN(numero) || numero < 0) {
    if (numero < 0) {
        alert("ERROR: numero invalido\nPor favor, ingrese un numero positivo")
    } else {
        alert("ERROR: numero invalido")
    }
    numero = parseInt(prompt("Ingrese nuevamente un numero: "))
}

for (let i = numero; i >= 0; i--) {
    if (i % 2 == 0)
        console.log("Numero: " + i)
}