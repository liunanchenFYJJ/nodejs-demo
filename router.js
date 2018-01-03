/**
 * Created by https://github.com/liunanchenFYJJ on 2018/1/3.
 */

// 6 利用 路由route模块 来分发 请求request
function route(handle, pathname, response, postData) {
    console.log('router for ' + pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData)
    } else {
        console.log('No request handle for ' + pathname)
        response.writeHead(404, {'Content-Type': 'text/plain'})
        response.write('404 Not found')
        response.end()
    }
}

exports.route = route