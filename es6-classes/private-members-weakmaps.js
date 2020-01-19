
//weakmap is a dictionary. keys are objects and values can be anything
// _ is convention for private
const _radius = new WeakMap(); 
const _move = new WeakMap()
class Circle{
    constructor(radius){
        _radius.set(this,radius) //'this' is the instance of the circle object
        _move.set(this, ()=>{   //normal function creates error - with arrow function it is not rebound and is inherited from circle construtor
            console.log('move', this) //this was undefined in the console without arrow function and using normal function
        })
    }
    draw(){
        console.log(_radius.get(this)) //returns value of radius property
    }
    drawMove(){
        _move.get(this)() //changed function call at the end of this
        console.log('move draw')
    }
}

const c = new Circle(1);
c.draw()

//now we can access all private and public members 
c.drawMove() //writes move first then drawMove