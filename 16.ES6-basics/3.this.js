
// var employee = {
//     id : 1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()



// var employee = {
//     id : 1,
//     greet: function(){
//         console.log(this)
//         setTimeout(function(){
//             console.log(this.id)
//         }, 1000)
//     }
// }

// employee.greet()

var arrayList=['a','b','c','d','e','f']
arrayList.length = 0
arrayList.splice(0,arrayList.length)
console.log(arrayList)