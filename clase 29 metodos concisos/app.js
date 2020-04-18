/** ES5 */
var person = {
    age: 18,
    name: 'Susana Alexandra López Medina',
    city: 'Bogotá',
    info: function () {
        return this.name + ' (' + this.age + ')' + this.city
    }
}

console.log(person.info())

/** ES6 */
var otherPerson = {
    age: 18,
    name: 'Susana Alexandra López Medina',
    city: 'Bogotá',
    info() {
        return `${ this.name } (${ this.age }) ${ this.city }`
    }
}

console.log(otherPerson.info())

/**
Susana Alexandra López Medina (18)Bogotá
Susana Alexandra López Medina (18)Bogotá
 */
