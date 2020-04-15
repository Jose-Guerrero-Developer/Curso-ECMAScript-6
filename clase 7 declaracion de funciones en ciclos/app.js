let functions = new Array()

for (let i = 1; i <= 10; i++) {
    functions.push(function () { console.log(i) })
    // functions.push(
    //     (function (value) {
    //         return function () {
    //             console.log(value)
    //         }
    //     })(i)
    // )
}

functions.forEach(function (fun) {
    fun()
})

/**
1
2
3
4
5
6
7
8
9
10
 */
