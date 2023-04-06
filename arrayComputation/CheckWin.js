document.getElementById("input")

function remove(){
    let statement = input.value
    let splitstatement = statement.split(",")
    
    for(let i = 0 ; i < splitstatement.length; i++){
    //if statement to declare if there is repetiton???
    if(splitstatement[i] = 1){
    
        document.getElementById("output").innerHTML = "winner"
    }
    else{
        document.getElementById("output").innerHTML = "loser"
    }
    
    
    }
    
    
       console.log(splitstatement[3]) 
    }
    