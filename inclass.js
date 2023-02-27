let x = 100
let y = 100

function setup(){
    createCanvas(512,512);
    background(1)
}



function draw(){
    fill(220,45,220)
    circle(x,y,50,60)
   
    if(KeyIsPressed===true){
        x+=5
           }
}

console.log(draw)