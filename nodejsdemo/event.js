// nodejs 所有的异步请求 都在完成是发送一个 事件 到 事件队列
// 这些事件由 EventEmitter 对象提供

var EventEmitter = require('events').EventEmitter
var event = new EventEmitter()

event.on('some_event', function () {
    console.log('some_event occured')
})
event.on('some-event2', function () {
    console.log('some2')
})

setTimeout(function () {
    event.emit('some_event')
}, 2000)

setTimeout(function () {
    event.emit('some-event2')
}, 5000)

// 在2000毫秒以后向event 对象发送事件 some_event，
// 此时会调用 some_event 的监听器