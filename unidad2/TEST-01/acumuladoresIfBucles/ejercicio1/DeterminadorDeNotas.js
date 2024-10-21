function determinarNotas(notas) {
    let notasMayores = 0;
    let notasMenores = 0;

    for (let i = 0; i < notas.length; i++) {
        if(notas[i]>= 7){
            notasMayores++;
        }else{
            notasMenores++;
        }
    }

    return `Notas mayores o iguales a 7: ${notasMayores}, Notas menores a 7: ${notasMenores}`;
}

let notas = [];
for (let i = 0; i < 10; i++) {
    let nota = prompt("Dime una nota del 0 al 10:");
    notas.push(nota);
}

console.log(determinarNotas(notas));
console.log(notas);