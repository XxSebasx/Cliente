function volverColor() {
    document.getElementById("boton").style.backgroundColor = "rgb(184, 48, 66)";
}

function cambiarColor() {
    document.getElementById("boton").style.backgroundColor = "rgba(66, 135, 245)";
}

function inicio() {
    document.getElementById("boton").addEventListener("mouseover", cambiarColor);
    document.getElementById("boton").addEventListener("mouseout", volverColor);
}

window.onload = inicio;