class Square {
    constructor (side) {
        this.side = side
    }
    getArea () {
        return Math.pow(this.side, 2)
    }
}

printSquare = (square) => {
    if (! square instanceof Square)
    {
        console.error('Es necesario pasar una instancia de la clase cuadro')
        return
    }
    return `Calculo de área es: ${ square.getArea() }`
}

let table = new Square(25)

console.log(printSquare(table))

/**
Calculo de área es: 625
 */
