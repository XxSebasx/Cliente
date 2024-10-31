function transformarMayusculas(array) {
    let arrayMayusculas = [];
    for (let i = 0; i < array.length; i++) {
        arrayMayusculas.push(array[i].toUpperCase());
    }
    return arrayMayusculas;
}

let array = ["hola", "mundo", "javascript"];
let arrayMayusculas = transformarMayusculas(array);

for (let i = 0; i < array.length; i++) {
    document.write(arrayMayusculas[i] + "<br>");   
}