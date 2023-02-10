let RectOne = {
x: 100,
y: 280,
width: 60,
height: 170,

}

let RectTwo = {
x: 600,
y: 280,
width: 60,
height: 170,

}

function setup(){
    createCanvas(800,600)
    background(1)
}

function draw(){
fill(180,30,200)
rect (RectOne.x, RectOne.y, RectOne.width, RectOne.height)
fill(100,70,200)
    rect(RectTwo.x,RectTwo.y,RectTwo.width, RectTwo.height)

    
}
function KeyPressed(){
    if(KeyIsDown(UP_ARROW)){
        y = +3;
    }
    if(KeyIsDown(DOWN_ARROW)){
        y = -3;
    }
}
