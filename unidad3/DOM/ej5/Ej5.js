function enviarSaludo() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let frase = `hola ${nombre}  ${apellido}, gracias por rellenar el formulario`;
    document.getElementById("saludo").innerHTML = frase;
}