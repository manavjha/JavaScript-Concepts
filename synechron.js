const str = "aaa bbbc ccddd"
const strArr = [...str]

const strCount = strArr.reduce( (all,item) => {

   if(all[item]){
       all[item] = all[item] + 1 
   } else {
    all[item] = 1
  }
return all

},{})
console.log(strCount)

const a = [1,2,3,4,5]
const customFilter = (arr, val) => {
  const finalFilteredArr = arr.filter( data => data > val )
  return finalFilteredArr
  }
  console.log(customFilter(a,4))
  // virtual dom
  // hooks
  // backend api
  // production deploy code
  // html/css
  // lamda function for aws services