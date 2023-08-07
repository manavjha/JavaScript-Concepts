/**
 * 1) Object Oriented Programming - OOJS - Done
 * 2) SOLID Design Principle - Done
 * 3) Inheritance and Prototype Chain. - Done
 * 4) Asynchornous Programming [Promises, Async, Await, Execution Stack, Message Queues] - Partially done
 * 5) HOF, HOC - TBR
 * 6) Currying - Done
 * 7) Arrays, Objects and Functions - TBR
 */

// Constructor and Inheritance

function CheckHoisting(){
    
    console.log("name", name)
    //console.log("age", age)
    var name ="manu"
    let age = 30
}
console.log(CheckHoisting())

const promise = new Promise( (resolve,reject) => {
      reject(new Error('Rejected'))
});

const prom1 = promise
           .then( (val) => console.log("promise fulfilled", val))
           .catch( (err) => console.log("promise rejected", err))

console.log(prom1.catch(() => console.log("first")))

class Personc {
    constructor(name){
        this.name = name;
    }
    getname(){
        return this.name;
    }
}

class Employeec extends Personc {
    constructor(name,age){
       super(name);
       this.age = age;
    }
}

// Function Constructor

/*function Animal (name,color) {
     this.name = name;
     this.color = color;
}*/
// Prototype 

// Parent Prototye, Child Prototype

//prototype linking of child: Syntax

// Child.prototype = Object.create(Parent.prototype)


// Prototype chain => first check inside the object, if not found then check with associated prototype.

/*Animal.prototype.speak = function (bark) {
    return `${this.name} is ${bark}`
}

const animal = new Animal("cat","white");
console.log("animal type:",animal.name)
console.log(animal.speak("barking"), animal);

const person11 = new Personc("Manu",25);
const emp = new Employeec("Keshav",35)

console.log(person11.getname());
console.log(emp.age, emp.name); */

// Encapsulation 

// setter and geeting is being used to get private data
//  # is to be added to make any variable private i.e #balance = 0;

// Callback

function Register(callback){
  callback();
}

function abc(){
    console.log('callback called !')
}


console.log(Register(abc))

function checkPromise (){
   try {
    return new Promise( (resolve,reject) => {
        reject("promise rejected !")
     })
   } catch (error) {
    console.log("Msg",error)
   } finally {
    console.log("Finally get called")
   }
}

console.log(checkPromise())

 