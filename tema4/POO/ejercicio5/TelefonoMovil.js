// 5.- Crea una clase para modelar un objeto TeléfonoMóvil que tenga al menos estas propiedades:
// CPU, RAM, Almacenamiento, Ancho, Alto y numCámaras. Añade también un método llamado
// toString() que muestre en pantalla la información del objeto creado. Crea cuatro objetos con
// distintos números de parámetros en la creación y muestra en pantalla la información de cada
// objeto.

//Creacion de la clase
class TelefonoMovil {
    #CPU;
    #RAM;
    #almacenamiento;
    #ancho;
    #alto;
    #numCamaras;


  constructor(CPU, RAM, almacenamiento, ancho, alto, numCamaras) {
    this.#CPU = CPU;
    this.#RAM = RAM;
    this.#almacenamiento = almacenamiento;
    this.#ancho = ancho;
    this.#alto = alto;
    this.#numCamaras = numCamaras;
  }

  //metodo toString para mostrar la cadena con los detalles del objeto
  toString() {
    return `
      CPU: ${this.#CPU},
      RAM: ${this.#RAM},
      Almacenamiento: ${this.#almacenamiento},
      Ancho: ${this.#ancho}mm,
      Alto: ${this.#alto}mm,
      Número de cámaras: ${this.#numCamaras}
    `;
  }
}

//Creacion y muestra de objetos con distintos números de parámetros en la creación
const telefono1 = new TelefonoMovil("Snapdragon 7850", "8GB", "128GB", 6.7, 6.9, 12);
console.log(telefono1.toString());

const telefono2 = new TelefonoMovil("Exynos 2100", "6GB", "64GB", 6.8, 7.2, 10);
console.log(telefono2.toString());

const telefono3 = new TelefonoMovil("HiSilicon Kirin 980", "12GB", "256GB", 6.9, 7.3, 16);
console.log(telefono3.toString());

const telefono4 = new TelefonoMovil("Qualcomm Snapdragon 888", "10GB", "128GB", 7.1, 7.4, 12);
console.log(telefono4.toString());