let fruit = ['banano']
let [banano, pera = 'pera'] = fruit

console.log(banano, pera)

let person = {
    name: 'Susana Alexandra López Medina'
}
let { name, age = 18 } = person

console.log(name, age)

/**
banano pera
Susana Alexandra López Medina 18
 */
