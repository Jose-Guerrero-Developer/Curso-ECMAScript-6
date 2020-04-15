let unit = 5
let cost = 10

function editLabel(lietarales, ...replacements) {
    let result = ''
    for (let i = 0; i < replacements.length; i++) {
        result += lietarales[i]
        result += replacements[i]
    }
    return `${ result } pesos`
}

let message  = `${ unit } lapices cuestan ${ unit * cost } pesos`
let message2 = editLabel`${ unit } lapices cuestan ${ unit * cost } pesos`
console.log(message)
console.log(message2)

/**
5 lapices cuestan 50 pesos
5 lapices cuestan 50 pesos
 */
