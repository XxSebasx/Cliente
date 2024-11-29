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
}

//Instanciamos un objeto de la clase Coche
const miCoche = new Coche("Toyota", "Corolla", "Blanco");

//Imprimimos los valores de los atributos
console.log(miCoche.getMarca()); //Toyota
console.log(miCoche.getModelo()); //Corolla
console.log(miCoche.getColor()); //Blanco

