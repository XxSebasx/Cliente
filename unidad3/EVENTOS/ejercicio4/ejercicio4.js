function mostrarParrafo(){
    let valorCaja = document.getElementById("caja").value;
    document.getElementById("parrafo").innerHTML = valorCaja;
}

function inicio() {
    document.getElementById("caja").addEventListener("input",mostrarParrafo);
}

window.onload = inicio;