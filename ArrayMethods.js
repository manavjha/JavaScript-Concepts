const persons =[{name:"sally"},{age:30}]

const copyOfPersons = [...persons]
copyOfPersons[0].name ="Doll";
//persons


Array.prototype.includes = null

//if(!Array.prototype.includes){
    Array.prototype.myincludes = function(val){
         if(this===null||this===undefined)throw TypeError("Array.prototype.indexOf called on null or undefined");

        if(val !=="" || val=="undefined"){
            for( let i=0;i<this.length;i++){
                if(this[i]==val){
                   return 1
                } else {
                    return -1
                }
           }
        }
        
    }
//}

const numbers = [3,4,5,6,7,2]
const a = numbers.reduce( (prev,cur) => prev > cur ? prev : cur)

// 1st Method
const b =Math.max.apply(null,numbers)

numbers.splice(numbers.indexOf(b),1)
const c =Math.max.apply(null,numbers)
c
console.log(b)

// 2st Method

const sorted = numbers.sort()
const SecondMax = (arr) => {
    const sortedarr = arr.sort((a,b) => a - b);
    return sortedarr[arr.length -2]
}

console.log(SecondMax(numbers))
console.log(SecondMax(numbers))