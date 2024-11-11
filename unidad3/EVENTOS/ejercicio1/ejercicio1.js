function alerta() {
    alert("hola mundo");

}

function inicio() {
    document.getElementById("boton").addEventListener("click",alerta);
}

window.onload = inicio;