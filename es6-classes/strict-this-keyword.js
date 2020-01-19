'use strict'

const Circle = function(){
    this.draw = function(){console.log(this)}
}

const c = new Circle()
//method call == this within console.log(this) points to the c object
//call method on object
c.draw()
const draw = c.draw;


//function call = this will point to the global object == points to window in forntend js
//draw() !!this does not work
draw();

class Circle2{
    draw2(){
        console.log(this)
    }
}

const c2 = new Circle2();
const draw2 = c2.draw2;
draw2() //returns undefined

