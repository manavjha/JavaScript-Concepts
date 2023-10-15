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
  /**
  US Bank Account Interview Quiestion:
  Code Test: 
Write a react component to get data from API and list it. (https://jsonplaceholder.typicode.com/todos) 
Get Todo list and add status field with defalut status open and list out the todos as like jira. (open,Refined,InProgress,Done) 
Each todo item have button with status. If click the status button it will move next status(open,Refined,InProgress,Done). 
If click open status button it will move to the refined status. If click refined status button it will move the Inprogress status. 
  
Create a login form(username,password), display some message after form submission.
- after that he told me to move the input field from the login component.
- then create a hoc file, make those input fields serves from hoc.

find a most repeated number in an array and return that count using javascript.


How it will look a normal HTML if its open in mobile. 
In we container should be 50% 50%. But in mobile 100% 100% how to achieve this. 


Code Test: 
Write a react component to get data from API and list it. (https://dummyjson.com/products) 
Place a text box with search button. If user search data needs to be filter 
Each product will have add to cart button. If the user click on it we need to show discount price what we getting from the API. 


Scenario based question (how to listen to scroll event)
Program:
input: const inventory=['sticky_notes', 'pencil', 'eraser', 'sticky_notes', 'pen', 'pencil', 'sticky_notes'];
output: const inventory=['pencil_2', 'eraser_1', 'sticky_notes_3', 'pen_1'];

List the inventories
add inventory form with input and submit.
  
  */