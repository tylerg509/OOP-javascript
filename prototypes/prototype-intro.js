let x={}
let y={goose:1}

//x and y inherit from object base

//see prototype of x 
console.log(Object.getPrototypeOf(x))
//check if x and y have the same prototype
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y))

//when we access a property/mehtod on an object JS will look for it on the object itself
//if not found on the object itself it will look at the prototype of the object 
//up until we get to object base