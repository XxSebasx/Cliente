function determinarCaracteres() {
    let caracteresPosibles = document.getElementById("comentarios").maxLength;
    let comentario = document.getElementById("comentarios").value;
    let resultado = caracteresPosibles - comentario.length;
    document.getElementById("resultado").innerText = resultado;
}

function inicio() {
    document.getElementById("comentarios").addEventListener("input",determinarCaracteres);
}

window.onload = inicio;