
class Animal{
    #nombre
    #especie

    constructor(nombre, especie){
        if(new.target === Animal){
            throw new Error('Esta clase no puede ser instanciada directamente')
        }
        this.#nombre = nombre
        this.#especie = especie
    }

    getNombre(){
        return this.#nombre
    }

    getEspecie(){
        return this.#especie
    }
    ruido() {};
}

class Perro extends Animal{
    constructor(nombre, especie){
        super(nombre, especie)
    }

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
console.log(perro.getNombre()); // Buddy


const gato = new Gato('Garfield', 'Gato');

console.log(gato.n); // Miau

