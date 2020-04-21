let nameMethod = 'getSide'

class Square {
    constructor (side) {
        this.side = side
    }
    [nameMethod] () {
        return `El lado de el cuadro es: ${ this.side }`
    }
    getArea () {
        return Math.pow(this.side, 2)
    }
    static createInstance (side) {
        return new Square(side)
    }
}

let square = Square.createInstance(25)

console.log(square.getSide())

/**
El lado de el cuadro es: 25
 */
