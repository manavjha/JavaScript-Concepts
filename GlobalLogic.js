/*delay(500).then(result=>{
  console.log(result);
  }) */
 // console.log("hi");
 const delay = (time) => {
    return new Promise((resolve, reject) => {
      time > 500 ? resolve("Result"): reject("Failed...!!!")
    });
  };

  const d = async(time) => {
    const x = "Result"
    const y = await x;
    return time >500? y : "Failed again"
  }
  
  delay(1000).then((result) => {
    console.log(result);
  });
  d(1000).then(r => console.log(r))
  
  // Reduce Method
  let arr = ["aaa","bbb","ccc","aaa","bbb"]
// Expected O/P : aaa:2, bbb:2, ccc:1

const result = arr.reduce( (all,item) => {
if(all[item]){
    all[item] = all[item] + 1
} else {
    all[item] = 1
}
return all
},{})

// Polyfill for filter

Array.prototype.filter = null;

if(!Array.prototype.filter){
    Array.prototype.filter = function (callback) {
    let output =[]
        for (let i = 0; i < this.length; i++) { 
            if(callback(this[i])){
                output.push(this[i])
                }
        }
       return output
       
    }
}

const xxx = [2, 3, 4, 5, 6, 7];
const y = xxx.filter( val => val > 5)
console.log(y)
// SetTimeout

const object1 = {
    value : 1,
      getval: function () { 
        return this.value;
      }
    }
    
setTimeout( () => object1.getval,0)


