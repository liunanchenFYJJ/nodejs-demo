console.log('hello Nodejs')

//函数作为一个值返回给另一个函数(匿名函数)
function say(word) {
    console.log(word)
}

function execute(somefunction, value) {
    somefunction(value)
}

execute(say, 'hello function')