// write a program for javascript prototype and ES6 class for same feature


//Vanilla javascript impliments inheritance through prototype, lets code ...
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.getAge = function(){
    return this.age
}


function ChildPerson(name,age,email){
    //inherit the parent function here
    Person.call(this,name,age)
    this.email = email;
}

const obj1 = new Person("manu",35)
console.log(obj1.getAge(), obj1)

const obj2 = new ChildPerson("manu",35,"manu@gmail.com")
console.log(obj2)

// ES6 Class base inheritance

class PersonES6 {
    constructor(name,age){
       this.name = name;
       this.age = age;
    }

    get personage(){
        return this.age
    }
    set personage(num){
        this.age = num
    }

}

class ChildPersonES6 extends PersonES6 {
    constructor(name,age,email){
        super(name,age);
        this.email = email;
    }
} 


const obj3 = new PersonES6("Manav Jha", 30);
obj3.personage = 40
console.log(obj3)
const obj4 = new ChildPersonES6("Keshav Jha", 30, "keshav@gmail.com")
console.log(obj4)