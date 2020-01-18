
function Circle(radius){
    this.radius = radius;
    this.move = function(){
        console.log('draw')
    }
}


const c1 = new Circle(1);


Circle.prototype.draw = function(){
    console.log('draw')
}

c1.draw()

//iterate instance 
//only returns instance memebers
console.log(Object.keys(c1))


//iterate instance and prototype members
//for in loop returns all membrs insrane and prototype
//own = instance in some documentation 
for (let key in c1) console.log(key)

//check if we can access radius
//yes because radius is instance proprety 
console.log(c1.hasOwnProperty('radius'))
//no because draw is a prototype member
console.log(c1.hasOwnProperty('draw'))