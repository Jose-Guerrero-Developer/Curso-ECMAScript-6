/** ES5 */
function mix (receiver, donate) {
    Object.keys(donate).forEach(function (key) {
        receiver[key] = donate[key]
    })
    return receiver
}

var receiver = {}
var donate   = {
    age: 18,
    name: 'Susana Alexandra López Medina',
    city: 'Bogotá',
    get info() {
        return this.name + ' (' + this.age + ') ' + this.city 
    }
}
var result = mix(receiver, donate)
console.log('ES5:', result)

/** ES6 */
let person = Object.assign(donate)
console.log('ES6:', person)

/**
ES5: 
{age: 18, name: "Susana Alexandra López Medina", city: "Bogotá", info: "Susana Alexandra López Medina (18) Bogotá"}
age: 18
city: "Bogotá"
info: "Susana Alexandra López Medina (18) Bogotá"
name: "Susana Alexandra López Medina"
__proto__: Object

ES6: 
{age: 18, name: "Susana Alexandra López Medina", city: "Bogotá"}
age: 18
city: "Bogotá"
info: (...)
name: "Susana Alexandra López Medina"
get info: ƒ info()
__proto__: Object
 */
