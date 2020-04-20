let items = new Set([1, 2, 3, 4, 5, 6, 7, 7])

items.add(8)

console.log('items:', items)
console.log('items.size:', items.size)
console.log('items.has(5):', items.has(5))

/**
items: Set(8) {1, 2, 3, 4, 5, …}
items.size: 8
items.has(5): true
 */
