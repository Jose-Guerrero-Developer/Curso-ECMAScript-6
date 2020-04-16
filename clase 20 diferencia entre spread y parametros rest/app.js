function rest (greeting, ...names)
{
    let result = greeting
    for (name of names) {
        result += `, ${ name }` 
    }
    return result
}

/** parametro rest */
console.log(rest(
    '¡Hola! buenas días',
    'Susana',
    'Alexandra',
    'Paola',
    'Kamila',
    'María',
    'Alejandra'
))

/** operador spread */
let persons = [
    'Susana',
    'Alexandra',
    'Paola',
    'Kamila',
    'María',
    'Alejandra'
]
console.log(rest('¡Hola! buenas tardes', ...persons))

console.log('[]:', ...[ 'Alex', 'María', true, 10, {}, [], function() {} ])
console.log('{}:', ...[ {name: 'Alex'}, {name: 'María'} ])

let parts = ['Brazos', 'Piernas']
let body  = ['Cabeza', 'Cuello', ...parts, 'Pies', 'Manos']
console.log(body)

/**
¡Hola! buenas días, Susana, Alexandra, Paola, Kamila, María, Alejandra
¡Hola! buenas tardes, Susana, Alexandra, Paola, Kamila, María, Alejandra
[]: Alex María true 10 {} [] ƒ () {}
{}: {name: "Alex"} {name: "María"}
(6) ["Cabeza", "Cuello", "Brazos", "Piernas", "Pies", "Manos"]
 */
