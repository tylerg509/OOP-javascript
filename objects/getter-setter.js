

//constructor function = this + new operator 
function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x:2, y:0}
    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    this.draw = function(){
        console.log('draw')
    }

    //use Object.defineProperty to define getters and setters
    Object.defineProperty(this,'defaultLocation', {
        get: function(){
            //part of closure 
            return defaultLocation;
        }, 
        set: function(value){
            if(!value.x || !value.y)
            //use type checking 
                throw new Error('Invalid location ')

            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.draw()

// in circle we see ... for defaultLocation. Computer when you press ... in console
//circle.defaultLocation = 2 //would throw error since default location is private
console.log(circle)

console.log(circle.getDefaultLocation)
