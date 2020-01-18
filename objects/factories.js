
//factory function = a function returns an object
export function createCircle(radius) {
  return {
    radius,
    draw: function(){
        console.log('draw')
    }
  };
}


