let name     = 'Susuna Alexandra'
let lastName = 'López Medina'

let nameFull = `${ name } ${lastName }`

function getNameFull() {
    return `${ name } ${lastName }`
}

console.log(nameFull)
console.log(`Obtener nombre completo: ${ getNameFull() }`)

/**
Susuna Alexandra López Medina
Obtener nombre completo: Susuna Alexandra López Medina
 */
