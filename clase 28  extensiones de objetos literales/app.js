/** ES5 */
var person = function (age, name, city) {
    return {
        age: age,
        name: name,
        city: city
    }
}

var susana = person(18, 'Susana Alexandra López Medina', 'Bogotá')
console.log(susana)

/** ES6 */
let otherPerson = (age, name, city) => ({
    age,
    name,
    city
})

let paola = otherPerson(19, 'Paola Kamila López Medina', 'Medellin')
console.log(paola)

/**
Objectage: 18city: "Bogotá"name: "Susana Alexandra López Medina"__proto__: Object
Objectage: 19city: "Medellin"name: "Paola Kamila López Medina"__proto__: Object
 */
