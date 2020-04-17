/** ES5 */
var myFunction = function (value) {
    return value
}

var sum = function (a, b) {
    return (a + b)
}

var greeting = function () {
    return 'Hola, buenos días'
}

var greetingPerson = function (name) {
    var result = 'Hola, ' + name
    return result
}

var getBook = function (id) {
    return {
        id: id,
        name: 'Libros de programación cuantica'
    }
}

/** ES6 */
let myFunction = value => value

let sum = (a + b) => (a + b)

let greeting = () => {
    return `Hola, buenos días`
}

let greetingPerson = name => {
    let result = `Hola, ${ name }`
    return result
}

let getBook = id => ({
    id,
    name: 'Libros de programación cuantica'
})
