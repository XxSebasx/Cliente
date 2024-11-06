// 2. Objeto location
// Ejercicio:
// 1. Mostrar la URL actual de la página en un elemento HTML.
// 2. Redirigir al usuario a https://www.example.com al hacer clic en un botón.
function redirigir() {
    location.href = "https://www.example.com";
}

function mostrarURL() {
    document.getElementById("urlActual").innerHTML = location.href;
}
