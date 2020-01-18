


function Shape(color){
    this.color = color
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

//we initialize the shape here
function Circle(radius, color){
    //call the super constructor 
    Shape.call(this, color)

    this.radius = radius;
}

//create inheritance
Circle.prototype = Object.create(Shape.prototype)
//reset constructor
Circle.prototype.constructor = Circle

Circle.prototype.draw = function(){
    console.log('draw')
}

function Square(size){
    this.size = size;
}

//create inheritance
Square.prototype = Object.create(Shape.prototype)
//reset constructor
Square.prototype.constructor = Square


const s = new Shape()
const c = new Circle(1, 'red')
const sq = new Square(10,'blue')

sq.duplicate()

console.log(c)
console.log(sq)