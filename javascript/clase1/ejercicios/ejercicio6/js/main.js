pesosUruguayos = parseFloat(prompt("Bienvenido a la casa de cambio\nPor favor, ingrese su cantidad de dinero en pesos uruguayos: "))

const dolares = (pesosUruguayos * 0.0240166)
const euros = (pesosUruguayos * 0.0222405)
const libras = (pesosUruguayos * 0.0185310)

alert("Los resultados del sistema son: \n" + pesosUruguayos + " pesos uruguayos " + " = " + euros + " euros" + "\n" + + pesosUruguayos + " pesos uruguayos " + " = " + dolares + " dolares" + "\n" + pesosUruguayos + " pesos uruguayos " + " = " + libras + " libras")