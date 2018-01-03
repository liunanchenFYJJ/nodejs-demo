// /**
//  * Created by https://github.com/liunanchenFYJJ on 2018/1/3.
//  */
//
// // 8-1. 非阻塞
// var exec = require('child_process').exec
//
// function start(response) {
//     console.log('request "start" was called')
//
//     // 10 处理post1请求
//     /*实现思路就是： 将data和end事件的回调函数直接放在服务器中，
//     在data事件回调中收集所有的POST数据，
//     当接收到所有数据，触发end事件后，其回调函数调用请求路由，并将数据传递给它，
//     然后，请求路由再将该数据传递给请求处理程序。*/
//     var body = '<html>'+
//         '<head>'+
//         '<meta http-equiv="Content-Type" content="text/html; '+
//         'charset=UTF-8" />'+
//         '</head>'+
//         '<body>'+
//         '<form action="/upload" method="post">'+
//         '<textarea name="text" rows="20" cols="60"></textarea>'+
//         '<input type="submit" value="Submit text" />'+
//         '</form>'+
//         '</body>'+
//         '</html>';
//
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(body);
//     response.end();
//
//     // 非阻塞
//     // var Content = 'empty'
//     // 非阻塞--正确方式
//     // exec(
//     //     // 'ls -lah',
//     //     // 为了证明时间对于非阻塞没有影响
//     //     'find/',{timeout: 10000,maxBuffer: 20000*1024},
//     //     function (error, stdout, stderr) {
//     //     response.writeHead(200, {"Content-Type": "text/plain"});
//     //     response.write(stdout);
//     //     response.end();
//     // })
//     /*
//     * 我们的代码是同步执行的，这就意味着在调用exec()之后，Node.js会立即执行 return content ；
//     * 在这个时候，content仍然是“empty”，
//     * 因为传递给exec()的回调函数还未执行到——因为exec()的操作是异步的*/
//     // return Content
//
//     //8. 为了测试阻塞和非阻塞--模拟真实请求
//     // start()包含了阻塞操作。形象的说就是“它阻塞了所有其他的处理工作”
//     // 解决：使用回调，通过将函数作为参数传递给其他需要花时间做处理的函数
//     // （比方说，休眠10秒，或者查询数据库，又或者是进行大量的计算）
// //     function sleep(seconds) {
// //         var startTime = new Date().getTime()
// //         while (new Date().getTime() < startTime + seconds) {}
// //     }
// //     sleep(10000)
// //     return 'hello start'
// }
//
// function upload(response, postDate) {
//     console.log('request "upload" was called')
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write('hola upload!, your message:' + postDate);
//     response.end();
// }
//
// exports.start = start
// exports.upload = upload


var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function start(response) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload" multiple="multiple">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
        console.log("parsing done");

        /* Possible error on Windows systems:
         tried to rename to an already existing file */
        fs.rename(files.upload.path, "/tmp/test.png", function(err) {
            if (err) {
                fs.unlink("/tmp/test.png");
                fs.rename(files.upload.path, "/tmp/test.png");
            }
        });
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;