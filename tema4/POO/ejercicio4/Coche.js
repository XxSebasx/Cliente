// 4.- Crea una clase donde demuestres la utilidad del objeto this.


// Clase Coche que representa un coche con marca, modelo y color
class Coche {
    #marca
    #modelo
    #color
    constructor(marca, modelo, color) {
        //Aqui usamos el this para asignar los atributos
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
    }

    //En los metodos get usamos el this para poder retornarlos
    getMarca() {
        return this.#marca;
    }

    getModelo() {
        return this.#modelo;
    }

    getColor() {
        return this.#color;
    }

    //En los metodos set usamos el this para poder modificar los valores
    setMarca(marca) {
        this.#marca = marca;
    }
    setModelo(modelo) {
        this.#modelo = modelo;
    }
    setColor(color) {
        this.#color = color;
    }

    //Este metodo muestra los detalles del coche y usamos el this para poder añadir los valores de los atributos a la cadena
    mostrarDetalles() {
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Color: ${this.#color}`);
    }
}

//Instanciamos un objeto de la clase Coche
const miCoche = new Coche("Toyota", "Corolla", "Blanco");

//Imprimimos los valores de los atributos
console.log(miCoche.getMarca()); 
console.log(miCoche.getModelo()); 
console.log(miCoche.getColor()); 

//Modificamos algunos valores
miCoche.setMarca("Ford");
miCoche.setModelo("Mustang");
miCoche.setColor("Negro");

//Imprimimos los valores de los atributos modificados
console.log(miCoche.getMarca()); 
console.log(miCoche.getModelo()); 
console.log(miCoche.getColor()); 

//Mostramos los detalles del coche
miCoche.mostrarDetalles(); 

