//fibonaci series
// dynamic object creation
// reduce funtion with Objects and arrays
//explore Object and Array methods for iteration 
//api of array of api [interview question] - explore promise, fetch,async, await,aync. prog.
//event loop,execution contect,call stack,message Queue
//Call, bind and apply
// Prototype,constructor,
// Object.Entries()
// React Hook form and Redux state management

// Reduce example 1

// Check for palindrome

const Palindrome = (str) => {
   if(typeof str =="string"){
    const strArr = str.split('').reverse().join('')
      if(str == strArr){
        return "thhis string is palindrome"
      } else {
        return "Not palindrome"
      }
   }
   
}

console.log(Palindrome('radar'))




const employees = [
    { name:"Manu",age:30},
    { name:"Manu",age:30},
    { name:"Keshav",age:30},
    { name:"Uddhav",age:20}
]

const emp = employees.reduce( (accum,current) => {
    if(accum[current.name]){
        accum[current.name] = accum[current.name] + 1
    }else {
        accum[current.name] = 1
    }
    return accum
},{})
console.log(emp)
// Reduce example 2

const str5 = "RRRBBDDDFFFFTTT";
const str6 = [...str5] 
console.log(str6)
console.log(Object.values(str6))

const vv = Object.values(str6)
const xt = vv.filter( (val,i)=> vv.indexOf(val) ==i)
console.log(xt) 
// o/p : 3R2B3D4F

const obj = {};
const uniqueCount = [ 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a' ];
for (let i of uniqueCount) obj[i] ? obj[i]++ : (obj[i] = 1);
console.log(obj);

const finalStr = str6.reduce( (final,curr) => {
    final[curr] = final[curr] ? final[curr] + 1 : 1
    //const [k,v] = Object.entries(final);
   // const v = Object.values(final)
   
    return final
},{})

console.log(finalStr)

const k = Object.keys(finalStr);
const v = Object.values(finalStr);
console.log(k)
console.log(v);

const xxx = v.map( (val,i) => {
   // k[i]
    return (val + k[i])
})
//Final Output is achievd Thanks a God !! :-)
// what i said earlier is totally justified here....cheers!!
console.log(xxx.join(''))

for(let i=0;i<k;i++){
    console.log(k[i])
    for(let j=0;j<v;j++){
        console.log(k[i])
    }
}

const testObj = {
    age:20,
    Name:"manu"
}




const EmpObj = {name:"manu",age:35,city:"Delhi", obj: {name:"manu",age:35,city:"Delhi"}}
const xx = Object.entries(EmpObj);
console.log(xx)
/*for ( const [key,value] of Object.entries(EmpObj)){
   if(typeof EmpObj[key] === "Object"){

    for ( const [key,value] of Object.entries(EmpObj[key])){
        console.log(`${key}: ${value}`)
    }
       // console.log(JSON.stringify({key:value}));
        
    }
} */

const iterate = (obj) => {
    Object.keys(obj).forEach(key => {
    console.log(`key: ${key}, value: ${obj[key]}`)
    if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
        }
    })
}

console.log(iterate(EmpObj))
const a =35;

a >15 ? 
   a >30 ? console.log("15-30")
         : console.log("30-above")
    :console.log("below 15")

// add dynamically added attribute to Object

    var customObj = {
        age:10
    }
    
    if(customObj["name"]){
        customObj["name"] ="manu";
    }
// dynamically adding atribute to object using function
    const custFunct = (obj) => {
        if(typeof obj == "object"){
            console.log("object")
            obj["name"] ="manu";
            console.log(obj)
            return obj
        }
    }

    //Array.apply(this, obj1)

console.log(custFunct(customObj))

const mybindObj = {
    name:"manu jha",
    getname: function(){
        return this.name;
    }
}

const bnd = mybindObj.getname.bind(customObj)
console.log(bnd())