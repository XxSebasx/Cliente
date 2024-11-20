function aniade() {
    let lista = document.getElementById('lista');
    let fila  = lista.appendChild(document.createElement('li'));
    fila.appendChild(document.createTextNode("nuevo"));
}