//to create object use facory or constructor

//factory function = a function returns an object

//factor function = return a function
export function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);

//constructor function = this + new operator 
export function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

//return is not needed because we use new
const another = new Circle(1)
another.draw()

//run the factory function to compare
let test = createCircle(2)
test.draw()

//all objects have construction which tells you what created the object