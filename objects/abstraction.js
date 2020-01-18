

//constructor function = this + new operator 
function Circle(radius){
    //public property since we use this
    this.radius = radius;
    //would not be a property of the object until you use this.color //this is basically a private variable
    let defaultLocation = {x:2, y:0}
    let computeOptimumLocation = function(factor){

    }
    this.draw = function(){
        //closure in javascript = we can call computerOptimumLocation below becuase this.draw is within Circle
        //this means that computerOptimumLocation is still in memory

        //z and n are examples of variables that would only exist when this.draw runs
        let z, n;
        computeOptimumLocation(0.1)
        console.log('draw')

        //if you want to use radius you must use this as radius is publically accessible
        //compare to computeOptimum which is private and exists in memory by default until Circle is done running
        console.log(this.radius)
    }
}

//abstraction hide details and complexity and only show essentials
//hide computeOptimum and default location
//only show radius and draw 

const circle = new Circle(10);
console.log(circle.radius)
circle.draw()
