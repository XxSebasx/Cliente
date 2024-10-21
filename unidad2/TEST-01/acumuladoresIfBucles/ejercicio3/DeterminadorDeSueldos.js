function determinarSueldos(sueldos) {
    let importe = 0;
    let sueldosMedios = 0;
    let sueldosAltos = 0;
    for (let i = 0; i < sueldos.length; i++) {
        importe += sueldos[i];
        if(sueldos[i] >= 100 && sueldos[i] <= 300){
            sueldosMedios++;
        }else if(sueldos[i] > 300){
            sueldosAltos++;
        }
    }

    return `Importe total de sueldos: ${importe}, Sueldos medios: ${sueldosMedios}, Sueldos altos: ${sueldosAltos}`;
}

let sueldos = [];
for (let i = 1; i <= 5; i++) {
    let empleado = prompt("Dime el sueldo del empleado " + (i) + ":");
    sueldos.push(parseFloat(empleado));
}

console.log(determinarSueldos(sueldos));
