//MATH


//Math.min()
console.log(
    ("El minimo numero es: " + (Math.min(1,10, 15, 3,0.5)))
)

//Math.max()
console.log(
   ("El maximo numero es: " + (Math.max(1,10, 15, 3,0.5)))
)


//Math.ceil : Redonda hacia arriba
console.log(
    ("El numero redondeado para arriba es: " + (Math.ceil(3.1)))
)

//Math.floor : Redonda hacia abajo
console.log(
    ("El numero redondeado para abajo es: " + (Math.floor(3.9)))
)

//Math.round : REDONDEA AL ENTERNO MAS PROXIMO
console.log(
    ("El numero redondeado justamente es: " + (Math.round(3.49)))
)

//Math.sqrt() : Raiz cuadrada

console.log(
    ("La raiz cuadrada es: " + (Math.sqrt(9)))
)

//Math.abs() : Valor absoluto, es decir, el valor sin signo. Si es positivo, lo deja tal cual. Si es negativo, lo convierte en positivo
console.log(
    ("El valor absoluto es:"  + (Math.abs(-9)))
)

//Math.random() : Genera un numero aleatorio entre 0 y 1

console.log(
    ("El numero aleatorio es: " + (Math.random()))
)

//Si queremos mover los limites de random, ya que solo me da numeros de 0 y 1, hacemos:

console.log(
    ("El numero aleatorio entre el 0 y el 10 es: " + (Math.random() * 10))
)

//SI QUEREMOS NUMEROS, POR EJEMPLO ENTRE 20 Y 50 Y SIN DECIMALES:

console.log(
    ("El numero aleatorio entre el 20 y el 50 sin DECIMALES: " + Math.floor((Math.random() * 30 + 20)))
)

//CLASES DATE

const fechaActual = new Date();
