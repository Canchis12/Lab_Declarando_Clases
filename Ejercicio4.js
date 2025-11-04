class Figura{
    constructor(color){
        this.color = color;
    }
    area(){
        return 0;
    }
}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area(){
        return `Area: ${this.base * this.altura}`
    }
}

class Circulo extends Figura{
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }
    area(){
        return Math.PI * this.radio ** 2;
    }
}

const rect1 = new Rectangulo("rojo", 5, 10);
const circ1 = new Circulo("azul", 7);

console.log(`Area del rectangulo (${rect1.color}): ${rect1.area()}`);
console.log(`Area del circulo (${circ1.color}): ${circ1.area().toFixed(3)}`);