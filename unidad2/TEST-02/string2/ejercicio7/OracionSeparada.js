// Codifique un programa que permita cargar una oración por teclado, luego
// mostrar cada palabra ingresada en una línea distinta.
function mostrarOracion(cadena) {
    let lista = cadena.split(' ');
    lista.forEach(cadena => {
        document.write(cadena + '<br>');
    });
}

let oracion = prompt("Ingrese una oración:");
mostrarOracion(oracion);