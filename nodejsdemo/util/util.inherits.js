var util = require('util')

function Base () {
    this.name = 'base'
    this.base = '1991'
    this.yuan = ' $$'
    this.sayHello = function () {
        console.log('Hello ' + this.name)
    }
}

Base.prototype.showName = function () {
    console.log('show extra ' + this.name + this.yuan)
}

module.exports = Base