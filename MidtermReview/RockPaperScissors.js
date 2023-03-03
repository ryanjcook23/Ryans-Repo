
//create a function storing the random number 
//create loop or if statement to call the random choice??


function computerbrain(){
    
    let computermove = ["rock", "scissors", "paper"]
    return computermove[Math.floor(Math.random() * computermove.length)
    
    ]
    
}


//create onclick parameters for players choices
function rock(){
    
    let x = document.getElementById("choice").innerHTML = "rock"
    if(rock){
    let computerchoice = computerbrain()

        document.getElementById("CPU").innerHTML = computerchoice
    }

}
function Paper(){
    
    let x = document.getElementById("choice").innerHTML = "Paper"
    if(Paper){
        let computerchoice = computerbrain()
    
            document.getElementById("CPU").innerHTML = computerchoice
        } 

      //if statement inside of if statement??
      //must figure out how to append score 

}

function Scissors(){
    
    let x = document.getElementById("choice").innerHTML = "Scissors"
    if(Scissors){
        let computerchoice = computerbrain()
    
            document.getElementById("CPU").innerHTML = computerchoice
        }

}

function Guard(){
    
    let x = document.getElementById("choice").innerHTML = "Guard"
    

}
console.log()

