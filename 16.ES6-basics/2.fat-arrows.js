
// let add = function(x,y){
//     return x + y
// }

// console.log(add(10,20))



// let add = (x,y) =>{
//     return x + y
// }

// console.log(add(10,20))


let add = (x,y) =>x + y


console.log(add(10,20))

/**
 * ! () => expression
 * ! () => {return expression}
 */

// let numbers= [4,2,6]
// numbers.sort(function(a,b){
//     return b-a
// })

let numbers= [4,2,6]
numbers.sort((a,b)=>b-a)

console.log(numbers)


let names = ['Pavan', 'Kumar', 'Ajmera']

let lengths = names.map(name=>name.length)

console.log(lengths)


/**
 * ? With No parameters
 */

let logDocument = () => console.log(window.document)

logDocument()

/**
 * ! Line Break
 */

// let mutliply = (x,y)  // This will give syntax error
//     => x*y


let mutliply = (x,y) =>
 x*y

console.log(mutliply(5,4))

// let setColor = function(color){
//     return {value: color}
// }

// let backGroundColor = setColor('Blue')

// console.log(backGroundColor)


let setColor = (color) => ({value: color})

let backGroundColor = setColor('Blue')

console.log(backGroundColor)

