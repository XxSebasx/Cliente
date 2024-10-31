function sumarElementos(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
	return sum;
}

document.write(sumarElementos([1, 2, 3, 4, 5]));

