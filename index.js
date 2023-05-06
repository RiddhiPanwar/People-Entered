// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
let countEl = document.getElementById("count-el")
 console.log(countEl)

let count = 0

function increment (){
   count += 1
   countEl.innerText = count
}
   
   
   
function save () {
    console.log(count)
}

 let saveEl = document.getElementById("save-el")
 
 console.log(saveEl)
 
 function save(){
     let countStr = count + " - "
     saveEl.textContent += countStr
     countEl.textContent = 0
     count = 0
 }
 