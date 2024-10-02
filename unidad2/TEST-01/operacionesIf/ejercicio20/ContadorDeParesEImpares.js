let pares = 0;
let impares = 0;

for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Pares: " + pares);
console.log("Impares: " + impares);