
//will have to create both a loop and array
//create another variable to then use console.log to show the array is working with the loop

//while loop or for loop? 
let thing = document.getElementById("number")
let mine = ["Video games", "Nature", "Burritos", "My pets", "Music", "Sports"]

for(let i = 0; i <= mine.length; i++){
  
let x = mine[i]
  thing.innerHTML += mine[i] + " ,is one of my favorite things <br />"
   
    console.log(x)
    console.log(i)
    
}
