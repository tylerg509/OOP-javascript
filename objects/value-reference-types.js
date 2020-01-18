
let x1 = 10;
let y1 = x1;

x1 = 20;


//x and y reference the same object in memory
let x = {value: 10};
let y = x;

x.value = 20;


console.log(x.value)
