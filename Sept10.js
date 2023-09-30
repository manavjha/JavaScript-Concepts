let ar = [10, 20, 10, 5, 5, 25, 12, 10, 30]

//o/p = largest number

const uniqueAr = [...new Set(ar)]
const sortedAr = uniqueAr.sort((a, b) => a - b)
console.log(sortedAr[sortedAr.length - 1])

// unique counts

const str1 = "AAAABBBBCCDDDDEEE"

const s = [...str1]

const uniqueCounts = s.reduce((all, item) => {
  if (all[item]) {
    all[item] = all[item] + 1
  }
  else {
    all[item] = 1
  }
  return all
}, {})

console.log(uniqueCounts)
let x = 32243
const x1 = [...x.toString()].reverse().join("")
console.log(x1)

let s2 = 'webmaster' // print in alphabetical order
const s3 = [...s2]
s3.sort().join("")
// Write a JavaScript function that takes an array of numbers and 
// finds the second lowest and second greatest numbers, respectively. [2,4,5,6] o/p [4,5]

const ArrOfNums = (arr) => {
  const sorted = arr.sort((a, b) => a - b)
  const secondlowest = sorted[1]
  const secondlargest = sorted[sorted.length - 2]
  return [secondlowest, secondlargest]
}
console.log(ArrOfNums([2, 4, 5, 6]))

// Questionarite for Javascript
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

// const arr = [1,1,2,2,3,3,4,4,5,5]
// flat array - const arr1 = [1,2,[3,4], 5, [6,7, [8]]];

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const uniqueNums = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
     if(output.indexOf(array[i]) === -1) {
     output.push(array[i]);
     }
  }
   
  return output
}
console.log(uniqueNums(arr))
console.log(arr.indexOf(2))
// removal of duplicates using Filter Method 
const uniqueNums1 = arr.filter( (val, index, array) => {
    return array.indexOf(val) == index
})
console.log(uniqueNums1)

// removal of duplicates using Reduce Method

const uniqueNums2 = arr.reduce( (all,item) => {
  if(all.indexOf(item) === -1) {
    all.push(item)
  }
  return all
},[])

console.log(uniqueNums2)


const UniqueNums = arr.reduce( (all,item) => {
     if(all.indexOf(item) ===-1){
      all.push(item)
     }
     return all
},[])
console.log(UniqueNums)

const FilterNums = arr.filter( (val,index,array) => {
  return array.indexOf(val) !== index
})
console.log(FilterNums)


const x3 = [...new Set(arr)]
console.log("set",x3)

let ot =[]
for ( x of arr) {
  if (ot.indexOf(x) === -1) {
    ot.push(x)
  }
}

console.log(ot)

const nums = [2,8,9,2,2,4,5,6,9,4,5 ]

const uniqueByReduce = nums.reduce( (all,item) => {
  if (all.indexOf(item) === -1) { 
  all.push(item)
  }
  return all
},[])

const uniqueByFilter = nums.filter( (val,index) => nums.indexOf(val) !==index)

console.log(uniqueByFilter)

String.prototype.includes = null;
if (!String.prototype.includes) {
  String.prototype.includes = function (word) {
    const words = this.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        return true
      } else {
        return false
      }
    }
  }
}

const s11 = " my name is manav jha";
const t = s11.includes('isk')
console.log(t)
// Missing Number
const nums12 = [7,9,12]

const missingNum = (nums) => {
  for (let i = 1; i < nums.length+1; i++) { 
    if(nums.indexOf(i) === -1){
      return i
    }
  }
}
console.log(missingNum(nums12))
const abc = [3,4,5,6,7,8 ]
const xxxxx = abc.indexOf(5)

console.log(xxxxx)
// Deep copy and shallow copy
const person = {
  name: 'Bobo',
  address: { street: 'Main Street', number: 123 }
};

const shallow = {...person}
shallow.address.number = 500
console.log(person,shallow)
//const deepPersonClone = JSON.parse(JSON.stringify(person));
//deepPersonClone.address.number = 456;

const deepPersonClone = JSON.parse(JSON.stringify(person))
deepPersonClone.address.number = 400

console.log({ person, deepPersonClone });


// Unique identifier

const array = [2,10,5,1,5,10,33,44,55,66,77,88,99,1000,888,99]

const array1 = array.sort( (a,b) => a -b )
let output=[]
for(let i=0;i< array1.length;i++){
  if(array1[i] ===array1[i+1]){
  output.push(array1[i])
  }
}
console.log("array",output)
console.log(array.sort())

const ar12 = [{id:1,name:'manu'},{id:2,name:'keshav'},{id:1,name:'uddhav'}]

const uniq = ar12.reduce( (all,item) => {
return all.find(x => x.id === item.id) ? all: [...all,item]
},[])
console.log(uniq) 