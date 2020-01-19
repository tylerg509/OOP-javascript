

const _radius = new WeakMap()
 
//export in es6
export class Circle{
    constructor(radius){
        _radius.set(this, radius)
    }

    draw(){
        console.log('cirle with radius ' + _radius.get(this))
    }
}

