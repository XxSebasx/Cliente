function cambiarColor() {
    document.getElementById("boton").style.backgroundColor = "rgba(255,255,255)";
}

function inicio() {
    document.getElementById("boton").addEventListener("mouseover",cambiarColor);
}

window.onload = inicio;