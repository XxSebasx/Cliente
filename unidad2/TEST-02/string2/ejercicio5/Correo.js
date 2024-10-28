// Realizar un programa que permita cargar una dirección de mail e implementar
// una función que verifique si el String tiene cargado el carácter @.
function determinarMail(correo) {
    return correo.includes("@");
}

let correo = prompt("Ingrese su correo electrónico:");
document.write(determinarMail(correo));

