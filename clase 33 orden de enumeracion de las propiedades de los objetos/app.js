let object = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1
}

object.d = 1
object['2'] = 1
object['a'] = 1

console.log('Object.keys(object):', Object.keys(object))
console.log('Object.getOwnPropertyNames(object).join():', Object.getOwnPropertyNames(object).join())
console.log('JSON.stringify(object):', JSON.stringify(object))

for (item in object) { console.log(item) }

/**
Object.keys(object): (10) ["0", "2", "3", "15", "c", "x", "r", "b", "d", "a"]
Object.getOwnPropertyNames(object).join(): 0,2,3,15,c,x,r,b,d,a
JSON.stringify(object): {"0":1,"2":1,"3":1,"15":1,"c":1,"x":1,"r":1,"b":1,"d":1,"a":1}
0
2
3
15
c
x
r
b
d
a
 */
