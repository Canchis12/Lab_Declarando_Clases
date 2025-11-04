class Empleado{
    constructor(nombre, edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }
    calcularSalario(){
        return(`Salario Base: ${this.salarioBase}`)
    }
}

    class Gerente extends Empleado{
        constructor(nombre, edad, salarioBase, bonificacion){
            super(nombre, edad, salarioBase)
            this.bonificacion = bonificacion;
        }
        calcularSalario(){
            return `Salario Total: ${this.salarioBase + this.bonificacion}`;
        }
    }

class Desarrollador extends Gerente{
    constructor(nombre, edad, salarioBase, bonificacion, lenguaje){
        super(nombre, edad, salarioBase, bonificacion,)
        this.lenguaje = lenguaje;
    }
    calcularSalario(){
        return(`Salario Base: ${this.salarioBase}`)
    }
}

const empleado1 = new Empleado("Luis", 30, 2000);
const gerente1 = new Gerente("Ana", 40, 3000, 1000);
const desarrollador1 = new Desarrollador("Carlos", 25, 2500, "JavaScript");

console.log(`${empleado1.nombre} gana $${empleado1.calcularSalario()}`);
console.log(`${gerente1.nombre} gana $${gerente1.calcularSalario()}`);
console.log(`${desarrollador1.nombre} gana $${desarrollador1.calcularSalario()}`);