function sumarCuadrados(array) {
    let sumaCuadrados = 0;
    for (let i = 0; i < array.length; i++) {
        sumaCuadrados += array[i] ** 2;
    }
    return sumaCuadrados;
}

console.log(sumarCuadrados([2,2]));