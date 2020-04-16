/** ES5 */
var numbers = [100, 200, 300, 450, 950]
var max     = Math.max.apply(Math, numbers)
console.log('ES5', max)

/** ES6 */
let numbers2 = new Array(100, 200, 300, 450, 950)
let max2     = Math.max(...numbers2)
console.log('ES6', max2)

/**
ES5 950
ES6 950
 */
