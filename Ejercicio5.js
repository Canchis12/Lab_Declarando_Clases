class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
        return `Grrrrr`;
    }
}
class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    emitirSonido(){
        return `Guaauu`;
    }
}

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    emitirSonido(){
        return `Miau`;
    }
}

const perro1 = new Perro("Max", 5);
const gato1 = new Gato("Luna", 3);

console.log(`${perro1.nombre} dice: ${perro1.emitirSonido()}`);
console.log(`${gato1.nombre} dice: ${gato1.emitirSonido()}`);

