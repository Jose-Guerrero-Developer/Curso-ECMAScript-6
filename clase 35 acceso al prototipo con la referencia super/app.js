let person = {
    greeting() {
        return `Hola`
    }
}

let otherPerson = {
    greeting() {
        //return `${ Object.getPrototypeOf(this).saludar.call(this) } saludos!`
        return `${ super.greeting() } saludos!`
    }
}

//Object.setPrototypeOf(otherPerson, person)

console.log(otherPerson.greeting())
