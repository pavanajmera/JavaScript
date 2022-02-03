
var person = new Object()

person['fname'] ='Pavan'
person['lname'] = 'Kumar'

// console.log(person)

var cityname = 'city'
person[cityname] ='Hyd'

person.age = 45

person.address = new Object()

person.address.vill = 'asdfg'
person.address.state = 'wert'

console.log(person)
console.log(person['fname'])
console.log(person['lname'])
console.log(person[cityname])
console.log(person['city'])
console.log(person.age)
console.log(person['address']['vill'])
console.log(person.address.state)


var student = {
    id : 1,
    name: 'Pavan',
    isAdmin = true,
    getName: function(){

    },
    info: {},
    subjects: ['Maths', 'Physics', 'Chemistry']
}

console.log(student)