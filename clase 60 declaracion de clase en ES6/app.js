/** ES6 */
class Person {
    constructor (name) {
        this.name = name
    }
    shoutOutName () {
        return this.name.toUpperCase()
    }
}


Person.prototype.sayName = function () {
    return this.name
}

var person = new Person('Susana Alexandra López Medina')

console.log('person.shoutOutName():', person.shoutOutName())
console.log('person.sayName():', person.sayName())

console.log('typeof Person:', typeof Person)
console.log('typeof Person.prototype.shoutOutName:', typeof Person.prototype.shoutOutName)

console.log('person instanceof Person:', person instanceof Person)
console.log('person instanceof Object:', person instanceof Object)

/**
person.shoutOutName(): SUSANA ALEXANDRA LÓPEZ MEDINA
person.sayName(): Susana Alexandra López Medina

typeof Person: function
typeof Person.prototype.shoutOutName: function

person instanceof Person: true
person instanceof Object: true
 */
