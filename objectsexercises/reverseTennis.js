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

    
    if(keyIsDown(UP_ARROW)){
        RectOne.y += 5;
        RectTwo.y -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        RectOne.y -= 3;
        RectTwo.y += 3;
    }
    
}
console.log(draw)

