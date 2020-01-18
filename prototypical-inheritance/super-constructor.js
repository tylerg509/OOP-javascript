

function Shape(color){
    this.color = color
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

//we initialize the shape here
function Circle(radius, color){
    //this is how to call the super consstructor
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

const s = new Shape()
const c = new Circle(1, 'red')
//cant do the below = new creates new empty object and sets radius, new object is returned. new must be used.
// function Circle(radius, color){
//     Shape(color)

//     this.radius = radius;
// }

//this also does not work!
// function Circle(radius, color){
//     new Shape(color) /////!!!!////// this would create another new color object and set the color prop on that object

//     this.radius = radius;
// }


//const c = new Circle(1, 'red')

console.log(c)