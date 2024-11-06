// 4. Objeto document
// Ejercicio:
// 1. Cambiar el contenido de un párrafo cuando se haga clic en un botón.
// 2. Agregar un nuevo párrafo al documento al hacer clic en otro botón.
function cambiarContenido() {
    document.getElementById("parrafo").innerHTML = "Nuevo contenido";
}

function agregarNuevoParrafo() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = "Nuevo parrafo agregado";
    document.body.appendChild(nuevoParrafo);
}