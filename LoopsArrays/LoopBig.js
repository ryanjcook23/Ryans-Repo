

//create either a while or for statement to create the loop
//must figure out how to display numbers individually

let thing = document.getElementById("loopy")
 

for(let i = 1; i <= 5;i++){
    
   
   thing.innerHTML += (i * 1000)+ "<br />" 
    
    console.log(i)
}

