let Cube = {
    height: 90,

    width: 80,

    xPos: 350,

    yPos:300,
}

function setup(){
createCanvas(800,600)
drawCube(Cube)
}

function drawCube(Cube){
    fill(150,20,220)
Rect(Cube.xPos, Cube.yPos, Cube.width, Cube.height)

console.log(Cube)
}