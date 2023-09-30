/**
Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and 
includes an additional property for the number of doors. Override the display method to include the number of doors.
*/

class Vehicle {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  display() {
    return this.name
  }
}

class Car extends Vehicle {
  constructor(name, model, year, doors) {
    super(name, model, year);
    this.doors = doors;
  }

  getDoor() {
    return this.doors;
  }

}

const car = new Car("Dlx", "Toyota", 2020, 4)
console.log(car.getDoor())

/**
Write a JavaScript program that creates a class called "BankAccount" with properties for 
account number and balance. 
Include methods to deposit and withdraw money from the account. 
Create some instances of the "BankAccount" class, deposit some money, 
and withdraw a portion of it.
*/

class BankAccount {
  constructor(AccountNum, Balance) {
    this.accountNum = AccountNum;
    this.Balance = 5000
  }

  deposit(amt) {
  
    return this.Balance + amt
  }
  withdraw(amount) {
    if (amount > this.Balance) {
      return "Balance is less"
  }
    return this.Balance - amount
  }
}
const bankAccount = new BankAccount("SBI",)
//console.log(bankAccount.withdraw(1000))
bankAccount.withdraw(1000)

console.log(bankAccount.withdraw(6000))


Array.prototype.map = null;

if(!Array.prototype.map){
  Array.prototype.map = function(cb){
    let output = [];
    for ( let i = 0; i < this.length; i++ ){
         output.push(cb(this[i],i, this));
    }
  return output
  }
}


