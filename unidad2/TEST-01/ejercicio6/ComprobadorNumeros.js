function comprobarNumeros() {
    let n = parseInt(document.getElementById("numero").value);
    let result = "es 0";
    if(n > 0) {
        result = "es positivo"
    }else if(n < 0) {
        result = "es negativo"
    }

    document.getElementById("mensaje").innerHTML = result;
}


