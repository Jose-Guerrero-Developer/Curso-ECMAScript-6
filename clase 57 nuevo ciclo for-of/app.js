let numbers = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (key in numbers) {
    console.log(numbers[key])
}

for (number of numbers) {
    console.log(number)
}

let personsSet = new Set([
    {age: 18, name: 'Susana Alexandra López Medina', city: 'Bogotá'},
    {age: 25, name: 'Paola Kamila López Medina', city: 'Medellin'},
])

let personMap = null

for (let person of personsSet) {
    personMap = new Map([
        ['age', person.age],
        ['name', person.name],
        ['city', person.city]
    ])
    console.log(`${ person.name } (${ person.age }), ${ person.city }`)
}

console.log(personMap)

/**
1
2
3
4
5
6
7
1
2
3
4
5
6
7
1
2
3
4
5
6
7
Susana Alexandra López Medina (18), Bogotá
Paola Kamila López Medina (25), Medellin
Map(3) {"age" => 25, "name" => "Paola Kamila López Medina", "city" => "Medellin"}
 */
