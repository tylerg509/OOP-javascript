
//difference between literal and costructor

//literal
export function Circle4(radius){
    this.radius = radius;
    console.log(this.radius)
    this.draw = function(){
        console.log('draw')
    }
}

//constructor
//this is how a function is rendered in browser
export const Circle5 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('draw1')
}
`)

//these two are the same
console.log(new Circle4(1))
console.log(new Circle5(1))

//these are the same as well. When new is called it is actually running
//a function on the object (object.call)

//empty passes the global object( window ) to function
Circle4.call({},1)
//pass array as second argument to array
Circle4.apply({},[1,2,3])