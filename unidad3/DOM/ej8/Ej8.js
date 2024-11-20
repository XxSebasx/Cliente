function calcular() {
    let resultado = 0;
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let opcion = document.getElementById("operacion").value;
    if(opcion == "suma"){
        resultado = valor1 + valor2;
    }else if(opcion == "resta"){
        resultado = valor1 - valor2;
    }

    document.getElementById("resultado1").innerText = "El resultado es: "+ resultado;
}

function calcularMultiple() {
    let resultado = 0;
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let opcion = document.getElementById("operaciones").value;
    if(opcion == "suma"){
        resultado = valor1 + valor2;
    }else if(opcion == "resta"){
        resultado = valor1 - valor2;
    }

    document.getElementById("resultado2").innerText = "El resultado es: "+ resultado;
}


function inicio() {
    document.getElementById("calculo").addEventListener('click', calcular);
    document.getElementById("calculomultiple").addEventListener('click', calcularMultiple);
}

window.onload = inicio;