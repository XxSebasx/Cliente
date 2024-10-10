// 04 - operaciones-if-switch-for-while

// - Ejercicio 1: Sumar dos números
// - Escribe un programa que sume dos números.
function sumarNumeros() {
    let num1 = parseInt(prompt());
    let num2 = parseInt(prompt());;
    let suma = num1 + num2;
    alert("La suma es: " + suma)
}

// - Ejercicio 2: Verificar si un número es par o impar
// - Escribe un programa que verifique si un número es par o impar.
function verificar() {
    let numero = parseInt(prompt());
    let mensaje = "Es par";
    if(numero % 2!== 0) {
        mensaje = "Es impar";
    }
    alert(mensaje);
}

// - Ejercicio 3: Tabla de multiplicar
// - Escribe un programa que muestre la tabla de multiplicar del 5.
for (let index = 1; index <= 10; index++) {
    let multiplicacion = 5 * index;
    console.log(index + " x 5 = "  + multiplicacion);
}

// - Ejercicio 4: Calcular el factorial de un número
// - Escribe un programa que calcule el factorial de un número (en este caso, 6).
let multiplicacion = 1;
for (let index = 1; index <= 6; index++) {
    multiplicacion *= index;
}
console.log(multiplicacion);

// - Ejercicio 5: Convertir grados Celsius a Fahrenheit
// - Escribe un programa que convierta 25 grados Celsius a Fahrenheit.
function pasarAFarenheit(celsius) {
    let Faranhheit = (celsius * 9/5) + 32;
    return Faranhheit;
}

console.log(pasarAFarenheit(25));

// - Ejercicio 6: Comprobar si un número es positivo, negativo o cero
// - Escribe un programa que verifique si un número es positivo, negativo o cero.
function comprobarNumeros() {
    let n = parseInt(prompt());
    let result = "es 0";
    if(n > 0) {
        result = "es positivo"
    }else if(n < 0) {
        result = "es negativo"
    }

    console.log(result)
}

// - Ejercicio 7: Imprimir los números del 1 al 5
// - Escribe un programa que imprima los números del 1 al 5.
for (let index = 1; index <= 5; index++) {
    console.log(index);
}

// - Ejercicio 8: Sumar los números del 1 al 100
// - Escribe un programa que sume los números del 1 al 100.
suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i;
}

console.log(suma);

// - Ejercicio 9: Contar vocales en una palabra (sin entrada)
// - Escribe un programa que cuente cuántas vocales hay en la palabra "javascript".
let vocales = ['a', 'e', 'i', 'o', 'u'];
let contador = 0
let cadena2 = "javascript";
for (const key in cadena2) {
    if(vocales.includes(cadena2[key].toLocaleLowerCase())){
        contador++
    }
}

console.log("Número de vocales en la cadena: " + contador);

// - Ejercicio 10: Saludo personalizado (con entrada)
// Pide el nombre del usuario y muestra un saludo personalizado.
function saludar() {
    let usuario = prompt();
    console.log("Hola, " + usuario + "!");
}

// - Ejercicio 11: Sumar solo números pares hasta 50
// - Escribe un programa que sume todos los números pares desde 1 hasta 50.
let suma2 = 0;
for (let index = 1; index <= 50; index++) {
    if (index % 2 == 0) {
        suma2 += index;
    }
}

console.log(suma2);

// - Ejercicio 12: Convertir número a día de la semana
// - Escribe un programa que convierta un número (del 1 al 7) al día de la semana correspondiente.
function convertir() {
    let nDia = parseInt(prompt());
    switch (nDia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
    }
}

// - Ejercicio 13: Mayor entre tres números
// - Escribe un programa que muestre el mayor entre tres números.
function determinar() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let n3 = parseInt(document.getElementById("num3").value);

    if (n1 > n2 && n1 > n3) {
        document.getElementById("mayor").innerHTML = "El número mayor es: " + n1;
    }else if (n2 > n1 && n2 > n3) {
        document.getElementById("mayor").innerHTML = "El número mayor es: " + n2;
    }else if (n3 > n1 && n3 > n2) {
        document.getElementById("mayor").innerHTML = "El número mayor es: " + n3;
    }else{
        document.getElementById("mayor").innerHTML = "Los números son iguales";
    }
}

// - Ejercicio 14: Imprimir los números del 1 al 10 con un bucle `while`
// - Escribe un programa que use un bucle `while` para imprimir los números del 1 al 10.
n = 0;
while (n < 10) {
    n++;
    console.log(n)
}

// - Ejercicio 15: Imprimir los elementos de un array
// - Escribe un programa que cree un array con 5 elementos y luego imprima cada uno de ellos.
array = []
for (let index = 0; index <= 4; index++) {
    array[index] = index + 1;
}

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

// - Ejercicio 16: Números del 1 al 20 con un bucle `do-while`
// - Escribe un programa que use un bucle `do-while` para mostrar los números del 1 al 20.
let n = 1;
do {
    console.log(n);
    n++;           
} while (n <= 20);  

// - Ejercicio 17: Imprimir números del 1 al 10 en orden inverso
// - Escribe un programa que imprima los números del 1 al 10 en orden inverso.
for (let index = 10; index >= 0; index--) {
    console.log(index);
}

// - Ejercicio 18: Contar letras de una palabra
// - Escribe un programa que cuente cuántas letras tiene la palabra "computadora".
function contarLetras() {
    let letras = document.getElementById("frase").value
    document.getElementById("contador").innerHTML = letras.length;   
}

// - Ejercicio 19: Verificar si un número es divisible por 7
// - Escribe un programa que verifique si un número es divisible por 7.
function verificar() {
    let resultado = "No es divisible por 7";
    let numero = parseInt(document.getElementById("numero").value);
    if(numero % 7 == 0) {
       resultado = "Es divisible por 7";
    }
    document.getElementById("respuesta").innerHTML = resultado;
}

// - Ejercicio 20: Contar números pares e impares entre 1 y 20
// - Escribe un programa que cuente cuántos números pares e impares hay entre 1 y 20.
let pares = 0;
let impares = 0;

for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Pares: " + pares);
console.log("Impares: " + impares);

// 05 - cadenas-operaciones-bucles-anidados

// - Ejercicio 1: Contar cuántas veces aparece una letra en una palabra
// - Cuenta cuántas veces aparece la letra "a" en la palabra "manzana".
let cadena = "manzana"
let cantidad = 0

for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == 'a') {
        cantidad++
    }
}

console.log("La letra 'a' aparece " + cantidad + " veces en la cadena.");

// - Ejercicio 2: Determinar si un número es par o impar
// - Determina si el número 12 es par o impar utilizando el operador ternario.
let numero = 12;

let parOImpar = (numero % 2 == 0) ? "par" : "impar";

console.log("El número " + numero + " es " + parOImpar);

// - Ejercicio 3: Generar una tabla de multiplicar
// - Genera la tabla de multiplicar del número 7 del 1 al 10.
let numero = 7;

for (let index = 1; index <= 10; index++) {
    console.log(numero + " x " + index + " = " + (numero * index));
}

// - Ejercicio 4: Determinar si una palabra tiene una longitud par o impar
// - Verifica si la palabra "javascript" tiene una longitud par o impar utilizando el operador ternario.
let cadena = "javascript"
let resutado = (cadena.length %2 == 0) ? "par" : "impar";

console.log(resutado);

// - Ejercicio 5: Sumar los números pares entre 1 y 20
// - Suma todos los números pares entre 1 y 20.
let suma = 0;

for (let index = 1 + 1; index <= 20 + 1; index++) {
    suma += index;

}

console.log(suma);

// - Ejercicio 6: Pirámide de números
// - Genera una pirámide de números del 1 al 5.
let numeros = " ";
for (let index = 0; index < 5; index++) {
    numeros += (index + 1) + " ";
    console.log(numeros +  " ")
}

// - Ejercicio 7: Verificar si una palabra contiene más de 5 caracteres
// - Verifica si la palabra "hola" tiene más de 5 caracteres utilizando el operador ternario.
let cadena = "Hola";
let verificacion = (cadena.length > 5) ? "La cadena tiene más de 5 caracteres" : "La cadena tiene menos de 5 caracteres";
console.log(verificacion);

// - Ejercicio 8: Generar un cuadrado de asteriscos
// - Genera un cuadrado de asteriscos de 4x4.
let cadena = "*"
for (let index = 0; index < 4; index++) {
    let linea = "";
    for (let j = 0; j < 4; j++) {
        linea += cadena
    }
    document.write(linea + "<br>");
}

// - Ejercicio 9: Generar combinaciones de caracteres
// - Genera todas las combinaciones posibles de las letras "a", "b" y "c".
let letras = ['a', 'b', 'c'];
let combinaciones = [];

for (let i = 0; i < letras.length * (letras.length -1); i++) {
    let cadena = '';
    while (true) {
        cadena = letras[Math.floor(Math.random() * letras.length)] + letras[Math.floor(Math.random() * letras.length)];
        if(!combinaciones.includes(cadena) && cadena[0] != cadena[1]) {
            combinaciones.push(cadena);
            break;
        }
    }
}

console.log(combinaciones);

// - Ejercicio 10: Calcular el promedio de una lista de números
// - Calcula el promedio de los números 10, 20, 30, 40, y 50.
let lista = [10, 20, 30, 40, 50];
let suma = 0;
for (let index = 0; index < lista.length; index++) {
    suma += lista[index];
}

console.log(suma/lista.length);

// 06 - funciones

// - Ejercicio 1: Sumar los elementos de un array
// - Parámetros que recibe la función: el array
function sumarNumeros(array) {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma += array[index];
    }
    return suma
}

console.log(sumarNumeros([5,5,5]));

// - Ejercicio 2: Encontrar el valor mínimo en un array
// - Parámetros que recibe la función: el array
function encontrarMinimo(array) {
    let minimo = Number.MAX_VALUE;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < minimo) minimo = array[i];
    }
    return minimo;
}

console.log(encontrarMinimo([5,4,1]))

// - Ejercicio 3: Contar cuántos números de un array dado son mayores que un valor dado
// - Parámetros que recibe la función: el array y el valor dado
function contarNumerosMayor(array,valor) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > valor){
            contador++;
        }
    }
    return contador;
}

console.log(contarNumerosMayor([1,1,3], 2));

// - Ejercicio 4: Repetir una palabra n veces
// - Parámetros que recibe la función: una cadena y el número de veces
function repetirPalabra(cadena,nveces) {
    for (let i = 0; i < nveces; i++) {
        document.write(cadena + "<br>\n");
    }
}

repetirPalabra("hola",5)

// - Ejercicio 5: Contar las ocurrencias de una letra en una cadena
// - Parámetros que recibe la función: la cadena y la letra
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

// 07 - funciones y arrays

// 1. Duplicar los elementos de un array
// Crea una función que reciba un array de números y devuelva un nuevo array con cada número
// duplicado.
function duplicarArray(array){
    let arrayDuplicado = []
    for(let i = 0; i < array.length; i++){
        arrayDuplicado.push(array[i]);
        arrayDuplicado.push(array[i]);
    }
    return arrayDuplicado;
}

console.log(duplicarArray([1, 2, 3]))

// 2. Comprobar si un valor está en el array
// Escribe una función que reciba un array y un valor, y devuelva `true` si el valor está en el array, o
// `false` en caso contrario.
function comprobarValor(array,valor) {
    return array.includes(valor);
}

console.log(comprobarValor([1,2,3],2));

// 3. Contar números impares en un array
// Escribe una función que cuente cuántos números impares hay en un array.
function contarImpares(array){
    let contador = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2!= 0){
            contador++;
        }
    }
    return contador;
}

console.log(contarImpares([1, 2, 3, 4, 5]));

// 4. Suma de los cuadrados de los elementos
// Crea una función que devuelva la suma de los cuadrados de los números de un array.
function sumarCuadrados(array) {
    let sumaCuadrados = 0;
    for (let i = 0; i < array.length; i++) {
        sumaCuadrados += array[i] ** 2;
    }
    return sumaCuadrados;
}

console.log(sumarCuadrados([2,2]));

// 5. Obtener los primeros `n` elementos de un array
// Escribe una función que reciba un array y un número `n`, y devuelva los primeros `n` elementos del
// array.
function obtenerLosPrimeros(array,n) {
    let arrayPrimeros = [];
    for (let i = 0; i < n; i++) {
        arrayPrimeros.push(array[i]);
    }
    return arrayPrimeros;
}

console.log(obtenerLosPrimeros([1,2,3],2))