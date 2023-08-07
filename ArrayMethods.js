const persons =[{name:"sally"},{age:30}]

const copyOfPersons = [...persons]
copyOfPersons[0].name ="Doll";
//persons


Array.prototype.Counter = null

//if(!Array.prototype.includes){
    Array.prototype.myincludes = function(val){
         if(this===null||this===undefined)throw TypeError("Array.prototype.indexOf called on null or undefined");

        if(val !=="" || val=="undefined"){
            for( let i=0;i<this.length;i++){
                if(this[i]==val){
                    console.log(this[i])
                   return true
                } else {
                    console.log(this[i])
                    return false
                }
           }
        }      
        
    }
//}


const numbers = [3,4,5,6,7,2]
console.log(numbers.myincludes(5))
const a = numbers.reduce( (prev,cur) => prev > cur ? prev : cur)
let sum =0;
for (let i=0;i<numbers.length;i++){
    for ( let j=i+1;j<numbers.length -1;j++){
        sum += numbers[i]
    }
}
console.log(sum)
// 1st Method
const b =Math.max.apply(null,numbers)

numbers.splice(numbers.indexOf(b),1)
const c1 =Math.max.apply(null,numbers)
c1
console.log(b)

// 2st Method

const sorted = numbers.sort()
const SecondMax = (arr) => {
    const sortedarr = arr.sort((a,b) => a - b);
    return sortedarr[arr.length -2]
}

console.log(SecondMax(numbers))
console.log(SecondMax(numbers))

const aa = [5,4,2,8,30,12]
const v = aa.reduce( (accum,curr) => curr-1);
v
const xx = aa.find((x) => x ==8 )

const bb = xx? xx:"error"
bb

// Dynamic Programming - Coin problem

function getWays(n, c) { 
    let dp = Array.from({length: c.length + 1}, () => Array(n+1).fill(0));
    
    
    for (let i = 0; i < c.length + 1; i++){
        dp[i][0] = 1;
    }
    
    for (let i = 1; i < c.length + 1; i++){
        for (let j = 1; j < n + 1; j++){
            if (j < c[i-1]){
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j - c[i-1]];
            }
        }
    }

    return dp[c.length][n];

}

let n = 3
let c = [8,3,1,2]

console.log(getWays(3,[8,3,1,2]))

//const dp = Array.from({length:c.length+1}, () => Array(n+1).fill(0))
/**
1. Write a JavaScript function to check whether an `input` is an array or not.
Test Data : console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
*/
const is_Array = arr => Array.isArray(arr) ? true : false;
console.log(is_Array('w3resource'))
// Write a simple JavaScript program to join all elements of the following array into a string.
const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(',').toString());
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
// For example if you accept 025468 the output should be 0-254-6-8.

//console.log(dashInsert(12345))

