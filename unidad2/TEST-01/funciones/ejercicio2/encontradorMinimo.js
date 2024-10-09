function encontrarMinimo(array) {
    let minimo = Number.MAX_VALUE;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < minimo) minimo = array[i];
    }
    return minimo;
}

console.log(encontrarMinimo([5,4,1]))