function cambiarColor() {
    document.getElementById("input").style.backgroundColor = "rgb(245, 188, 230)";
}

function restaurarColor() {
    document.getElementById("input").style.backgroundColor = "rgb(190, 212, 247)";
}

function inicio() {
    document.getElementById("input").addEventListener("focus", cambiarColor);
    document.getElementById("input").addEventListener("blur", restaurarColor);
}

window.onload = inicio;