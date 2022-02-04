/**
 * ? Creating Class
 */
function Student(){

}

/**
 * * Instance
 */

function Person(){

}

var Person1 = new Person()
var Person2 = new Person()

/**
 * ? Constructor
 */

function Order(){
    console.log('Order is initiated')
}

var order = new Order() // Order is a constructor

/**
 * * properties
 */

function Customer(gender){
    this.gender = gender
}


var customer1 = new Customer('Female')
console.log(customer1)
var customer2 = new Customer('Male')
console.log(customer2)

