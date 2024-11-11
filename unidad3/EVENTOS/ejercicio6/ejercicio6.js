function mostrarTecla() {
    let valor = document.getElementById("input").value;
    document.getElementById("parrafo").innerHTML = "Tecla presionada: " + valor;

}


function inicio() {
    document.getElementById("input").addEventListener("keydown", mostrarTecla);
}

window.onload = inicio;