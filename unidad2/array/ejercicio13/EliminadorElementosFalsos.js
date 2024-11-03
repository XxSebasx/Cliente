
function eliminarValoresFalsos(array){
    let arraySinFalsos = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            arraySinFalsos.push(array[i]);
        }
    }
    return arraySinFalsos;
}

document.write(eliminarValoresFalsos([0, 1, "", false, null, undefined, NaN, 2, 3]));