// Ejercicio 2: Redondeo de Número
// Enunciado
// Escribe un programa que reciba un número decimal e imprima el número
// redondeado al entero más cercano.
let nDecima = parseFloat(prompt("Dime un decimal"));
let nEntero = Math.round(nDecima);
document.write(nEntero);