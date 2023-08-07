const actionDescriptionMap = {
    FORM: {text:"Form", Desc:"Name has answered a question on that need your review"},
    APPOINTMENT: {text:"Appointment", Desc:"A patient responded with a text message that we need your help with"},
    FEEDBACK: {text:"Feedback", Desc:"you have received a feedback from Name"},
    
    }; 

    console.log(actionDescriptionMap.FORM.Desc)

    console.log(Object.keys(actionDescriptionMap)[0])

    const actionFilterMap = {
        APPT_REQUEST: { text: "Appt Request", filters: ["AR", "AC", "ASF"] },
        FORM: { text: "Form", filters: ["UPFS", "FSRS", "FURAS", "FWAPS"] },
        APPOINTMENT: { text: "Appointment", filters: ["CR", "UMR"] },
        PAYMENT: { text: "Payment", filters: ["PR"] },
        REVIEW: { text: "Review", filters: ["URR"] },
        FEEDBACK: { text: "Feedback", filters: ["FR"] }
      }

      const x = Object.keys(actionFilterMap)
      console.log(x)

// i/p: 1,2,3,4,     o/p:1,3,5,7   .i.e new array = oldarray[i] + i 
//const x1 = document.createElement("div");
//let y1 ="<br>"
const arrayfilter = (oldArray) => { 
  let newArray =[]

  
   for (let index = 0; index < oldArray.length; index++) {
    newArray.push(oldArray[index] + index )
    console.log(newArray,"\n")
   }
  // x1.append(y1)
   return newArray
 }
 console.log(arrayfilter([1,2,3,4,5]))
// 3 D Array

for (let row = 0; row < 2; row++) {
  for (let col = 0; col < 3; col++) {
    for (let index = 0; index < 4; index++) {
      console.log(row, col,index)
    }
  }  
}


// [4,7,9,12,15]  item:9

const items = new Array(4,7,9,12,15)


const getItem = (arr,item) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === item) {
      return index -1
    }
  }
}

console.log(getItem(items,12))
// highest peak number find



//const sortedar = ar1.sort((a,b) => a-b);
const maxnum = () => {
  let ar1 = [7,6,5,4]
  let max =0
  for (let index = 0; index < ar1.length; index++) {
    if(ar1[index] > max) {
      max = ar1[index]
    }
  }
const xx = ar1.indexOf(max)
if(max > ar1[xx-1]){
  return "1"
} else {
  return "0"
}
  
}

console.log(maxnum())

const arrunsorted = [8, 9, 4, 5, 11, 13, 14, 18, 17, 16, 16, 9]

const missingNum = (arr) => {
  const sorted = arr.sort( (a,b) => a - b)
  let first = sorted[0]
  let last = sorted[sorted.length - 1]  
  output =[]

  for( let j=first; j<=last; j++ ){
    if(!sorted.includes(j)){
      output.push(j)
  }
}
return output
}
console.log(missingNum(arrunsorted))