// Igual al anterior, pero que termine la aplicación sin contemplar mayúsculas
// ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN.
function ingresarPalabras() {
	let contador = 0;
	while (true) {
		let palabra = prompt("Ingrese una palabra:").toLocaleUpperCase();
		if (palabra == "FIN") {
            break;
        }
		contador++;
		
	}
	return contador;
}

document.write(ingresarPalabras());