let items = new Set([1, 2, 3, 4, 5, 6, 7])

console.log('items:', items)
console.log('items.size:', items.size, '\n-----------------------------')

items.delete(5)

console.log('items:', items)
console.log('items.size:', items.size, '\n-----------------------------')

items.clear()

console.log('items:', items)
console.log('items.size:', items.size)

/**
items: Set(7) {1, 2, 3, 4, 5, …}
items.size: 7 
-----------------------------
items: Set(6) {1, 2, 3, 4, 6, …}
items.size: 6 
-----------------------------
items: Set(0) {}
items.size: 0
 */
