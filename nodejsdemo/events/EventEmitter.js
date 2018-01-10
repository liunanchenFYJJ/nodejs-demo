// events 是 Node.js 最重要的模块，没有“之一”，
// 原因是 Node.js 本身架构就是事件式的，而它提供了唯一的接口 
// events 模块只提供了一个对象： events.EventEmitter。
// EventEmitter 的核心就是事件发射与事件监听器功能的封装

// EventEmitter 的每个事件由一个事件名和若干个参数组成，
// 事件名是一个字符串，通常表达一定的语义。
// 对于每个事件，EventEmitter 支持若干个事件监听器。
// 当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

var events = require('events')

var emitter = new events.EventEmitter()

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listen1', arg1, arg2)
})

emitter.on('someEvent', function (arg3, arg4) {
    console.log('listen2', arg4, arg3)
})

emitter.emit('someEvent', 'byvoid', 1992)

// 具有某个实体功能的对象实现事件符合语义，事件的监听和发射应该是一个对象的方法。
// 其次 JavaScript 的对象机制是基于原型的，支持部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系