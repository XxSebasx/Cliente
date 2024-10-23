let cadena = prompt("Ingrese una cadena:");
let posicion = parseInt(prompt("Ingrese la posición:"));
let caracter = prompt("Ingrese el caracter:");

let nuevaCadena = cadena.slice(0, posicion) + caracter + cadena.slice(posicion);
console.log(nuevaCadena);