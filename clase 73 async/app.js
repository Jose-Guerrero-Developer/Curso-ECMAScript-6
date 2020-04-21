const greeting = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`¡buenas tardes!`)
        }, 3000)
    })
} 

const otherGreeting = async () => {
    return `Hola, ${ await greeting() }`
}

otherGreeting()
    .then(message => {
        console.log(message)
    })
.catch((error) => {
    console.error(error)
})

/**
Hola, ¡buenas tardes!
 */
