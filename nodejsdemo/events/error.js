// 我们一般要为会发射 error事件的对象设置监听器，避免遇到错误后整个程序崩溃。

var events = require('events')

var emitter = new events.EventEmitter()

emitter.emit('error')