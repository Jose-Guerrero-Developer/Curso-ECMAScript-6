const getUserById = (id, callback) => {
    const user = {
        id,
        name: 'Susuana Alexandra López Medina'
    }
    if (id > 100) {
        return callback(`Id ${ id}, no existe en el banco de datos`)
    }
    return callback(null, user)
}

getUserById(100, (error, user) => {
    if (error) {
        return console.error(error)
    }
    console.log(`Usuario: `, user)
})

/**
Usuario:  {id: 100, name: "Susuana Alexandra López Medina"}
 */
