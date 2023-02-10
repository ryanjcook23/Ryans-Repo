let Cube = {
    height: 80,

    width: 120,

    xPos: 100,

    yPos:280,
}

function setup(){
createCanvas(800,600)
background(1)
}

function draw(){
    fill(180,30,250)
    rect(Cube.xPos, Cube.yPos, Cube.width, Cube.height)
}
console.log(Cube)
console.log(draw) 