//for (desde; hasta; actualizacion)

//CICLO FOR 

// for (let i = 1; i <= 10; i++) {
//     console.log("Numero: " + i)
// }

// for (let i = 0; i <= 10; i = i + 2) {
//     console.log("Numero: " + i)
// }

// BREAK



// for (let i = 0; i <= 10; i++) {
//     console.log("Numero: " + i)
//     if (i == 5) {
//         console.log("chauuuuu")
//         break;
//     }
// }


// continue


// for (let i = 0; i <= 20; i++) {
//     if ((i == 2) || (i == 6) || (i == 8)) {
//         console.log("Hola " + i)
//         continue;
//     }
//     console.log("Numero: " + i)

// }



//WHILE


const nombre = prompt("Ingrese su nombre: ")
let edad = parseInt(prompt("Ingrese su edad: "))


// while (isNaN(edad)) {
//     console.log("Edad invalida");
//     edad = parseInt(prompt("Ingrese su edad: "))

// }

// alert("Bienvenido " + nombre)


// while (isNaN(edad) || edad < 18) {
//     if (isNaN(edad)) {
//         alert("ERROR: edad invalida")
//     } else {
//         alert("ERROR: edad menor de 18 años")
//     }
//     edad = parseInt(prompt("Ingrese nuevamente su edad: "))
// }

// alert("Bienvenido " + nombre)



// DO WHILE


// do {
//     if (isNaN(edad)) {
//         alert("ERROR: edad invalida")
//         edad = parseInt(prompt("Ingrese su edad: "))
//     } else {
//         alert("ERROR: edad menor de 18 años")
//         edad = parseInt(prompt("Ingrese su edad: "))
//     }

// } while (isNaN(edad) || edad < 18)

// alert("Bienvenido " + nombre)


//SWITCH



// const menu = "1 - Soporte tecnico \n2 - Administracion \n3 - Marketing \n4- Direccion"

// let opcion = parseInt(prompt(("Ingrese la opcion que desea: \n" + menu)))


// while (isNaN(opcion)) {
//     alert("Ingrese un numero valido")
//     opcion = parseInt(prompt(("Ingrese la opcion que desea: \n" + menu)))
// }
// switch (opcion) {

//     case 1:
//         const menuSoporte = "1 - Soporte celular \n2 - Soporte Internet \n3 - Soporte computadoras"

//         let opcionSoporte = parseInt(prompt(("Ingrese la opcion que desea de soporte tecnico: \n" + menuSoporte)))

//         while (isNaN(opcionSoporte)) {
//             alert("Ingrese un numero valido")
//             opcion = parseInt(prompt(("Ingrese la opcion que desea: \n" + menu)))
//             break;
//         }
//         switch (opcionSoporte) {
//             case 1:
//                 alert("Soporte celular")
//                 break;
//             case 2:
//                 alert("Soporte Internet")
//                 break;
//             case 3:
//                 alert("Soporte computadoras")
//                 break;
//         }
//         break;
//     case 2:
//         alert("aaaa dministracion")
//         break;

//     case 3:
//         alert("Marketing")
//         break;
//     case 4:
//         alert("Direccion")
//         break;

// }



const numero = parseInt(prompt("Ingrese un numero"))
let cantidadDigitos = 1;
let resultado = numero / 10

while (resultado > 1) {
    resultado = resultado / 10
    cantidadDigitos++;
}


console.log("La cantidad de digitos es: " + cantidadDigitos)
