
const name = document.querySelector('#name');
const account = document.querySelector('#account');
const withdraw = document.querySelector('#withdraw');
const formsubmit = document.querySelector('#Accountform')
const disp = document.querySelector('#disp')
// Main Class
class Account  {
    constructor(name, accountNumber, balance=0){
        this.name = name;
        this.accountNumber = Date.now().toString();
        this.balance = balance
    }
    
    Diposit(amount){
      return this.balance + amount
    }

    Withdraw(amount){
        return this.balance - amount
      }

}

const accnt = new Account("Manu Jha", Date.now().toString(), 100000 );
console.log(accnt);

// Derived Class for saving Account

class SavingAccount extends Account{
    constructor(name,accountNumber,balance, saving){
        super(name,accountNumber,balance)
        this.saving = saving;
    }
}

const savingaccnt = new SavingAccount("Keshav Jha", Date.now().toString(), 30000,"Saving Account");
console.log(savingaccnt)

// Derived Class for current Account

class CurrentAccount extends Account {
    constructor(name,accountNumber,balance, current){
        super(name,accountNumber,balance)
        this.current = current;
    }
}

const currentaccnt = new CurrentAccount("Aprajita Jha", Date.now().toString(), 50000,"Current Account");
console.log(currentaccnt)

const accountArry = [
     {name: 'Aprajita Jha', accountNumber: '1682531783097', balance: 50000, current: 'Current Account'}
]
formsubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const accnt = new Account(name.value, Date.now().toString(), account.value );
    accountArry.push(accnt)
    console.log(accountArry)
    accountArry.map( val => {
        return disp.innerHTML = val.accountNumber;
    })
    name.value ="";
    account.value =""
})

const a = accountArry.map( val => {
    return disp.innerHTML = val.accountNumber;
})

console.log(a)



