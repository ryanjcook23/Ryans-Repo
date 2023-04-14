let change = document.getElementsByClassName('listener');


for(i = 0; i < change.length; i++){
change[i].addEventListener('click', changeColor)

console.log(change)
console.log(change.length)
}


function changeColor(){
this.style.backgroundColor = this.getAttribute('data-color');
}

console.log(ChangeColor)
