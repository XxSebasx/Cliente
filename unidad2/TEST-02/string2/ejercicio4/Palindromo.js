// Ingresar una palabra o texto por teclado y determinar si es o no una palabra
// palíndromo. (Palabra que se lee de igual manera de adelante hacia atrás, que de
// atrás hacia delante)
function determinarPalindromo(cadena) {
    let esPalindromo = true;
    let cadenaReversa = ""
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaReversa += cadena[i];
    }
    if (cadena.toLowerCase() !== cadenaReversa.toLowerCase()) {
        esPalindromo = false;
    }

    return esPalindromo;
}

let cadena = prompt("Ingrese una cadena:");
document.write(determinarPalindromo(cadena));