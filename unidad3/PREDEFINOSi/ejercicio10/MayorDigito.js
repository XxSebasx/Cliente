// Ejercicio 10: Encontrar el Mayor Dígito en un Número
// Enunciado
// Crea un programa que reciba un número y encuentre el dígito más alto dentro
// de ese número.
function determinarMayor(numero) {
    let maximo = Number.MIN_VALUE;
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] > maximo) {
            maximo = parseInt(numero[i]);
        }
    }
    return maximo;
}

let numero = prompt();
document.write(determinarMayor(numero));



