function mostrarHoraActual() {
    let fecha = new Date();
    document.write(fecha.toLocaleTimeString());
}

mostrarHoraActual();