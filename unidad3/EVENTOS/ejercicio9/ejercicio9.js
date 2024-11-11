function mostrarSeleccionado() {
    let valor = document.getElementById('seleccion').value;
    document.getElementById("result").innerHTML = valor;
}

function inicio() {
    document.getElementById('seleccion').addEventListener('change', mostrarSeleccionado);
}

window.onload = inicio;