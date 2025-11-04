class Producto{
    constructor(nombre, marca, precio){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
    descripcion(){
        return `Producto: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`;
    }
}
class Telefono extends Producto{
    constructor(nombre, marca, precio, almacenamiento, ram){
        super(nombre, marca, precio)
        this.almacenamiento = almacenamiento;
        this.ram = ram;
        }
    
    descripcion(){
        return `${super.descripcion()}, Almacenamiento: ${this.almacenamiento}GB, RAM: ${this.ram}GB`;
    }
}

class Laptop extends Producto{
    constructor(nombre, marca, precio, procesador, pulgadas){
        super(nombre, marca, precio)
        this.procesador = procesador;
        this.pulgadas = pulgadas;
        }
    
    descripcion(){
        return `${super.descripcion()}, Procesador: ${this.procesador}, Pantalla: ${this.pulgadas}"`;
    }
}

const telefono1 = new Telefono("Galaxy S22", 1200, "Samsung", 256, 8);
const laptop1 = new Laptop("MacBook Pro", 2500, "Apple", "M2", 14);

console.log(telefono1.descripcion());
console.log(laptop1.descripcion());