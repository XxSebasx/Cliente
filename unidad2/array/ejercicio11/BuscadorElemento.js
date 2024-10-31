function buscarElemento(array,valor) {
    return array.includes(valor);
}

let estaEnValor = (buscarElemento([1, 2, 3, 4, 5], 3));

if (estaEnValor) {
    document.write("El valor se encuentra en el array.");
}else{
    document.write("El valor no se encuentra en el array.");
}