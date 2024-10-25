let cadena = prompt("Ingrese una cadena:");
let nuevaCadena = "";

for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];
    if(isNaN(caracter)){
        nuevaCadena += caracter;
    }
}

console.log(nuevaCadena);