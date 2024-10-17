// este es un comentario

/* Este es un comentario
de mas lineas
*/


//declaracion

let edad = 28; //variable que puede cambiar su valor
let nombre;

const anioDeNacimiento = 1996; //variable que no cambia su valor
const apellido = "Marrero";


//valores
//numer: un valor numerico que puede ser enterno o decimal
//string


nombre = "Micaela";


//console.log(apellido)



//OPERACIONES CON VARIABLES NUMERICAS


const numero1 = 10;
const numero2 = 40;

const resultadoSuma = numero1 + numero2;

const resultadoResta = numero1 - numero2;

const resultadoMultiplicacion = numero1 * numero2;

const resultadoDivision = numero1 / numero2;


//OPERACIONES CON VARIABLES STRING

const cadena1 = "Hola";
const cadena2 = "Saludos";

const saludo = cadena1 + " " + cadena2

//console.log(saludo);


//INPUT DEL USUARIO - PROMPT

const nombreUsuario = prompt("Ingres su usuario: ");
const bienvenida = "Bienvenido "


//CONSOLE LOG 
console.log(bienvenida + nombreUsuario)

//Podemos utilizar ALERT, funciona igual que CONSOLE log pero lo muestra como alerta

//alert("Bienvenida " + nombreUsuario)



//TRANSFORMAR STRING A NUMERO

const primerNumero = parseInt(prompt("Ingresa el primer numero: "));
const segundoNumero = parseInt(prompt("Ingresa el segundo numero: "));

console.log("La suma de primer numero y segundo numero es: " + (primerNumero + segundoNumero))

//PROMEDIO 

const priNumero = parseInt(prompt("Ingresa el primer numero: "));
const segNumero = parseInt(prompt("Ingresa el segundo numero: "));
const tercerNumero = parseInt(prompt("Ingresa el tercer numero: "));

resultado = ((priNumero + segNumero + tercerNumero) / 3);
console.log("El promedio es: " + resultado);


//TRANFORMA DE STRING A FLOAT

const numeroUno = parseFloat(prompt("Ingrese primero numero float: "));

const numeroDos = parseFloat(prompt("Ingrese segundo numero float: "));

console.log("La suma es: " + (numeroUno + numeroDos))