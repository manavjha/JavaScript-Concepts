// Implimenting OOPS logic in javascript ES6
class Person {
constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
}
}

const person = new Person('Manu', 30,'manu@gmail.com');
console.log(person) 
// Child Class
class Employee extends Person {
    constructor (age,email,name,type) {
        super(age,email,name,type);
        this.type = type;
    }
    developer(){
    return `${this.name} with ${this.age} and ${this.email} is Developer`
    }
}
const emp = new Employee('emp', 30,'emp@gmail.com','temp');
console.log(emp.developer())
// grand child class
class SuperEmployee extends Employee {
    constructor (age,email,name,type,location) {
        super(age,email,name,type,location);
        this.location = location;
    }
    developer(){
        return `Super Employee`
        }
}
// polymorphism achieved here by function overriding.
const super1 = new SuperEmployee('emp', 30,'emp@gmail.com','temp','Delhi')
console.log(super1.developer())

