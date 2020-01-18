

function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}


function Circle(radius){
    this.radius = radius;
}


//Circle.prototype.constructor = Circle //before we create inheritance between circle and shape
//new Circle.prototype.constructor() = new Circle() //this is the same
Circle.prototype = Object.create(Shape.prototype)

//when you reset the prototype you should reset the constructor!!!!!!!!
//reset constructor
Circle.prototype.constructor = Circle

Circle.prototype.draw = function(){
    console.log('draw')
}


const c = new Circle(1)
console.log(c)

//be below are the same
new Circle.prototype.constructor(1)
console.log(new Circle(1))