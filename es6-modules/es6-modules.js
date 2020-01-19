

const _radius = new WeakMap()
 
class Circle{
    constructor(radius){
        _radius.set(this, radius)
    }

    draw(){
        console.log('cirle with radius ' + _radius.get(this))
    }
}


const c = new Circle(10);
console.log(_radius.get(c))
c.draw()