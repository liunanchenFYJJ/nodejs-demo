/**
 * Created by https://github.com/liunanchenFYJJ on 2018/1/3.
 */

// 6 利用 路由route模块 来分发 请求request
function route(handle, pathname) {
    console.log('router for ' + pathname)
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]()
    } else {
        console.log('No request handle for ' + pathname)
        return '404 Not found'
    }
}

exports.route = route