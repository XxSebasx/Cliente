function convertirMayuscula(cadena) {
	let nuevaCadena = cadena.slice(1,cadena.length).toLowerCase();
	let letra = cadena.charAt(0).toUpperCase();
	return letra + nuevaCadena;
}

console.log(convertirMayuscula("hola"));


