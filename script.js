// Circle color change logic on button click

const red = document.querySelector('#red')
const green = document.querySelector('#green')
const yellow = document.querySelector('#yellow')
const circle = document.querySelector('.circle')

red.addEventListener("click", () => {
    // Logic to change circle color on click event
    if(circle.style.backgroundColor == "red"){
        alert('Red is alredy choosen !!')
    } else {
        circle.style.backgroundColor = "blue";
    }
})

green.addEventListener("click", () => {
    circle.style.backgroundColor = "green";
})

yellow.addEventListener("click", () => {
    circle.style.backgroundColor = "yellow";
})