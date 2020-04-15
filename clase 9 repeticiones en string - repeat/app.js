var message = 'Hola, buenos días'
console.log(message.repeat(2), '\n---------------------------------------')

const spaces  = 30
const persons = [
    {
        age: 18, name: 'Susana Alexandra López Medina', city: 'Bogotá'
    },
    {
        age: 25, name: 'Paola Kamila López Medina', city: 'Medellin'
    }
]

for (const person of persons) {
    let nameDifference = (spaces - person.name.length)
    console.log(`${ person.name }${ ' '.repeat(nameDifference) }(${ person.age }), ${ person.city }`)
}

console.log('---------------------------------------')

persons.forEach(function (person, index, array) {
    let nameDifference = (spaces - person.name.length)
    console.log(`${ person.name }${ ' '.repeat(nameDifference) }(${ person.age }), ${ person.city }`)
})

/**
Hola, buenos díasHola, buenos días 
---------------------------------------
Susana Alexandra López Medina (18), Bogotá
Paola Kamila López Medina     (25), Medellin
---------------------------------------
Susana Alexandra López Medina (18), Bogotá
Paola Kamila López Medina     (25), Medellin
 */
