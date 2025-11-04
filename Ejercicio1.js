class Vehiculo{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerDetalles(){
        return(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`)
    }
}
class Coche extends Vehiculo{
    constructor(marca, modelo, año, numeroPuertas){
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
    }
    
}
class Moto extends Vehiculo{
    constructor(marca, modelo, año, cilindraje){
        super(marca, modelo, año);
        this.cilindraje = cilindraje;
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Cilindraje: ${this.cilindraje}`;
    }
    
}

const miCoche = new Coche("Toyota", "Corolla", 2022, 4);
const miMoto = new Moto("Yamaha", "R3", 2023, 321);


console.log(miCoche.obtenerDetalles());
console.log(miMoto.obtenerDetalles());