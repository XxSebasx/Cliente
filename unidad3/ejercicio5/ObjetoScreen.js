function mostrarDatosVentana() {
    let ancho = `<h2>Ancho: ${screen.width}</h2> `;
    let alto = `<h2>Alto: ${screen.height}</h2>`;
    let profundidad = `<h2>Profundidad: ${screen.colorDepth}</h2>`;
    document.body.innerHTML = ancho + alto + profundidad
}