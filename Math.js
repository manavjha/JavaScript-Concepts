const ar = [1,4,2,7,3,30,12];
undefined
Math.max(...ar)
30
Math.max.apply(Math, ar)
30
Math.max(6,1,8,3,34,45,2,1,3)
45
//console.log(ar.max())

console.log(Math.min(...ar))
//const ar = [1,4,2,7,3,30,12];
const sortedArr = ar.sort( (a,b) => a -b )
console.log(sortedArr)
let max= sortedArr[0]
for(let i=1 ;i< ar.length; ++i){
    
  max > ar[i] ? max = ar[i] : null
   
}
console.log(max)