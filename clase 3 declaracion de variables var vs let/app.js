var message = 'Hola, buenos días'
console.log(message)

console.log(name)
var name = 'Susana Alexandra'

console.log(age)
let age = 18

if (10 > 5) {
    /** existe en el scope de el if */
    let city = 'Bogotá'
}

console.log(city)

/**
Hola, buenos días
Susana Alexandra
Uncaught ReferenceError: Cannot access 'age' before initialization
 */
