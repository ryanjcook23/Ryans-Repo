document.getElementById("input")

function remove(){
let statement = input.value
let splitstatement = statement.split(" ")

for(let i = 0 ; i < splitstatement.length; i++){

if(splitstatement[i] == "clear" || splitstatement[i] == "water" || splitstatement [i] == "tires"){
    document.getElementById("counter").innerHTML = +1
    document.getElementById("output").innerHTML = "amount of bad words"
}



}


   console.log(splitstatement[3]) 
}


