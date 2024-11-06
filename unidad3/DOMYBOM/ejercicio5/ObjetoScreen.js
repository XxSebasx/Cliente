// 5. Objeto screen
// Ejercicio:
// 1. Mostrar el ancho y el alto de la pantalla del dispositivo, así como su
// profundidad de color en bits.
function mostrarDatosVentana() {
    let ancho = `<h2>Ancho: ${screen.width}</h2> `;
    let alto = `<h2>Alto: ${screen.height}</h2>`;
    let profundidad = `<h2>Profundidad: ${screen.colorDepth}</h2>`;
    document.body.innerHTML = ancho + alto + profundidad
}