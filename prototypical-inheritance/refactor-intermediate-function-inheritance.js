


function Shape(color){
    this.color = color
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

//create a reusable inheritance function == intermediate function inheritance
function extend(Child, Parent){
    //create inheritance
    Child.prototype = Object.create(Parent.prototype)
    //reset constructor
    Child.prototype.constructor = Child
}

//we initialize the shape here with the circle constructor
function Circle(radius, color){
    //call the super constructor 
    Shape.call(this, color)

    this.radius = radius;
}

extend(Circle, Shape)


Circle.prototype.draw = function(){
    console.log('draw')
}

//define constructor
function Square(size){
    this.size = size;
}

extend(Square, Shape)

const s = new Shape()
const c = new Circle(1, 'red')
const sq = new Square(10,'blue')

sq.duplicate()

console.log(c)
console.log(sq)