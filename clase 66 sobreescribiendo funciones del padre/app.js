class Retangulo {
    constructor (high, long) {
        this.high = high
        this.long = long
    }
    getArea () {
        return `Retangulo: ${ (this.high * this.long) }`
    }
}

class Cuadrado extends Retangulo {
    constructor (high) {
        super(high, high)
    }
    getArea () {
        // return super.getArea()
        return `Cuadrado: ${ (this.high * this.long) }`
    }
}

let retangulo = new Retangulo(3, 2)
let cuadrado  = new Cuadrado(5)

console.log(cuadrado.getArea())

/**
Cuadrado: 25
 */
