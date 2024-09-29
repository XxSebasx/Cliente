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