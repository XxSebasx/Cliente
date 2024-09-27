function verificar() {
    let numero = parseInt(document.getElementById("numero").value);
    let mensaje = "Es par";
    if(numero % 2!== 0) {
        mensaje = "Es impar";
    }
    document.getElementById("mensaje").innerHTML = mensaje;
}