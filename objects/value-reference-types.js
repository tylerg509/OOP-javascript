
let x1 = 10;
let y1 = x1;

x1 = 20;


//x and y reference the same object in memory
let x = {value: 10};
let y = x;

x.value = 20;


console.log(x.value)

//primatives are copied by value
// so when we log number it is the original number
let number = 10;
function increase(number){
    number++
}

increase(number)
console.log(number)



//objects passed on reference not by value like in primatives
//

let obj = {value: 10};
function increase2(obj){
    obj.value++
}

increase2(obj)
console.log(obj)