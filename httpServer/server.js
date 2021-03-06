// /**
//  * Created by https://github.com/liunanchenFYJJ on 2018/1/3.
//  *
//  * http服务器模块
//  */
// // require 引入Node.js自带的模块
// var http = require('http')
// // 6
// var url = require('url')
//
// // 1.原始写法
// // http.createServer(function (request, response) {
// //     response.writeHead(200, {'Content-Type': 'text/plain'})
// //     response.write('Hello httpserver')
// //     response.end()
// // }).listen(8088)
//
// //5.封装成node模块
// //7.将handle传递给服务器
// function start(route, handle) {
//     // 2.使用 匿名函数 改写httpServer
//     /* 3.回调--我们创建了服务器，并且向创建它的方法传递了一个函数。无论何时我们的服务器收到一个请求，这个函数就会被调用。*/
//     // 4.服务器处理请求
//     function onRequest(request, response) {
//         // 6
//         var postData = ''
//         var pathname = url.parse(request.url).pathname
//         console.log(pathname + ' recevied')
//         request.setEncoding('utf-8')
//
//         request.addListener('data', function (postDatachunk) {
//             postData += postDatachunk
//             console.log('received post data chunk' + postDatachunk)
//         })
//         // 7 //9 非阻塞正确的方式
//         // route(handle, pathname,response)
//         // 3-2.在浏览器中访问 localhost:8088 时打印
//         // console.log('request received')
//         // response.writeHead(200, {'Content-Type': 'text/plain'})
//         // var Content = route(handle, pathname)
//         // response.write(Content)
//         // response.end()
//         request.addListener('end', function() {
//             route(handle, pathname, response, postData)
//         })
//     }
//
//     http.createServer(onRequest).listen(8088)
//     // 3-1.运行时打印
//     console.log('server start')
//
//     // 总结：事件驱动的异步服务器端JavaScript和它的回调
// }
// // 5
// exports.start = start
//
// // 6.我们需要的所有数据都会包含在request对象中，
// // 该对象作为onRequest()回调函数的第一个参数传递。
// // 但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块
//
//


var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
