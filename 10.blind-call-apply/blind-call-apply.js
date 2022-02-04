
var person1 = {fname: 'Pavan', lname:'Kumar'}

var person2 = {fname: 'Bhavana', lname:'Kurra'}

var person3 = {fname: 'Shiva', lname:'Arukonda'}

function getName(message, city){
    // console.log(person1)
    // console.log(this)

    return message + ' to ' + 
            city + ' ' +
            this.fname + ' ' + 
            this.lname
}

// var output = getName.bind(person1)
// console.log(output('Welcome', 'Hyderbad'))

// var output = getName.blind('Welcome', 'Pavan')
// console.log(output())


var output = getName('Welcome', 'Pavan').blind(person1)
console.log(output())