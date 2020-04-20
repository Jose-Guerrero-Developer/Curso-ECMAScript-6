let id     = Symbol.for('id')
let number = 10
let text   = '10'
let bool   = true
let nan    = NaN

console.log('bool + bool:', bool + bool)
console.log('bool + (!bool):', bool + (!bool))
console.log('number + text:', number + text)
console.log('number + Number(text):', number + Number(text))
console.log('number + nan:', number + nan)

console.log(`Mi símbolo es: ${ String(id) }`)

/**
bool + bool: 2
bool + (!bool): 1
number + text: 1010
number + Number(text): 20
number + nan: NaN
Mi símbolo es: Symbol(id)
 */
