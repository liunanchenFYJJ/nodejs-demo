// nodejs 开发指南一书
// 创建一个http服务器
// 运行 node app.js
var http = require('http')

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>node.js</h1>');
    response.end('<p>hello node server123</p>');
}).listen(3000)

console.log('httpserver is listening @ port 3000')

// 最最简易的写法，记住固定格式
// tips: 安装supervisor。使用supervisor启动js文件可以实时刷新