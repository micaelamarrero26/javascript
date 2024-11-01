const nombreFuncion = (param1, param2) => {
  // Cuerpo de la función
};
//Si la función tiene un solo parámetro, los paréntesis pueden omitirse:

//Si el cuerpo de la función contiene solo una expresión, puedes omitir las llaves { } y el return, ya que el valor de la expresión se devuelve automáticamente:

const doble = numero => numero * 2;

//Si no hay parámetros, se usan paréntesis vacíos:

const suma = (a, b) => a + b;
// si no tengo parametros, puedo tener () vacios.

const obtenerSaludo = () => console.log("¡Hola!");
//guardo el resultado de la funcion, en saludar-
const saludar = obtenerSaludo();
console.log(saludar)