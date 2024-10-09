function contarNumerosMayor(array,valor) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > valor){
            contador++;
        }
    }
    return contador;
}

console.log(contarNumerosMayor([1,1,3], 2));