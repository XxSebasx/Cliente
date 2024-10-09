function duplicarArray(array){
    let arrayDuplicado = []
    for(let i = 0; i < array.length; i++){
        arrayDuplicado.push(array[i]);
        arrayDuplicado.push(array[i]);
    }
    return arrayDuplicado;
}

console.log(duplicarArray([1, 2, 3]))