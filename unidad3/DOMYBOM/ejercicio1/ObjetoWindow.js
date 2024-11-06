// 1. Objeto window
// Ejercicio:
// 1. Mostrar una alerta de bienvenida al cargar la página.
// 2. Abrir una nueva ventana emergente con la URL https://www.example.com
// cuando se haga clic en un botón. La nueva ventana debe tener un ancho de
// 400px y una altura de 300px.

window.onload = alert("Bienvenido")
function abrirVentanaEmergente() {
    window.open('https://www.example.com', "_blank","width=400,height=300");
}