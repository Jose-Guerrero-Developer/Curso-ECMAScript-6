let personFirst = {
    age: 18,
    name: 'Susana Alexandra López Medina',
    cuty: 'Bogotá'
}

let personSecond  = {
    age: 25,
    name: 'Paola Kamila López Medina',
    city: 'Medellin',
    country: 'Colombia'
}

personFirst = { ...personSecond, ...personFirst }

let personThird = Object.assign(personSecond, {
    age: 20,
    name: 'María Alejandra López Medina'
})

console.log(personFirst)
console.log(personSecond)
console.log(personThird)
