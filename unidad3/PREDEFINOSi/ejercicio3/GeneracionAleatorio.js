// Ejercicio 3: Generación de Número Aleatorio entre 1 y 100
// Enunciado
// Crea un programa que genere un número aleatorio entre 1 y 100 cada vez que
// se pulse un botón.
function generarAleatorio() {
    return (Math.round(Math.random() * (100 - 1) + 1));
}

document.write(generarAleatorio());

