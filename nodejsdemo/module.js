/**
 * Created by https://github.com/liunanchenFYJJ on 2018/1/10.
 */

// 模块是 Node.js 应用程序的基本组成部分，文件和模块是一一对应的。
// 换言之，一个Node.js 文件就是一个模块，这个文件可能是 JavaScript 代码、JSON 或者编译过的 C/C++ 扩展

// 创建并加载模块 getmodule.js
var name

// 模块中的 name 不可能写死。所以设置名字
exports.setName = function (thename) {
    name = thename
}

exports.sayHello = function () {
    console.log('hello, ' + name)
}