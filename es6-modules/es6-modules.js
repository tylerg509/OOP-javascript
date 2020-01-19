
//es6 modules used in front end cannot be used in node
import {Circle} from './es6-modules-module.js'

const c = new Circle(10);
//console.log(_radius.get(c)) this is privatr not accessible
c.draw()