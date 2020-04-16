function Person(name)
{
    if (typeof new.target === 'undefined') {
        throw new Error('Esta función, debe de ser instanciada')
    }
    this.name = name
}

let first  = new Person('Susana Alexandra López Medina')
console.log('first', first)

let second = Person.call(first, 'Paola Kamila López Medina')
console.log('second', second)

/**
first Person {name: "Susana Alexandra López Medina"}
Uncaught Error: Esta función, debe de ser instanciada
 */
