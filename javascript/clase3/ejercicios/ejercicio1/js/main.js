let palabra = prompt("Ingrese una palabra")
let palabrasNuevas = ""
while (palabra != "Salir") {
    if (palabra != "Salir") {
        palabrasNuevas += palabra + " , "
    }
    palabra = prompt("Ingrese otra palabra: ")
}

alert(palabrasNuevas)
