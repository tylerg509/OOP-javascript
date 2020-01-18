
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


//we initialize the shape here with the circle constructor
function Circle(){
}

extend(Circle, Shape)

//overrid ethe duplicate method for circle == must be after we extend circle to shape
//javascript will now first look to the circle object (child object) by default and call duplicate on it
Circle.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this) //if you use 'this' within the funciton. note not necessary here 
    //Shape.prototype.duplicate() could use this if you don't use 'this' within the function
    console.log('duplicate circle')
}


const c = new Circle()
c.duplicate()