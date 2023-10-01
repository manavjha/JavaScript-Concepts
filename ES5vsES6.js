// ES5 
/**
function constructor define */

function Person(name,age) {
this.name = name;
this.age = age;
}

//Inheritance in ES5 using function

function Student (name,age,id){
Person.call(this,name,age,id);
    this.id = id;
}

var st = new Student('Manav',30,1)
console.log(st)


class Employee {
  constructor (name,age ) {
    this.name = name;
    this.age = age;
  }
}

class Elemployee extends Employee { 
 constructor (name,age,id) {
  super(name,age,id)
  this.id = id;
 }
}

const emp = new Elemployee('manu', 32, 2)
console.log(emp)


