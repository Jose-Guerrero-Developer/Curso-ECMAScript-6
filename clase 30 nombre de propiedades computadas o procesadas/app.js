/** ES5 */
var person   = {}
var lastName =  'lastName'

person['first name'] = 'Susana Alexandra'
person[lastName]     = 'López Medina'

console.log(person['first name'])
console.log(person[lastName])

person = {
    'first name': 'Kamila Alejandra López Medina'
}
console.log(person)

/** ES6 */
let otherPerson = {
    'first name': 'Luisa María',
    [lastName]  : 'López Medina' 
} 

console.log(otherPerson['first name'])
console.log(otherPerson[lastName])

let sub = 'name'

otherPerson = {
    [`first ${ sub }`]: 'Kamila Paola',
    [`second ${sub }`]: 'López Medina'
}

console.log(otherPerson['first name'])
console.log(otherPerson[`second ${ sub }`])

/**
Susana Alexandra
López Medina
{first name: "Kamila Alejandra López Medina"}
Luisa María
López Medina
Kamila Paola
López Medina
 */
