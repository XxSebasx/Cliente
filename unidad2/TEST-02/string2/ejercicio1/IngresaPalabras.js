// Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin,
// y mostrar cuántos nombres se ingresaron.
function ingresarPalabras() {
	let contador = 0;
	while (true) {
		let palabra = prompt("Ingrese una palabra:");
		if (palabra == "FIN") {
            break;
        }
		contador++;
		
	}
	return contador;
}

document.write(ingresarPalabras());