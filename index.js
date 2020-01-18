import {Circle4, Circle5} from './objects/function-object.js'

//console.log(new Circle4(1))
//console.log(new Circle5(1))

//empty passes the global object( window ) to function
Circle4.call({},1)
//pass array as second argument to array
Circle4.apply({},[1,2,3])