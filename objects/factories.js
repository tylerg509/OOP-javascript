
//factory function = a function returns an object
function createCircle(radius) {
  return {
    radius,
    draw: function(){
        console.log(`draw ${radius}`)
    }
  };
}


let test = createCircle(2)
test.draw()