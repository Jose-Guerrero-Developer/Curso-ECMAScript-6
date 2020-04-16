function greeting (message = 'Mensaje sin definir', time = 500) {
    // message = message || 'Mensaje sin definir'
    // message = typeof message !== 'undefined' ? message : 'Mensaje sin definir'
    setTimeout(function () {
        console.log(message)
    }, time)
}

greeting()

function print () {
    console.log('Función print')
}

var obj = { name: 'Susana Alexandra' }

function person (obj1 = print, obj2 = obj) {
    obj1()
    console.info(obj2)
}

person()

/**
Función print
{name: "Susana Alexandra"}
Mensaje sin definir
 */
