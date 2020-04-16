function sum (a, b) {
    console.log('sum arguments', arguments)
    return a + b
}

function mult (a = 5, b = 10) {
    console.log('mult arguments', arguments)
    return a * b
}

console.log(sum(5, 10))
console.log(mult())

/**
sum arguments Arguments(2) [5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
15
mult arguments Arguments [callee: (...), Symbol(Symbol.iterator): ƒ]
50
 */
