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

console.log(ingresarPalabras());