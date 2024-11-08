// Ejercicio 6: Mostrar la Hora Actual
// Enunciado
// Crea un programa que muestre la hora actual en formato `hh:mm:ss`.
function mostrarHoraActual() {
    let fecha = new Date();
    return fecha.toLocaleTimeString();
}

document.write(mostrarHoraActual());