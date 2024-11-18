function mostrarTecla(event) {
    document.getElementById("parrafo").innerHTML = "Tecla presionada: " + event.key;
}


function inicio() {
    document.getElementById("input").addEventListener("keydown", mostrarTecla);
}

window.onload = inicio;