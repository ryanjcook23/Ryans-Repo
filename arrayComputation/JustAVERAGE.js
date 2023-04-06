

 function add(){
    let statement = input.value
    statement = statement.split(",")
   
    for(let i = 0; i < statement.length; i++){
   let total = statement[0] + statement[2]
   
   total = document.getElementById("total").innerHTML = total
    }
 }