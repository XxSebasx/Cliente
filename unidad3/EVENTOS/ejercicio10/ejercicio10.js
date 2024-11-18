

function bloquear(event) {
    event.preventDefault();
    alert('bloqueado');
}

function inicio() {
    const seleccion = document.getElementById('seleccion');
    seleccion.addEventListener('contextmenu', bloquear);
}


window.onload = inicio;