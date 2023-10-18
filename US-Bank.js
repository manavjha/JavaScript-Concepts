//"test".copyMe(3) ---->  testtesttest (Coding Test)
//Write a code for the reverse string without using inbuilt methods.

const copyMe1 = (str, n) => Array(n + 1).join(str);

String.prototype.copyMe = function (n) {
  return Array(n + 1).join(`${this}-`);
};
console.log('test'.copyMe(4));

console.log(copyMe1('text', 3));

Array.prototype.myflat = function () {
  const output = [];
  const flattenArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      Array.isArray(arr[i]) ? flattenArray(arr[i]) : output.push(arr[i]);
    }
    return output;
  };
  return flattenArray(this);
  // return flatA;
};

const arr = [1, 2, [4, 5, [9, 10, [8, 8]]], 7, 8];
console.log('myflat', arr.myflat());

//console.log('flattenArray',flattenArray(arr));
//"test".copyMe(3) ---->  testtesttest (Coding Test)
//Write a code for the reverse string without using inbuilt methods.

const copyMe1 = (str, n) => Array(n + 1).join(str);

String.prototype.copyMe = function (n) {
  return Array(n + 1).join(`${this}-`);
};
console.log('test'.copyMe(4));

console.log(copyMe1('text', 3));

Array.prototype.myflat = function () {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      // output = output.concat(this.myflat.call(this[i])); //myfla(this[i])
      this.myflat.call(this[i]);
    } else {
      output.push(this[i]);
    }
  }
  return output;
};

//const arr = [1, 2, [4, 5, [9, 10, [8, 8]]], 7, 8];
console.log(arr.myflat());

const flatwithReduce = arr.reduce((all, item) => {
  if (Array.isArray(item)) {
    all = all.concat(this.flatwithReduce.call(item));
  } else {
    all.push(item);
  }
  return all;
  // return all.concat(item)
}, []);
console.log(flatwithReduce);

//"test".copyMe(3) ---->  testtesttest (Coding Test)
//Write a code for the reverse string without using inbuilt methods.

const copyMe1 = (str, n) => Array(n + 1).join(str);

String.prototype.copyMe = function (n) {
  return Array(n + 1).join(`${this}-`);
};
console.log('test'.copyMe(4));

console.log(copyMe1('text', 3));

const RevStr = (str) => {
  const strAr = str.split('');
  let s = [];
  for (let i = strAr.length - 1; i >= 0; i--) {
    s.push(strAr[i]);
  }
  return s.join('').toLocaleLowerCase();
};

console.log(RevStr('Apple'));

Array.prototype.myreduce = function (cb, intialValue) {
  let accumulator = intialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

const ar1 = [1, 2, 3, 4, 5];
const sum = ar1.myreduce((all, item) => all + item);
console.log(sum);
// map and filter
const arrr = [1, 2, 3, 4, 5];
Array.prototype.mymap = function (cb) {
  let op = [];
  for (let i = 0; i < this.length; i++) {
    op.push(cb(this[i], i, this));
  }
  return op;
};
const m = arrr.mymap((val) => val * 2);
console.log(m);

Array.prototype.myfilter = function (cb) {
  let op = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      op.push(this[i]);
    }
  }
  return op;
};
const f = arrr.myfilter((val) => val > 3);
console.log('filter', f);
// includes
String.prototype.myincludes = function (word) {
  const words = this.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (word === words[i]) {
      return true;
    } else {
      return false;
    }
  }
};
const st = 'my name is manu';
const t = st.myincludes('manu');
console.log(t);
// Max item from Array
const nums = [30,20,40,10,100]
const maxnum = ar => {
  let max=0
  for(let i=0; i< ar.length;i++){
      if(max < ar[i]){
        max = ar[i]
      } 
  }
  return max
}
console.log('max',maxnum(nums))


///////////////////////////////////

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
//Create the function topSalary(salaries) that returns the name of the top-paid person.
//If salaries is empty, it should return null.
//If there are multiple top-paid persons, return any of them.
const salriesArr = Object.entries(salaries)
let max=0;
let fname = null
for(let [key,value,i] of salriesArr){
  if(max < value){
    max = value;
    fname = key;
    console.log('max val:', max,key)
  } 
 // console.log(`key: ${key} value: ${value} ${i}`)
}
console.log(fname, max)