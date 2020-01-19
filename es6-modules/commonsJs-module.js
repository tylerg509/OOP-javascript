
//this is an ex node js module 
//common js is used in node js

//implementation detail whichi will not be accessible when we import this module
const _radius = new WeakMap()
//public interface 
class Circle{
    constructor(radius){
        _radius.set(this, radius)
    }

    draw(){
        console.log('cirle with radius ' + _radius.get(this))
    }
}


//commonJs
module.exports = Circle;