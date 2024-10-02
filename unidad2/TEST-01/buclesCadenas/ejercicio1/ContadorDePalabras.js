let cadena = "manzana"
let cantidad = 0

for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == 'a') {
        cantidad++
    }
}

console.log("La letra 'a' aparece " + cantidad + " veces en la cadena.");