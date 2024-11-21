function comprobar() {
    let correo = document.getElementById('email');
    let web = document.getElementById('url');
    let parrafo = document.getElementsByTagName("p")
    if(correo == null || !correo.checkValidity()) {
        parrafo[0].appendChild(document.createElement("p").appendChild(document.createTextNode("correo invalido")));
    }else{
        parrafo[0].appendChild(document.createElement("p").appendChild(document.createTextNode("correcto")));
    }

    if(web == null || !web.checkValidity()) {
        parrafo[1].appendChild(document.createElement("p").appendChild(document.createTextNode("Url invalida")));
    }else{
        parrafo[1].appendChild(document.createElement("p").appendChild(document.createTextNode("correcto")));
    }
    
}
function inicio() {
    document.getElementById("formulario").addEventListener("submit", (event) => {
        event.preventDefault();
        comprobar();
    });
}

window.onload = inicio;