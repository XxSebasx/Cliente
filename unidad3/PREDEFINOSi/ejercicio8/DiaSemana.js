// Ejercicio 8: Obtener el Día de la Semana
// Enunciado
// Crea un programa que muestre el día de la semana (por ejemplo, "Lunes") de
// una fecha específica introducida por el usuario.
function mostrarDia(diaUsuario) {
    let dia = new Date(diaUsuario);
    let diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    return diasSemana[dia.getDay()-1];
}

let usuario = prompt("AÑO-MES-DIA")
document.write(mostrarDia(usuario));