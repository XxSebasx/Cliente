
function contarImpares(array){
    let contador = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2!= 0){
            contador++;
        }
    }
    return contador;
}

console.log(contarImpares([1, 2, 3, 4, 5]));