for (var i = 1; i <= 10; i++) {
    console.log('i:', i)
}
console.log('i scope global', i)

for (let j = 1; j <= 10; j++) {
    console.log('j:', j)
}
/** j solo existe en el scope de for */
console.log('scope de j en for', j)

/**
i: 1
i: 2
i: 3
i: 4
i: 5
i: 6
i: 7
i: 8
i: 9
i: 10
i scope global 11
j: 1
j: 2
j: 3
j: 4
j: 5
j: 6
j: 7
j: 8
j: 9
j: 10
Uncaught ReferenceError: j is not defined
 */
