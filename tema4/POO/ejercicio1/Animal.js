// 1.- Crea una clase con dos propiedades y dos métodos donde se evidencien los conceptos de
// abstracción y encapsulamiento de la programación orientada a objetos. (Explica esos conceptos
// aplicados a esa clase).

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

    //metodos de la clase

    //Propiedad getter para el nombre de la clase abstracta
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

const perro = new Perro('Buddy', 'Perro');
console.log(perro.getNombre());
perro.ruido(); 
