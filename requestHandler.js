/**
 * Created by https://github.com/liunanchenFYJJ on 2018/1/3.
 */

function start() {
    console.log('request "start" was called')

    //8. 为了测试阻塞和非阻塞--模拟真实请求
    // start()包含了阻塞操作。形象的说就是“它阻塞了所有其他的处理工作”
    // 解决：使用回调，通过将函数作为参数传递给其他需要花时间做处理的函数
    // （比方说，休眠10秒，或者查询数据库，又或者是进行大量的计算）
    function sleep(seconds) {
        var startTime = new Date().getTime()
        while (new Date().getTime() < startTime + seconds) {}
    }
    sleep(10000)
    return 'hello start'
}

function upload() {
    console.log('request "upload" was called')
    return 'hello upload'
}

exports.start = start
exports.upload = upload