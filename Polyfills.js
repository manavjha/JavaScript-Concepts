//Polifill for includes Function
 
String.prototype.includes = null;
if(!String.prototype.includes){
    String.prototype.includes = function (word) {
       const words =this.split(' ');
       console.log(words)
       const status = false;
       for(let i=0;i<words.length;i++){
           console.log(words[i], words.length)
           while( word == words[i]){
            return true
           }
       }
       return false
    }
}


const sentence = "The quick brown fox jumps over the lazy dog"
const word = sentence.includes("fox");
console.log(word) 

// Polyfill for Filter function

Array.prototype.filter = null;

if(!Array.prototype.filter){
    Array.prototype.filter = function(callback) {
           var output = [];
           for ( var i=0; i < this.length ; i++){
          //  console.log(this[i])
            if(callback(this[i],i, this)) {
                console.log(this);
                output.push(this[i]);
            }
           }
        return output
    }
}

const arr = [1,2,3,4,5];
const num  = arr.filter( val => val > 2);
console.log(num)

// Polyfill for reducer function
Array.prototype.reduce = null;

//if(!Array.prototype.reduce){
    Array.prototype.myReduce= function(callbackFn, initialValue) {
        var accumulator = initialValue;
      for (var i = 0; i < this.length; i++) {
          if (accumulator !== undefined) {
            accumulator = callbackFn( accumulator, this[i],   i, this);
            console.log("accumulator: ",accumulator,"this[i]: ", this[i],"i: ",   i,"this: ", this);
          } else {
            accumulator = this[i];
          }
        }
        return accumulator;
      }
//}

const arr5 = [1,2,3,4,5];

const result5 = arr5.myReduce( (a,b) => a+b)
console.log("sum", result5)

// Polyfill for map function

Array.prototype.map = null;

if(!Array.prototype.map){
    Array.prototype.map = function(callback) {
        const output = [];
        for ( let i=0;i<this.length; i++){
            output.push(callback(this[i],i,this))
        }
        return output;
    }
}

const num1 = arr.map( val => val*3);
console.log(num1)

// polyfill for array flat 

Array.prototype.flat = null;
 if(!Array.prototype.flat){
    
    Array.prototype.flat = function(callback, depth){
        let output =[];
        for (let i=0;i<this.length;i++){
            if(Array.isArray(this[i])) {
                output = output.concat(this.flat.call(this[i]))
                console.log( "Is Array:", this.flat.call(this[i]))
             } else {
                 output.push(this[i])
             }
        }
        return output;
    }
 }




const flatarr = [1,2,3,[5,6]]

const flt = flatarr.flat();
console.log(flt)


var animal = "dogs";
var sleepDuration = "1 and 16 hours";

function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
  }
  
  const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
  };

  greet.call(this,obj);
 //console.log(this.animal)

 const upercase = (str) => {

    return str.toUpperCase();
 }
const s = "maaaanu";
 console.log(upercase(s))
// radar , level  3553, 12321

/*const palindrome = function( str1,callback) {
    const output = [];
    const st1 = str1.split('');
      for ( let i=0; i<st1.length; i++){
        if(st1[i] == st1[i-1]){
            output.push(callback(st1[i]))
        }
        output.push(st1[i]);
      }
    return output;
}
console.log(palindrome(s))*/










