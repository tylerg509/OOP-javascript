
//overriding == implementing a method in a child object

//create a reusable inheritance function == intermediate function inheritance
function extend(Child, Parent){
    //create inheritance
    Child.prototype = Object.create(Parent.prototype)
    //reset constructor
    Child.prototype.constructor = Child
}

function Shape(color){
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

function Circle(){
}

extend(Circle, Shape)

Circle.prototype.duplicate = function(){
    console.log('duplicate circle')
}

function Square(){

}

extend(Square, Shape)

//implement polymorphism - both circle and square implement duplicate in their own way
Square.prototype.duplicate = function(){
    console.log('duplicate square')
}

const shapes = [
    new Circle(),
    new Square()
]

//now we can use duplicate as we iterate over the array of objects
for (let shape of shapes)
    shape.duplicate()

    //the non object oriented way of doing this == no polymorphism
// for (let shape of shapes)
//     if(shape.type === 'circle')
//         duplicateCircle()
//     else if(shape.type ==='square')
//         duplicateSquare()
//     else
//         duplicateShape()