let vocales = ['a', 'e', 'i', 'o', 'u'];
let contador = 0
let cadena = "javascript";
for (const key in cadena) {
    if(vocales.includes(cadena[key].toLocaleLowerCase())){
        contador++
    }
}

console.log("Número de vocales en la cadena: " + contador);



