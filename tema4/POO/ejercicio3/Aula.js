// 3.- Diseña una jeraquía de clases donde Música y Tecnología sean clases derivadas de Aula, para
// modelar las instalaciones de un instituto de enseñanza secundaria. Elige un método con el que
// evidenciar el concepto del polimorfismo.


//Clase padre Aula
class Aula {
    constructor(capacidad, numero) {
        if(new.target === Aula){
            throw new Error('Esta clase no puede ser instanciada directamente');
        }
        this.capacidad = capacidad;
        this.numero = numero;
        this.alumnos = [];
    }


    //metodo abstracto
    comprarMaterial(){}


    
}


//Clases hijas
class Musica extends Aula {
    #instrumentos
    constructor(capacidad, numero) {
        super(capacidad, numero);
        this.#instrumentos = 0;
    }

    //metodo sobreescrito
    comprarMaterial(){
        console.log('Comprando instrumentos para la aula de música');
        this.#instrumentos++;
    }

    //get
    getInstrumentos(){
        return this.#instrumentos;
    }

    toString(){
        return `Aula de música tiene ${this.#instrumentos} instrumentos.`
    }
}

class Tecnologia extends Aula {
    #ordenadores
    constructor(capacidad, numero) {
        super(capacidad, numero);
        this.#ordenadores = 0;
    }

    //metodo sobreescrito
    comprarMaterial(){
        console.log('Comprando ordenadores para la aula de tecnología');
        this.#ordenadores++;
    }

    //get
    getOrdenadores(){
        return this.#ordenadores;
    }

    toString(){
        return `Aula de tecnología tiene ${this.#ordenadores} ordenadores.`
    }
}

const aulaMusica = new Musica(20, 101);
const aulaTecnologia = new Tecnologia(30, 202);

aulaMusica.comprarMaterial();
aulaTecnologia.comprarMaterial();

console.log(aulaMusica.toString());
console.log(aulaTecnologia.toString());