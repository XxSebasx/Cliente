function calcularPromedio(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}

document.write(calcularPromedio([5,5,5]))

