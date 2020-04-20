let userID = Symbol.for('userID')
let object = {}

object[userID] = '12345'

console.log('userID:', userID)
console.log('object[userID]:', object[userID])

let secondUserID = Symbol.for('userID')

console.log('userID == secondUserID:', userID == secondUserID)
console.log('userID === secondUserID:', userID === secondUserID)
console.log('Object.is(userID, secondUserID):', Object.is(userID, secondUserID))

console.log('secondUserID:', secondUserID)
console.log('object[secondUserID]:', object[secondUserID])

let id = Symbol.for('id unique')
console.log('Symbol.keyFor(id):', Symbol.keyFor(id))

let id2 = Symbol.for('id unique')
console.log('Symbol.keyFor(id2):', Symbol.keyFor(id2))

let id3 = Symbol('id unique')
console.log('Symbol.keyFor(id3):', Symbol.keyFor(id3))

/**
userID: Symbol(userID)
object[userID]: 12345
userID == secondUserID: true
userID === secondUserID: true
Object.is(userID, secondUserID): true
secondUserID: Symbol(userID)
object[secondUserID]: 12345
Symbol.keyFor(id): id unique
Symbol.keyFor(id2): id unique
Symbol.keyFor(id3): undefined
 */
