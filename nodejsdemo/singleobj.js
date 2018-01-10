/**
 * Created by https://github.com/liunanchenFYJJ on 2018/1/10.
 */
// 封装一个对象到 getmodule.js中使用
function Hello() {
    var name

    this.setName = function (thename) {
        name = thename
    }
    this.sayHello = function () {
        console.log('hello, ' + name)
    }
}

// exports.Hello = hello
// 或者
module.exports = Hello
//       一般用大写，区分封装的对象