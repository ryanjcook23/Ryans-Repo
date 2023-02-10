let Warp = {
fill: (120,80,250),
diameter: 80,
yPos: 300,
xPos: 0,
}

function setup(){
    createCanvas(800, 600)
    
            }
           
    function draw(){
      background(1)
      Warp.xPos = Warp.xPos + 3;
    circle(Warp.xPos, Warp.yPos, Warp.diameter)
    
    
    
    if (Warp.xPos>900){
        Warp.xPos = -25
    }
    }
    console.log(Warp)
    console.log(draw)