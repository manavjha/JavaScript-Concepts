const board = [1,2,3,4,5,6,7,8,9]
const borad2d = [[1,2,3],[4,5,6],[7,8,9]]

//External Array size = 3;
// Internal Array size = 3;
let arr1 = [];
for (let i = 0; i < borad2d.length; i++) {
    if(Array.isArray(borad2d[i])){
        arr1 = arr1.concat(borad2d[i])
        console.log(arr)
    } else {
        arr1.push(borad2d[i])
    }
    return arr1;
}
console.log(arr1)
console.log(borad2d[0][1])

function test(){
    let ar =[]
    for (let index = 0; index < board.length; index++) {
        console.log(board[index])
        if(board[index] >=1 && board[index] <=3 ){
            ar.push(board[index])
        }
    }
    return ar
}
console.log(test())


const numbers = ["A","A","A","B","B","C","D","D"]
let matched =[]
function matchnum(){
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index] == numbers[index+1] || numbers[index+1] == numbers[index+2] ){
            const val = numbers.indexOf(numbers[index])
            matched.push(numbers[index])
        }
        return matched
    }
}

console.log(matchnum())

let squares = [1,2,3,4,5]

const nextSquares = squares.slice();
const copysquares = [...squares]
nextSquares
copysquares