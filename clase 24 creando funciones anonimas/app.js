/** ES5 */
var firstMessage = (function (name) {
    return 'Hola, ' + name
})('Susana Alexandra López Medina')

console.log(firstMessage)

/** ES6 */
let secondMessage = (name => {
    return `Hola, ${ name }`
})('Paola Kamila López Medina')

console.log(secondMessage)

/**
Hola, Susana Alexandra López Medina
Hola, Paola Kamila López Medina
 */
