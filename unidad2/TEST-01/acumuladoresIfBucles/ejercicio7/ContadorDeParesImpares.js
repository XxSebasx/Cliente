function contarParesImpares(listaNumeros) {
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        if(listaNumeros[i] % 2 == 0){
            pares++;
        } else {
            impares++;
        }
    }

    return {pares: pares, impares: impares};
}


let lista1 = [1, 2, 3, 4, 5];

console.log(contarParesImpares(lista1));

