// Cargar un String por teclado e implementar las siguientes funciones:
// a) Imprimir la primera mitad de los caracteres de la cadena.
// b) Imprimir el último carácter.
// c) Imprimirlo en forma inversa.
// d) Imprimir cada carácter del String separado con un guión.
// e) Imprimir la cantidad de vocales almacenadas.
function imprimirMitad(cadena) {
    document.write(cadena.substring(0, cadena.length / 2));
}

function imprimirUltimo(cadena) {
    document.write(cadena[cadena.length - 1]);
}

function imprimirReversa(cadena) {
    let cadenaInversa = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInversa += cadena[i];
    }
}

function imprimirCaracterSeparado(cadena) {
    document.write(cadena.split('').join('-'));
}

function contarVocales(cadena) {
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < cadena.length; i++) {
        if(vocales.includes(cadena[i].toLocaleLowerCase())){
            contador++;
        }
    }
    document.write("Cantidad de vocales: " + contador);
}

let cadena = prompt("Ingrese una cadena:");
imprimirMitad(cadena);
document.write("<br>");
imprimirUltimo(cadena);
document.write("<br>");
imprimirReversa(cadena);
document.write("<br>");
imprimirCaracterSeparado(cadena);
document.write("<br>");
contarVocales(cadena);