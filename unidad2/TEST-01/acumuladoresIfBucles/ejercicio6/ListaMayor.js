function comprobarListas(lista1, lista2) {
    var sol = "Listas iguales";
    let valorLista1 = 0;
    let valorLista2 = 0;

    for (let i = 0; i < lista1.length; i++) {
        valorLista1 += lista1[i];
        valorLista2 += lista2[i];
    }

    if(valorLista1 > valorLista2){
        sol = "Lista 1 es mayor";
    }else if(valorLista2 > valorLista1){
        sol = "Lista 2 es mayor";
    }

    return sol;
}

let lista1 = [10, 2, 3];
let lista2 = [1,2,3,];

console.log(comprobarListas(lista1, lista2));

