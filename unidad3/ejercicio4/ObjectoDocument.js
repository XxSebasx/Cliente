function cambiarContenido() {
    document.getElementById("parrafo").innerHTML = "Nuevo contenido";
}

function agregarNuevoParrafo() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = "Nuevo parrafo agregado";
    document.body.appendChild(nuevoParrafo);
}