//2.- Escribe un programa con herencia de clases que permita modelar los objetos Teléfono, Fijo y
// Móvil, de manera que Teléfono sea la clase madre, y Fijo y Móvil, clases derivadas.

//Clase padre telefono
class Telefono{
    #marca;
    #modelo;
    #color;
    #numero
    constructor(marca, modelo, color,numero){
        if(new.target === Telefono){
            throw new Error('Esta clase no puede ser instanciada directamente');
        }
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#numero = numero;
    }

    //getters
    getMarca(){
        return this.#marca;
    }
    getModelo(){
        return this.#modelo;
    }
    getColor(){
        return this.#color;
    }

    getNumero(){
        return this.#numero;
    }


    llamar(numero){}
}

//Clases hijas
class Movil extends Telefono{
    constructor(marca, modelo, color, numero){
        super(marca, modelo, color,numero);
    }
    llamar(){
        console.log(`Llamando al ${this.getNumero()}`);
    }
}

class Fijo extends Movil{
    #areaCode;
    constructor(marca, modelo, color,numero,areaCode){
        super(marca, modelo, color,numero);
        this.#areaCode = areaCode;
    }
    llamar(){
        console.log(`Llamando al ${this.#areaCode}-${this.getNumero()}`);
    }
}

//Instanciamos objetos
const movil = new Movil('Samsung', 'Galaxy S21', 'Negro', '6543210987');
movil.llamar();

const fijo = new Fijo('T-Mobile', 'iPhone 13 Pro Max', 'Gris', '5555555555', '555');
fijo.llamar();




