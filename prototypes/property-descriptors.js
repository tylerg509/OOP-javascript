let person = {name: 'tyler'}

console.log(person.toString())
console.log(Object.values(person).toString())

//we cant iterate over all because the predefined properties prevent enumeration
for(let key in person)
    console.log(key) //only key we have is name

console.log(Object.keys(person)) 

let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')

//configurable = true sso we can delete
//enumerable = false so we cant iterate
//value = set with method = default implementation of tostring
//writable = true we can overwrite this method 
console.log(descriptor)

Object.defineProperty(person, 'name', {
    writable: false, //make read only
    enumerable: false,
    configurable: false
})


//person.name='goose' //will error since person.name is readonly

//as compared to before when we ran object.keys(person) person is now an empty array since we set person.name to enumerable:false
console.log(Object.keys(person))


//delete person.name //throws error since we set person.name confiurable:false