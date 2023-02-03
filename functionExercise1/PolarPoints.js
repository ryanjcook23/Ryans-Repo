




function setup(){

    createCanvas(800,600)
    background(250)
}


function polarPoint(r = .5){
 
 x = r * sin(mouseX)
 y = r * cos(mouseY)

returnCreateVector(x,y)

}

function draw(){

   res = polarPoint()
    x = 8
    y = 9
  

fill(120,50,210)
circle(res.x,res.y,10,20)


}









