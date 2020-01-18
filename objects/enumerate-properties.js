

//constructor function = this + new operator 
export function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}


const circle = new Circle(10);

//write properties by enumerating
for (let key in circle){
    console.log(key)
}

//log all keys in circle
for (let key in circle){
    console.log(key, circle[key])
}

//only return properties not function
for (let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key])
}

//get keys of circle
const keys = Object.keys(circle)
console.log(keys)

//check if property exists
if('radius' in circle)
    console.log('circle has a radius')

