let id = Symbol.for('id')
let state = Symbol.for('state')

let person = {
    [id]: 1,
    [state]: true,
    age: 18,
    name: 'Susana Alexandra López Medina',
    city: 'Bogotá'
}

console.log('Object.keys(person):', Object.keys(person), '\n------------------------------------')

console.log('for in (key in person):')
for (key in person) {
    console.log(key, person[key])
}
console.log('------------------------------------')

let symbol = Object.getOwnPropertySymbols(person)
console.log('Object.getOwnPropertySymbols(person):', symbol, '\n------------------------------------')

console.log('for in (key in symbol):')
for (key in symbol) {
    console.log(symbol[key], Symbol.keyFor(symbol[key]))
}
console.log('------------------------------------')

/**
Object.keys(person): (3) ["age", "name", "city"] 
------------------------------------
for in (key in person):
age 18
name Susana Alexandra López Medina
city Bogotá
------------------------------------
Object.getOwnPropertySymbols(person): (2) [Symbol(id), Symbol(state)] 
------------------------------------
for in (key in symbol):
Symbol(id) "id"
Symbol(state) "state"
------------------------------------
 */
