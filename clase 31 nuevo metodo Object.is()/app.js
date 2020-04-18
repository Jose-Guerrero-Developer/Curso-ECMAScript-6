console.log(
    '+0 == -0:', +0 == -0
)
console.log(
    '+0 === -0:', +0 === -0
)
console.log(
    'Object.is(+0, -0):', Object.is(+0, -0), '\n----------------------------------'
)

console.log(
    'NaN == NaN:', NaN == NaN
)
console.log(
    'NaN === NaN:', NaN === NaN
)
console.log(
    'Object.is(NaN, NaN):', Object.is(NaN, NaN), '\n----------------------------------'
)

console.log(
    '5 == 5:', 5 == 5
)
console.log(
    '5 == \'5\':', 5 == '5'
)
console.log(
    '5 === 5:', 5 === 5
)
console.log(
    '5 === \'5\':', 5 === '5'
)
console.log(
    'Object.is(5, 5):', Object.is(5, 5)
)
console.log(
    'Object.is(5, \'5\'):', Object.is(5, '5')
)

/**
+0 == -0: true
+0 === -0: true
Object.is(+0, -0): false 
----------------------------------
NaN == NaN: false
NaN === NaN: false
Object.is(NaN, NaN): true 
----------------------------------
5 == 5: true
5 == '5': true
5 === 5: true
5 === '5': false
Object.is(5, 5): true
Object.is(5, '5'): false
 */
