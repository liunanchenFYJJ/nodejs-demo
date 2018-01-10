// util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法，
// 通常用于调试和错误输出
var util = require('util')

function Person () {
    this.name = 'byvoid'
    this.toString = function () {
        return this.name
    }
}

var p1 = new Person()
console.log(util.inspect(p1))
console.log(util.inspect(p1, true, 12, 'black'))