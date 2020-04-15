const person = {
    age: 18,
    name: 'Susuna Alexandra'
}
console.log(person)

person.name = 'Kamila Alexandra'
console.log(person)

/** esto no esta permitido, solo se pueden modificar las propiedades de el objeto más no toda la constante */
/*person = {
    age: 25,
    name: 'Paola Alejandra'
}*/

const TAX = 12.5
if (true) {
    const TAX = 13
    console.log('scope if', TAX)
}
console.log('scope global', TAX)

/**
{age: 18, name: "Susuna Alexandra"}
{age: 18, name: "Kamila Alexandra"}
scope if 13
scope global 12.5
 */
