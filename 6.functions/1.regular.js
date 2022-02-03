

function greet(){
    return ("Greet is called")
}

console.log(greet()) //Invoke function

function getName(firstName, lastName){
    return firstName + ' ' + lastName;
}

console.log(getName()) // undefined, undefined
console.log(getName("Pavan")) //Undefine
console.log(getName('Pavan', 'Kumar'))  
console.log(getName(1,2))

// var output = 1 +2 +'Uma'+3+4
// console.log(output) //3Uma34
