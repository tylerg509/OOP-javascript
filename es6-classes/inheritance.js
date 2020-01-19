
class Shape {
    constructor(color){
        this.color = color //property on the super class
    }
    move(){
        console.log('move')
    }
}

//use extends to implement inheritance in es6
class Circle extends Shape{
    //must call the shape constructor if using a constructor in an inherited class
    //for this reason we use super
    constructor(color, radius){ 
        //pass the color to the super class
        super(color)
        this.radius=radius //example of property on the inheriting class 
    }

    draw(){
        console.log('draw')
    }
}
0
const c = new Circle('red', '50deg')
console.log(c)
//test we can access methods on circle and shape
c.move()
c.draw()

