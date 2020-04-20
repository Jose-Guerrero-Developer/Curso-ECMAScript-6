let person = new Map()

person.set('age', 18)
person.set('name', 'Susana Alexandra López Medina')

console.log('person:', person)
console.log('person.size:', person.size, '\n---------------------------------------')

console.log('person.get(\'age\'):', person.get('age'))
console.log('person.get(\'name\'):', person.get('name'))
console.log('person.get(\'city\'):', person.get('city'))
console.log('person.has(\'city\'):', person.has('city'), '\n---------------------------------------')

person.clear()

console.log('person:', person)
console.log('person.size:', person.size)

/**
person: Map(2) {"age" => 18, "name" => "Susana Alexandra López Medina"}
person.size: 2 
---------------------------------------
person.get('age'): 18
person.get('name'): Susana Alexandra López Medina
person.get('city'): undefined
person.has('city'): false 
---------------------------------------
person: Map(0) {}
person.size: 0
*/
