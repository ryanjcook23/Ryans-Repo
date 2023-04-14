//want to create a table  like the teachers to organize the buttons and divs
// could try without but formtting may be harder without table
//need to use a get attribute and for loop to give all buttons their instrucitons

//global variables must be used
let red = 0
let green = 0
let blue = 0

document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

//will i have to make a function for every colors buttons??
//will be able to copy down functions to increase speed
 

//could i make 3 events for the 3 sections instead of a functon for every button

function red1(){
    red +=1
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}
//copy this above to every function for eevry button
function red5(){
    red +=5
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}

function red10(){
    red +=10
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}

function green1(){
    red +=1
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}

function green5(){
    red +=5
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}

function green10(){
    red +=10
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}

function blue1(){
    red +=1
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}

function blue5(){
    red +=5
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}
function blue10(){
    red +=10
    document.getElementById("ColorBox").style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
    document.getElementById("rgb_value").innerHTML = $(red),$(green),$(blue)

}

//table and buttons dont look as good as example given
//should mess around with the css of the buttns to try and improve
//maybe justify content???//flex all buttons?? etc.
