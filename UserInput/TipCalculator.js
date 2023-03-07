
//must make the value of the input a number
//if not number it will be added together as a string

price.value = Number(price.value)
//making the price value a number

function calculate(){
//creating variables to do the math
let tip = Number(price.value) * .2   

let total = tip + Number(price.value)

console.log ("Tip:" + "$" + tip + ". " + "Total:" + "$" + total) 

}