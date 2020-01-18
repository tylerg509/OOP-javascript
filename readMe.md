let x = {} same as let x = new Object()

we use literals instead of constructor String() = ''
new Boolean() = true,false

1) every object has constructor property which references function used to create the object

2) in javascript everything is an object. A function is an object


value types(primative types) = Number, String, Boolean, Symbol es6, undefined, null
//copied by value = see value-reference-types ex

reference types (objects) = Object, Function, Array. array and function are objects
//copied by reference = see value-reference-types

primatives are copied by their value

objects are copied by their reference

!----------------------!
OOP Pillars:
abstraction: hide the details/complexity of your class or object and only show what is neccessary using private.
inheritance: reuse code in a child class or object from a parent/prototype class/object
polymorphism: many forms
encapsulation: code should be contained within classes. as few params should be used as possible. encapsulate code into objects. 
!------------------------!

--INHERITANCE--
SHAPE = BASE/SUPER/PARENT
CIRCLE (IS A SHAPE)= DERIVED/SUB/CHILD
SQUARE (IS A SHAPE)= DERIVED/SUB/CHILD

Classicical vs Prototypical Inheritance

In javascript we don't have classes only objects

Prototype = parent 
Shape is prototype of circle

Each object in javascript has a prototype which inherits all members of its prototype

Every object has constructor which was used to create the object

Object base is the root of all javascript objects and has no prototypes

Prototypal inheritance = when we access a property or method on an object javascript first looks at the object itself and if it can not be found it looks to the objects prototype up until it reaches the base object (which does not have a prototype)


objects created by a given constructor will have the same prototype

prefer composition over inheritance

Inheritance should only be used for one level

