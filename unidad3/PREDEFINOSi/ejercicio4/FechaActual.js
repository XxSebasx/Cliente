// Ejercicio 4: Obtener la Fecha Actual
// Enunciado
// Escribe un programa que muestre la fecha actual en el formato `día/mes/año`.
function obtenerFechaActual() {
    let fecha = new Date();
    return fecha.toLocaleDateString();
}

document.write(obtenerFechaActual());