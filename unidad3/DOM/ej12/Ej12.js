function crearTabla() {
    let contador = 0;
    let tabla = document.createElement('table');
    for (let i = 0; i < 100; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < 100; j++) {
            contador++;
            let celda = document.createElement('td');
            celda.textContent = contador;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    tabla.setAttribute('border', '1px')
    tabla.setAttribute('id', 'tabla');
    document.body.appendChild(tabla);
}

function calcular() {
    let celdas = document.getElementById('tabla').getElementsByTagName('td');
    for (let i = 0; i < celdas.length; i++) {
        let celda = celdas[i]
        let numero = parseInt(celda.textContent);
        if (numero > 2) {
            let divisibles = 0;
            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    divisibles++;
                }
            }
            if(divisibles === 1){
                celda.style.backgroundColor = 'yellow';
            }
        }

    }

}

crearTabla();
calcular();

