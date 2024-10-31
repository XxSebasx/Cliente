function obtenerLongitudCadena(array) {
    let arrayLongitud =[];
    for (let i = 0; i < array.length; i++) {
        arrayLongitud.push(array[i].length);
    }
    return arrayLongitud;
}

let array = ["Hola", "Mundo", "JavaScript"];
let arrayLongitud = obtenerLongitudCadena(array);

for (let i = 0; i < array.length; i++) {
    document.write(array[i] + " tiene " + arrayLongitud[i] + "<br>");   
}