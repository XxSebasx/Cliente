function sumarNumeros() {
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let suma = num1 + num2;
    document.getElementById("result").innerHTML = "La suma es: " + suma;
}