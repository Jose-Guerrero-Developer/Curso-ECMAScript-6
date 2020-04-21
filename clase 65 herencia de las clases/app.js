class Retangulo {
    constructor (high, long) {
        this.high = high
        this.long = long
    }
    getArea () {
        return this.high * this.long
    }
}

class Cuadrado extends Retangulo {
    constructor (high) {
        super(high, high)
    }
}

let retangulo = new Retangulo(3, 2)
let cuadrado  = new Cuadrado(5)

console.log('retangulo.getArea():', retangulo.getArea())
console.log('cuadrado.getArea():', cuadrado.getArea())

/**
retangulo.getArea(): 6
cuadrado.getArea(): 25
 */
