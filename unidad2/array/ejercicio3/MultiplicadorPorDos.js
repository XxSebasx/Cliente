function multiplicarPorDos(array) {
    let arrayPorDos=[];
    for (let i = 0; i < array.length; i++) {
        arrayPorDos.push(array[i] * 2);
    }
    return arrayPorDos;
}

document.write(multiplicarPorDos([1, 2, 3, 4, 5]).toString());