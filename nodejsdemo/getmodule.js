/**
 * Created by https://github.com/liunanchenFYJJ on 2018/1/10.
 */

// 使用自定义模块module.js
// var mymodule = require('./module')

//  使用自定义对象模块singleton.js
//  注意使用方法不同！
// var Mymodule = require('./singleobj').Hello
var Mymodule = require('./singleobj')
var mymodule = new Mymodule()



mymodule.setName('jeremy')
// 单次加载
mymodule.setName('jeremy22')

mymodule.sayHello()