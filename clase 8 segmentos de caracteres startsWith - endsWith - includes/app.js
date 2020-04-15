var message = 'Hola, buenos días'

console.log('message.substr(0, 1) === \'H\' :', message.substr(0, 1) === 'H')

console.log('message.startsWith(\'H\') :', message.startsWith('H'))
console.log('message.startsWith(\'Hola\') :', message.startsWith('Hola'))
console.log('message.endsWith(\'días\') :', message.endsWith('días'))

console.log('message.includes(\'í\') :', message.includes('í'))

console.log('message.startsWith(\'buenos\', 6) :', message.startsWith('buenos', 6))
console.log('message.includes(\'buenos\', 6) :', message.includes('buenos', 6))

/**
message.substr(0, 1) === 'H'    : true
message.startsWith('H')         : true
message.startsWith('Hola')      : true
message.endsWith('días')        : true
message.includes('í')           : true
message.startsWith('buenos', 6) : true
message.includes('buenos', 6)   : true
 */
