

function Person(fname, lname){
    this.fname = fname
    this.lname = lname
}

Person.prototype.getFullName = function(){
    return this.fname + ' ' + this.lname
}


function Student(age){
    this.age = age
}

/**
 * ? Inherit the propertief of Parent
 */

Student.prototype = new Person('Pavan', 'Ajmera')

Student.prototype.getAge = function(){
    return this.age
}

var student = new Student(22)
console.log(student.fname)
console.log(student.lname)
console.log(student.age)
console.log(student.getFullName())
console.log(student.getAge())
