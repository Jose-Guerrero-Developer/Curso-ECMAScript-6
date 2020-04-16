/** ES5 */
console.log('ES5 ----------------------')
function addStudent () {
    console.log(arguments)
    for (let i = 1; i < arguments.length; i++) {
        arguments[0].push(arguments[i])
    }
    return arguments[0]
}

let first  = ['Susana Alexandra']
let result = addStudent(first, 'Paola Kamila', 'María Alejandra')

console.log(result)

/** ES6 */
console.log('ES6 ----------------------')
function addPersons (...persons) {
    return persons
}
console.log(addPersons('Kamila', 'Paola', 'Luisa', 'María'))

function sum(...[a = 1, b = 2, c = 3]) {
    return `La suma entre (${ a } + ${ b } + ${ c }) = ${ a + b + c }`
}
console.log(sum())
console.log(sum(5, 25, 50))

function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}
  
let arr = multiply(5, 1, 2, 3); 
console.log(arr);

/**
ES5 ----------------------
Arguments(3) [Array(1), "Paola Kamila", "María Alejandra", callee: ƒ, Symbol(Symbol.iterator): ƒ]
(3) ["Susana Alexandra", "Paola Kamila", "María Alejandra"]
ES6 ----------------------
(4) ["Kamila", "Paola", "Luisa", "María"]
La suma entre (1 + 2 + 3) = 6
La suma entre (5 + 25 + 50) = 80
(3) [5, 10, 15]
 */
