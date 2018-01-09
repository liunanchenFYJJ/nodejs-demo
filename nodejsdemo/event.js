// nodejs 所有的异步请求 都在完成是发送一个 事件 到 事件队列
// 这些事件由 EventEmitter 对象提供

// var EventEmitter = require('events').EventEmitter
// var event = new EventEmitter()

// event.on('some_event', function () {
//     console.log('some_event occured')
// })

// setTimeout(Function () {
//     event.emit('some_event')
// }, 1000)

// 报错？