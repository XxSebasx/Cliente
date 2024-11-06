let n = prompt("Dime un numero")
function mostrarSuma(numero) {
    let suma = 0
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i]);
    }
    return suma
}

document.write(`La suma de los digitos del numero ${n} es: ${mostrarSuma(n)}`)