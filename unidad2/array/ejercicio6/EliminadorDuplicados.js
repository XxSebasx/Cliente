function eliminarDuplicados(array) {
    let arraySinDuplicados = [];
    for (let i = 0; i < array.length; i++) {
        if (!arraySinDuplicados.includes(array[i])) {
            arraySinDuplicados.push(array[i]);
        }
    }
    return arraySinDuplicados;
}

document.write(eliminarDuplicados([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));