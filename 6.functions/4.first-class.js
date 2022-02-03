

function a(){
    b()
}

function b(){
    console.log('b is called')
}

a()
console.log(a())
var c = function(){

}

console.log(c)
// 3. passed as a parameter to another varibale


function callback(caller){
    console.log(caller)
    console.log(caller())
}

var test = function(){
    console.log('This is a test function')
}

callback(test)