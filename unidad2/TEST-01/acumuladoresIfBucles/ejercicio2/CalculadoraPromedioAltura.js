function calcularPromedio(alturas) {
    let suma = 0;
    for (let i = 0; i < alturas.length; i++) {
        suma += alturas[i];
    }
    return suma / alturas.length;
}

let alturas = [];
for (let i = 0; i < 5; i++) {
    alturas.push(parseFloat(prompt()));
}


console.log(calcularPromedio(alturas));