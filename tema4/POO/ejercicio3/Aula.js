class Aula {
    constructor(capacidad, numero) {
        if(new.target === Aula){
            throw new Error('Esta clase no puede ser instanciada directamente');
        }
        this.capacidad = capacidad;
        this.numero = numero;
        this.alumnos = [];
    }

    comprarMaterial(){}


    
}

class Musica extends Aula {
    #instrumentos
    constructor(capacidad, numero) {
        super(capacidad, numero);
        this.#instrumentos = 0;
    }

    comprarMaterial(){
        console.log('Comprando instrumentos para la aula de música');
        this.#instrumentos++;
    }
}

class Tecnologia extends Aula {
    #ordenadores
    constructor(capacidad, numero) {
        super(capacidad, numero);
        this.#ordenadores = 0;
    }

    comprarMaterial(){
        console.log('Comprando ordenadores para la aula de tecnología');
        this.#ordenadores++;
    }
}

const aulaMusica = new Musica(20, 101);
const aulaTecnologia = new Tecnologia(30, 202);

aulaMusica.comprarMaterial();
aulaTecnologia.comprarMaterial();