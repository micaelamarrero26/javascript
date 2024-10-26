const grados = parseFloat(prompt("Ingrese los grados Celsius que desea converitir a Fahrenheit: "))

//(0 °C × 9 / 5) + 32 = 32 °F

const resultado = ((grados * 9) / 5) + 32

alert("Los grados Celsius: " + grados + " equivalen a: " + resultado + " grados Fahrenheit")