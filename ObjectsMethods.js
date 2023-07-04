//Deep Copy

let obj = {
    name: "Uddhav Jha",
    age: 25
}

//copy without mutate original object
let copyObj = JSON.parse(JSON.stringify(obj))
obj.name = "keshav"
console.log(copyObj)
 
//shallow copy

let copyobj2 = { ...obj }
copyobj2

copyobj2.name = "Manu"
copyobj2
obj.age = 50
copyobj2

let str = "xyz"
str[0] = "M"
console.log(str[0])

function A(inc) {
    let count = 5
    function B(val) {
        return count + val + inc + 2000
    }
    return B;
}
//console.log(count)
console.log(A(7)(10))


function CheckPrimeNumber(number, upto) {
    if (typeof number == "number") {
        if(number ==1 ){
            return "prime Number"
        }
      for( let i=2;i<upto;i++){
        if(number % i == 0 )
        {
            console.log(number)
            return "Not prime"
        }
        return "Prime"
      }
    }
}
console.log(CheckPrimeNumber(12,10))

const getRandomNumber = (num) => {
    return Math.floor(Math.random()*num)
}
console.log(getRandomNumber(10))

const object1 = {};
object1.property1 = 42;

console.log(Object.hasOwn(object1,"property1")) 

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
const urlarry =url.split("/en-US/")
console.log(urlarry)

function PrimeCheck(num,limit){
    const upto = Math.floor(Math.random()*limit)
    if(num ==1){
        return "Prime"
    }
    for (let index = 2; index < limit; index++) {
        if(num % index == 0){
            return "Not Prime"
        }
        return "Prime"
    }
    
}
console.log(PrimeCheck(36,100))

const primechekfunck = (num,limit) => {
    if(num ==1){
        return "not prime"
    }
  for(let i=2;i<limit;i++){
      if(num % i == 0){
        return "not prime"
      }
    return "prime"
  }
}

console.log(primechekfunck(3,50))