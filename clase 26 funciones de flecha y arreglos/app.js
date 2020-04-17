/** ES5 */
var arr = [5, 2, 8, 10, 52, 100]
console.log('arr:', arr)

var ordenES5 = arr.sort(function (a, b) {
    return a - b
})
console.log('ordenES5:', ordenES5)

/** ES6 */
let ordenES6 = arr.sort((a, b) => a - b)
console.log('ordenES6:', ordenES6)

/**
arr: (6) [5, 2, 8, 10, 52, 100]
ordenES5: (6) [2, 5, 8, 10, 52, 100]
ordenES6: (6) [2, 5, 8, 10, 52, 100]
 */
