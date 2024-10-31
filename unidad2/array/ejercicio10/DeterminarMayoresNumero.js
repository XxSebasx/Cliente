function determinarMayorNumero(array,valor) {
    let sonMayores = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < valor) {
            sonMayores = false;
            break;
        } 
    }
    return sonMayores;
}

let sonMayores = determinarMayorNumero([11, 12, 13, 10, 5], 3); // true
if(sonMayores) {
    document.write("Todos los elementos del array son mayores que el valor dado.");
}else{
    document.write("Alguno o todos los elementos del array no son mayores que el valor dado.");
}