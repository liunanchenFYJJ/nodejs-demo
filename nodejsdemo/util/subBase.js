var util = require('util')
var Base = require('./util.inherits')

function subBase () {
    this.name = 'subBase'
    // this.base = 'SUBBASE'
}
// subBase.prototype.yuan = '$$'

util.inherits(subBase, Base)

var objBase = new Base()
console.log(objBase.name)//base
console.log(objBase.base)//1991
objBase.sayHello()//Hello base
objBase.showName()//show extra base
console.log(objBase.yuan)
console.log('<<<<<<<<<<<<<<<<')
var objsub = new subBase()
console.log(objsub.name)//subBase
console.log(objsub.base)//ubdefined
// objsub.sayHello()
objsub.showName()//show extra subname
console.log(subBase.yuan)

// Sub 仅仅继承了 Base 在原型中定义的函数，
// 而构造函数内部创造的 base 属性和 sayHello 函数都没有被 Sub 继承
