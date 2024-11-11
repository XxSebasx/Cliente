function cambiarColor() {
    document.getElementById("input").style.backgroundColor = "rgb(245, 188, 230)";
}

function inicio() {
    document.getElementById("input").addEventListener("focus", cambiarColor);
}

window.onload = inicio;