

const ar = [1,2,3,4,5]

const newar = structuredClone(ar)
newar.push(8)

console.log('ar:',ar)
console.log('newar', newar)
/**
 * const a = [...str]
undefined
a.reduce((a,it) => ({a,[it]:it}) ,{})
a.reduce((a,it) => ({...a,[it]:it}) ,{})
{m: 'm', a: 'a', n: 'n', u: 'u'}
Call Stack
Message Queue
Event Loop

 */
const add = (a) => {
       return (b) => {
         return (c) => {
            return a+b+c;
        }
    }
}

//GET https://jsonplaceholder.typicode.com/posts
console.log("Total:", add(4)(5)(6))

const addfunc = (...args) =>{
    let total = 0;
    for(val of args){
      total += val
    }
    return total;
}

console.log(addfunc(4,5,6))

// How to achieve Prototype Inheritance for Function Constructor?

function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};
  
function Developer(name, age, gender, id, 
specialization) {
  
    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);
  
    // Adding a new parameter
    this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);


function Man(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Man.prototype.getName = function (lastname) {
    return this.name + this.lastname;
  };
  
  const person = new Man("Manu", 35);
  console.log(person);
  
  //rabbit.__proto__ = Person
  
  function BussinessMan(name,age,businessType) {
    this.businessType = businessType;
    Man.call(this, name,age);

  }
  
  //BussinessPerson.__proto__ = Person;
  
  const businessobj = new BussinessMan("Aprajita",30,"Education");
  console.log(businessobj);

  // ** IMPORTANT :
  function Parent() {}
function Child() {}
Object.setPrototypeOf(Man.prototype, BussinessMan.prototype);
new Child() instanceof Child;  // => true
new Child() instanceof Parent; // => true
//const businessobj = new BussinessMan("Aprajita",30,"Education");
//  console.log(businessobj);

  // Account Constructor -> Saving Account, Current Account
  // Prototype Lonking
  // Prototype Inheritance using Functional constructor ( not with es6 class)
  // create mark up and get data from front end.
 // create custom Hooks for get API data
 // request and response Interceptor.
  