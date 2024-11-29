
class Telefono{
    constructor(marca, modelo, color){
        if(new.target === Telefono){
            throw new Error('Esta clase no puede ser instanciada directamente');
        }
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    llamar(numero){}
}

class Movil extends Telefono{
    constructor(marca, modelo, color, numero){
        super(marca, modelo, color);
        this.numero = numero;
    }
    llamar(numero){
        console.log(`Llamando al ${this.numero}...`);
    }
}

class Fijo extends Movil{
    constructor(marca, modelo, color, numero, areaCode){
        super(marca, modelo, color, numero);
        this.areaCode = areaCode;
    }
    llamar(numero){
        console.log(`Llamando al ${this.areaCode}-${this.numero}...`);
    }
}

const movil1 = new Movil('Samsung', 'Galaxy S20', 'Negro', '555-1234');
movil1.llamar('555-5678');

const fijo1 = new Fijo('T-Mobile', 'Nexus 5', 'Rojo', '555-9012', '555');
fijo1.llamar('555-9012');

