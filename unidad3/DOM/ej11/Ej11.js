
function agregarNumero() {
    let numero = Math.round(Math.random() * 100);
    let lista = document.getElementById("lista");
    let item = document.createElement("li");
    item.textContent = numero;
    lista.appendChild(item);
}

function inicio() {
    document.getElementById("nuevoNumero").addEventListener('click', agregarNumero)
}

window.onload = inicio;