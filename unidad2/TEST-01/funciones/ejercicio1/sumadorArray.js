function sumarNumeros(array) {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma += array[index];
    }
    return suma
}

console.log(sumarNumeros([5,5,5]));