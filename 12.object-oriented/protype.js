
function Student(fname, lname){
    this.fname = fname
    this.lname =lname
    this.getFullName = function(){
        return this.fname + ' ' + this.lname
    }
}

var student1 = new Student('Pavan', 'Kumar')
console.log(student1)

var student2 = new Student('Ram', 'Sita')
console.log(student2)

var student3 = new Student('Dell', 'laptop')
console.log(student3)