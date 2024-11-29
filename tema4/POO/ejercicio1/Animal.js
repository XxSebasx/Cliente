
//Clase abstracta padre
class Animal{
    #nombre

    constructor(nombre, especie){
        //Condicion para evitar que se cree una instancia de la clase directamente
        if(new.target === Animal){
            throw new Error('Esta clase no puede ser instanciada directamente')
        }
        this.#nombre = nombre
    }

    getNombre(){
        return this.#nombre
    }

    //Metodo abstracto incializado
    ruido() {};
}

//Clases hijas
class Perro extends Animal{
    constructor(nombre, especie){
        //Llamamiento de los atributos del padre
        super(nombre, especie)
    }

    //metodo del padre sobreescrito
    ruido(){
        console.log('Guau!');
    }
}

class Gato extends Animal{
    constructor(nombre, especie){
        super(nombre, especie)
    }
    ruido(){
        console.log('Miau!');
    }
}

const perro = new Perro('Buddy', 'Perro');
console.log(perro.getNombre());
perro.ruido(); 



const gato = new Gato('Garfield', 'Gato');

console.log(gato.getNombre());
gato.ruido();

