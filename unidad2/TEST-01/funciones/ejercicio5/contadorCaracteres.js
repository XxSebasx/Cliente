function contarLetra(cadena,letra) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] == letra){
            contador++;
        }
        
    }
    return contador;
}

console.log(contarLetra("hoola",'o'));