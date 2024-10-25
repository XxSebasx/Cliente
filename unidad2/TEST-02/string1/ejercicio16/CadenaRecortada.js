let cadena = prompt("Ingrese una cadena:");

if(cadena.length > 10) {
    let cadenaCorta = cadena.substring(0, 10) + "...";
    console.log(cadenaCorta);
}