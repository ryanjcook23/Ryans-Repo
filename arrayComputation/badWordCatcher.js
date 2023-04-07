

function remove(){
//must split input into an array at the space
    document.getElementById("input")
let statement = input.value
let splitstatement = statement.split(",")
//create if statement inside of for loop to check the array
//
for(let i = 0 ; i < splitstatement.length; i++){

if(splitstatement[i] == "clear" || splitstatement[i] == "water" || splitstatement [i] == "tires"){
    document.getElementById("counter").innerHTML = +1
    document.getElementById("output").innerHTML = "amount of bad words"
}



}


   console.log(splitstatement) 
}


