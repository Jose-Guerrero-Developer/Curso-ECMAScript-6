/** ES5 */
function Person (name) {
    this.name = name
    this.shoutOutName = function () {
        return this.name.toUpperCase()
    }
}

Person.prototype.sayName = function () {
    return this.name
}

var person = new Person('Susana Alexandra López Medina')

console.log('person.shoutOutName():', person.shoutOutName())
console.log('person.sayName():', person.sayName())

console.log('person instanceof Person:', person instanceof Person)
console.log('person instanceof Object:', person instanceof Object)

/**
person.shoutOutName(): SUSANA ALEXANDRA LÓPEZ MEDINA
person.sayName(): Susana Alexandra López Medina
person instanceof Person: true
person instanceof Object: true
 */
