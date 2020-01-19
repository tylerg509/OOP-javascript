const _radius = new WeakMap()

class Circle{
    constructor(radius){
        _radius.set(this, radius)
        //old way
        Object.defineProperty(this, 'radius', {
            get:function(){

            }
        })
    }

    getRadius(){
        return _radius.get(this)
    }
}

const c = new Circle(1)
console.log(c)



const _radius2 = new WeakMap()

class Circle2{
    constructor(radius){
        _radius2.set(this, radius)
    }
     //es6 getter
    get radius(){
        return _radius2.get(this)
    }

    set radius(value){
        if(value<= 0) throw new Error('invalid radius')
        _radius2.set(this, value)
    }

}

const c2 = new Circle2(1)
console.log(c2)
console.log(c2.radius) //use getter
c2.radius = 10 //use setter
console.log(c2.radius) 
