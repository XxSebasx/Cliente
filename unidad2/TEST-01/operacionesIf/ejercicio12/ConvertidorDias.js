function convertir() {
    let nDia = parseInt(document.getElementById("dia").value);
    switch (nDia) {
        case 1:
            document.getElementById("diaSemana").innerHTML = "Lunes";
            break;
        case 2:
            document.getElementById("diaSemana").innerHTML = "Martes";
            break;
        case 3:
            document.getElementById("diaSemana").innerHTML = "Miercoles";
            break;
        case 4:
            document.getElementById("diaSemana").innerHTML = "Jueves";
            break;
        case 5:
            document.getElementById("diaSemana").innerHTML = "Viernes";
            break;
        case 6:
            document.getElementById("diaSemana").innerHTML = "Sábado";
            break;
        case 7:
            document.getElementById("diaSemana").innerHTML = "Domingo";
            break;
    }
}