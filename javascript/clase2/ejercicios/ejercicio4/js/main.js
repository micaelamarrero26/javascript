const notaUno = parseFloat(prompt("Bienvenido al sistema de la escuela \nPor favor, ingrese la primer nota: "))
const notaDos = parseFloat(prompt("Ingrese la segunda nota: "))
const notaTres = parseFloat(prompt("Ingrese la tercer nota: "))


const notaFinal = ((notaUno + notaDos + notaTres) / 3)

if (notaFinal >= 4) {
    alert("Felicitaciones! APROBADO!\nSu nota final fue: " + notaFinal)
} else {
    alert(" A estudiar nuevamente! DESAPROBADO!\nSu nota final fue: " + notaFinal)
}