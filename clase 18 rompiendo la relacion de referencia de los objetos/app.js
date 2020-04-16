let personFirst = {
    age: 18,
    name: 'Susana Alexandra López Medina',
    cuty: 'Bogotá'
}

let personSecond  = personFirst
personSecond.name = 'Paola Kamila López Medina'

let personThird   = { ...personSecond }
personThird.name  = 'María Alejandra López Medina'

console.log(personFirst)
console.log(personSecond)
console.log(personThird)

/**
{age: 18, name: "Paola Kamila López Medina", cuty: "Bogotá"}
{age: 18, name: "Paola Kamila López Medina", cuty: "Bogotá"}
{age: 18, name: "María Alejandra López Medina", cuty: "Bogotá"}
 */
