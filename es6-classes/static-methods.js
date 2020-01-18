

class Circle{
    constructor(radius){
        this.radius = radius
    }

    //instance method = available on an instance of a class which is an object
    draw(){
        console.log('draw!')
    }

    //static method - not tied to particular circle object
    //this is no longer on circle object. cannot use circle.parse() 
    //instead you use like this : Circle.parse() calling the class not object
    //ends up on the constructor see console
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius)
    }

}



const circle = new Circle(1)
console.log(circle) // we have draw within circle instance
circle.draw()
//static methods are on the class itself not the instance of the class
const circle2 = Circle.parse('{"radius": 1}')
console.log(circle2)