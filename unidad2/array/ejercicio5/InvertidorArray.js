function invertirArray(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}

document.write(invertirArray([1, 2, 3, 4, 5]).toString());

