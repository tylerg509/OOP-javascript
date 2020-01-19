

class Shape{
    move(){
        console.log('move')
    }
}

class Circle extends Shape{
    move(){
        console.log('circle move')
    }
    moveSuper(){
        super.move() //you can use super and call method from super object to overide the default inheritance chain

    }
}

const c = new Circle();

//prototypical inheritance means we look for the circle object first 
//move on child first then parent
c.move()
c.moveSuper()