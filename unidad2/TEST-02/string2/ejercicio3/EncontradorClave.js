function encontrarClave(palabra,clave) {
    let sol = "no se encontro la clave";
    if(palabra.includes(clave)) {
        sol = palabra.indexOf(clave)
    }
    return sol;
}

let cadena = prompt("Ingrese una cadena:");
let clave = prompt("Ingrese la clave:");
console.log(encontrarClave(cadena, clave));