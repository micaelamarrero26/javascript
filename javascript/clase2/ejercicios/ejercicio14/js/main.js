const x = true
const y = false
const z = true



const resultadoA = ((x && y) || (x && z))
const resultadoB = ((y || !y) && (!x || z))
const resultadoC = x && (y && z)
const resultadoE = !(x || y) && z
const resultadoF = (x || y || x) && !z && !y
const resultadoG = !x || !y || z && x && !y


alert("Resultado A: " + resultadoA + "\nResultado B: " + resultadoB + "\nResultado C: " + resultadoC + "\nResultado C: " + resultadoC + "\nResultado E: " + resultadoE + "\nResultado F: " + resultadoF + "\nResultado G: " + resultadoG) 