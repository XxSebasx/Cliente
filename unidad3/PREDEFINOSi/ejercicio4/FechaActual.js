function obtenerFechaActual() {
    let fecha = new Date();
    return fecha.toLocaleDateString();
}

console.log(obtenerFechaActual());