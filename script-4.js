

function add(){
    return this.a11 + this.b1
}
var a11 =10;
var b1 =20;
const obj1 = {
    a11:1,
    b1:20
}
console.log(add.call(obj1))
let a=parseInt(10);  
let b=parseInt(5);
console.log(a + 10)
//let a=10,  b=5

console.log(add.call(this,a,b))

// i/p - AAADTBBNNN  : o/p - 3ADT2B3N

const str = "AAADTBBNNN";
const ar = [...str];
console.log(ar)
const a1 = {...ar}
console.log(a1)
const res1 = ar.reduce( (accum,val,i) => {
    //logic
    if(accum[val]){
       // console.log(accum[val])
        accum[val] = accum[val] + 1 +`${[val]}`
        //console.log(accum[val])
    } else {
        accum[val] =  1 +`${[val]}`
    }
 return accum
},{})

console.log("result",res1)
