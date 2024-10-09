function obtenerLosPrimeros(array,n) {
    let arrayPrimeros = [];
    for (let i = 0; i < n; i++) {
        arrayPrimeros.push(array[i]);
    }
    return arrayPrimeros;
}

console.log(obtenerLosPrimeros([1,2,3],2))