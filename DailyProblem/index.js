/*This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. */

function listOfNums(arr,k){
    for (let index = 0; index < arr.length; index++) {
        for( let j=2; j< arr.length ; j++) {
            console.log(arr[j])
        }
        
    }
}

console.log(listOfNums([10, 15, 3, 7],17))