function cambiarParrafo(){
    document.getElementById('parrafo').innerHTML = 'Gato';
}

function inicio() {
    document.getElementById('boton').addEventListener('dblclick',cambiarParrafo);
}

window.onload = inicio;