let sum = (a, b ) => (a + b)

console.log('typeof sum:', typeof sum)
console.log('sum instanceof Function:', sum instanceof Function)

// let sum2 = new sum(20, 25)

function example (c, d) {
    return ((a, b) => arguments)(c, d)
}
console.log(example(35, 55))

/**
typeof sum: function
sum instanceof Function: true
Arguments(2) [35, 55, callee: ƒ, Symbol(Symbol.iterator): ƒ]
 */
