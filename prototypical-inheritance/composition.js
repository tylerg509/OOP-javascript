
//from mixin lecture before refactor 
    const canEat = {
        eat: function(){
            this.hunger--;
            console.log('eating')
        }
    }

    const canWalk = {
        walk: function(){
            console.log('walking')
        }
    }

    //this is added after the fact to show how easy it is to ass when we use composition
    const canSwim = {
        swim: function(){
            console.log('swim')
        }
    }



    //asingn is es6
    //assign copies caneat and canwalk into a new object
    //first pass empty object which gets populated with caneat canwalk
    const person = Object.assign({}, canEat, canWalk)
    console.log(person)

    //better we create a person function and pass stead of empty object
    function Person(){
        
    }

    //note no empty array and do not need to assign to new const 
    Object.assign(Person.prototype, canEat, canWalk)
    console.log(person)

    //now we can create a person that implements caneat and canwalk
    const person1 = new Person()
    console.log(person1)

    function Goldfish(){

    }

    Object.assign(Goldfish.prototype, canEat, canSwim)
    const goldfish = new Goldfish()
    console.log(goldfish)