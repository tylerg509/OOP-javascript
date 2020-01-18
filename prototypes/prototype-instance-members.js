2
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}


const c1 = new Circle(1);
const c2 = new Circle(1);

console.log(Circle.prototype=== c1.__proto__)
// __proto__ is deprecated
//use Circle.prototype to access the parent object



function Circle2(radius){
    //instance memebers
    this.radius = radius;
    this.move = function(){
        this.draw()
        console.log('move')
    }

}

//prototype members
Circle2.prototype.draw = function() {
    console.log('draw')
}

const circ = new Circle2(2)
console.log(circ)

//even though the draw function is on prototype of circle2 we can still call it on circ
circ.draw()

//define a function on the prototype of circle2
Circle2.prototype.toString = function(){
    return 'circle with radius ' + this.radius
}

//we can access circ.tostring now 
//note that the tostring is on prototype
//we already have a toString method on the prototype of Circle2 (the object base)
//the toString mehthod we defined is more accessible than the base object
console.log(circ.toString())


circ.move()