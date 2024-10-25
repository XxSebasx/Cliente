function imprimirMitad(cadena) {
    console.log(cadena.substring(0, cadena.length / 2));
}

function imprimirUltimo(cadena) {
    console.log(cadena[cadena.length - 1]);
}

function imprimirReversa(cadena) {
    console.log(cadena.split('').reverse().join(''));
}

function imprimirCaracterSeparado(cadena) {
    console.log(cadena.split('').join('-'));
}

function contarVocales(cadena) {
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < cadena.length; i++) {
        if(vocales.includes(cadena[i].toLocaleLowerCase())){
            contador++;
        }
    }
    console.log("Cantidad de vocales: " + contador);
}

let cadena = prompt("Ingrese una cadena:");
imprimirMitad(cadena);
imprimirUltimo(cadena);
imprimirReversa(cadena);
imprimirCaracterSeparado(cadena);