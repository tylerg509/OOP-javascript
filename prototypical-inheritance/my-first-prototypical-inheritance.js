

function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}


function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype)

//asign circle prototype draw after creating the inheritance
Circle.prototype.draw = function(){
    console.log('draw')
}

//before creating inheritance between shape and circle circle would implicitly inherit from object base
//Circle.prototype = Object.create(Object.prototype)

//now we tell circle to inherit from shape


const s = new Shape()
const c = new Circle(1)

console.log(s)
console.log(c)

//calling draw on Circle = draw actually exists on Circle base
c.draw()
//calling duplicate on Circle = duplicate exists on Shape
c.duplicate()