// 看在 node.js 中如何异步读取文件
var fs = require('fs')

fs.readFile('app.js', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})
console.log('end')

// 异步与同步的区别在于：异步先打印‘end’,再打印内容
// 同步则是按顺序进行
// 原因：事件驱动型：发送事件到事件队列 异步i/o 结合回调函数（err, data）固定写法：见注释