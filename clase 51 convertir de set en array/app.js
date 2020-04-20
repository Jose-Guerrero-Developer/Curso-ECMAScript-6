const removeDuplicates = (items) => [... new Set(items)]

let numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9]
console.log('original:', numbers)

numbers = removeDuplicates(numbers)
console.log('sin duplicados:', numbers)

/**
original: (11) [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9]
sin duplicados: (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
