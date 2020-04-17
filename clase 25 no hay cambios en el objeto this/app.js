/** ES5 */
var firstManager = {
    id: 1,
    init: function () {
        document.addEventListener('click', (function (event) {
            this.showPage(event.type)
        }).bind(this), false)
    },
    showPage: function (type) {
        console.log('First Manager ' + type + ' for id: ' + this.id)
    }
}

firstManager.init()

/** ES6 */
let secondManager = {
    id: 1,
    init: function () {
        document.addEventListener('click', event => this.showPage(event.type))
    },
    showPage: function (type) {
        console.log('Second Manager ' + type + ' for id: ' + this.id)
    }
}

secondManager.init()

/**
First Manager click for id: 1
Second Manager click for id: 1
 */