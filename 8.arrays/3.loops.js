
var people = ['Pavan', 'Kumar', 'Bhavana' ]

/**
 * ? Using For loop
 */
for (var i=0;i<people.length;i++ ){
    console.log(people[i], i)
}

/**
 *  * Using For Each
 */

people.forEach(function(name, index){
    console.log(name, index)
})

/**
 * ? Using map
 */

people.map(function(name, index){
    console.log(name, index)
})

var names1 = people.forEach(function(name,index){
    return name
})

var names2 = people.map(function(name,index){
    return {
        name: name,
        index : index
    }
})

var names2 = people.map(function(name,index){
    return {
        name,index
    }
})

// var names2 = people.map(function(name,index){
//     return name + ' ' + index
// })

console.log(names1)
console.log(names2)

/**
 * ? Using For in
 */

for (name in people){
    console.log(name)
}

/**
 * ? Usinf for of
 */

for (name of people){
    console.log(name)
}

/**
 * ? using For of to get index and value
 */

// for(var [index, value] of people.entries()){
//     console.log(index, value)
// }

