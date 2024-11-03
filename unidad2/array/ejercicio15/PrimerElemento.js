function retornarPrimerElemento(array) {
    let primerElemeto = undefined;
    if(array.length != 0){
        primerElemeto = array[0];
    }
    return primerElemeto;
}

document.write(retornarPrimerElemento([1,2,3,4,5]));