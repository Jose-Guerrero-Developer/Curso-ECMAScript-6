let persons = new Set(['Susana', 'Alexandra', 'kamila', 'Paola'])

persons.forEach((value, index, array) => {
    console.log(`value: ${ value } - index: ${ index } - array:`, array)
})

/**
value: Susana     - index: Susana     - array: Set(4) {"Susana", "Alexandra", "kamila", "Paola"}
value: Alexandra  - index: Alexandra  - array: Set(4) {"Susana", "Alexandra", "kamila", "Paola"}
value: kamila     - index: kamila     - array: Set(4) {"Susana", "Alexandra", "kamila", "Paola"}
value: Paola      - index: Paola      - array: Set(4) {"Susana", "Alexandra", "kamila", "Paola"}
 */
