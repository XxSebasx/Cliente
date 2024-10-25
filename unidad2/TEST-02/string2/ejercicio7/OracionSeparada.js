function mostrarOracion(cadena) {
    let lista = cadena.split(' ');
    lista.forEach(cadena => {
        console.log(cadena);
    });
}

let oracion = prompt("Ingrese una oración:");
mostrarOracion(oracion);