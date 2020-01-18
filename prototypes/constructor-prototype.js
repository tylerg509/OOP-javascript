
let myObj = {}
console.log(Object.getPrototypeOf(myObj));
console.log(myObj.__proto__)
//myObj.__proto__ (parent of myObj) = same as above
//Constructor.prototype

function Circle(radius){
    this.radius = radius
}

//object that will be used as the parent for objects created by circle costructor
Circle.prototype

const circle = new Circle(1)

let obj = {}

//below are the same
console.log(obj.__proto__)// prototype of all objects created by obj
console.log(Object.prototype)

//below are the same
let array  = []
console.log(array.__proto__)
console.log(Array.prototype)


//below are the same
console.log(circle)
console.log(Circle.prototype)
console.log(circle.__proto__)
//prototype of circle's prototype is object!!!
console.log(Circle.prototype.__proto__)
