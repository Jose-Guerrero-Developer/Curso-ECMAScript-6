let firstColor = ['rojo', ['verde', 'amarillo'], 'morado', 'naranja']

let [red, [green]] = firstColor
console.log(red, green)

let secondColor = ['rojo', 'verde', 'amarillo', 'morado', 'naranja']

let [yellow, ...otherColor] = secondColor

console.log(yellow, otherColor)

/**
rojo verde
rojo (4) ["verde", "amarillo", "morado", "naranja"]
 */
