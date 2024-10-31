function contarOcurrencias(array,valor) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            contador++;
        }
    }
    return contador;
}

document.write(contarOcurrencias([1, 2, 3, 2, 1, 4, 5, 2], 2));