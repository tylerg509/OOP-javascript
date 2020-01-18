
//constructor function = this + new operator 
export function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

const circle = new Circle(10);

//in javascript we can add new properties on demand. unlike c# where we have to modify our classes
//however with typescript this would change
circle.location = {x: 1}
console.log(circle.location.x)

circle['location'] = {x:1}
console.log(circle['location']['x'])

const propertyName = 'location'
circle[propertyName] = {x:1}
console.log(circle[propertyName])

//brackets would only be able to be used when you assign a property name with a - or space
const propertyName1 = 'center-location'
circle[propertyName1] = {x:1}
console.log(circle[propertyName1])

//delete property from object
//use delete operator
delete circle['location']
console.log(circle.location)
