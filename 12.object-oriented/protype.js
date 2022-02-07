
function Student(fname, lname){
    this.fname = fname
    this.lname =lname
    // this.getFullName = function(){
    //     return this.fname + ' ' + this.lname
    // }
}


/**
 * ? Avoiding Duplicate copies of our methods
 */
Student.prototype.getFullName = function(){
    return this.fname + ' ' + this.lname
}

/**
 * * Extend
 */

Student.prototype.city = 'Hyd'

var student1 = new Student('Pavan', 'Kumar')
student1.city = 'Mumbai'
console.log(student1)

var student2 = new Student('Ram', 'Sita')
student2.city = 'Sydney'
console.log(student2)

var student3 = new Student('Dell', 'laptop')
student3.city = 'Hyd'
console.log(student3)

