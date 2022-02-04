
console.log(this) // Will be Global and points to window Object

function sample(){
    console.log(this) // Will be Global and points to window Object
}
sample()

var display = function(){
    console.log(this) // Will be Global and points to window Object
}

display()


function test(){
    this.newVariable = 'Hello'
}
test()
console.log(newVariable)

var object = {
    name: 'Pavan',
    log:function(){
        console.log(this)
    }
}

console.log(object.name)
console.log(object.log())


// var personObj = {
//     name: 'Pavan',
//     log:function(){
//         console.log(this)

//         function updateName(){
//             console.log(this)
//         }
//         updateName()
//     }
// }

// console.log(personObj.name)
// console.log(personObj.log())



var student = {
    fname: 'Pavan',
    getName : function(){
        var self = this;
        console.log(self)
        self.fname ='Kumar'
        console.log(self)
            function updateName(){
                self.fname = 'Bhavana'
                console.log(self)
            }
            updateName()

    }
}

student.getName()