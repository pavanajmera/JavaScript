

function Shape(){

}

Shape.prototype.draw = function(){
    return 'This is a generic shape'
}

/**
 * ? Circle
 */

function Circle(){

}
Circle.prototype = new Shape()

Circle.prototype.draw = function(){
    return 'I am circle'
}

/**
 * ? Square
 */

 function Square(){

}
Square.prototype = new Shape()

Square.prototype.draw = function(){
    return 'I am Square'
}

/**
 * ? Triangle
 */

 function Triangle(){

}
Triangle.prototype = new Shape()

Triangle.prototype.draw = function(){
    return 'I am Triangle'
}

