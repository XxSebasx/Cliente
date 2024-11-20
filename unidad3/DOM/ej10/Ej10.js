function comprobar() {
    let correo = document.getElementById('correo').value;
    let web = document.getElementById('web').value;
}

function incio() {
    document.getElementById("confirmar").addEventListener("click",comprobar)    
}

window.onload = inicio;