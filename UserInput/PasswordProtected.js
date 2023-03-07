//create funtion that contains if statement so we can apply to onclick

function verify(){
if(username.value == "username" && password.value == "password"){
document.getElementById("output").innerHTML = "success"
//output is for the div element
} else {
    document.getElementById("output").innerHTML = "wrong information"
    //for div if the parameters arent met
}

}