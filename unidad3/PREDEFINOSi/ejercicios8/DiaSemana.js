function mostrarDia(diaUsuario) {
    let dia = new Date(diaUsuario);
    let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    return diasSemana[dia.getDay()-1];
}

let usuario = prompt("AÑO-MES-DIA")
document.write(mostrarDia(usuario));