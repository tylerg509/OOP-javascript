
// //old way
// function Circle(radius){
//     this.radius = radius
// }
// this.draw = function(){
//     console.log('draw')
// }

//es6 adds syntax that sits over traditional js constuctor functions 
class Circle {
    //used to initialize objects
    constructor(radius){
        this.radius = radius
        this.move = function(){} //if you don't want method on the prototype you must define in the constructor so it ends up on the object instance of circle 
    }
    //all methods end up on prototype of circle object
    draw(){
        console.log('draw')
    }
}


const c = new Circle(1)
console.log(c)

//note circle is a function!
console.log(typeof(Circle))