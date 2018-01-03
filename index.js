/**
 * Created by https://github.com/liunanchenFYJJ on 2018/1/3.
 */

// 5.调用封装好的服务器模块
var server = require('./httpServer/server')
var router = require('./router')
// 7.请求处理
var requestHandler = require('./requestHandler')

var handle = {}
handle['/'] = requestHandler.start
handle['/start'] = requestHandler.start
handle['/upload'] = requestHandler.start


server.start(router.route, handle)