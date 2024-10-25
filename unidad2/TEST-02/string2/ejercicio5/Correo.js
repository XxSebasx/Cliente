function determinarMail(correo) {
    return correo.includes("@");
}

let correo = prompt("Ingrese su correo electrónico:");
console.log(determinarMail(correo));

