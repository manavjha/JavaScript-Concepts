const str = 'abc def'  
// o/p : cba fed   


const strAr1 = str.split(' ')
const RevStringFn = str1 => {
 let output =[];
 let newStr;
 newStr = str1.split(' ');
 const t = newStr.reduce( (all,item) => {
   return all += item.split('').reverse().join('') + " "
 },"")
 return t
    
}
console.log(RevStringFn(str))
// one line code for above solution

const RevStringFn1 = str1 => str1.split(' ').reduce( (all,item) =>  all += item.split('').reverse().join('') + " "," ")
const obj = {
  name: 'Luke Skywalker',
  title: 'Jedi Knight',
  age: 23
};

// Convert `obj` to a key/value array
// `[['name', 'Luke Skywalker'], ['title', 'Jedi Knight'], ...]`
const asArray = Object.entries(obj);

const filtered = asArray.filter(([key, value]) => typeof value === 'string');

// Convert the key/value array back to an object:
// `{ name: 'Luke Skywalker', title: 'Jedi Knight' }`
//str2 = 'aabccddde' only count str which is greater then 1, skip 1 counted value
const justStrings = Object.fromEntries(filtered);
const str2 = 'aabccddde'
const str3 = [...str2]
const reducStr = str3.reduce( (all,item) => {
  
  if(all[item]){
    all[item] += 1
  } else {
    all[item] = 1
  }
  return all
},{})

const objToArray = Object.entries(reducStr)
const filteredArray = objToArray.filter( ([key,value]) => value > 1)
const ArrayToObj = Object.fromEntries(filteredArray);
console.log(ArrayToObj)
console.log(reducStr)
