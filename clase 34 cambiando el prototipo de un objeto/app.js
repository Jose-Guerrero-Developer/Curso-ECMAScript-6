let cat = {
    sound() {
        return `miau!`
    },
    shriek() {
        return `MIAU!!!!`
    }
}

let dog = {
    sound: () =>  `guau`
}

let angora = Object.create(cat)

console.log('Object.getPrototypeOf(angora) === cat:', Object.getPrototypeOf(angora) === cat)
console.log(angora.sound())
console.log(angora.shriek())

Object.setPrototypeOf(angora, dog)

console.log('Object.getPrototypeOf(angora) === cat:', Object.getPrototypeOf(angora) === cat)
console.log(angora.sound())
console.log(angora.shriek())

/**
Object.getPrototypeOf(angora) === cat: true
miau!
MIAU!!!!
Object.getPrototypeOf(angora) === cat: false
guau
Uncaught TypeError: angora.shriek is not a function
 */
