function calcular() {
    let resultado = 0;
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');

    if (suma.checked) {
        resultado = valor1 + valor2;
    }else if (resta.checked) {
        resultado = valor1 - valor2;
    }

    document.getElementById('resultado').innerText = 'El resultado es: '+ resultado;

}

function inicio() {
    document.getElementById("calculo").addEventListener('click',calcular);
}

window.onload = inicio();

