let change = document.getElementsByClassName('question')
//creating a variable so i can use the buttons inside of a loop to assign the event to all buttons

for(i = 0; i < change.length; i++){
change[i].addEventListener('click', Answer)
}

function Answer(){
    document.getElementById('div').innerHTML = this.getAttribute('data-answer')
}