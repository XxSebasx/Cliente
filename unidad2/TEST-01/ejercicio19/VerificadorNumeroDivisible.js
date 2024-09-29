
function verificar() {
    let resultado = "No es divisible por 7";
    let numero = parseInt(document.getElementById("numero").value);
    if(numero % 7 == 0) {
       resultado = "Es divisible por 7";
    }
    document.getElementById("respuesta").innerHTML = resultado;
}