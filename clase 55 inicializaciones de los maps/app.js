let persons = new Map([
    ['age', 18],
    ['name', 'Susana Alexandra López Medina'],
    ['city', 'Bogotá']
])

console.log(persons)

persons.forEach((value, index, array) => {
    console.log(`index: ${ index } - value: ${ value } - array:`, array)
})

/**
Map(3) {"age" => 18, "name" => "Susana Alexandra López Medina", "city" => "Bogotá"}

index: age  - value: 18                            - array: Map(3) {"age" => 18, "name" => "Susana Alexandra López Medina", "city" => "Bogotá"}
index: name - value: Susana Alexandra López Medina - array: Map(3) {"age" => 18, "name" => "Susana Alexandra López Medina", "city" => "Bogotá"}
index: city - value: Bogotá                        - array: Map(3) {"age" => 18, "name" => "Susana Alexandra López Medina", "city" => "Bogotá"}
 */
