
//abstraction = use private whenever possible 
//we use symbols to implement private properties 
//symbol is es6
const _radius = Symbol(); //symbol is a unique id 
const _draw = Symbol();
class Circle {
    constructor(radius){
        this[_radius] = radius //here we use the symbol as the property name 
        ////could also use these
        // this['radius'] = radius
        // this[_radius]= radius
    }
    //private method
    [_draw](){

    }
}

const c = new Circle(73);
//get value from symbol
const key = Object.getOwnPropertySymbols(c)[0]
console.log(c[key])


console.log(c)
//c.  note how you cannot access this[_radius] or draw

