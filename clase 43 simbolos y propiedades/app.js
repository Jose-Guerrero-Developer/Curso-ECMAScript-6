let age        = Symbol()
let firstName  = Symbol('first name')
let secondName = Symbol('second name')

let person = {
    [secondName]: 'Alexandra'
}

person[firstName] = 'Susana'

console.log('person[firstName]:', person[firstName])
console.log('person[secondName]:', person[secondName])

console.log('age:', age)
console.log('firstName:', firstName)
console.log('secondName:', secondName)

let firstSymbol  = Symbol()
let secondSymbol = Symbol()

console.log('firstSymbol == secondSymbol:', firstSymbol == secondSymbol)
console.log('firstSymbol === secondSymbol:', firstSymbol === secondSymbol)
console.log('Object.is(firstSymbol, secondSymbol):', Object.is(firstSymbol, secondSymbol))

console.log('typeof firstSymbol:', typeof firstSymbol)

console.log('\'first name\' in person:', 'first name' in person)
console.log('person[firstName]:', person[firstName])

console.log(`Mi símbolo es: ${ firstSymbol }`)

/**
person[firstName]: Susana
person[secondName]: Alexandra
age: Symbol()
firstName: Symbol(first name)
secondName: Symbol(second name)
firstSymbol == secondSymbol: false
firstSymbol === secondSymbol: false
Object.is(firstSymbol, secondSymbol): falses
typeof firstSymbol: symbol
'first name' in person: false
person[firstName]: Susana
Uncaught TypeError: Cannot convert a Symbol value to a string at app.js:30
 */
