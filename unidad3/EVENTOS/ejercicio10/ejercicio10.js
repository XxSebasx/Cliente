function bloquear() {
    alert('bloqueado');
}
function inicio() {
    document.getElementById('seleccion').addEventListener('contexmenu', bloquear);
}

window.onload = inicio;