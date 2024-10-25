function determinarPalindromo(cadena) {
    let esPalindromo = true;
    let cadenaReversa = cadena.split('').reverse().join('');
    if (cadena.toLowerCase() !== cadenaReversa.toLowerCase()) {
        esPalindromo = false;
    }
    return esPalindromo;
}

let cadena = prompt("Ingrese una cadena:");
console.log(determinarPalindromo(cadena));