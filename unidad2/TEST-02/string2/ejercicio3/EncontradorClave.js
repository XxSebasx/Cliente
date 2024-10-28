// Realizar la búsqueda de un string clave en un string fuente. Se deberá
// ingresar una frase o texto (fuente) y luego la clave a buscar. En caso de
// encontrarla, imprimir la posición, de lo contrario una leyenda que indique que
// no está.
function encontrarClave(palabra,clave) {
    let sol = "no se encontro la clave";
    if(palabra.includes(clave)) {
        sol = palabra.indexOf(clave)
    }
    return sol;
}

let cadena = prompt("Ingrese una cadena:");
let clave = prompt("Ingrese la clave:");
document.write(encontrarClave(cadena, clave));